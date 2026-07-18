"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function Satellite({
  radius,
  speed,
  offset,
  scale,
}: {
  radius: number;
  speed: number;
  offset: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (!ref.current) return;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.7) * radius * 0.6,
      Math.sin(t) * radius
    );
  });

  return (
    <mesh ref={ref} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#3d5cff"
        emissive="#3d5cff"
        emissiveIntensity={1.4}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function GlassCluster() {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  const satellites = useMemo(
    () => [
      { radius: 2, speed: 0.35, offset: 0, scale: 0.08 },
      { radius: 2.4, speed: 0.25, offset: 2, scale: 0.055 },
      { radius: 1.7, speed: 0.5, offset: 4, scale: 0.04 },
      { radius: 2.6, speed: 0.18, offset: 1, scale: 0.06 },
    ],
    []
  );

  useFrame((state) => {
    target.current.x = state.pointer.x;
    target.current.y = state.pointer.y;
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      0.5 + target.current.x * 0.35,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -target.current.y * 0.2,
      0.03
    );
  });

  return (
    <>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={4}
            position={[0, 3, -4]}
            scale={[6, 6, 1]}
            color="#e9ecff"
          />
          <Lightformer
            form="rect"
            intensity={2.5}
            position={[-4, -2, 2]}
            scale={[5, 3, 1]}
            color="#3d5cff"
          />
          <Lightformer
            form="rect"
            intensity={3}
            position={[3, 4, 2]}
            scale={[3, 8, 1]}
            rotation={[0, 0, Math.PI / 5]}
            color="#ffffff"
          />
        </group>
      </Environment>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} color="#e9ecff" />
      <pointLight position={[-3, -2, 2]} intensity={8} color="#3d5cff" />

      <group ref={groupRef} position={[1.4, -0.3, 0]} scale={0.82}>
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
          <mesh>
            <icosahedronGeometry args={[1.6, 4]} />
            <meshPhysicalMaterial
              color="#0e1016"
              metalness={1}
              roughness={0.14}
              envMapIntensity={1.6}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </Float>

        {satellites.map((s, i) => (
          <Satellite key={i} {...s} />
        ))}
      </group>
    </>
  );
}
