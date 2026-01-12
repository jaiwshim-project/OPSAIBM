// 컬러풀한 우주 배경 효과
(function() {
  'use strict';

  console.log('🌈 컬러풀 우주 효과 시작');

  // 여러 우주 이미지 중 랜덤 선택 (무료 Unsplash 이미지)
  const spaceImages = [
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80', // 은하수
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80', // 별이 빛나는 하늘
    'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80', // 다채로운 성운
    'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80', // 별자리
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80'  // 우주 배경
  ];

  // 랜덤 이미지 적용
  function setRandomSpaceBackground() {
    const randomImage = spaceImages[Math.floor(Math.random() * spaceImages.length)];
    document.body.style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
      url('${randomImage}')
    `;
    console.log('✅ 우주 배경 이미지 설정됨');
  }

  // 컬러풀한 성운 오버레이 추가
  function addColorfulNebula() {
    const nebula = document.createElement('div');
    nebula.className = 'colorful-nebula';
    document.body.insertBefore(nebula, document.body.firstChild);
    console.log('✅ 컬러풀 성운 추가됨');
  }

  // 반짝이는 별 파티클 생성
  function createStarParticles() {
    const colors = [
      'rgba(255, 255, 255, 0.9)',
      'rgba(100, 200, 255, 0.8)',
      'rgba(255, 100, 200, 0.8)',
      'rgba(200, 100, 255, 0.8)',
      'rgba(255, 200, 100, 0.8)'
    ];

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'star-particle';

      const size = 2 + Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: ${color};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        z-index: 2;
      `;

      document.body.appendChild(particle);
    }
    console.log('✅ 컬러풀 별 파티클 40개 생성됨');
  }

  // Canvas로 더 많은 별 그리기
  function drawStarfield() {
    const canvas = document.createElement('canvas');
    canvas.id = 'colorful-starfield';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    `;
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 다양한 색상의 별
    const starColors = [
      'rgba(255, 255, 255, 0.8)',
      'rgba(100, 200, 255, 0.7)',
      'rgba(255, 150, 200, 0.7)',
      'rgba(200, 150, 255, 0.7)',
      'rgba(255, 220, 150, 0.7)'
    ];

    for (let i = 0; i < 400; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      const color = starColors[Math.floor(Math.random() * starColors.length)];

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // 일부 별은 빛나게
      if (Math.random() > 0.92) {
        ctx.shadowBlur = 5;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    console.log('✅ 컬러풀 별 400개 Canvas에 그려짐');

    // 화면 크기 변경 시 재생성
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStarfield();
    });
  }

  // 흐르는 유성 효과 (컬러풀)
  function createColorfulShootingStar() {
    const colors = [
      'rgba(255, 255, 255, 0.9)',
      'rgba(100, 200, 255, 0.9)',
      'rgba(255, 100, 200, 0.9)',
      'rgba(200, 100, 255, 0.9)'
    ];

    const star = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];

    star.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: ${color};
      border-radius: 50%;
      box-shadow: 0 0 15px ${color};
      z-index: 5;
      pointer-events: none;
    `;

    // 꼬리 추가
    const tail = document.createElement('div');
    tail.style.cssText = `
      position: absolute;
      width: 150px;
      height: 2px;
      background: linear-gradient(90deg, ${color}, transparent);
      top: 0;
      left: 0;
      transform-origin: left;
    `;
    star.appendChild(tail);

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight / 2);

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';

    document.body.appendChild(star);

    // 애니메이션
    const distance = 300 + Math.random() * 200;
    const duration = 1200 + Math.random() * 800;

    star.animate([
      {
        transform: 'translate(0, 0) rotate(-45deg)',
        opacity: 1
      },
      {
        transform: `translate(${distance}px, ${distance}px) rotate(-45deg)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'ease-out'
    }).onfinish = () => {
      star.remove();
    };
  }

  // 주기적으로 컬러풀 유성 생성
  function startColorfulShootingStars() {
    setInterval(() => {
      if (Math.random() > 0.5) {
        createColorfulShootingStar();
      }
    }, 2500);
    console.log('✅ 컬러풀 유성 효과 시작');
  }

  // 초기화
  function init() {
    setTimeout(() => {
      setRandomSpaceBackground();
      addColorfulNebula();
      drawStarfield();
      createStarParticles();
      startColorfulShootingStars();

      console.log('✨ 컬러풀 우주 효과 초기화 완료!');
      console.log('🎨 배경 이미지가 안 보이면 인터넷 연결을 확인하세요.');
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
