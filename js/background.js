// Quantum/Space Background Generator

class QuantumBackground {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // Create background container
    this.container = document.createElement('div');
    this.container.className = 'quantum-bg';
    document.body.insertBefore(this.container, document.body.firstChild);

    // Generate stars
    this.generateStars(150);

    // Generate quantum particles
    this.generateQuantumParticles(30);

    // Generate nebula effects
    this.generateNebulas(5);
  }

  generateStars(count) {
    const sizes = ['small', 'small', 'small', 'medium', 'large'];

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = `star ${sizes[Math.floor(Math.random() * sizes.length)]}`;

      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;

      this.container.appendChild(star);
    }
  }

  generateQuantumParticles(count) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random animation properties
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;

      this.container.appendChild(particle);
    }
  }

  generateNebulas(count) {
    const colors = ['purple', 'blue', 'cyan'];

    for (let i = 0; i < count; i++) {
      const nebula = document.createElement('div');
      nebula.className = `nebula ${colors[i % colors.length]}`;

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      nebula.style.left = `${left}%`;
      nebula.style.top = `${top}%`;

      // Random size
      const size = 200 + Math.random() * 300;
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;

      // Random animation delay
      nebula.style.animationDelay = `${Math.random() * 8}s`;
      nebula.style.animationDuration = `${6 + Math.random() * 6}s`;

      this.container.appendChild(nebula);
    }
  }
}

// Initialize background when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new QuantumBackground();
});
