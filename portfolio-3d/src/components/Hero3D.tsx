import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      shadows
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <OrbitControls enableZoom={true} enablePan={false} />
      
      {/* Simple 3D Sphere as placeholder */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color="#6366F1" transparent opacity={0.8} />
        <mesh.rotation>
          <axis angle={0} x={0} y={1} z={0} />
        </mesh.rotation>
      </mesh>
    </Canvas>
  );
}

// Custom hook for per-frame updates
function useThree() {
  useFrame(() => {
    // Rotate the sphere slowly
  });
}