"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Cube() {
  const group = useRef<any>(null);
  const hovered = useRef(false);

  const { scene } = useGLTF("/housemodel.glb");
  console.log(scene); // debug if the model is loaded

  useFrame((state, delta) => {
    group.current.rotation.y += delta;
    const target = hovered.current ? 1.3 : 1;
    group.current.scale.lerp({ x: target, y: target, z: target }, 0.1);
  });

  return (
    <group
      ref={group}
      onPointerOver={() => (hovered.current = true)}
      onPointerOut={() => (hovered.current = false)}
    >
      <primitive object={scene} scale={30} />
    </group>
  );
}
