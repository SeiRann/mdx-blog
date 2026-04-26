"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Clickable3D from "@/components/clickable3d";
import { Camera, Vector3 } from "three";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navbar.mdx";
import { useState } from "react";

export default function NavBar3D() {
  const [is3D, set3D] = useState(false);

  const router = useRouter();

  function on3D() {
    set3D(!is3D);
  }

  function NavBar3D() {
    const mailbox = useGLTF("/Mailbox.glb");
    const capy = useGLTF("/Capybara.glb");
    const house = useGLTF("/housemodel.glb");

    const sharedCamera = {
      position: [3.5, 2, 0] as [number, number, number],
      fov: 60,
    };
    return (
      <div className="w-screen h-50 flex bg-dark-foreground-2 dark:bg-dark-background-0h p-3">
        <Canvas camera={sharedCamera}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Clickable3D
            scene={house.scene}
            scale={80}
            hoveredScale={100}
            position={[0, -1, 0]}
            rotation={[0, -2, 0]}
            onClick={() => router.push("/")}
          />
          {/* <Clickable3D scene={scene2} /> */}
        </Canvas>

        <Canvas camera={sharedCamera}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Clickable3D
            scene={capy.scene}
            scale={0.5}
            hoveredScale={0.55}
            position={[0, -1, 0]}
            rotation={[0, 1, 0]}
            onClick={() => router.push("/about")}
          />
        </Canvas>
        <Canvas camera={sharedCamera}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Clickable3D
            scene={mailbox.scene}
            scale={3}
            hoveredScale={3.5}
            position={[0, -1.5, 0]}
            rotation={[0, 1, 0]}
            onClick={() => router.push("/contacts")}
          />
        </Canvas>

        {/* <div>

        </div> */}
      </div>
    );
  }
  // <div>
  //   <Canvas camera={sharedCamera}>
  //     <ambientLight intensity={0.5} />
  //     <directionalLight position={[5, 5, 5]} intensity={1} />

  //     <Clickable3D
  //       scene={mailbox.scene}
  //       scale={3}
  //       hoveredScale={3.5}
  //       position={[0, -1.5, 0]}
  //       rotation={[0, 1, 0]}
  //       onClick={() => router.push("/contacts")}
  //     />
  //   </Canvas>
  //   <div>
  //     {/* add 2 more models like up there and make it look similar to the non3d navbar */}
  //   </div>
  // </div>

  return is3D ? <NavBar3D /> : <NavBar on3D={on3D} />;
}
