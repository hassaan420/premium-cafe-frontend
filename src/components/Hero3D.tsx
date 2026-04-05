import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function CakeModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cake base - bottom layer */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.25, 0.55, 48]} />
        <meshStandardMaterial color="#FFF1D0" roughness={0.8} metalness={0} />
      </mesh>

      {/* Frosting on bottom layer */}
      <mesh position={[0, -0.32, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.22, 1.22, 0.06, 48]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0} />
      </mesh>

      {/* Middle layer */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.0, 1.05, 0.5, 48]} />
        <meshStandardMaterial color="#E8C396" roughness={0.8} metalness={0} />
      </mesh>

      {/* Frosting middle */}
      <mesh position={[0, 0.31, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.02, 1.02, 0.05, 48]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0} />
      </mesh>

      {/* Top layer */}
      <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.78, 0.82, 0.45, 48]} />
        <meshStandardMaterial color="#FFF1D0" roughness={0.8} metalness={0} />
      </mesh>

      {/* Ganache drips */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 0.78;
        return (
          <mesh key={i} position={[Math.cos(rad) * r * 0.85, 0.62, Math.sin(rad) * r * 0.85]} castShadow>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial color="#8A6245" roughness={0.2} metalness={0} />
          </mesh>
        );
      })}

      {/* Top frosting */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.79, 0.79, 0.04, 48]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} metalness={0} />
      </mesh>

      {/* Gold leaf accents */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <mesh key={i} position={[Math.cos(rad) * 0.5, 0.93, Math.sin(rad) * 0.5]} castShadow>
            <sphereGeometry args={[0.03, 6, 6]} />
            <meshStandardMaterial color="#FFD700" roughness={0.1} metalness={1} />
          </mesh>
        );
      })}

      {/* Candle */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.35, 12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} />
      </mesh>

      {/* Flame */}
      <Float speed={4} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 1.38, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FF8C00" emissiveIntensity={4} roughness={0} />
        </mesh>
      </Float>

      {/* Plate */}
      <mesh position={[0, -0.9, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.08, 48]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.1} />
      </mesh>
    </group>
  );
}

function OrbitingParticles() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={ref}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 2.2 + (i % 3) * 0.3;
        const y = Math.sin(i) * 0.5;
        return (
          <mesh key={i} position={[Math.cos(rad) * r, y, Math.sin(rad) * r]}>
            <sphereGeometry args={[0.025 + (i % 3) * 0.01, 6, 6]} />
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={1}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 4.5], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} color="#FFF5E1" />
          <directionalLight
            position={[5, 8, 4]}
            intensity={2}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
          <pointLight position={[-3, 3, -3]} intensity={1.5} color="#FFD700" />
          <pointLight position={[0, 1.4, 0]} intensity={1.5} color="#FFA040" distance={4} />
          <spotLight
            position={[0, 6, 0]}
            intensity={2}
            angle={0.6}
            penumbra={0.8}
            color="#FFFFFF"
            castShadow
          />

          <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
            <CakeModel />
          </Float>

          <OrbitingParticles />

          <Environment preset="studio" />
          <ContactShadows position={[0, -0.95, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
