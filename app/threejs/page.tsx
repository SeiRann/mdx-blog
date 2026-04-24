"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Clickable3D from "@/components/clickable3d";

export default function Page() {
  const { scene } = useGLTF("/housemodel.glb");

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [2, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Clickable3D scene={scene} />
      </Canvas>
    </div>
  );
}
