import React, { useEffect, useRef } from 'react';

interface HeroVisualProps {
  className?: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouseRef.current.targetX = clientX / (rect.width / 2);
      mouseRef.current.targetY = clientY / (rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    // Node particles along the kinetic orbits
    const nodes = Array.from({ length: 28 }, (_, i) => ({
      orbitIndex: i % 3,
      angleOffset: (i / 28) * Math.PI * 2,
      speed: 0.003 + (i % 3) * 0.0015,
      size: 1.5 + (i % 3) * 0.8,
      glow: i % 2 === 0,
    }));

    const render = () => {
      angle += 0.008;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + mouseRef.current.x * 20;
      const cy = height / 2 + mouseRef.current.y * 18;
      const baseRadius = Math.min(width, height) * 0.38;

      // 1. Ambient violet atmospheric glow
      const ambientGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, baseRadius * 1.5);
      ambientGlow.addColorStop(0, 'rgba(144, 101, 245, 0.16)');
      ambientGlow.addColorStop(0.5, 'rgba(179, 154, 255, 0.05)');
      ambientGlow.addColorStop(1, 'rgba(9, 10, 15, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Abstract "A" Monolith & Curved Arc Trajectories
      // Curved Left Wing
      ctx.save();
      ctx.translate(cx, cy);
      const rotTilt = mouseRef.current.x * 0.12;
      ctx.rotate(rotTilt);

      // Ribbon 1: Pearlescent Architectural Curve
      ctx.beginPath();
      const p1x = -baseRadius * 0.65;
      const p1y = baseRadius * 0.85;
      const pApexX = 0;
      const pApexY = -baseRadius * 0.95;
      const p2x = baseRadius * 0.65;
      const p2y = baseRadius * 0.85;

      // Left wing curve
      ctx.moveTo(p1x, p1y);
      ctx.bezierCurveTo(
        -baseRadius * 0.35 + Math.sin(angle) * 8,
        baseRadius * 0.2,
        -baseRadius * 0.15,
        -baseRadius * 0.5,
        pApexX,
        pApexY
      );
      ctx.strokeStyle = 'rgba(243, 241, 247, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Right wing curve
      ctx.beginPath();
      ctx.moveTo(p2x, p2y);
      ctx.bezierCurveTo(
        baseRadius * 0.35 - Math.sin(angle) * 8,
        baseRadius * 0.2,
        baseRadius * 0.15,
        -baseRadius * 0.5,
        pApexX,
        pApexY
      );
      ctx.strokeStyle = 'rgba(243, 241, 247, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Transverse Dynamic Violet Arc (The "A" Bridge)
      ctx.beginPath();
      const arcY = baseRadius * 0.25;
      ctx.moveTo(-baseRadius * 0.45, arcY);
      ctx.quadraticCurveTo(
        0,
        arcY - 32 + Math.cos(angle * 1.5) * 12,
        baseRadius * 0.45,
        arcY
      );

      const violetGrad = ctx.createLinearGradient(-baseRadius * 0.45, arcY, baseRadius * 0.45, arcY);
      violetGrad.addColorStop(0, '#9065F5');
      violetGrad.addColorStop(0.5, '#B39AFF');
      violetGrad.addColorStop(1, '#9065F5');

      ctx.strokeStyle = violetGrad;
      ctx.lineWidth = 4;
      ctx.shadowColor = '#9065F5';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset shadow

      // Orbital Rings (Spatial Geometry)
      for (let r = 0; r < 3; r++) {
        const ringRadius = baseRadius * (0.55 + r * 0.28);
        const ringAngle = angle * (r % 2 === 0 ? 0.7 : -0.5);

        ctx.beginPath();
        ctx.ellipse(0, 0, ringRadius, ringRadius * 0.45, ringAngle, 0, Math.PI * 2);
        ctx.strokeStyle = r === 1 ? 'rgba(144, 101, 245, 0.25)' : 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 3. Kinetic Node Constellations
      nodes.forEach((node) => {
        const ringRadius = baseRadius * (0.55 + node.orbitIndex * 0.28);
        const currentAngle = angle * (node.orbitIndex % 2 === 0 ? 0.7 : -0.5) + node.angleOffset;
        const nx = Math.cos(currentAngle) * ringRadius;
        const ny = Math.sin(currentAngle) * (ringRadius * 0.45);

        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        if (node.glow) {
          ctx.fillStyle = '#B39AFF';
          ctx.shadowColor = '#9065F5';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = 'rgba(243, 241, 247, 0.7)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Focal Apex Gem (Apex of the A)
      ctx.beginPath();
      ctx.arc(pApexX, pApexY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#B39AFF';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[580px] max-h-[580px]"
        aria-hidden="true"
      />
    </div>
  );
};
