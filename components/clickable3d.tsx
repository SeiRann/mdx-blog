"use client";

import { useRef } from "react";
import { ObjectMap, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D, Group } from "three";

type Props = {
  scene: Object3D;
};

export default function Clickable3D({ scene }: Props) {
  const group = useRef<any>(null);
  const hovered = useRef(false);

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
