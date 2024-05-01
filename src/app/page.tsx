"use client";
import { useEffect, useState } from "react";
import Animation from "./components/ui/Animation";
import NameAnimation from "./components/ui/NameAnimation";

export default function Home() {
  useEffect(() => {
    if (window.visualViewport) {
      const height = window.innerHeight;
      const element = document.getElementById("animationContainer");
      element?.setAttribute("style", `min-height: ${height}px`);
    }
  }, []);

  return (
    <div
      className={`flex relative justify-center items-center bg-white overflow-hidden`}
      id="animationContainer"
    >
      <NameAnimation />
      <Animation />
    </div>
  );
}
