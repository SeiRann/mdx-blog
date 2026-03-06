"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "@/components/cube";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [2, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Cube />
      </Canvas>
    </div>
  );
}
