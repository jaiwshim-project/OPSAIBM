// OPS & AI-Buckingham Machine Website - Main JavaScript

// Language Management
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'ko';
    this.init();
  }

  init() {
    document.documentElement.setAttribute('lang', this.currentLang);
    this.updateButtons();
    this.attachEventListeners();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
    this.updateButtons();
  }

  updateButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }

  attachEventListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.dataset.lang);
      });
    });
  }
}

// Navigation Active State
function updateActiveNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Card Animation on Scroll
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// PDF Viewer Helper (using object tag for better compatibility)
function embedPDF(containerId, pdfPath, maxPages = 50) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use object tag with fallback for best compatibility
  container.innerHTML = `
    <div style="position: relative; width: 100%; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background: #f5f5f5;">
      <div style="background: #030620; color: white; padding: 12px 20px; font-size: 0.8rem; text-align: center;">
        <span class="ko-only">📖 책 미리보기 (1-50페이지)</span>
        <span class="en-only">📖 Book Preview (Pages 1-50)</span>
      </div>
      <object
        data="${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
        type="application/pdf"
        style="width: 100%; height: 700px; border: none; display: block;">
        <iframe
          src="${pdfPath}#toolbar=0&navpanes=0&scrollbar=1"
          style="width: 100%; height: 700px; border: none;">
          <p style="padding: 40px; text-align: center;">
            <span class="ko-only">브라우저가 PDF 표시를 지원하지 않습니다.<br>
            <a href="${pdfPath}" target="_blank" style="color: #1a237e; text-decoration: underline;">PDF 다운로드</a></span>
            <span class="en-only">Your browser does not support PDF viewing.<br>
            <a href="${pdfPath}" target="_blank" style="color: #1a237e; text-decoration: underline;">Download PDF</a></span>
          </p>
        </iframe>
      </object>
      <div style="background: #f5f5f5; padding: 8px; text-align: center; font-size: 0.75rem; color: #757575;">
        <span class="ko-only">※ PDF가 표시되지 않으면 최신 브라우저(Chrome, Edge, Firefox)를 사용하세요</span>
        <span class="en-only">※ If PDF is not displayed, please use a modern browser (Chrome, Edge, Firefox)</span>
      </div>
    </div>
  `;
}

// Video Embed Helper
function embedVideo(containerId, videoSource, type = 'local') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (type === 'youtube') {
    // Extract YouTube video ID from various formats
    let videoId = videoSource;

    // If full URL is provided, extract video ID
    if (videoSource.includes('youtube.com') || videoSource.includes('youtu.be')) {
      // Try to extract from watch?v= format
      const vMatch = videoSource.match(/[?&]v=([^&]+)/);
      if (vMatch) {
        videoId = vMatch[1];
      } else {
        // Try to extract from youtu.be/ format
        const beMatch = videoSource.match(/youtu\.be\/([^?&]+)/);
        if (beMatch) {
          videoId = beMatch[1];
        }
      }
    }

    container.innerHTML = `
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/${videoId}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
        </iframe>
      </div>
    `;
  } else {
    // Local video
    container.innerHTML = `
      <video controls class="pdf-viewer" style="height: auto;">
        <source src="${videoSource}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }
}

// Mobile Menu Toggle (if needed for hamburger menu)
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

// Number Count-Up Animation
function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (easeOutQuart)
    const easeProgress = 1 - Math.pow(1 - progress, 4);

    const current = Math.floor(start + (target - start) * easeProgress);
    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Final value with plus sign if needed
      if (element.dataset.suffix) {
        element.textContent = target.toLocaleString() + element.dataset.suffix;
      } else {
        element.textContent = target.toLocaleString();
      }
    }
  }

  requestAnimationFrame(update);
}

// Initialize Number Animations
function initNumberAnimations() {
  const numberElements = document.querySelectorAll('.stat-number');

  if (numberElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const element = entry.target;
        const text = element.textContent.trim();

        // Extract number and suffix (like +)
        const match = text.match(/^(\d+)(.*)/);
        if (match) {
          const number = parseInt(match[1]);
          const suffix = match[2];

          if (suffix) {
            element.dataset.suffix = suffix;
          }

          element.dataset.animated = 'true';
          animateNumber(element, number, 2000);
        }
      }
    });
  }, {
    threshold: 0.5
  });

  numberElements.forEach(el => observer.observe(el));
}

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language manager
  new LanguageManager();

  // Update navigation
  updateActiveNavigation();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize number count-up animations
  initNumberAnimations();

  // Log initialization
  console.log('OPS & AI-Buckingham Machine Website Initialized');
});

// Export functions for use in individual pages
window.OPS = {
  embedPDF,
  embedVideo
};
