"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 26;
const MAX_EDGE_DISTANCE = 1.7;

function generateNodes(): THREE.Vector3[] {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const t = i / (NODE_COUNT - 1);
    const x = (Math.random() - 0.5) * 4.4 + t * 1.8 - 0.9;
    const y = (Math.random() - 0.5) * 1.6 + t * 2.6 - 1.1;
    const z = (Math.random() - 0.5) * 3;
    nodes.push(new THREE.Vector3(x, y, z));
  }
  return nodes;
}

function buildEdges(nodes: THREE.Vector3[], maxDist: number): Float32Array {
  const positions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        positions.push(
          nodes[i].x,
          nodes[i].y,
          nodes[i].z,
          nodes[j].x,
          nodes[j].y,
          nodes[j].z
        );
      }
    }
  }
  return new Float32Array(positions);
}

function Node({ position, index }: { position: THREE.Vector3; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const scale = 0.055 + (index % 5) * 0.013;
  const isAccent = index % 4 === 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position.y + Math.sin(t * 0.6 + index) * 0.08;
    ref.current.position.x = position.x + Math.cos(t * 0.4 + index) * 0.05;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={isAccent ? "#3d5cff" : "#0a0a0b"}
        emissive={isAccent ? "#3d5cff" : "#000000"}
        emissiveIntensity={isAccent ? 0.7 : 0}
        roughness={0.45}
      />
    </mesh>
  );
}

export default function GrowthNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  const nodes = useMemo(() => generateNodes(), []);
  const edgePositions = useMemo(
    () => buildEdges(nodes, MAX_EDGE_DISTANCE),
    [nodes]
  );

  useFrame((state) => {
    target.current.x = state.pointer.x;
    target.current.y = state.pointer.y;
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      0.35 + target.current.x * 0.3,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -target.current.y * 0.15,
      0.03
    );
  });

  return (
    <group ref={groupRef} position={[0.8, -0.2, 0]}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 4, 5]} intensity={0.5} />

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3d5cff" transparent opacity={0.3} />
      </lineSegments>

      {nodes.map((pos, i) => (
        <Node key={i} position={pos} index={i} />
      ))}
    </group>
  );
}
