const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'images');
const optimizedDir = path.join(__dirname, 'images-optimized');

// 최적화된 이미지를 저장할 디렉토리 생성
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// 디렉토리 구조 복사
function copyDirStructure(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyDirStructure(srcPath, destPath);
    }
  }
}

copyDirStructure(imagesDir, optimizedDir);

// 이미지 최적화 함수
async function optimizeImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const originalSize = fs.statSync(inputPath).size;

  try {
    if (ext === '.svg') {
      // SVG는 그대로 복사
      fs.copyFileSync(inputPath, outputPath);
      return { original: originalSize, optimized: originalSize, saved: 0 };
    }

    if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
    } else {
      console.log(`Skipping unsupported format: ${inputPath}`);
      return null;
    }

    const optimizedSize = fs.statSync(outputPath).size;
    const saved = originalSize - optimizedSize;
    const percent = ((saved / originalSize) * 100).toFixed(2);

    return {
      original: originalSize,
      optimized: optimizedSize,
      saved: saved,
      percent: percent
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// 모든 이미지 파일 찾기 및 최적화
async function processAllImages(dir, baseDir = imagesDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subResults = await processAllImages(fullPath, baseDir);
      results.push(...subResults);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.svg'].includes(ext)) {
        const relativePath = path.relative(baseDir, fullPath);
        const outputPath = path.join(optimizedDir, relativePath);

        console.log(`Optimizing: ${relativePath}`);
        const result = await optimizeImage(fullPath, outputPath);

        if (result) {
          results.push({
            file: relativePath,
            ...result
          });
        }
      }
    }
  }

  return results;
}

// 메인 실행
(async () => {
  console.log('Starting image optimization...\n');

  const results = await processAllImages(imagesDir);

  console.log('\n=== Optimization Results ===\n');

  let totalOriginal = 0;
  let totalOptimized = 0;

  results.forEach(result => {
    totalOriginal += result.original;
    totalOptimized += result.optimized;

    const originalMB = (result.original / 1024 / 1024).toFixed(2);
    const optimizedMB = (result.optimized / 1024 / 1024).toFixed(2);
    const savedKB = (result.saved / 1024).toFixed(2);

    if (result.saved > 0) {
      console.log(`${result.file}`);
      console.log(`  ${originalMB}MB -> ${optimizedMB}MB (saved ${savedKB}KB, -${result.percent}%)`);
    }
  });

  const totalSaved = totalOriginal - totalOptimized;
  const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(2);

  console.log('\n=== Total Summary ===');
  console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB (-${totalPercent}%)`);
  console.log(`\nOptimized images saved to: ${optimizedDir}`);
})();
