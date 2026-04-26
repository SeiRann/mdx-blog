import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D, Vector3 } from "three";

type Props = {
  scene: Object3D;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  hoveredScale?: number;
  onClick?: () => void;
};

export default function Clickable3D({
  scene,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  hoveredScale = 1.3,
  onClick = () => console.log("clicked"),
}: Props) {
  const group = useRef<any>(null);
  const hovered = useRef(false);
  const temp = new Vector3();

  useFrame((state, delta) => {
    if (!group.current) return;

    // ✅ rotate
    group.current.rotation.y += delta;

    // ✅ scale on hover
    const target = hovered.current ? hoveredScale : scale;
    temp.setScalar(target);
    group.current.scale.lerp(temp, 0.1);
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={() => (hovered.current = true)}
      onPointerOut={() => (hovered.current = false)}
      onClick={onClick}
    >
      <primitive object={scene} />
    </group>
  );
}
