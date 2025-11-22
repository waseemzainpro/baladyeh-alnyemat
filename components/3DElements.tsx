import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Rotating server/database icon
export const RotatingServer: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1.5, 0.8]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// Pulsing sphere for data visualization
export const DataSphere: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.3}
        speed={2}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Security shield icon
export const SecurityShield: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Network connection lines
export const NetworkLines: React.FC = () => {
  const points = [
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(2, 0, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(-2, 0, 0),
  ];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#10b981" linewidth={2} />
    </line>
  );
};

// Animated particles background
export const ParticleField: React.FC = () => {
  const count = 100;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#10b981" transparent opacity={0.6} />
    </points>
  );
};

