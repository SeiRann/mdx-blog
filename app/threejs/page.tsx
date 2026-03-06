"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useRef } from "react";

export default function Page() {
  function RotatingCube() {
    const meshRef = useRef<any>(null);

    useFrame((state, delta) => {
      meshRef.current.rotation.y += delta;
    });

    return (
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
        <Edges color="black" />
      </mesh>
    );
  }

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [3, 3, 5] }}>
        <ambientLight />

        <RotatingCube />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
