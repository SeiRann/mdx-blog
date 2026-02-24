"use client";
import Image from "next/image";
import Example from "./pages/example.mdx";
import { toggleTheme } from "@/components/themeSwitcher";

export default function Home() {
  const themeButton = () => {
    return (
      <button
        className="p-5 bg-blue-background rounded-md m-5"
        onClick={toggleTheme}
      >
        Theme
      </button>
    );
  };

  return (
    <div>
      <Example name="Gay" themeButton={themeButton()} />
    </div>
  );
}
