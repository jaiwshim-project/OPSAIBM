// 우주 배경 강제 생성 - 가장 확실한 방법
(function() {
  'use strict';

  // 배경 컨테이너 생성
  function createSpaceBackground() {
    // 기존 배경 제거
    const existingBg = document.getElementById('space-bg-layer');
    if (existingBg) {
      existingBg.remove();
    }

    // 새 배경 레이어 생성
    const bgLayer = document.createElement('div');
    bgLayer.id = 'space-bg-layer';
    bgLayer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1000;
      pointer-events: none;
      background: linear-gradient(180deg,
        #0a0e27 0%,
        #16213e 20%,
        #1a1a2e 40%,
        #16213e 60%,
        #0f0f1e 80%,
        #0a0e27 100%
      );
    `;

    // 별 레이어 생성
    const starsLayer = document.createElement('canvas');
    starsLayer.id = 'stars-canvas';
    starsLayer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -999;
      pointer-events: none;
    `;

    // body에 추가
    document.body.insertBefore(bgLayer, document.body.firstChild);
    document.body.insertBefore(starsLayer, document.body.firstChild);

    // body 스타일 강제 적용
    document.documentElement.style.background = '#0a0e27';
    document.body.style.background = 'transparent';
    document.body.style.minHeight = '100vh';

    // Canvas에 별 그리기
    drawStars(starsLayer);

    // 애니메이션 별 추가
    createAnimatedParticles(bgLayer);
  }

  // Canvas에 별 그리기
  function drawStars(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 배경을 투명하게
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 별 300개 생성
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      const opacity = Math.random() * 0.5 + 0.3;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();

      // 일부 별에 빛나는 효과
      if (Math.random() > 0.9) {
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'white';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // 큰 별 50개 추가
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2 + 1;

      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.6})`;

      // 십자 모양으로 그리기
      ctx.fillRect(x - size, y - size/4, size * 2, size/2);
      ctx.fillRect(x - size/4, y - size, size/2, size * 2);
    }

    // 창 크기 변경 시 다시 그리기
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        drawStars(canvas);
      }, 250);
    });
  }

  // 애니메이션 입자 생성
  function createAnimatedParticles(container) {
    // 양자 입자 효과
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle-js';

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 15 + Math.random() * 10;

      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(100, 181, 246, 0.8), transparent);
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(33, 150, 243, 0.6);
        animation: float-particle ${duration}s ease-in-out ${delay}s infinite;
      `;

      container.appendChild(particle);
    }

    // 성운 효과
    for (let i = 0; i < 3; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula-js';

      const x = Math.random() * 80;
      const y = Math.random() * 80;
      const size = 200 + Math.random() * 200;
      const colors = [
        'rgba(156, 39, 176, 0.1)',
        'rgba(33, 150, 243, 0.1)',
        'rgba(0, 188, 212, 0.08)'
      ];

      nebula.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${colors[i]}, transparent 70%);
        border-radius: 50%;
        filter: blur(60px);
        animation: pulse-nebula ${8 + i * 2}s ease-in-out infinite;
      `;

      container.appendChild(nebula);
    }

    // 애니메이션 정의
    addAnimationStyles();
  }

  // 애니메이션 스타일 추가
  function addAnimationStyles() {
    const styleId = 'space-animations';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes float-particle {
        0%, 100% {
          transform: translate(0, 0) scale(1);
          opacity: 0.4;
        }
        25% {
          transform: translate(30px, -40px) scale(1.2);
          opacity: 0.8;
        }
        50% {
          transform: translate(-20px, -80px) scale(0.9);
          opacity: 0.6;
        }
        75% {
          transform: translate(-40px, -30px) scale(1.1);
          opacity: 0.7;
        }
      }

      @keyframes pulse-nebula {
        0%, 100% {
          transform: scale(1) rotate(0deg);
          opacity: 0.15;
        }
        50% {
          transform: scale(1.3) rotate(180deg);
          opacity: 0.25;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // DOM이 준비되면 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSpaceBackground);
  } else {
    createSpaceBackground();
  }

  // 페이지 전환 시에도 배경 유지
  window.addEventListener('pageshow', createSpaceBackground);
})();
