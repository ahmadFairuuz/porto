import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';

// ─── Option A: Torus Knot Wireframe (cyberpunk) ───────────────────────────────
export function SceneTorusKnot() {
  const ref = useRef<any>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#6366f1" />
      <pointLight position={[-5, -5, 5]} intensity={1.5} color="#06b6d4" />
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
        <mesh ref={ref} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1.6, 0.4, 128, 32]} />
          <meshStandardMaterial color="#6366f1" emissive="#4338ca" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
      </mesh>
    </>
  );
}

// ─── Option B: Frosted Glass Octahedron ──────────────────────────────────────
export function SceneGlass() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, 3, 5]} intensity={2} color="#a5b4fc" />
      <pointLight position={[5, -3, -5]} intensity={1.5} color="#67e8f9" />
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[2, 0]} />
          <MeshTransmissionMaterial
            samples={8}
            resolution={256}
            transmission={0.95}
            roughness={0.05}
            thickness={1.5}
            ior={1.5}
            chromaticAberration={0.08}
            color="#a5b4fc"
            backside
          />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
        <mesh position={[3.5, 1, 0]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={0.5}>
        <mesh position={[-3, -1.5, 0]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#a5b4fc" emissive="#a5b4fc" emissiveIntensity={1} />
        </mesh>
      </Float>
    </>
  );
}

// ─── Option C: Icosahedron + Torus (original) ────────────────────────────────
export function SceneIcosahedron() {
  const core = useRef<any>(null);
  const ring = useRef<any>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y = -t * 0.15;
      core.current.rotation.x = t * 0.1;
    }
    if (ring.current) {
      ring.current.rotation.x = t * 0.3;
      ring.current.rotation.y = t * 0.2;
    }
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#F8FAFC" />
      <pointLight position={[-5, 5, 5]} intensity={1.5} color="#6366F1" />
      <pointLight position={[5, -5, 5]} intensity={1.2} color="#06B6D4" />
      <mesh ref={core} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.6} metalness={0.7} roughness={0.2} wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={1} transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring} position={[-4, 2.5, -2]}>
        <torusGeometry args={[1.2, 0.35, 32, 80]} />
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.7} metalness={0.5} roughness={0.1} />
      </mesh>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[4, -1.5, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.5} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}
