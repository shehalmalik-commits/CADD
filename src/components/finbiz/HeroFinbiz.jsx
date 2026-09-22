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
  Box,
  GraduationCap
} from 'lucide-react';
import CoursesDirectoryModal from './CoursesDirectoryModal';

const MODELS = [
  {
    id: 'bim-tower',
    name: 'Civil & Arch',
    discipline: 'Civil & Architectural BIM',
    spec: 'LOD 350 • Revit & Navisworks',
    accent: '#FF1A1A'
  },
  {
    id: 'cad-car',
    name: 'Mechanical and Automobile',
    discipline: 'Mechanical & Automobile CAD',
    spec: 'CATIA & SolidWorks Surface',
    accent: '#FF1A1A'
  },
  {
    id: 'transmission-tower',
    name: 'Electrical and electronic',
    discipline: 'Electrical & Electronics CAD',
    spec: 'STAAD.Pro & Tower FEA',
    accent: '#FF1A1A'
  },
  {
    id: 'geodesic-dome',
    name: 'Parametric Dome',
    discipline: 'Computational CAD',
    spec: 'Rhino & Grasshopper',
    accent: '#FF1A1A'
  }
];

const COURSES_TICKER = [
  { id: 'bim-1', name: 'Master Certificate in BIM', tab: 'bim' },
  { id: 'interior-1', name: 'Executive Diploma in Interior Design', tab: 'interior' },
  { id: 'mep-1', name: 'MEP with BIM Engineering', tab: 'mep' },
  { id: 'structural-1', name: 'Structural Design & Analysis', tab: 'structural' },
  { id: 'product-1', name: 'Product Design & Engineering', tab: 'product' },
  { id: 'autocad-1', name: 'AutoCAD Civil', tab: 'autocad' },
  { id: 'ppm-1', name: 'Project Planning & Management (PPM)', tab: 'ppm' },
  { id: 'survey-1', name: 'Surveying & Transportation Engineering', tab: 'survey' },
  { id: 'bim-2', name: 'BIM for Architecture', tab: 'bim' },
  { id: 'structural-2', name: 'STAAD.Pro', tab: 'structural' },
  { id: 'mep-2', name: 'Master Certificate in BIM', tab: 'mep' },
  { id: 'autocad-2', name: 'AutoCAD Mechanical', tab: 'autocad' }
];

export default function HeroFinbiz({ onOpenDemo }) {
  const [activeModel, setActiveModel] = useState('bim-tower');
  const [autoRotate, setAutoRotate] = useState(true);
  const [showLaser, setShowLaser] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hudCoords, setHudCoords] = useState({ x: '142.5m', y: '84.2m', z: '310.8m' });

  // Handle click on course pill: dispatches event & smoothly scrolls to course section/card
  const handleCourseClick = (course) => {
    window.dispatchEvent(
      new CustomEvent('cadd-select-course', {
        detail: { tab: course.tab, courseId: course.id }
      })
    );

    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      const card = document.getElementById(`course-${course.id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  };

  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

  const handleViewMoreCourses = (e) => {
    if (e) e.preventDefault();
    setIsCoursesModalOpen(true);
  };

  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  const [isInteracting, setIsInteracting] = useState(false);
  const pauseTimeoutRef = useRef(null);

  const applyModelRotation = (modelId) => {
    if (modelId === 'cad-car') {
      rotRef.current = { x: 0.22, y: -0.78 };
    } else if (modelId === 'bim-tower') {
      rotRef.current = { x: 0.14, y: 0.58 };
    } else if (modelId === 'geodesic-dome') {
      rotRef.current = { x: 0.28, y: 0.65 };
    } else {
      rotRef.current = { x: 0.28, y: 0.65 };
    }
  };

  const selectModel = (modelId) => {
    setActiveModel(modelId);
    applyModelRotation(modelId);
  };

  // Automatically cycle through CAD/BIM models every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isInteracting || isDraggingRef.current) return;

      setActiveModel((prev) => {
        const currentIndex = MODELS.findIndex((m) => m.id === prev);
        const nextIndex = (currentIndex + 1) % MODELS.length;
        const nextModel = MODELS[nextIndex];
        applyModelRotation(nextModel.id);
        return nextModel.id;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isInteracting]);

  // 3D Orbit Camera Angles & Antigravity Motion Tracking (Optimized 3/4 towering angle for Building)
  const rotRef = useRef({ x: 0.14, y: 0.58 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const zoomRef = useRef(1.0);
  const targetTiltRef = useRef({ x: 0, y: 0 });
  const currentTiltRef = useRef({ x: 0, y: 0 });
  const mouseCanvasPosRef = useRef({ x: -999, y: -999 });
  const touchStartDistRef = useRef(0);
  const startZoomRef = useRef(1.0);
  const timeRef = useRef(0);

  // Ambient 3D Red Energy Particles floating in zero-gravity space
  const particlesRef = useRef(
    Array.from({ length: 42 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 60 + Math.random() * 150,
      baseY: -160 + Math.random() * 320,
      phase: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.006,
      size: 0.9 + Math.random() * 1.8
    }))
  );

  // Generate 3D Geometry based on Selected Model
  const getGeometry = (modelId) => {
    const vertices = [];
    const edges = [];

    if (modelId === 'bim-tower') {
      // High-Rise Twisting Helical Architectural Skyscraper (LOD 350 Revit & Navisworks BIM Model)
      // Faithfully modeled from reference image with 30 closely-spaced floor slabs, central structural core,
      // 4 continuous helical corner mega-columns, diagrid wind bracing, rooftop glass parapet,
      // and ground-level MEP plant room annex with dual mechanical chiller pumps

      const v = (x, y, z, isNode = false) => {
        const idx = vertices.length;
        vertices.push({ x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, z: Math.round(z * 100) / 100, isNode });
        return idx;
      };

      const e = (i, j, style = 'main') => {
        edges.push([i, j, style]);
      };

      const levels = 30; // Dense floor slabs packed close together
      const totalHeight = 240;
      const yTop = -120;
      const yBot = 120;
      const totalTwist = 0.98; // ~56 degrees progressive helical twist matching reference
      const rBase = 64; // Wide, majestic skyscraper base

      const floorCornerIndices = [];
      const floorMidIndices = [];
      const coreIndices = [];

      for (let l = 0; l < levels; l++) {
        const t = l / (levels - 1);
        const y = yBot - t * totalHeight;

        // Subtle architectural hourglass taper (wide base, slender mid-waist, flares at crown)
        const hourglass = 1.0 - Math.sin(t * Math.PI) * 0.14;
        const r = rBase * hourglass;
        const twist = t * totalTwist;

        // 1. 4 Corner Mega-Columns on this level
        const corners = [];
        for (let c = 0; c < 4; c++) {
          const ang = twist + (c * Math.PI / 2) + (Math.PI / 4);
          const distVal = r * 1.32;
          const isNode = (l === 0 || l === levels - 1);
          corners.push(v(Math.cos(ang) * distVal, y, Math.sin(ang) * distVal, isNode));
        }
        floorCornerIndices.push(corners);

        // 2. 2 Intermediate Facade Mullion Points per side (Curtain wall framing)
        const mids = [];
        for (let c = 0; c < 4; c++) {
          const c1Ang = twist + (c * Math.PI / 2) + (Math.PI / 4);
          const c2Ang = twist + (((c + 1) % 4) * Math.PI / 2) + (Math.PI / 4);
          const distVal = r * 1.32;
          const p1X = (Math.cos(c1Ang) * 0.67 + Math.cos(c2Ang) * 0.33) * distVal;
          const p1Z = (Math.sin(c1Ang) * 0.67 + Math.sin(c2Ang) * 0.33) * distVal;
          const p2X = (Math.cos(c1Ang) * 0.33 + Math.cos(c2Ang) * 0.67) * distVal;
          const p2Z = (Math.sin(c1Ang) * 0.33 + Math.sin(c2Ang) * 0.67) * distVal;
          mids.push([v(p1X, y, p1Z, false), v(p2X, y, p2Z, false)]);
        }
        floorMidIndices.push(mids);

        // 3. Floor Slab Perimeter Edges (Vivid Red Structural Slab Bands)
        for (let c = 0; c < 4; c++) {
          const nextC = (c + 1) % 4;
          e(corners[c], mids[c][0], 'main');
          e(mids[c][0], mids[c][1], 'main');
          e(mids[c][1], corners[nextC], 'main');
        }

        // 4. Central Core (Elevator Shaft / Structural Shear Wall - Blue Wireframe)
        const corePts = [];
        const coreR = r * 0.34;
        for (let c = 0; c < 4; c++) {
          const ang = twist + (c * Math.PI / 2) + (Math.PI / 4);
          corePts.push(v(Math.cos(ang) * coreR, y, Math.sin(ang) * coreR, false));
        }
        coreIndices.push(corePts);

        for (let c = 0; c < 4; c++) {
          e(corePts[c], corePts[(c + 1) % 4], 'blue');
        }

        // 5. Radial Floor Joists connecting Core to Exterior Frame
        for (let c = 0; c < 4; c++) {
          e(corePts[c], corners[c], 'mesh');
          e(corePts[c], mids[c][0], 'mesh');
          e(corePts[c], mids[c][1], 'mesh');
        }
      }

      // Vertical Helical Mega-Columns, Diagrid Wind Bracing & Curtain Wall Mullions
      for (let l = 0; l < levels - 1; l++) {
        const cBot = floorCornerIndices[l];
        const cTop = floorCornerIndices[l + 1];
        const mBot = floorMidIndices[l];
        const mTop = floorMidIndices[l + 1];
        const coreBot = coreIndices[l];
        const coreTop = coreIndices[l + 1];

        // 4 Helical Corner Columns
        for (let c = 0; c < 4; c++) {
          e(cBot[c], cTop[c], 'main');
        }

        // Diagrid X-Trusses on all 4 faces
        for (let c = 0; c < 4; c++) {
          const nextC = (c + 1) % 4;
          e(cBot[c], cTop[nextC], 'main');
          e(cBot[nextC], cTop[c], 'main');
        }

        // Vertical Curtain Wall Mid-Mullions (Cyan)
        for (let c = 0; c < 4; c++) {
          e(mBot[c][0], mTop[c][0], 'cyan');
          e(mBot[c][1], mTop[c][1], 'cyan');
        }

        // Central Core Vertical Shafts & Diagonal Ties (Blue)
        for (let c = 0; c < 4; c++) {
          e(coreBot[c], coreTop[c], 'blue');
          e(coreBot[c], coreTop[(c + 1) % 4], 'blue');
        }
      }

      // Central MEP Vertical Riser Conduit (Green)
      const mepBot = v(0, yBot, 0, false);
      const mepTop = v(0, yTop - 15, 0, false);
      e(mepBot, mepTop, 'green');

      // Rooftop Architectural Parapet & Glass Crown (Cyan)
      const topCorners = floorCornerIndices[levels - 1];
      const parapetCorners = [];
      for (let c = 0; c < 4; c++) {
        parapetCorners.push(v(vertices[topCorners[c]].x, yTop - 16, vertices[topCorners[c]].z, true));
      }
      for (let c = 0; c < 4; c++) {
        const nextC = (c + 1) % 4;
        e(topCorners[c], parapetCorners[c], 'cyan');
        e(parapetCorners[c], parapetCorners[nextC], 'cyan');
      }

      // Rooftop Elevator Mechanical Bulkhead (Blue)
      const topCore = coreIndices[levels - 1];
      const bulkhead = [];
      for (let c = 0; c < 4; c++) {
        bulkhead.push(v(vertices[topCore[c]].x, yTop - 20, vertices[topCore[c]].z, false));
      }
      for (let c = 0; c < 4; c++) {
        const nextC = (c + 1) % 4;
        e(topCore[c], bulkhead[c], 'blue');
        e(bulkhead[c], bulkhead[nextC], 'blue');
      }

      // Ground MEP Substation & Plant Room Annex (Snug & Adjacent on Left as in Reference Image)
      const axX1 = -120;
      const axX2 = -60;
      const axZ1 = -36;
      const axZ2 = 36;
      const axYGround = yBot;
      const axYMid = 85;
      const axYRoof = 50;

      const ag = [
        v(axX1, axYGround, axZ1, true),
        v(axX2, axYGround, axZ1, false),
        v(axX2, axYGround, axZ2, false),
        v(axX1, axYGround, axZ2, true)
      ];
      const am = [
        v(axX1, axYMid, axZ1, false),
        v(axX2, axYMid, axZ1, false),
        v(axX2, axYMid, axZ2, false),
        v(axX1, axYMid, axZ2, false)
      ];
      const ar = [
        v(axX1, axYRoof, axZ1, true),
        v(axX2, axYRoof, axZ1, false),
        v(axX2, axYRoof, axZ2, false),
        v(axX1, axYRoof, axZ2, true)
      ];

      for (let i = 0; i < 4; i++) {
        const ni = (i + 1) % 4;
        e(ag[i], ag[ni], 'main');
        e(am[i], am[ni], 'main');
        e(ar[i], ar[ni], 'cyan');
        e(ag[i], am[i], 'main');
        e(am[i], ar[i], 'main');
      }

      // Connect Annex to Tower Base
      const baseCorner0 = floorCornerIndices[0][0];
      e(ag[1], baseCorner0, 'mesh');
      e(ar[1], baseCorner0, 'mesh');

      // Annex Internal Mechanical Equipment (Dual Green Chiller Pumps)
      for (const pumpX of [-100, -78]) {
        for (let aStep = 0; aStep < 6; aStep++) {
          const a1 = (aStep / 6) * Math.PI * 2;
          const a2 = ((aStep + 1) / 6) * Math.PI * 2;
          const p1 = v(pumpX - 7, axYGround - 12 + Math.sin(a1) * 7, Math.cos(a1) * 7, false);
          const p2 = v(pumpX - 7, axYGround - 12 + Math.sin(a2) * 7, Math.cos(a2) * 7, false);
          const p3 = v(pumpX + 7, axYGround - 12 + Math.sin(a1) * 7, Math.cos(a1) * 7, false);
          const p4 = v(pumpX + 7, axYGround - 12 + Math.sin(a2) * 7, Math.cos(a2) * 7, false);
          e(p1, p2, 'green');
          e(p3, p4, 'green');
          e(p1, p3, 'green');
        }
      }
    } else if (modelId === 'transmission-tower' || modelId === 'space-truss') {
      // High-Voltage Electrical Lattice Transmission Tower (Pylon)
      // Faithfully modeled from user's photograph with 4-leg lattice pyramid base,
      // 3 pairs of cantilever space-truss crossarms (lower, widest middle, upper),
      // suspension insulator strings, multi-circuit conductors & overhead earthwire peak

      const tiers = [
        { y: 120, w: 58 },  // Tier 0: Ground level 4 base footings
        { y: 92, w: 46 },   // Tier 1: Lower pyramid bay
        { y: 64, w: 36 },   // Tier 2: Mid pyramid bay
        { y: 36, w: 27 },   // Tier 3: Upper pyramid bay
        { y: 8, w: 20 },    // Tier 4: Waist transition
        { y: -18, w: 17 },  // Tier 5: Body column (below lower arm)
        { y: -48, w: 16 },  // Tier 6: Lower crossarm junction
        { y: -80, w: 15 },  // Tier 7: Middle crossarm junction
        { y: -112, w: 14 }, // Tier 8: Upper crossarm junction
        { y: -138, w: 11 }, // Tier 9: Mast neck
        { y: -156, w: 6 }   // Tier 10: Peak apex (tapered point)
      ];

      const tierIndices = [];

      tiers.forEach((tier) => {
        const idx = vertices.length;
        tierIndices.push(idx);
        const half = tier.w / 2;
        vertices.push({ x: -half, y: tier.y, z: -half });
        vertices.push({ x: half, y: tier.y, z: -half });
        vertices.push({ x: half, y: tier.y, z: half });
        vertices.push({ x: -half, y: tier.y, z: half });

        // Horizontal perimeter square loop
        edges.push([idx, idx + 1], [idx + 1, idx + 2], [idx + 2, idx + 3], [idx + 3, idx]);
      });

      // Connect tiers with 4 corner legs & X-bracing on all 4 faces
      for (let t = 0; t < tiers.length - 1; t++) {
        const b1 = tierIndices[t];
        const b2 = tierIndices[t + 1];

        for (let c = 0; c < 4; c++) {
          const nextC = (c + 1) % 4;
          // Corner lattice leg
          edges.push([b1 + c, b2 + c]);

          // Diagonal X-bracing on each face
          edges.push([b1 + c, b2 + nextC]);
          edges.push([b1 + nextC, b2 + c]);
        }
      }

      // Center maintenance service ladder (structural nodes only)
      for (let y = 115; y >= -135; y -= 20) {
        const l1 = vertices.length;
        vertices.push({ x: -3, y, z: 0, isNode: false });
        vertices.push({ x: 3, y, z: 0, isNode: false });
        edges.push([l1, l1 + 1]);
        if (y < 115) {
          edges.push([l1 - 2, l1]);
          edges.push([l1 - 1, l1 + 1]);
        }
      }

      // 3 Pairs of Cantilever Crossarms (3D Triangular Space-Truss Chords)
      const crossarmDefs = [
        { tierIdx: 6, yTop: -48, yBot: -32, span: 90, insLen: 22 },   // Lower tier
        { tierIdx: 7, yTop: -80, yBot: -64, span: 104, insLen: 22 },  // Middle tier (widest)
        { tierIdx: 8, yTop: -112, yBot: -96, span: 82, insLen: 20 }   // Upper tier
      ];

      crossarmDefs.forEach((ca) => {
        const mastTopIdx = tierIndices[ca.tierIdx];
        const mastBotIdx = tierIndices[ca.tierIdx - 1];

        // --- LEFT CROSSARM ---
        const lTipF = vertices.length;
        vertices.push({ x: -ca.span, y: ca.yTop, z: -4 });
        const lTipB = vertices.length;
        vertices.push({ x: -ca.span, y: ca.yTop, z: 4 });

        // Tip edge
        edges.push([lTipF, lTipB]);

        // Top chords
        edges.push([lTipF, mastTopIdx]);
        edges.push([lTipB, mastTopIdx + 3]);
        // Bottom knee struts
        edges.push([lTipF, mastBotIdx]);
        edges.push([lTipB, mastBotIdx + 3]);
        // Cross webbing
        edges.push([lTipF, mastTopIdx + 3]);
        edges.push([lTipB, mastTopIdx]);

        // Insulator string hanging from tip
        const insL = vertices.length;
        vertices.push({ x: -ca.span, y: ca.yTop + ca.insLen, z: 0 });
        edges.push([lTipF, insL], [lTipB, insL]);

        // High-voltage conductor cables running along Z
        const cL1 = vertices.length;
        vertices.push({ x: -ca.span, y: ca.yTop + ca.insLen - 2, z: -150, isNode: false });
        vertices.push({ x: -ca.span, y: ca.yTop + ca.insLen - 2, z: 150, isNode: false });
        edges.push([cL1, insL], [insL, cL1 + 1]);

        // --- RIGHT CROSSARM ---
        const rTipF = vertices.length;
        vertices.push({ x: ca.span, y: ca.yTop, z: -4 });
        const rTipB = vertices.length;
        vertices.push({ x: ca.span, y: ca.yTop, z: 4 });

        // Tip edge
        edges.push([rTipF, rTipB]);

        // Top chords
        edges.push([rTipF, mastTopIdx + 1]);
        edges.push([rTipB, mastTopIdx + 2]);
        // Bottom knee struts
        edges.push([rTipF, mastBotIdx + 1]);
        edges.push([rTipB, mastBotIdx + 2]);
        // Cross webbing
        edges.push([rTipF, mastTopIdx + 2]);
        edges.push([rTipB, mastTopIdx + 1]);

        // Insulator string hanging from tip
        const insR = vertices.length;
        vertices.push({ x: ca.span, y: ca.yTop + ca.insLen, z: 0 });
        edges.push([rTipF, insR], [rTipB, insR]);

        // High-voltage conductor cables running along Z
        const cR1 = vertices.length;
        vertices.push({ x: ca.span, y: ca.yTop + ca.insLen - 2, z: -150, isNode: false });
        vertices.push({ x: ca.span, y: ca.yTop + ca.insLen - 2, z: 150, isNode: false });
        edges.push([cR1, insR], [insR, cR1 + 1]);
      });

      // Peak Earthwire Peak
      const peakIdx = tierIndices[10];
      const apexPt = vertices.length;
      vertices.push({ x: 0, y: -172, z: 0 });
      for (let c = 0; c < 4; c++) {
        edges.push([apexPt, peakIdx + c]);
      }

      // Overhead Shield Earthwire
      const ew1 = vertices.length;
      vertices.push({ x: 0, y: -172, z: -150, isNode: false });
      vertices.push({ x: 0, y: -172, z: 150, isNode: false });
      edges.push([ew1, apexPt], [apexPt, ew1 + 1]);

    } else if (modelId === 'cad-car') {
      // High-Fidelity Realistic 3D Automotive CAD Sports Coupe (CATIA & SolidWorks Class-A Surface Modeling)
      // Faithfully matches reference aerodynamic coupe with hexagonal grille, dual cyan projector halos,
      // contoured hood power-bulge, low-slung roofline, flared haunches, and 5-twin-spoke alloy wheels with disc brakes

      const v = (x, y, z, isNode = false) => {
        const idx = vertices.length;
        vertices.push({ x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, z: Math.round(z * 100) / 100, isNode });
        return idx;
      };

      const e = (i, j, style = 'main') => {
        edges.push([i, j, style]);
      };

      // 1. Centerline Stations along Z = 0
      const c_pts = [
        [-156, 49, 0],   // 0 Splitter tip
        [-148, 44, 0],   // 1 Chin lip / Lower intake
        [-138, 42, 0],   // 2 Grille bottom
        [-132, 31, 0],   // 3 Grille mid
        [-126, 19, 0],   // 4 Grille top / Hood tip
        [-95, 14, 0],    // 5 Hood mid-front
        [-68, 12.5, 0],  // 6 Hood mid-rear
        [-48, 11.5, 0],  // 7 Cowl / Windshield base
        [-22, -8, 0],    // 8 Mid windshield
        [6, -19.5, 0],   // 9 Windshield header / Roof start
        [34, -21, 0],    // 10 Roof apex
        [64, -19.5, 0],  // 11 Roof rear / Fastback start
        [92, -4, 0],     // 12 Fastback glass mid
        [116, 12, 0],    // 13 Trunk lid start
        [138, 11.5, 0],  // 14 Ducktail spoiler lip
        [146, 23, 0],    // 15 Rear tail fascia
        [150, 48, 0]     // 16 Rear diffuser
      ];
      const c_nodes = c_pts.map(pt => v(pt[0], pt[1], pt[2], false));
      for (let i = 0; i < c_nodes.length - 1; i++) {
        e(c_nodes[i], c_nodes[i + 1], 'main');
      }

      // 2. Bilateral Body Surface Geometry (Left = -Z, Right = +Z)
      [-1, 1].forEach((sign) => {
        // --- A. FRONT SPLITTER & LOWER BUMPER CHIN ---
        const sp_c = c_nodes[0];
        const sp_mid = v(-153, 49, sign * 28, false);
        const sp_corn = v(-144, 49, sign * 48, false);
        const sp_wing = v(-141, 42, sign * 49, false); // Aero winglet
        e(sp_c, sp_mid, 'main');
        e(sp_mid, sp_corn, 'main');
        e(sp_corn, sp_wing, 'main');

        const chin_mid = v(-146, 44, sign * 26, false);
        const chin_out = v(-141, 44, sign * 46, false);
        e(c_nodes[1], chin_mid, 'mesh');
        e(chin_mid, chin_out, 'mesh');
        e(sp_mid, chin_mid, 'mesh');
        e(sp_corn, chin_out, 'mesh');

        // --- B. HEXAGONAL RADIATOR GRILLE (Audi/Aston Style) ---
        const g_top = v(-125, 19, sign * 22, false);
        const g_mid = v(-132, 30, sign * 25.5, false);
        const g_bot = v(-136, 42, sign * 20, false);
        e(c_nodes[4], g_top, 'main');
        e(g_top, g_mid, 'main');
        e(g_mid, g_bot, 'main');
        e(g_bot, c_nodes[2], 'main');

        // Horizontal grille slats
        [[24, -127, 23], [30, -131, 25], [36, -134, 23.5]].forEach(([sy, sx, sw]) => {
          const sc = v(sx, sy, 0, false);
          const se = v(sx, sy, sign * sw, false);
          e(sc, se, 'mesh');
        });

        // --- C. LOWER CORNER AIR INTAKES ---
        const in_ti = v(-131, 31, sign * 28, false);
        const in_to = v(-127, 32, sign * 46, false);
        const in_bo = v(-133, 44, sign * 47, false);
        const in_bi = v(-135, 43, sign * 23, false);
        e(in_ti, in_to, 'main');
        e(in_to, in_bo, 'main');
        e(in_bo, in_bi, 'main');
        e(in_bi, in_ti, 'main');
        e(g_bot, in_bi, 'mesh');
        e(in_bo, chin_out, 'mesh');

        // Horizontal splitter vane in intake
        const vane_i = v(-133, 38, sign * 25.5, false);
        const vane_o = v(-130, 38.5, sign * 46.5, false);
        e(vane_i, vane_o, 'cyan');

        // --- D. DUAL PROJECTOR HEADLIGHTS (Glowing Cyan Halo Rings & DRL) ---
        const hl_ti = v(-121, 19.5, sign * 24, false);
        const hl_to = v(-107, 16.5, sign * 47, false);
        const hl_bo = v(-110, 27.5, sign * 49, false);
        const hl_bi = v(-124, 28.5, sign * 27, false);
        e(hl_ti, hl_to, 'cyan'); // Glowing DRL eyebrow
        e(hl_to, hl_bo, 'main');
        e(hl_bo, hl_bi, 'main');
        e(hl_bi, hl_ti, 'main');
        e(g_top, hl_ti, 'mesh');
        e(in_ti, hl_bi, 'mesh');

        // Inner Projector Ring (10 segments)
        const p1_c = [-119, 24, sign * 31];
        const p1_pts = [];
        for (let s = 0; s < 10; s++) {
          const a = (s / 10) * Math.PI * 2;
          p1_pts.push(v(p1_c[0] + Math.sin(a) * 0.7, p1_c[1] + Math.sin(a) * 3.5, p1_c[2] + Math.cos(a) * 3.3, false));
        }
        for (let s = 0; s < 10; s++) {
          e(p1_pts[s], p1_pts[(s + 1) % 10], 'cyan');
        }
        v(p1_c[0], p1_c[1], p1_c[2], true); // Core emitter node

        // Outer Projector Ring (10 segments)
        const p2_c = [-112, 22.5, sign * 40];
        const p2_pts = [];
        for (let s = 0; s < 10; s++) {
          const a = (s / 10) * Math.PI * 2;
          p2_pts.push(v(p2_c[0] + Math.sin(a) * 0.7, p2_c[1] + Math.sin(a) * 4.0, p2_c[2] + Math.cos(a) * 3.7, false));
        }
        for (let s = 0; s < 10; s++) {
          e(p2_pts[s], p2_pts[(s + 1) % 10], 'cyan');
        }
        v(p2_c[0], p2_c[1], p2_c[2], true); // Core emitter node

        // --- E. HOOD & POWER-BULGE CONTOURS ---
        const pb_1 = v(-122, 17.5, sign * 14, false);
        const pb_2 = v(-94, 13, sign * 15, false);
        const pb_3 = v(-68, 11.5, sign * 16, false);
        const pb_4 = v(-48, 11, sign * 16.5, false);
        e(pb_1, pb_2, 'main');
        e(pb_2, pb_3, 'main');
        e(pb_3, pb_4, 'main');
        e(c_nodes[4], pb_1, 'mesh');
        e(c_nodes[5], pb_2, 'mesh');
        e(c_nodes[6], pb_3, 'mesh');
        e(c_nodes[7], pb_4, 'mesh');

        const hf_1 = v(-114, 17, sign * 27, false);
        const hf_2 = v(-88, 11, sign * 30, false);
        const hf_3 = v(-66, 11, sign * 28, false);
        const hf_4 = v(-48, 11, sign * 26, false);
        e(hf_1, hf_2, 'mesh');
        e(hf_2, hf_3, 'mesh');
        e(hf_3, hf_4, 'mesh');
        e(pb_1, hf_1, 'mesh');
        e(pb_2, hf_2, 'mesh');
        e(pb_3, hf_3, 'mesh');
        e(pb_4, hf_4, 'mesh');
        e(hl_ti, hf_1, 'mesh');

        // --- F. FRONT FENDER & WHEEL ARCH ---
        const fend_apex = v(-86, 9.5, sign * 53, false);
        e(hl_to, fend_apex, 'main');
        e(hf_2, fend_apex, 'mesh');

        const fw_pts = [
          v(-108, 48, sign * 50, false),
          v(-104, 30, sign * 52, false),
          v(-96, 16, sign * 53, false),
          v(-86, 10, sign * 53.5, false),
          v(-76, 16, sign * 53, false),
          v(-68, 30, sign * 52, false),
          v(-64, 48, sign * 50, false)
        ];
        for (let s = 0; s < fw_pts.length - 1; s++) {
          e(fw_pts[s], fw_pts[s + 1], 'main');
        }
        e(fend_apex, fw_pts[3], 'mesh');
        e(chin_out, fw_pts[0], 'main');
        e(sp_wing, fw_pts[0], 'mesh');

        // --- G. GREENHOUSE (Windshield, Low Roof, Windows, Pillars, Mirrors) ---
        const a_base = v(-48, 11, sign * 30, false);
        const a_top = v(-16, -19.5, sign * 25, false);
        e(hf_4, a_base, 'main');
        e(a_base, a_top, 'main');

        const r_mid = v(20, -21, sign * 26, false);
        const r_rear = v(56, -19.5, sign * 25, false);
        e(a_top, r_mid, 'main');
        e(r_mid, r_rear, 'main');
        e(c_nodes[9], a_top, 'main');
        e(c_nodes[10], r_mid, 'mesh');
        e(c_nodes[11], r_rear, 'mesh');

        // Fastback C-pillar & Rear Glass
        const c_kink = v(88, 2, sign * 39, false);
        const c_base = v(104, 12, sign * 46, false);
        e(r_rear, c_kink, 'main');
        e(c_kink, c_base, 'main');

        const rw_mid = v(86, -4, sign * 21, false);
        e(c_nodes[12], rw_mid, 'mesh');
        e(r_rear, rw_mid, 'mesh');
        e(rw_mid, c_kink, 'mesh');
        e(rw_mid, c_nodes[13], 'mesh');

        // Side Window Frame (Daylight Opening)
        const w_sill_f = v(-44, 13.5, sign * 38, false);
        const w_sill_m = v(36, 14.5, sign * 41, false);
        e(a_base, w_sill_f, 'main');
        e(w_sill_f, w_sill_m, 'main');
        e(w_sill_m, c_kink, 'main');

        const b_pill = v(36, -20.5, sign * 25.5, false);
        e(b_pill, w_sill_m, 'mesh');

        // Teardrop Side Mirror
        const m_mount = v(-46, 12.5, sign * 40, false);
        const m_f = v(-40, 7.5, sign * 50, false);
        const m_r = v(-34, 9.5, sign * 48, false);
        e(w_sill_f, m_mount, 'mesh');
        e(m_mount, m_f, 'main');
        e(m_f, m_r, 'main');
        e(m_r, m_mount, 'main');

        // --- H. DOORS, SHOULDERS & ROCKER PANELS ---
        const sh_1 = v(-48, 13.5, sign * 45, false);
        const sh_2 = v(0, 14.5, sign * 44, false);
        const sh_3 = v(48, 15, sign * 45, false);
        e(fend_apex, sh_1, 'main');
        e(sh_1, sh_2, 'main');
        e(sh_2, sh_3, 'main');

        const ds_f_b = v(-48, 48, sign * 52, false);
        const ds_r_b = v(48, 48, sign * 52, false);
        e(sh_1, ds_f_b, 'mesh');
        e(sh_3, ds_r_b, 'mesh');

        const sc_1 = v(-42, 30, sign * 47, false);
        const sc_2 = v(0, 31, sign * 46, false);
        const sc_3 = v(42, 30, sign * 48, false);
        e(sc_1, sc_2, 'mesh');
        e(sc_2, sc_3, 'mesh');

        const dh_1 = v(24, 16.5, sign * 44.5, false);
        const dh_2 = v(36, 16.5, sign * 45, false);
        e(dh_1, dh_2, 'main');

        // --- I. MUSCULAR FLARED REAR HAUNCH & WHEEL ARCH ---
        const haunch_crest = v(94, 9, sign * 55, false);
        e(sh_3, haunch_crest, 'main');
        e(c_base, haunch_crest, 'mesh');

        const rw_pts = [
          v(72, 48, sign * 52, false),
          v(76, 30, sign * 54, false),
          v(84, 16, sign * 55, false),
          v(94, 9.5, sign * 55.5, false),
          v(104, 16, sign * 55, false),
          v(112, 30, sign * 54, false),
          v(116, 48, sign * 52, false)
        ];
        for (let s = 0; s < rw_pts.length - 1; s++) {
          e(rw_pts[s], rw_pts[s + 1], 'main');
        }
        e(haunch_crest, rw_pts[3], 'mesh');

        e(fw_pts[6], rw_pts[0], 'main');
        const sk_b1 = v(-63, 49.5, sign * 53, false);
        const sk_b2 = v(71, 49.5, sign * 54, false);
        e(sk_b1, sk_b2, 'main');

        // --- J. REAR DECK, DUCKTAIL SPOILER & DIFFUSER ---
        const dt_corn = v(140, 11, sign * 33, false);
        e(c_nodes[14], dt_corn, 'main');
        e(haunch_crest, dt_corn, 'main');

        const tl_i = v(146, 23, sign * 14, false);
        const tl_o = v(144, 23, sign * 42, false);
        e(c_nodes[15], tl_i, 'main');
        e(tl_i, tl_o, 'main');
        e(dt_corn, tl_o, 'mesh');

        const rb_c = v(148, 44, sign * 44, false);
        e(rw_pts[6], rb_c, 'main');
        e(tl_o, rb_c, 'mesh');

        const dif_c = v(150, 48, sign * 24, false);
        e(rb_c, dif_c, 'main');
        e(c_nodes[16], dif_c, 'main');

        const df_t = v(149, 42, sign * 12, false);
        const df_b = v(150, 48, sign * 12, false);
        e(df_t, df_b, 'mesh');
      });

      // 3. 4 High-Performance Machined Alloy Wheels & Brakes
      const wheels = [
        { x: -86, y: 32, z: -49, sign: -1 },
        { x: -86, y: 32, z: 49, sign: 1 },
        { x: 94, y: 32, z: -51, sign: -1 },
        { x: 94, y: 32, z: 51, sign: 1 }
      ];

      wheels.forEach((wp) => {
        const wx = wp.x;
        const wy = wp.y;
        const wz = wp.z;
        const ws = wp.sign;

        // Center wheel hub datum node
        const hub_idx = v(wx, wy, wz + ws * 4.5, true);

        const segs = 16;
        const r_tire = 21.5;
        const r_rim = 16.5;
        const r_rot = 11.5;

        const z_out = wz + ws * 4.8;
        const z_in = wz - ws * 4.2;

        const ot = [];
        const orim = [];
        const it = [];

        for (let i = 0; i < segs; i++) {
          const a = (i / segs) * Math.PI * 2;
          const ca = Math.cos(a);
          const sa = Math.sin(a);
          ot.push(v(wx + ca * r_tire, wy + sa * r_tire, z_out, false));
          orim.push(v(wx + ca * r_rim, wy + sa * r_rim, z_out, false));
          it.push(v(wx + ca * r_tire, wy + sa * r_tire, z_in, false));
        }

        for (let i = 0; i < segs; i++) {
          const ni = (i + 1) % segs;
          e(ot[i], ot[ni], 'main');
          e(orim[i], orim[ni], 'main');
          e(it[i], it[ni], 'mesh');
          if (i % 2 === 0) {
            e(ot[i], it[i], 'mesh');
          }
        }

        // 5-Twin-Spoke Machined Alloy Wheel Pattern
        for (let s = 0; s < 5; s++) {
          const i1 = Math.floor(s * 3.2) % segs;
          const i2 = (i1 + 1) % segs;
          e(hub_idx, orim[i1], 'main');
          e(hub_idx, orim[i2], 'main');
        }

        // Brake Rotor Disc
        const rot_pts = [];
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          rot_pts.push(v(wx + Math.cos(a) * r_rot, wy + Math.sin(a) * r_rot, wz + ws * 1.5, false));
        }
        for (let i = 0; i < 8; i++) {
          e(rot_pts[i], rot_pts[(i + 1) % 8], 'mesh');
        }

        // Brake Caliper
        const cal_1 = v(wx - 8, wy - 9, wz + ws * 2.8, false);
        const cal_2 = v(wx + 3, wy - 11, wz + ws * 2.8, false);
        e(cal_1, cal_2, 'accent');
      });
    } else {
      // Computational CAD Parametric 3D Dome (Rhino & Grasshopper Geodesic Shell)
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
            z: Math.sin(theta) * ringR,
            isNode: true
          });

          // Horizontal ring edges
          const next = s === segments - 1 ? baseIdx : baseIdx + s + 1;
          edges.push([baseIdx + s, next, 'main']);

          // Meridians & diagonal struts
          if (r > 0) {
            const prevBase = baseIdx - segments;
            const prevCurr = prevBase + s;
            const prevNext = s === segments - 1 ? prevBase : prevBase + s + 1;
            edges.push([baseIdx + s, prevCurr, 'main']);
            edges.push([baseIdx + s, prevNext, 'main']);
          }
        }
      }
    }

    return { vertices, edges };
  };

  // Main 3D Canvas Rendering Engine
  useEffect(() => {
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

    // Mouse Wheel Zoom Listener
    const handleWheel = (e) => {
      e.preventDefault();
      zoomRef.current = Math.max(0.65, Math.min(1.85, zoomRef.current - e.deltaY * 0.0012));
    };
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    const { vertices, edges } = getGeometry(activeModel);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      // Smooth Auto-Rotation
      if (autoRotate && !isDraggingRef.current) {
        rotRef.current.y += 0.0065;
      }

      // Smooth Antigravity Zero-G Floating & Roll
      timeRef.current += 0.016;
      const t = timeRef.current;
      const floatY = Math.sin(t * 1.5) * 8.5; // Smooth up/down floating
      const zeroGRoll = Math.sin(t * 0.8) * 0.018;

      // Parallax Damping towards mouse target
      currentTiltRef.current.x += (targetTiltRef.current.x - currentTiltRef.current.x) * 0.07;
      currentTiltRef.current.y += (targetTiltRef.current.y - currentTiltRef.current.y) * 0.07;

      const rx = rotRef.current.x + currentTiltRef.current.y * 0.22;
      const ry = rotRef.current.y + currentTiltRef.current.x * 0.22 + zeroGRoll;
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Smooth Camera Zoom (Optimized FOV for Automotive CAD Coupe Scale)
      const currentZoom = zoomRef.current;
      const baseFov = activeModel === 'cad-car' ? 620 : (activeModel === 'bim-tower' ? 440 : 420);
      const fov = baseFov * currentZoom;
      const dist = 450;

      // 3D Perspective Projection
      const projected = vertices.map((v) => {
        const vy = v.y + floatY;
        const x1 = v.x * cosY + v.z * sinY;
        const y1 = vy;
        const z1 = -v.x * sinY + v.z * cosY;

        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        const depth = dist + z2;
        const scale = fov / Math.max(depth, 40);

        return {
          x: width / 2 + x2 * scale,
          y: height / 2 + y2 * scale + (activeModel === 'bim-tower' ? 14 : 10),
          depth
        };
      });

      // 1. Perspective Datum Floor Grid (Subtle with Red Engineering Hint)
      const gridSize = 160;
      const step = 32;
      const floorY = 140;
      ctx.strokeStyle = 'rgba(255, 26, 26, 0.07)';
      ctx.lineWidth = 1;

      for (let g = -gridSize; g <= gridSize; g += step) {
        const p1 = projectPt(g, floorY + floatY * 0.2, -gridSize, cosX, sinX, cosY, sinY, fov, dist, width, height);
        const p2 = projectPt(g, floorY + floatY * 0.2, gridSize, cosX, sinX, cosY, sinY, fov, dist, width, height);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        const p3 = projectPt(-gridSize, floorY + floatY * 0.2, g, cosX, sinX, cosY, sinY, fov, dist, width, height);
        const p4 = projectPt(gridSize, floorY + floatY * 0.2, g, cosX, sinX, cosY, sinY, fov, dist, width, height);
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // 2. Ambient 3D Red Energy Particles
      particlesRef.current.forEach((pt) => {
        pt.angle += pt.speed;
        const px = Math.cos(pt.angle) * pt.radius;
        const py = pt.baseY + Math.sin(t * 1.2 + pt.phase) * 14;
        const pz = Math.sin(pt.angle) * pt.radius;

        const pr = projectPt(px, py + floatY, pz, cosX, sinX, cosY, sinY, fov, dist, width, height);
        const alpha = Math.max(0.12, Math.min(0.85, 1 - (pr.depth - 250) / 450));
        ctx.beginPath();
        ctx.arc(pr.x, pr.y, pt.size * (fov / Math.max(pr.depth, 40)), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 30, 30, ${alpha * 0.75})`;
        ctx.fill();
      });

      // 3. Wireframe Vector Edges (Vivid Engineering RED with Depth Gradient & Technical Accents)
      edges.forEach((edge) => {
        const i = edge[0];
        const j = edge[1];
        const style = edge[2] || 'main';
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        const avgDepth = (p1.depth + p2.depth) / 2;
        const alpha = Math.max(0.18, Math.min(0.95, 1 - (avgDepth - 280) / 380));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        if (style === 'cyan') {
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.95})`;
          ctx.lineWidth = 1.9;
        } else if (style === 'blue') {
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.9})`;
          ctx.lineWidth = 1.4;
        } else if (style === 'green') {
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.95})`;
          ctx.lineWidth = 1.8;
        } else if (style === 'mesh') {
          ctx.strokeStyle = `rgba(255, 60, 60, ${alpha * 0.4})`;
          ctx.lineWidth = 1.1;
        } else if (style === 'accent') {
          ctx.strokeStyle = `rgba(255, 180, 50, ${alpha * 0.9})`;
          ctx.lineWidth = 1.6;
        } else {
          ctx.strokeStyle = `rgba(255, 26, 26, ${alpha})`;
          ctx.lineWidth = 1.6;
        }
        ctx.stroke();
      });

      // 4. Glowing Vertex Nodes (Clean Key Datum Points for Car/Building, Structural Joints for Towers/Dome)
      projected.forEach((p, idx) => {
        const isCar = activeModel === 'cad-car';
        const isBuilding = activeModel === 'bim-tower';
        if ((isCar || isBuilding) ? vertices[idx]?.isNode !== true : vertices[idx]?.isNode === false) return;
        const radius = Math.max(1.4, Math.min(3.0, 3.5 - (p.depth - 300) / 90));
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });

      // 5. Cursor Proximity Vertex Hover Highlight
      const mPos = mouseCanvasPosRef.current;
      let closestDist = 44;
      let closestP = null;
      projected.forEach((p, idx) => {
        if (vertices[idx]?.isNode === false) return;
        const dx = p.x - mPos.x;
        const dy = p.y - mPos.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < closestDist) {
          closestDist = d;
          closestP = p;
        }
      });

      if (closestP) {
        const pulse = 1 + Math.sin(t * 8) * 0.25;
        ctx.save();
        ctx.beginPath();
        ctx.arc(closestP.x, closestP.y, 8 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 26, 26, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(closestP.x, closestP.y, 14 * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 26, 26, 0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.stroke();
        ctx.restore();
      }

      // 6. Dynamic Laser LiDAR Scan Line
      if (showLaser) {
        scanY += scanDir * 1.6;
        if (scanY > height * 0.72 || scanY < -height * 0.28) {
          scanDir *= -1;
        }
        const scanScreenY = height / 2 + scanY;
        const laserGrad = ctx.createLinearGradient(width * 0.1, scanScreenY, width * 0.9, scanScreenY);
        laserGrad.addColorStop(0, 'rgba(255, 26, 26, 0)');
        laserGrad.addColorStop(0.5, 'rgba(255, 60, 60, 0.9)');
        laserGrad.addColorStop(1, 'rgba(255, 26, 26, 0)');

        ctx.strokeStyle = laserGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, scanScreenY);
        ctx.lineTo(width * 0.9, scanScreenY);
        ctx.stroke();
      }

      // 7. 3D CAD Orientation Triad in bottom left corner
      const triadOrigin = { x: 38, y: height - 34 };
      const triadLen = 22;
      const axes = [
        { x: triadLen, y: 0, z: 0, color: '#FF3333', label: 'X' },
        { x: 0, y: -triadLen, z: 0, color: '#10B981', label: 'Y' },
        { x: 0, y: 0, z: triadLen, color: '#38BDF8', label: 'Z' }
      ];

      axes.forEach((axis) => {
        const ax1 = axis.x * cosY + axis.z * sinY;
        const ay1 = axis.y;
        const az1 = -axis.x * sinY + axis.z * cosY;

        const ay2 = ay1 * cosX - az1 * sinX;
        const ax2 = ax1;

        const endX = triadOrigin.x + ax2;
        const endY = triadOrigin.y + ay2;

        ctx.beginPath();
        ctx.moveTo(triadOrigin.x, triadOrigin.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = axis.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = axis.color;
        ctx.font = 'bold 8.5px monospace';
        ctx.fillText(axis.label, endX + 3, endY + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [activeModel, autoRotate, showLaser]);

  const projectPt = (x, y, z, cosX, sinX, cosY, sinY, fov, dist, width, height) => {
    const x1 = x * cosY + z * sinY;
    const y1 = y;
    const z1 = -x * sinY + z * cosY;

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
  };

  // Mouse Interaction: 3D Tilt, Orbit & Cursor Hover Tracking
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
    targetTiltRef.current = { x, y };

    // Canvas-relative cursor position for vertex hover highlights
    if (canvasRef.current) {
      const cRect = canvasRef.current.getBoundingClientRect();
      mouseCanvasPosRef.current = {
        x: e.clientX - cRect.left,
        y: e.clientY - cRect.top
      };
    }

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
    targetTiltRef.current = { x: 0, y: 0 };
    mouseCanvasPosRef.current = { x: -999, y: -999 };
    isDraggingRef.current = false;
    setIsInteracting(false);
  };

  // Mobile Touch Gestures (3D Rotation with Vertical Scroll Preservation & Pinch Zoom)
  const handleTouchStart = (e) => {
    setIsInteracting(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      isDraggingRef.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDistRef.current = Math.sqrt(dx * dx + dy * dy);
      startZoomRef.current = zoomRef.current;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && isDraggingRef.current) {
      const touch = e.touches[0];
      const dx = touch.clientX - lastMouseRef.current.x;
      const dy = touch.clientY - lastMouseRef.current.y;
      rotRef.current.y += dx * 0.009;
      rotRef.current.x -= dy * 0.009;
      rotRef.current.x = Math.max(-1.1, Math.min(1.1, rotRef.current.x));
      lastMouseRef.current = { x: touch.clientX, y: touch.clientY };
    } else if (e.touches.length === 2 && touchStartDistRef.current > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const currentDist = Math.sqrt(dx * dx + dy * dy);
      const ratio = currentDist / touchStartDistRef.current;
      zoomRef.current = Math.max(0.65, Math.min(1.85, startZoomRef.current * ratio));
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    touchStartDistRef.current = 0;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 6000);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FCFCFD] pt-1 sm:pt-2 pb-4 sm:pb-5 select-none">
      {/* Background Architectural Blueprint Grid & Laser Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C4161C08_1px,transparent_1px),linear-gradient(to_bottom,#C4161C08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C4161C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* MAIN HERO SPLIT: LEFT EDITORIAL & RIGHT FULL 3D STAGE     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-7 xl:gap-8 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN: HIGH-IMPACT CADD EDITORIAL & QUICK ACTIONS   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left py-0 z-10">

            {/* Headline */}
            <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold tracking-tight leading-[1.15] sm:leading-[1.12] text-[#0F172A]">
              <div>The World’s Largest</div>
              <div className="text-[#C4161C] text-[13px] min-[360px]:text-[15px] min-[400px]:text-[17px] sm:text-[24px] md:text-[28px] lg:text-[23px] xl:text-[27.5px] 2xl:text-[31px] font-black tracking-tight my-1 flex flex-wrap items-center gap-x-1.5 sm:gap-x-2">
                <span>CAD</span>
                <span className="text-[#C4161C]">•</span>
                <span>Interior Design</span>
                <span className="text-[#C4161C]">•</span>
                <span>MEP</span>
                <span className="text-[#C4161C]">•</span>
                <span>BIM</span>
                <span className="text-[#C4161C]">•</span>
                <span>PPM</span>
              </div>
              <div>Training Network</div>
            </h1>

            {/* Highlighted 25 Years Badge */}
            <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50/80 border border-red-200/90 shadow-xs w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C4161C] animate-pulse shrink-0 shadow-[0_0_8px_rgba(196,22,28,0.6)]" />
              <span className="text-xs sm:text-sm font-extrabold text-[#111827] tracking-tight">
                Proudly Serving Manjeri for 25 Years
              </span>
            </div>

            {/* Action Buttons: Full-width on mobile */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wider shadow-lg shadow-[#C4161C]/25 transition-all duration-200 cursor-pointer active:scale-96"
              >
                <span>ENQUIRE ADMISSIONS</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:border-[#C4161C]/40 text-center"
              >
                <span>EXPLORE COURSES</span>
              </a>
            </div>

            {/* Credential Metrics Row (Compact & Resilient on 360px Screens) */}
            <div className="pt-2.5 sm:pt-3 border-t border-gray-100 mt-2.5 sm:mt-3 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <div className="text-lg sm:text-2xl font-black text-gray-900 font-mono">100%</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Placement Cell (GCC Desk)</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-gray-900 font-mono">36+</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Certified Programs</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#C4161C] font-mono">25 Yrs</div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium leading-tight sm:leading-snug">Proudly in Manjeri</div>
              </div>
            </div>

            {/* Red Circular Dot Grid (Classic Finbiz Placement) */}
            <div
              className="pt-1.5 sm:pt-2 flex flex-col gap-1.5 select-none opacity-75"
              aria-hidden="true"
            >
              {[...Array(3)].map((_, r) => (
                <div key={r} className="flex gap-2">
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
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseEnter={() => setIsInteracting(true)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{ perspective: '1400px' }}
              className="relative w-full max-w-[580px] xl:max-w-[620px]"
            >
              {/* 3D Perspective Floating Card */}
              <div
                style={{
                  transform: `rotateY(${tilt.x * 5.5}deg) rotateX(${-tilt.y * 5.5}deg)`,
                  transition: isDraggingRef.current ? 'none' : 'transform 0.22s ease-out'
                }}
                className="relative rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:shadow-[0_25px_70px_rgba(15,23,42,0.2)] border-2 sm:border-4 border-white bg-[#080C14] text-white group"
              >
                {/* 1. TOP BAR: 3 CAD/BIM MODEL SWITCHERS */}
                <div className="px-2.5 py-2 sm:px-3.5 sm:py-2.5 bg-black/75 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar z-30 relative">
                  <div className="flex items-center gap-1.5 shrink-0">
                    {MODELS.map((m) => {
                      const isActive = activeModel === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => {
                            selectModel(m.id);
                            setIsInteracting(true);
                            if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
                            pauseTimeoutRef.current = setTimeout(() => {
                              setIsInteracting(false);
                            }, 10000);
                          }}
                          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10.5px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${isActive
                              ? 'bg-[#C4161C] text-white shadow-md'
                              : 'bg-white/5 hover:bg-white/10 text-gray-300'
                            }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white animate-pulse' : 'bg-gray-500'}`} />
                          <span>{m.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Control Toggles */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setAutoRotate(!autoRotate)}
                      title="Toggle Auto Rotation"
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${autoRotate ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowLaser(!showLaser)}
                      title="Toggle Laser Scan Line"
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${showLaser ? 'bg-red-500/30 text-[#FF5A43] border border-red-500/40' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. MAIN 3D WORKSTATION VIEWPORT */}
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

                  {/* Drag to Orbit & Zoom Indicator (Bottom-Right) */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 px-2.5 sm:px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-gray-300 text-[9.5px] sm:text-[10px] font-mono flex items-center gap-1.5 pointer-events-none shadow-md">
                    <Compass className="w-3 h-3 text-[#FF1A1A]" />
                    <span>360° Drag Orbit • Scroll Zoom</span>
                  </div>

                  {/* Real-time Dynamic 3D Coordinates (Top-Left) */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 pointer-events-none font-mono text-[9px] sm:text-[10px] text-gray-400 bg-black/65 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-white/10 space-x-1.5 sm:space-x-2">
                    <span>X: <strong className="text-white">{hudCoords.x}</strong></span>
                    <span>Y: <strong className="text-white">{hudCoords.y}</strong></span>
                    <span>Z: <strong className="text-[#FF1A1A]">{hudCoords.z}</strong></span>
                  </div>
                </div>

                {/* 3. BOTTOM TELEMETRY DOCK (Clean Stacking on Mobile) */}
                <div className="px-3 py-2.5 sm:px-4 sm:py-3 bg-black/85 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-[11px] sm:text-[12px] leading-tight">Autodesk &amp; Bentley Authorized Lab</div>
                      <div className="text-[9.5px] sm:text-[10px] text-gray-400">Dual-Display Workstations • Certified Programs</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/10 hover:bg-[#C4161C] text-white text-[11px] sm:text-xs font-bold transition-all cursor-pointer shrink-0 text-center active:scale-97"
                  >
                    Free Demo Class
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL STATIC SCROLLABLE ENGINEERING COURSES STRIP    */}
        {/* ========================================================= */}
        <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-gray-100 flex items-center gap-2 sm:gap-3 overflow-hidden">
          {/* Left Pinned Label */}
          <div className="shrink-0 text-[10.5px] sm:text-xs font-bold font-mono uppercase tracking-wider text-[#C4161C] flex items-center gap-1.5 pr-2 sm:pr-3 border-r border-gray-200 bg-white">
            <GraduationCap className="w-3.5 h-3.5" />
            <span><span className="hidden sm:inline">EXPLORE </span>COURSES:</span>
          </div>

          {/* Horizontally Scrollable Courses Strip (Swipeable without auto-running) */}
          <div
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {COURSES_TICKER.map((course) => (
              <button
                key={course.id}
                type="button"
                onClick={() => handleCourseClick(course)}
                className="px-2.5 sm:px-3 py-1 rounded-lg bg-gray-100/80 hover:bg-[#C4161C] hover:text-white border border-gray-200/80 hover:border-[#C4161C] text-[10.5px] sm:text-[11px] font-semibold text-gray-700 hover:text-white whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 active:scale-95 shadow-2xs group flex items-center gap-1.5"
                title={`Explore ${course.name}`}
              >
                <span>{course.name}</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
              </button>
            ))}
          </div>

          {/* Right Pinned "View More" Button */}
          <div className="shrink-0 pl-1.5 border-l border-gray-200 bg-white">
            <a
              href="#courses"
              onClick={handleViewMoreCourses}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg bg-[#C4161C] hover:bg-[#A81217] text-white text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap shadow-xs transition-all cursor-pointer active:scale-95"
              title="View all courses"
            >
              <span>View More</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Complete Course Catalog Directory Modal */}
      <CoursesDirectoryModal
        isOpen={isCoursesModalOpen}
        onClose={() => setIsCoursesModalOpen(false)}
        onSelectCourse={(course) => {
          handleCourseClick({
            id: course.id,
            tab: course.disciplineKey,
            name: course.title
          });
        }}
      />
    </section>
  );
}
