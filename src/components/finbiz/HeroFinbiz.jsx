import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  RotateCw,
  Zap,
  Activity,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Cpu,
  Boxes,
  Maximize2,
  Sliders,
  ChevronRight,
  Image as ImageIcon,
  Box
} from 'lucide-react';

const MODELS = [
  {
    id: 'bim-tower',
    name: 'BIM High-Rise Tower',
    discipline: 'BIM Architecture',
    spec: 'LOD 350 • Revit & Navisworks',
    accent: '#C4161C'
  },
  {
    id: 'geodesic-dome',
    name: 'Parametric 3D Dome',
    discipline: 'Computational CAD',
    spec: 'Rhino & Grasshopper',
    accent: '#FF5A43'
  },
  {
    id: 'space-truss',
    name: 'Space Truss Bridge',
    discipline: 'Structural Engineering',
    spec: 'STAAD.Pro & ETABS FEA',
    accent: '#38BDF8'
  },
  {
    id: 'robotic-arm',
    name: '6-Axis Robotic Arm',
    discipline: 'Mechanical SolidWorks',
    spec: 'ASME Y14.5 Kinematics',
    accent: '#F59E0B'
  }
];

const SOFTWARE_TICKER = [
  'AUTODESK REVIT',
  'NAVISWORKS MANAGE',
  'BENTLEY STAAD.PRO',
  'ETABS HIGH-RISE',
  'SOLIDWORKS 3D',
  'CATIA V5',
  'AUTOCAD 2026',
  'PRIMAVERA P6',
  '3DS MAX & V-RAY',
  'CIVIL 3D',
  'TEKLA STRUCTURES',
  'ISO 19650 BIM'
];

export default function HeroFinbiz({ onOpenDemo }) {
  const [activeModel, setActiveModel] = useState('bim-tower');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showLaser, setShowLaser] = useState(true);
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'photo'
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hudCoords, setHudCoords] = useState({ x: '142.5m', y: '84.2m', z: '310.8m' });

  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  // 3D Orbit Camera Angles
  const rotRef = useRef({ x: 0.28, y: 0.65 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  // Generate 3D Geometry based on Selected Model
  const getGeometry = (modelId) => {
    const vertices = [];
    const edges = [];

    if (modelId === 'bim-tower') {
      // 8-tier architectural skyscraper with diagonal wind braces & core
      const levels = 8;
      const r = 85;
      for (let l = 0; l < levels; l++) {
        const y = -140 + l * 40;
        const scale = 1 - (l / levels) * 0.38;
        const idxBase = vertices.length;

        // 4 corner columns
        vertices.push({ x: -r * scale, y, z: -r * scale });
        vertices.push({ x: r * scale, y, z: -r * scale });
        vertices.push({ x: r * scale, y, z: r * scale });
        vertices.push({ x: -r * scale, y, z: r * scale });

        // Center elevator core
        const cr = r * 0.4 * scale;
        vertices.push({ x: -cr, y, z: -cr });
        vertices.push({ x: cr, y, z: -cr });
        vertices.push({ x: cr, y, z: cr });
        vertices.push({ x: -cr, y, z: cr });

        // Floor slab edges
        edges.push([idxBase, idxBase + 1], [idxBase + 1, idxBase + 2], [idxBase + 2, idxBase + 3], [idxBase + 3, idxBase]);
        // Core edges
        edges.push([idxBase + 4, idxBase + 5], [idxBase + 5, idxBase + 6], [idxBase + 6, idxBase + 7], [idxBase + 7, idxBase + 4]);

        // Vertical columns & wind braces
        if (l > 0) {
          const prev = idxBase - 8;
          for (let i = 0; i < 8; i++) {
            edges.push([prev + i, idxBase + i]);
          }
          edges.push([prev, idxBase + 2]);
          edges.push([prev + 1, idxBase + 3]);
        }
      }

      // Rooftop Spire
      const topBase = vertices.length - 8;
      const spireTip = vertices.length;
      vertices.push({ x: 0, y: -200, z: 0 });
      for (let i = 0; i < 4; i++) {
        edges.push([topBase + i, spireTip]);
      }
    } else if (modelId === 'geodesic-dome') {
      // Hemispherical Geodesic Dome
      const rings = 5;
      const segments = 10;
      const radius = 110;

      for (let r = 0; r <= rings; r++) {
        const phi = (r / rings) * (Math.PI / 2);
        const y = Math.cos(phi) * radius - 30;
        const ringR = Math.sin(phi) * radius;
        const baseIdx = vertices.length;

        for (let s = 0; s < segments; s++) {
          const theta = (s / segments) * Math.PI * 2;
          vertices.push({
            x: Math.cos(theta) * ringR,
            y,
            z: Math.sin(theta) * ringR
          });

          // Horizontal ring edges
          const next = s === segments - 1 ? baseIdx : baseIdx + s + 1;
          edges.push([baseIdx + s, next]);

          // Meridians & diagonal struts
          if (r > 0) {
            const prevBase = baseIdx - segments;
            const prevCurr = prevBase + s;
            const prevNext = s === segments - 1 ? prevBase : prevBase + s + 1;
            edges.push([baseIdx + s, prevCurr]);
            edges.push([baseIdx + s, prevNext]);
          }
        }
      }
    } else if (modelId === 'space-truss') {
      // Space Truss Arch Bridge
      const bays = 8;
      const width = 80;
      const length = 280;
      const step = length / bays;

      for (let b = 0; b <= bays; b++) {
        const x = -length / 2 + b * step;
        const norm = (b / bays) * 2 - 1;
        const archY = -75 * (1 - norm * norm);

        const v1 = vertices.length;
        vertices.push({ x, y: 35, z: -width / 2 });
        vertices.push({ x, y: 35, z: width / 2 });
        vertices.push({ x, y: 35 + archY, z: -width / 2 });
        vertices.push({ x, y: 35 + archY, z: width / 2 });

        edges.push([v1, v1 + 1]);
        edges.push([v1 + 2, v1 + 3]);
        edges.push([v1, v1 + 2]);
        edges.push([v1 + 1, v1 + 3]);

        if (b > 0) {
          const prev = v1 - 4;
          edges.push([prev, v1], [prev + 1, v1 + 1]);
          edges.push([prev + 2, v1 + 2], [prev + 3, v1 + 3]);
          edges.push([prev, v1 + 2], [prev + 1, v1 + 3]);
          edges.push([prev, v1 + 1]);
        }
      }
    } else {
      // 6-Axis Robotic Arm
      const baseR = 70;
      const segs = 10;
      // Turntable base
      for (let i = 0; i < segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        vertices.push({ x: Math.cos(a) * baseR, y: 80, z: Math.sin(a) * baseR });
        vertices.push({ x: Math.cos(a) * (baseR * 0.7), y: 50, z: Math.sin(a) * (baseR * 0.7) });
        const idx = vertices.length - 2;
        edges.push([idx, idx + 1]);
        const next = i === segs - 1 ? 0 : idx + 2;
        edges.push([idx, next]);
        edges.push([idx + 1, next + 1]);
      }

      // Turret
      const j1 = vertices.length;
      const s = 35;
      vertices.push({ x: -s, y: 20, z: -s }, { x: s, y: 20, z: -s }, { x: s, y: 20, z: s }, { x: -s, y: 20, z: s });
      edges.push([j1, j1 + 1], [j1 + 1, j1 + 2], [j1 + 2, j1 + 3], [j1 + 3, j1]);

      // Articulated Boom 1
      const a1 = vertices.length;
      vertices.push({ x: -20, y: -65, z: -15 }, { x: 20, y: -65, z: -15 }, { x: 20, y: -65, z: 15 }, { x: -20, y: -65, z: 15 });
      edges.push([a1, a1 + 1], [a1 + 1, a1 + 2], [a1 + 2, a1 + 3], [a1 + 3, a1]);
      for (let i = 0; i < 4; i++) edges.push([j1 + i, a1 + i]);

      // Forearm 2
      const a2 = vertices.length;
      vertices.push({ x: 65, y: -95, z: -12 }, { x: 85, y: -95, z: -12 }, { x: 85, y: -95, z: 12 }, { x: 65, y: -95, z: 12 });
      edges.push([a2, a2 + 1], [a2 + 1, a2 + 2], [a2 + 2, a2 + 3], [a2 + 3, a2]);
      for (let i = 0; i < 4; i++) edges.push([a1 + i, a2 + i]);

      // Gripper
      const g = vertices.length;
      vertices.push({ x: 120, y: -110, z: -15 }, { x: 120, y: -80, z: 15 });
      edges.push([a2 + 1, g], [a2 + 2, g + 1]);
    }

    return { vertices, edges };
  };

  // Main 3D Canvas Rendering Engine
  useEffect(() => {
    if (viewMode !== '3d') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let scanY = 0;
    let scanDir = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    const { vertices, edges } = getGeometry(activeModel);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      // Smooth Auto-Rotation
      if (autoRotate && !isDraggingRef.current) {
        rotRef.current.y += 0.0075;
      }

      const rx = rotRef.current.x;
      const ry = rotRef.current.y;
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      const fov = 420;
      const dist = 450;

      // 3D Perspective Projection
      const projected = vertices.map((v) => {
        const x1 = v.x * cosY + v.z * sinY;
        const y1 = v.y;
        const z1 = -v.x * sinY + v.z * cosY;

        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        const depth = dist + z2;
        const scale = fov / Math.max(depth, 40);

        return {
          x: width / 2 + x2 * scale,
          y: height / 2 + y2 * scale + 10,
          depth
        };
      });

      // 1. Perspective Datum Floor Grid
      const gridSize = 150;
      const step = 30;
      const floorY = 135;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;

      for (let g = -gridSize; g <= gridSize; g += step) {
        const p1 = projectPt(g, floorY, -gridSize, cosX, sinX, cosY, sinY, fov, dist, width, height);
        const p2 = projectPt(g, floorY, gridSize, cosX, sinX, cosY, sinY, fov, dist, width, height);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        const p3 = projectPt(-gridSize, floorY, g, cosX, sinX, cosY, sinY, fov, dist, width, height);
        const p4 = projectPt(gridSize, floorY, g, cosX, sinX, cosY, sinY, fov, dist, width, height);
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // 2. Wireframe Vector Edges (Signature Crimson #C4161C with Depth Gradient)
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        const avgDepth = (p1.depth + p2.depth) / 2;
        const alpha = Math.max(0.2, Math.min(0.95, 1 - (avgDepth - 280) / 380));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(196, 22, 28, ${alpha})`;
        ctx.lineWidth = 1.7;
        ctx.stroke();
      });

      // 3. Glowing Vertex Nodes
      projected.forEach((p) => {
        const radius = Math.max(1.5, Math.min(3.5, 4 - (p.depth - 300) / 90));
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });

      // 4. Dynamic Laser LiDAR Scan Line
      if (showLaser) {
        scanY += scanDir * 1.6;
        if (scanY > height * 0.72 || scanY < -height * 0.28) {
          scanDir *= -1;
        }
        const scanScreenY = height / 2 + scanY;
        const laserGrad = ctx.createLinearGradient(width * 0.1, scanScreenY, width * 0.9, scanScreenY);
        laserGrad.addColorStop(0, 'rgba(196, 22, 28, 0)');
        laserGrad.addColorStop(0.5, 'rgba(255, 90, 67, 0.85)');
        laserGrad.addColorStop(1, 'rgba(196, 22, 28, 0)');

        ctx.strokeStyle = laserGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, scanScreenY);
        ctx.lineTo(width * 0.9, scanScreenY);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [activeModel, autoRotate, showLaser, viewMode]);

  const projectPt = (x, y, z, cosX, sinX, cosY, sinY, fov, dist, width, height) => {
    const x1 = x * cosY + z * sinY;
    const y1 = y;
    const z1 = -x * sinY + z * cosY;

    const y2 = y1 * cosX - z1 * sinX;
    const z2 = y1 * sinX + z1 * cosX;

    const depth = dist + z2;
    const scale = fov / Math.max(depth, 40);
    return {
      x: width / 2 + x1 * scale,
      y: height / 2 + y2 * scale + 10
    };
  };

  // Mouse Interaction: 3D Tilt & Orbit
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });

    // Update real-time HUD coordinates
    setHudCoords({
      x: `${(140 + x * 25).toFixed(1)}m`,
      y: `${(85 - y * 18).toFixed(1)}m`,
      z: `${(310 + (x + y) * 12).toFixed(1)}m`
    });

    if (isDraggingRef.current) {
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      rotRef.current.y += dx * 0.008;
      rotRef.current.x -= dy * 0.008;
      rotRef.current.x = Math.max(-1.1, Math.min(1.1, rotRef.current.x));
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    isDraggingRef.current = false;
  };

  // Mobile Touch Gestures (3D Rotation with Vertical Scroll Preservation)
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - lastMouseRef.current.x;
    const dy = touch.clientY - lastMouseRef.current.y;
    rotRef.current.y += dx * 0.009;
    rotRef.current.x -= dy * 0.009;
    rotRef.current.x = Math.max(-1.1, Math.min(1.1, rotRef.current.x));
    lastMouseRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FCFCFD] pt-1 sm:pt-2 lg:pt-3 pb-8 sm:pb-14 select-none">
      {/* Background Architectural Blueprint Grid & Laser Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C4161C08_1px,transparent_1px),linear-gradient(to_bottom,#C4161C08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C4161C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* MAIN HERO SPLIT: LEFT EDITORIAL & RIGHT FULL 3D STAGE     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HIGH-IMPACT CADD EDITORIAL & QUICK ACTIONS   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start text-left pt-1 sm:pt-2 z-10">
            
            {/* Red Live CADD Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[#C4161C] text-[10.5px] font-mono font-black tracking-wider uppercase mb-3 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-ping" />
              <span>[ 3D CAD &amp; BIM DIGITAL TWIN LAB ]</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black tracking-tight leading-[1.08] text-[#111827]">
              Let's create <br />
              your <span className="text-[#C4161C]">success.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-xs sm:text-base text-gray-600 font-normal leading-relaxed max-w-lg">
              Kerala&apos;s premier engineering institute. Experience parametric BIM, structural FEA, and mechanical 3D modeling on licensed Autodesk &amp; Bentley dual-display workstations.
            </p>

            {/* Action Buttons: Full-width on mobile */}
            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wider shadow-xl shadow-[#C4161C]/30 transition-all duration-200 cursor-pointer active:scale-96"
              >
                <span>ENQUIRE ADMISSIONS</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:border-[#C4161C]/40 text-center"
              >
                <span>EXPLORE 36 COURSES</span>
              </a>
            </div>

            {/* Credential Metrics Row (Compact & Resilient on 360px Screens) */}
            <div className="pt-4 sm:pt-5 border-t border-gray-100 mt-4 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <div className="text-lg sm:text-2xl font-black text-gray-900 font-mono">100%</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Placement Cell (GCC Desk)</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-gray-900 font-mono">36+</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Certified Programs</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#C4161C] font-mono">30 Yrs</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Training Legacy</div>
              </div>
            </div>

            {/* Red Circular Dot Grid (Classic Finbiz Placement) */}
            <div 
              className="pt-4 flex flex-col gap-2.5 select-none opacity-80"
              aria-hidden="true"
            >
              {[...Array(3)].map((_, r) => (
                <div key={r} className="flex gap-2.5">
                  {[...Array(6)].map((_, c) => (
                    <span key={c} className="w-1.5 h-1.5 rounded-full bg-[#C4161C]" />
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FULL 3D INTERACTIVE CADD/BIM WORKSTATION    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ perspective: '1400px' }}
              className="relative w-full max-w-[680px]"
            >
              {/* 3D Perspective Floating Card */}
              <div
                style={{
                  transform: `rotateY(${tilt.x * 5.5}deg) rotateX(${-tilt.y * 5.5}deg)`,
                  transition: isDraggingRef.current ? 'none' : 'transform 0.22s ease-out'
                }}
                className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:shadow-[0_30px_90px_rgba(15,23,42,0.22)] border-2 sm:border-4 border-white bg-[#080C14] text-white group"
              >
                {/* 1. TOP BAR: 4 MODEL SWITCHERS + VIEW MODE */}
                <div className="p-2.5 sm:p-4 bg-black/75 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar z-30 relative">
                  <div className="flex items-center gap-1.5 shrink-0">
                    {MODELS.map((m) => {
                      const isActive = activeModel === m.id && viewMode === '3d';
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => {
                            setActiveModel(m.id);
                            setViewMode('3d');
                          }}
                          className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-[#C4161C] text-white shadow-md'
                              : 'bg-white/5 hover:bg-white/10 text-gray-300'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-gray-500'}`} />
                          <span>{m.name}</span>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => setViewMode(viewMode === '3d' ? 'photo' : '3d')}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        viewMode === 'photo'
                          ? 'bg-[#C4161C] text-white shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-gray-300'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Studio Lab</span>
                    </button>
                  </div>

                  {/* Right Control Toggles */}
                  {viewMode === '3d' && (
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => setAutoRotate(!autoRotate)}
                        title="Toggle Auto Rotation"
                        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                          autoRotate ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowLaser(!showLaser)}
                        title="Toggle Laser Scan Line"
                        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                          showLaser ? 'bg-red-500/30 text-[#FF5A43] border border-red-500/40' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. MAIN VIEWPORT (3D Canvas OR Authentic Photo View) */}
                {viewMode === '3d' ? (
                  <div
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ touchAction: 'pan-y' }}
                    className="relative aspect-[16/11] sm:aspect-[16/10] w-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden"
                  >
                    {/* Radial Red Ambient Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C4161C/28,transparent_65%)] pointer-events-none" />

                    {/* HTML5 Canvas */}
                    <canvas
                      ref={canvasRef}
                      className="w-full h-full block relative z-10"
                    />

                    {/* Top-Right Model Telemetry Card */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 pointer-events-none hidden sm:flex flex-col items-end gap-1">
                      <div className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-right shadow-lg">
                        <span className="text-[9px] font-mono text-gray-400 block uppercase">
                          {MODELS.find((m) => m.id === activeModel)?.discipline}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {MODELS.find((m) => m.id === activeModel)?.spec}
                        </span>
                      </div>
                    </div>

                    {/* Drag to Orbit Indicator (Bottom-Right) */}
                    <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-gray-300 text-[9.5px] sm:text-[10px] font-mono flex items-center gap-1.5 pointer-events-none shadow-md">
                      <Compass className="w-3 h-3 text-[#FF5A43]" />
                      <span>360° Drag Orbit</span>
                    </div>

                    {/* Real-time Dynamic 3D Coordinates (Top-Left) */}
                    <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 pointer-events-none font-mono text-[9px] sm:text-[10px] text-gray-400 bg-black/65 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-white/10 space-x-1.5 sm:space-x-2">
                      <span>X: <strong className="text-white">{hudCoords.x}</strong></span>
                      <span>Y: <strong className="text-white">{hudCoords.y}</strong></span>
                      <span>Z: <strong className="text-[#FF5A43]">{hudCoords.z}</strong></span>
                    </div>
                  </div>
                ) : (
                  /* Photo View of Authentic Students Collaborating */
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden">
                    <img
                      src="/images/finbiz-hero-team.jpg"
                      alt="CADD Centre engineering students & mentors collaborating"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white z-10">
                      <div>
                        <div className="font-bold text-[11px] sm:text-xs">Dual-Display Workstation Classrooms</div>
                        <div className="text-[10px] sm:text-[11px] text-gray-300">Live multi-discipline engineering mentorship</div>
                      </div>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#C4161C] font-bold text-[9px] sm:text-[10px] uppercase shrink-0">
                        Manjeri
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. BOTTOM TELEMETRY DOCK (Clean Stacking on Mobile) */}
                <div className="p-3 sm:p-4 bg-black/85 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="w-8 h-8 rounded-lg bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11.5px] sm:text-[12px] leading-tight">Autodesk &amp; Bentley Authorized Lab</div>
                      <div className="text-[10px] text-gray-400">Dual-Display Workstations • Certified Programs</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-xl bg-white/10 hover:bg-[#C4161C] text-white text-xs font-bold transition-all cursor-pointer shrink-0 text-center active:scale-97"
                  >
                    Free Demo Class
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL CONTINUOUS ENGINEERING SOFTWARE MARQUEE STRIP   */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-100 flex items-center gap-3 sm:gap-4 overflow-hidden">
          <div className="shrink-0 text-[11px] sm:text-xs font-bold font-mono uppercase tracking-wider text-[#C4161C] flex items-center gap-1.5 pr-3 sm:pr-4 border-r border-gray-200">
            <Cpu className="w-3.5 h-3.5" />
            <span><span className="hidden sm:inline">LICENSED </span>SUITE:</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 text-xs font-bold text-gray-700" style={{ WebkitOverflowScrolling: 'touch' }}>
            {SOFTWARE_TICKER.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-gray-100/80 border border-gray-200/80 text-[10.5px] sm:text-[11px] whitespace-nowrap hover:bg-[#C4161C] hover:text-white hover:border-[#C4161C] transition-colors cursor-default shrink-0"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
