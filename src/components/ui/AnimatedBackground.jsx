import { useEffect, useRef } from "react";

const DOTS = 100;
const DOT_RADIUS = 2;
const LINE_DISTANCE = 120;
const DOT_COLOR = "rgba(100, 200, 255, 0.7)";
const LINE_COLOR = "rgba(100, 200, 255, 0.2)";

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const dots = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize dots
    dots.current = Array.from({ length: DOTS }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.5, 0.5),
      vy: randomBetween(-0.5, 0.5),
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < DOTS; i++) {
        for (let j = i + 1; j < DOTS; j++) {
          const a = dots.current[i];
          const b = dots.current[j];
          if (distance(a, b) < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      // Draw lines to mouse
      if (mouse.current.x !== null && mouse.current.y !== null) {
        for (let i = 0; i < DOTS; i++) {
          const a = dots.current[i];
          if (distance(a, mouse.current) < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      // Draw dots
      for (let i = 0; i < DOTS; i++) {
        const d = dots.current[i];
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR;
        ctx.fill();
      }
    }

    function update() {
      for (let i = 0; i < DOTS; i++) {
        let d = dots.current[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function handleMouseLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Reposition dots
      dots.current.forEach((d) => {
        d.x = randomBetween(0, width);
        d.y = randomBetween(0, height);
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
