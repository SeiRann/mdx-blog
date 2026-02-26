"use client";
import Example from "./pages/example.mdx";
import { themeButton } from "@/components/themeButton";

export default function Home() {
  return (
    <div>
      <Example name="Gay" themeButton={themeButton()} />
    </div>
  );
}
