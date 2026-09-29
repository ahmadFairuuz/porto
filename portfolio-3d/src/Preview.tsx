import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { SceneTorusKnot, SceneGlass, SceneIcosahedron } from './components/SceneVariants';

const variants = [
  { key: 'A', title: 'Torus Knot Wireframe', desc: 'Cyberpunk / futuristik', Scene: SceneTorusKnot },
  { key: 'B', title: 'Frosted Glass Octahedron', desc: 'Modern / Vercel-ish', Scene: SceneGlass },
  { key: 'C', title: 'Icosahedron + Torus (original)', desc: 'Abstract klasik', Scene: SceneIcosahedron },
];

export default function Preview() {
  return (
    <div style={{ background: '#090A0F', minHeight: '100vh', padding: '40px 24px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ color: '#F8FAFC', textAlign: 'center', marginBottom: 8, fontSize: 28 }}>
        3D Scene Variants — pilih yang paling oke
      </h1>
      <p style={{ color: '#94A3B8', textAlign: 'center', marginBottom: 40, fontSize: 14 }}>
        Drag untuk rotate tiap scene
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24, maxWidth: 1400, margin: '0 auto' }}>
        {variants.map(({ key, title, desc, Scene }) => (
          <div key={key} style={{ background: '#0F172A', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ background: '#6366F1', color: '#fff', fontWeight: 700, fontSize: 13, width: 26, height: 26, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {key}
                </span>
                <span style={{ color: '#F8FAFC', fontWeight: 600, fontSize: 15 }}>{title}</span>
              </div>
              <div style={{ color: '#64748B', fontSize: 12, marginTop: 6, marginLeft: 36 }}>{desc}</div>
            </div>
            <div style={{ height: 360 }}>
              <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
                <color attach="background" args={['#090A0F']} />
                <fog attach="fog" args={['#090A0F', 15, 40]} />
                <Suspense fallback={null}>
                  <Stars radius={100} depth={50} count={1200} factor={5} saturation={0} fade speed={0.1} />
                  <Scene />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              </Canvas>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
