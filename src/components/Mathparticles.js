"use client";

import { useEffect, useRef } from "react";

// Símbolos matemáticos y letras griegas
const SYMBOLS = [
  "π",
  "∞",
  "∫",
  "∑",
  "∂",
  "√",
  "Δ",
  "∇",
  "∈",
  "∉",
  "∀",
  "∃",
  "∅",
  "∩",
  "∪",
  "⊂",
  "⊃",
  "≈",
  "≠",
  "≤",
  "≥",
  "±",
  "×",
  "÷",
  "∝",
  "∞",
  "ℝ",
  "ℕ",
  "ℤ",
  "ℚ",
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ζ",
  "η",
  "θ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "ρ",
  "σ",
  "τ",
  "φ",
  "χ",
  "ψ",
  "ω",
  "Ω",
  "Γ",
  "Λ",
  "Σ",
  "Φ",
  "Ψ",
  "f(x)",
  "dy/dx",
  "∬",
  "∭",
  "lim",
  "log",
  "sin",
  "cos",
  "tan",
  "e",
  "i",
  "∏",
];

// Capas de profundidad: [velocidad, opacidad min, opacidad max, tamaño min, tamaño max]
const LAYERS = [
  { speed: 0.08, opacityMin: 0.03, opacityMax: 0.07, sizeMin: 10, sizeMax: 16 }, // Fondo lejano
  { speed: 0.18, opacityMin: 0.06, opacityMax: 0.12, sizeMin: 16, sizeMax: 24 }, // Capa media
  { speed: 0.35, opacityMin: 0.1, opacityMax: 0.18, sizeMin: 22, sizeMax: 38 }, // Capa cercana
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(canvasWidth, canvasHeight, layer, layerIndex) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    layer: layerIndex,
    speed: layer.speed * randomBetween(0.7, 1.4),
    opacity: randomBetween(layer.opacityMin, layer.opacityMax),
    targetOpacity: randomBetween(layer.opacityMin, layer.opacityMax),
    size: randomBetween(layer.sizeMin, layer.sizeMax),
    angle: randomBetween(0, Math.PI * 2),
    // Movimiento suave tipo órbita
    driftX: randomBetween(-0.2, 0.2),
    driftY: randomBetween(-0.3, 0.1),
    oscillation: randomBetween(0, Math.PI * 2),
    oscillationSpeed: randomBetween(0.003, 0.008),
    oscillationRadius: randomBetween(0.3, 1.2),
    // Fade in/out lento
    fadeSpeed: randomBetween(0.002, 0.005),
  };
}

export default function MathParticles({ count = 80, className = "" }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Recrea partículas respetando proporciones de capas
      particlesRef.current = [];
      const perLayer = Math.floor(count / LAYERS.length);
      LAYERS.forEach((layer, li) => {
        const n = li === LAYERS.length - 1 ? count - perLayer * li : perLayer;
        for (let i = 0; i < n; i++) {
          particlesRef.current.push(
            createParticle(canvas.width, canvas.height, layer, li),
          );
        }
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      timeRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        const layer = LAYERS[p.layer];

        // Movimiento: drift vertical + oscilación horizontal suave
        p.y -= p.speed;
        p.oscillation += p.oscillationSpeed;
        p.x += Math.sin(p.oscillation) * p.oscillationRadius + p.driftX;

        // Fade in/out aleatorio para simular estrellas parpadeantes
        if (Math.abs(p.opacity - p.targetOpacity) < p.fadeSpeed) {
          p.targetOpacity = randomBetween(layer.opacityMin, layer.opacityMax);
        }
        p.opacity += (p.targetOpacity - p.opacity) * p.fadeSpeed * 10;

        // Wrap: si sale por arriba, reaparece abajo con nuevo símbolo
        if (p.y < -p.size * 2) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
          p.symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        }
        // Wrap horizontal
        if (p.x < -p.size * 3) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size * 3) p.x = -p.size;

        // Dibuja el símbolo
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px 'Georgia', serif`;
        ctx.fillStyle = "#D4A2EB"; // brand-light
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, p.x, p.y);
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
}
