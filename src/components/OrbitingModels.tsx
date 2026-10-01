import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Center, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// ─── Muat & siapkan tiap model ───────────────────────────────────────────────
// laptop2.glb  : maxDim ~2.9 unit → scale 0.9  (≈ 2.6 unit final)
// Headphones   : maxDim ~71  unit → scale 0.035 (≈ 2.5 unit final)
// <Center> auto-recenter geometry ke origin.

function Laptop2Model() {
  const { scene } = useGLTF('/models/laptop2.glb');
  const cloned = useRef<THREE.Group>(null);
  return (
    <Center>
      <primitive ref={cloned} object={scene} scale={0.9} rotation={[0, Math.PI / 2, 0]} />
    </Center>
  );
}

function HeadphonesModel() {
  const { scene } = useGLTF('/models/Headphones.glb');
  const cloned = useRef<THREE.Group>(null);
  return (
    <Center>
      <primitive ref={cloned} object={scene} scale={0.035} rotation={[0, -Math.PI / 2, 0]} />
    </Center>
  );
}

// ─── Group berputar: dua model di sisi berlawanan ────────────────────────────
// Orbit radius = 6 (cukup jauh dari teks Hero di tengah)
// Laptop2 di kanan (x=+6), Headphones di kiri (x=-6).
// Saat group rotation.y berubah, mereka saling bertukar posisi → efek orbit.

function OrbitingModels() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      // Rotasi perlahan mengelilingi sumbu Y (horizontal)
      group.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group ref={group}>
      {/* Laptop2 — sisi kanan */}
      <group position={[6, 0.5, 0]}>
        <Laptop2Model />
      </group>

      {/* Headphones — sisi kiri (berseberangan) */}
      <group position={[-6, -0.5, 0]}>
        <HeadphonesModel />
      </group>
    </group>
  );
}

useGLTF.preload('/models/laptop2.glb');
useGLTF.preload('/models/Headphones.glb');

export { OrbitingModels };