"use client";
import { useEffect } from "react";
import Animation from "./components/ui/Animation";
import NameAnimation from "./components/ui/NameAnimation";

export default function Home() {
  useEffect(() => {
    if (window.visualViewport) {
      const height = window.innerHeight;
      const element = document.getElementById("animationContainer");
      element?.setAttribute("style", `height: ${height}px`);
    }
  }, []);

  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center bg-white overflow-hidden`}
      id="animationContainer"
    >
      <NameAnimation />
      <Animation />
    </div>
  );
}
