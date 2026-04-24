"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Clickable3D from "@/components/clickable3d";

export default function Page() {
  const { scene } = useGLTF("/gtr.glb");

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [250, 10, 0], fov: 80 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Clickable3D scene={scene} />
      </Canvas>
    </div>
  );
}
