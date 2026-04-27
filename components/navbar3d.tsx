"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Clickable3D from "@/components/clickable3d";
import { Camera, Vector3 } from "three";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navbar.mdx";
import { useState } from "react";
import { toggleTheme } from "./themeSwitcher";

export default function NavBar3D() {
  const [is3D, set3D] = useState(false);

  const router = useRouter();

  function on3D() {
    set3D(!is3D);
  }

  function NavBar3D() {
    const [darkMode, toggleDark] = useState(
      document.documentElement.getAttribute("data-theme") === "gruvbox-dark",
    );
    const mailbox = useGLTF("/Mailbox.glb");
    const capy = useGLTF("/Capybara.glb");
    const house = useGLTF("/housemodel.glb");
    const sun = useGLTF("/sun.glb");
    const moon = useGLTF("/moon.glb");
    const block = useGLTF("/block.glb");

    const sharedCamera = {
      position: [3.5, 2, 0] as [number, number, number],
      fov: 60,
    };
    return (
      <div className="w-screen h-50 flex bg-dark-foreground-2 dark:bg-dark-background-0h p-3">
        {/* House */}
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
        {/* About */}
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
        {/* Contacts+switchers */}
        <div className="flex">
          {/* Contacts */}
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
          <div className="flex flex-col">
            {/* Theme switcher */}
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />

              <Clickable3D
                scene={darkMode ? moon.scene : sun.scene}
                scale={0.45}
                hoveredScale={0.5}
                position={darkMode ? [0, -1.5, 0] : [5, -20, -20]}
                rotation={[0, 1, 0]}
                onClick={() => {
                  toggleTheme();
                  toggleDark(!darkMode);
                }}
              />
            </Canvas>
            {/* 3D switcher  */}
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />

              <Clickable3D
                scene={block.scene}
                scale={1}
                hoveredScale={1.25}
                position={[0, -1.5, 0]}
                rotation={[0, 1, 0]}
                onClick={() => set3D(!is3D)}
              />
            </Canvas>
          </div>
        </div>
      </div>
    );
  }

  return is3D ? <NavBar3D /> : <NavBar on3D={on3D} />;
}
