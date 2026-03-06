"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useRef, useState } from "react";
import Cube from "@/components/cube";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [3, 3, 5] }}>
        <ambientLight />
        <Cube />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
