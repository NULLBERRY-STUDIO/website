
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Configuration
    const particleCount = 50;
    const baseSize = Math.min(window.innerWidth, window.innerHeight) / 100;
    const particles: Particle[] = [];
    
    // Colors - making them much more transparent
    const colors = [
      'rgba(110, 37, 148, 0.05)', // berry-500
      'rgba(158, 90, 195, 0.05)', // berry-400
      'rgba(124, 58, 173, 0.05)', // berry-mix
      'rgba(76, 25, 100, 0.05)'   // berry-700
    ];

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      spin: number;
      spinSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * baseSize * 2 + baseSize / 2; // Smaller size
        this.speedX = (Math.random() - 0.5) * 0.3; // Slower movement
        this.speedY = (Math.random() - 0.5) * 0.3; // Slower movement
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.spin = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.005; // Slower spin
      }

      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        this.spin += this.spinSpeed;

        // Wrap around canvas edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.spin);
        ctx.fillStyle = this.color;
        
        // Draw polygon (pentagon)
        ctx.beginPath();
        const sides = 5;
        const angle = Math.PI * 2 / sides;
        for (let i = 0; i < sides; i++) {
          const x = this.size * Math.cos(i * angle);
          const y = this.size * Math.sin(i * angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with nearly transparent background for minimal trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.02)';  // void-950 with very low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
