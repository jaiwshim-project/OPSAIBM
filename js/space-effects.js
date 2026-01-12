// 확실하게 보이는 우주 효과
(function() {
  'use strict';

  console.log('🌌 우주 효과 시작');

  // 성운 오버레이 추가
  function addNebulaOverlay() {
    const nebula = document.createElement('div');
    nebula.className = 'nebula-overlay';
    document.body.insertBefore(nebula, document.body.firstChild);
    console.log('✅ 성운 오버레이 추가됨');
  }

  // 유성 생성
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    // 랜덤 시작 위치 (화면 오른쪽 위)
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight / 2);

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';

    document.body.appendChild(star);

    // 애니메이션
    const duration = 1000 + Math.random() * 1000;
    const angle = 45; // 대각선 아래로
    const distance = 200 + Math.random() * 200;

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

  // 주기적으로 유성 생성
  function startShootingStars() {
    setInterval(() => {
      if (Math.random() > 0.7) { // 30% 확률
        createShootingStar();
      }
    }, 3000);
    console.log('✅ 유성 효과 시작');
  }

  // Canvas에 더 많은 별 추가
  function createStarfield() {
    const canvas = document.createElement('canvas');
    canvas.id = 'starfield-canvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    `;

    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 500개의 별 그리기
    for (let i = 0; i < 500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.5;
      const opacity = Math.random() * 0.8 + 0.2;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();

      // 일부 별은 빛나게
      if (Math.random() > 0.95) {
        ctx.shadowBlur = 3;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, radius + 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    console.log('✅ 별 500개 생성됨 (Canvas)');

    // 창 크기 변경 시 재생성
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStarfield();
    });
  }

  // 반짝이는 별 애니메이션
  function createTwinklingStars() {
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.style.cssText = `
        position: fixed;
        width: ${2 + Math.random() * 2}px;
        height: ${2 + Math.random() * 2}px;
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        z-index: 1;
        pointer-events: none;
        box-shadow: 0 0 ${3 + Math.random() * 5}px rgba(255, 255, 255, 0.8);
        animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `;
      document.body.appendChild(star);
    }
    console.log('✅ 반짝이는 별 30개 추가됨');
  }

  // 애니메이션 CSS 추가
  function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.3);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 초기화
  function init() {
    console.log('🚀 우주 효과 초기화 시작...');

    // 약간의 지연 후 실행 (페이지 로드 확실히 완료 후)
    setTimeout(() => {
      addAnimations();
      createStarfield();
      addNebulaOverlay();
      createTwinklingStars();
      startShootingStars();

      console.log('✨ 우주 효과 초기화 완료!');
      console.log('👀 별이 보이나요? 안 보이면 F12로 콘솔 확인하세요.');
    }, 500);
  }

  // DOM 준비 완료 시 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 강제로 한 번 더 실행 (보험)
  window.addEventListener('load', () => {
    console.log('🔄 window.load - 우주 효과 재확인');
  });

})();
