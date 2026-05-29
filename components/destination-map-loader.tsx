"use client";

import dynamic from "next/dynamic";

const DestinationMap = dynamic(
  () => import("@/components/destination-map").then((mod) => mod.DestinationMap),
  {
    ssr: false,
    loading: () => <div className="glass min-h-[540px] animate-pulse" />
  }
);

export function DestinationMapLoader() {
  return <DestinationMap />;
}
