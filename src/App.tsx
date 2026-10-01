import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { OrbitingModels } from './components/OrbitingModels';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-body text-body">
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <color attach="background" args={['#090A0F']} />
          <fog attach="fog" args={['#090A0F', 15, 30]} />
          
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-5, 3, 5]} intensity={1} color="#6366F1" />
          <pointLight position={[5, -3, -5]} intensity={0.8} color="#06B6D4" />
          
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={2000} factor={5} saturation={0} fade speed={0.5}/>
            <OrbitingModels />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
