import { SceneTorusKnot, SceneGlass, SceneIcosahedron } from './SceneVariants';

// ─── GANTI INI buat pilih scene yang dipakai di website ──────────────────────
// 'torus-knot' | 'glass' | 'icosahedron'
const ACTIVE_SCENE: 'torus-knot' | 'glass' | 'icosahedron' = 'torus-knot';

function Objects() {
  if (ACTIVE_SCENE === 'glass') return <SceneGlass />;
  if (ACTIVE_SCENE === 'icosahedron') return <SceneIcosahedron />;
  return <SceneTorusKnot />;
}

export { Objects };
