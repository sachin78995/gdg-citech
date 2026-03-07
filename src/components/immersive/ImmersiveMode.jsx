import React, { Suspense, useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, useTexture, Trail, MeshDistortMaterial } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './ImmersiveMode.css';

/* ── Data — each item has a unique 3D shape type ── */
const NAV_ITEMS = [
  {
    id: 'about',
    label: 'ABOUT',
    icon: '🧬',
    color: '#4285f4',
    shape: 'dodecahedron',
    title: 'About GDG-CITech',
    desc: 'We are a vibrant university developer community powered by Google — built on four pillars: Learn, Connect, Grow, and Build.',
    cta: 'View About',
  },
  {
    id: 'events',
    label: 'EVENTS',
    icon: '🚀',
    color: '#ea4335',
    shape: 'octahedron',
    title: 'Events & Hackathons',
    desc: 'Immerse yourself in hackathons, workshops, bootcamps, and developer conferences that push the boundaries of what\'s possible.',
    cta: 'See Events',
  },
  {
    id: 'team',
    label: 'TEAM',
    icon: '👥',
    color: '#34a853',
    shape: 'torusKnot',
    title: 'Meet Our Team',
    desc: 'A passionate group of student organizers, tech leads, and community builders driving GDG-CITech forward every day.',
    cta: 'Meet Team',
  },
  {
    id: 'resources',
    label: 'DEVSPACE',
    icon: '⚡',
    color: '#fbbc04',
    shape: 'icosahedron',
    title: 'DevSpace Resources',
    desc: 'Explore the technologies we master — React, Flutter, TensorFlow, GCP, Kubernetes, and many more cutting-edge tools.',
    cta: 'Explore Tech',
  },
  {
    id: 'contact',
    label: 'CONTACT',
    icon: '💬',
    color: '#a855f7',
    shape: 'tetrahedron',
    title: 'Get In Touch',
    desc: 'Have a question, idea, or want to collaborate with us? Reach out and let\'s build something amazing together.',
    cta: 'Contact Us',
  },
];

/* ── Animated floor grid with glowing lines ── */
function FloorGrid() {
  const gridRef = useRef();

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.elapsedTime * 0.3) % 1.5;
    }
  });

  return (
    <group position={[0, -2.5, 0]}>
      <gridHelper ref={gridRef} args={[80, 50, '#1a1a3e', '#0d0d20']} />
      {/* Secondary subtle grid */}
      <gridHelper args={[80, 100, '#0f0f2a', '#080818']} />
    </group>
  );
}

/* ── Floating particles around the scene ── */
function FloatingParticles({ count = 80 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15 + 2,
        (Math.random() - 0.5) * 30,
      ],
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.04 + 0.02,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(clock.elapsedTime * p.speed + p.offset) * 0.5,
        p.position[1] + Math.cos(clock.elapsedTime * p.speed * 0.7 + p.offset) * 0.3,
        p.position[2] + Math.sin(clock.elapsedTime * p.speed * 0.5 + p.offset) * 0.5
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#4285f4" transparent opacity={0.4} />
    </instancedMesh>
  );
}

/* ── Glowing energy ring around the center ── */
function EnergyRing({ radius = 4.5 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.15;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={ref} position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.008, 16, 128]} />
        <meshBasicMaterial color="#4285f4" transparent opacity={0.3} />
      </mesh>
      <mesh>
        <torusGeometry args={[radius + 0.3, 0.005, 16, 128]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.15} />
      </mesh>
      <mesh>
        <torusGeometry args={[radius - 0.3, 0.005, 16, 128]} />
        <meshBasicMaterial color="#34a853" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

/* ── Connecting beams from center to each orb ── */
function ConnectionBeam({ from, to, color, active }) {
  const ref = useRef();
  const points = useMemo(() => [
    new THREE.Vector3(...from),
    new THREE.Vector3(...to),
  ], [from, to]);
  const lineGeo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = active
        ? 0.4 + Math.sin(clock.elapsedTime * 3) * 0.2
        : 0.06 + Math.sin(clock.elapsedTime * 0.5) * 0.03;
    }
  });

  return (
    <line ref={ref} geometry={lineGeo}>
      <lineBasicMaterial color={color} transparent opacity={0.06} />
    </line>
  );
}

/* ── Unique 3D shape geometry per nav item ── */
function ShapeGeometry({ shape }) {
  switch (shape) {
    case 'dodecahedron':
      return <dodecahedronGeometry args={[0.5, 0]} />;
    case 'octahedron':
      return <octahedronGeometry args={[0.55, 0]} />;
    case 'torusKnot':
      return <torusKnotGeometry args={[0.35, 0.12, 64, 16, 2, 3]} />;
    case 'icosahedron':
      return <icosahedronGeometry args={[0.5, 0]} />;
    case 'tetrahedron':
      return <tetrahedronGeometry args={[0.6, 0]} />;
    default:
      return <dodecahedronGeometry args={[0.5, 0]} />;
  }
}

/* ── Floating nav shape in 3D ── */
function NavShape({ angle, color, label, icon, shape, isSelected, onSelect, isMobile }) {
  const ref = useRef();
  const innerRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);
  const radius = isMobile ? 3.2 : 4.2;

  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime;
      /* Gentle float up-down */
      ref.current.position.y = Math.sin(t * 0.6 + angle) * 0.25;

      /* Rotate the inner shape */
      if (innerRef.current) {
        innerRef.current.rotation.y += active ? 0.02 : 0.008;
        innerRef.current.rotation.x = Math.sin(t * 0.4 + angle) * 0.15;
        innerRef.current.rotation.z = Math.cos(t * 0.3 + angle) * 0.08;
      }

      /* Pulse glow sphere */
      if (glowRef.current) {
        const pulse = 1 + Math.sin(t * 2 + angle) * 0.08;
        glowRef.current.scale.setScalar(active ? pulse * 1.6 : pulse * 1.2);
      }
    }
  });

  const handleOver = useCallback(() => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  }, []);

  const handleOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = 'default';
  }, []);

  /* Canvas label texture */
  const labelTexture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 320;
    c.height = 100;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 320, 100);

    /* Label */
    ctx.font = 'bold 28px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isSelected ? '#ffffff' : color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 18;
    ctx.fillText(label, 160, 35);

    /* Sub-line */
    ctx.shadowBlur = 0;
    ctx.font = '15px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillText(isMobile ? '[ TAP ]' : '[ CLICK ]', 160, 72);

    return new THREE.CanvasTexture(c);
  }, [label, color, isSelected]);

  const active = hovered || isSelected;
  const mobileScale = isMobile ? 1.3 : 1;
  const s = (active ? 1.35 : 1) * mobileScale;

  return (
    <group ref={ref} position={[x, 0, z]}>
      {/* Background glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.08 : 0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main 3D shape — always wireframe, same look before & after click */}
      <mesh
        ref={innerRef}
        onClick={onSelect}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
        scale={[s, s, s]}
      >
        <ShapeGeometry shape={shape} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={active ? 0.6 : 0.25}
          roughness={0.25}
          metalness={0.75}
          transparent
          opacity={active ? 1 : 0.85}
          wireframe
        />
      </mesh>

      {/* Orbiting ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[s, s, s]}>
        <torusGeometry args={[0.75, 0.012, 16, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.7 : 0.15}
        />
      </mesh>

      {/* Orbiting ring 2 — perpendicular */}
      <mesh rotation={[0, 0, Math.PI / 4]} scale={[s * 0.9, s * 0.9, s * 0.9]}>
        <torusGeometry args={[0.8, 0.008, 16, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.35 : 0.07}
        />
      </mesh>

      {/* Orbiting mini dots */}
      {[0, 1, 2].map((idx) => {
        const dotAngle = (idx / 3) * Math.PI * 2;
        return (
          <OrbitingDot key={idx} parentAngle={angle} dotIndex={idx} dotAngle={dotAngle} color={color} radius={0.85} active={active} />
        );
      })}

      {/* Label below */}
      <sprite position={[0, -1.4, 0]} scale={[2.4, 0.75, 1]}>
        <spriteMaterial map={labelTexture} transparent depthWrite={false} />
      </sprite>

      {/* Point light when active */}
      {active && (
        <pointLight color={color} intensity={2} distance={5} />
      )}
    </group>
  );
}

/* ── Tiny dots that orbit around each shape ── */
function OrbitingDot({ parentAngle, dotIndex, dotAngle, color, radius, active }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime * 1.5 + dotAngle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 2) * 0.15;
    }
  });

  return (
    <mesh ref={ref} scale={active ? 0.06 : 0.03}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={active ? 0.9 : 0.4} />
    </mesh>
  );
}

/* ── Center logo using actual image with glow ── */
function CenterLogo() {
  const texture = useTexture('/gdsc-logo.png');
  const glowRef = useRef();

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.05;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={0.8} floatIntensity={0.2} rotationIntensity={0}>
      <group position={[0, 0.3, 0]}>
        {/* Glow behind logo */}
        <mesh ref={glowRef} position={[0, 0, -0.05]}>
          <circleGeometry args={[1.5, 32]} />
          <meshBasicMaterial color="#4285f4" transparent opacity={0.04} side={THREE.DoubleSide} />
        </mesh>

        {/* Logo plane */}
        <mesh>
          <planeGeometry args={[2.4, 2.4]} />
          <meshBasicMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Nebula background clouds ── */
function NebulaCloud({ position, color, size }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.02;
      ref.current.rotation.y = clock.elapsedTime * 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.015}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

/* ── Scene ── */
function Scene({ selectedId, onSelect, isMobile }) {
  const count = NAV_ITEMS.length;
  const orbitRadius = isMobile ? 3.2 : 4.2;

  return (
    <>
      {/* Lighting — richer */}
      <ambientLight intensity={0.2} />
      <pointLight position={[8, 8, 8]} intensity={0.5} color="#4285f4" distance={30} />
      <pointLight position={[-8, 5, -8]} intensity={0.4} color="#a855f7" distance={30} />
      <pointLight position={[0, -3, 8]} intensity={0.3} color="#34a853" distance={20} />
      <spotLight position={[0, 12, 5]} intensity={0.4} angle={0.6} penumbra={1} color="#ffffff" />
      <spotLight position={[-5, 8, -5]} intensity={0.2} angle={0.5} penumbra={1} color="#ea4335" />

      {/* Animated floor grid */}
      <FloorGrid />

      {/* Deep-space stars */}
      <Stars radius={100} depth={80} count={isMobile ? 1500 : 4000} factor={4} saturation={0.3} fade speed={0.3} />

      {/* Nebula clouds for depth */}
      <NebulaCloud position={[15, 5, -20]} color="#4285f4" size={12} />
      <NebulaCloud position={[-18, 8, -15]} color="#a855f7" size={10} />
      {!isMobile && <NebulaCloud position={[0, -5, -25]} color="#ea4335" size={14} />}
      {!isMobile && <NebulaCloud position={[10, 10, -30]} color="#34a853" size={8} />}

      {/* Floating micro particles */}
      <FloatingParticles count={isMobile ? 20 : 60} />

      {/* Center energy rings */}
      <EnergyRing radius={isMobile ? 3.5 : 4.5} />

      {/* Center logo */}
      <CenterLogo />

      {/* Connection beams from center to each shape */}
      {NAV_ITEMS.map((item, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const tx = Math.cos(angle) * orbitRadius;
        const tz = Math.sin(angle) * orbitRadius;
        return (
          <ConnectionBeam
            key={`beam-${item.id}`}
            from={[0, 0.3, 0]}
            to={[tx, 0, tz]}
            color={item.color}
            active={selectedId === item.id}
          />
        );
      })}

      {/* Nav shapes in circle — each with a unique geometry */}
      {NAV_ITEMS.map((item, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        return (
          <NavShape
            key={item.id}
            angle={angle}
            color={item.color}
            label={item.label}
            icon={item.icon}
            shape={item.shape}
            isSelected={selectedId === item.id}
            onSelect={() => onSelect(item.id)}
            isMobile={isMobile}
          />
        );
      })}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </>
  );
}

/* ── Main Component ── */
export default function ImmersiveMode({ onClose }) {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const selectedItem = NAV_ITEMS.find((n) => n.id === selectedId);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigate = (section) => {
    onClose();
    document.body.style.cursor = 'default';
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <motion.div
      className="immersive"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="immersive__header">
        <img src="/gdsc-logo.png" alt="GDG CITech" className="immersive__brand-logo" />
        <p className="immersive__hint">{isMobile ? 'Tap a shape to explore' : 'Click a shape to explore • Drag to orbit'}</p>
        <button className="immersive__close" onClick={onClose}>
          ✕ EXIT
        </button>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: isMobile ? [0, 4.5, 11] : [0, 3.5, 9], fov: isMobile ? 60 : 48 }}
        className="immersive__canvas"
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor('#030312');
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <Suspense fallback={null}>
          <Scene selectedId={selectedId} onSelect={setSelectedId} isMobile={isMobile} />
        </Suspense>
      </Canvas>

      {/* Detail Panel — shows when a shape is clicked */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="immersive__panel"
            key={selectedItem.id}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="immersive__panel-close"
              onClick={() => setSelectedId(null)}
            >
              ✕
            </button>
            <div
              className="immersive__panel-accent"
              style={{ background: `linear-gradient(90deg, ${selectedItem.color}, transparent)` }}
            />
            <span className="immersive__panel-icon">{selectedItem.icon}</span>
            <h3
              className="immersive__panel-title"
              style={{ color: selectedItem.color }}
            >
              {selectedItem.title}
            </h3>
            <p className="immersive__panel-desc">{selectedItem.desc}</p>
            <button
              className="immersive__panel-btn"
              style={{
                borderColor: selectedItem.color + '50',
                color: selectedItem.color,
              }}
              onClick={() => handleNavigate(selectedItem.id)}
            >
              {selectedItem.cta} →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="immersive__footer">
        <span>IMMERSIVE MODE</span>
        <span className="immersive__footer-dot" />
        <span>VIRTUAL DEVELOPER ROOM</span>
        <span className="immersive__footer-dot" />
        <span>GDG-CITech</span>
      </div>
    </motion.div>
  );
}
