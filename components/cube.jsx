import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

export default function Cube() {
  const mesh = useRef(null);
  const hovered = useRef(false);

  useFrame(() => {
    const target = hovered.current ? 1.3 : 1;
    mesh.current.scale.lerp({ x: target, y: target, z: target }, 0.1);
  });

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => (hovered.current = true)}
      onPointerOut={() => (hovered.current = false)}
    >
      <boxGeometry />
      <meshStandardMaterial color="orange" />
      <Edges />
    </mesh>
  );
}
