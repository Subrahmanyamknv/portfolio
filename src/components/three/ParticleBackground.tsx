"use client";

import dynamic from "next/dynamic";

const ParticleScene = dynamic(
  () =>
    import("@/components/three/ParticleScene").then((mod) => ({
      default: mod.ParticleScene,
    })),
  { ssr: false }
);

export function ParticleBackground() {
  return <ParticleScene />;
}
