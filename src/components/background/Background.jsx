import React, { useEffect, useRef } from "react";
import "./background.css";

const PARTICLE_COUNT = 65;
const MAX_DIST = 160;
const SPEED = 0.35;

function isDarkMode() {
  return !document.body.classList.contains("light-mode");
}

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const makeParticles = () => {
      const count =
        window.innerWidth < 768 ? Math.floor(PARTICLE_COUNT * 0.5) : PARTICLE_COUNT;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 1.5 + 1,
        // randomly assign indigo or cyan tint
        cyan: Math.random() > 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dark = isDarkMode();

      // ---- move & bounce ----
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // ---- connections ----
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * (dark ? 0.45 : 0.2);
          const grad = ctx.createLinearGradient(
            particles[i].x,
            particles[i].y,
            particles[j].x,
            particles[j].y
          );
          grad.addColorStop(0, `rgba(99,102,241,${alpha})`);
          grad.addColorStop(1, `rgba(6,182,212,${alpha})`);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // ---- dots ----
      particles.forEach((p) => {
        const dotAlpha = dark ? 0.75 : 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan
          ? `rgba(6,182,212,${dotAlpha})`
          : `rgba(99,102,241,${dotAlpha})`;
        ctx.fill();

        // subtle glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        glow.addColorStop(
          0,
          p.cyan
            ? `rgba(6,182,212,${dark ? 0.15 : 0.07})`
            : `rgba(99,102,241,${dark ? 0.15 : 0.07})`
        );
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      makeParticles();
    };

    resize();
    makeParticles();
    draw();

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
};

export default Background;
