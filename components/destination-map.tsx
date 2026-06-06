"use client";

import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { divIcon } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import { destinationLocations } from "@/lib/data";
import { Button } from "@/components/button";

const center: [number, number] = [-31.424, -64.498];
const filters = ["Todos", "Naturaleza", "Vida Nocturna", "Excursión", "Mirador", "Compras", "Shopping", "Salud"];

function FlyTo({ position }: { position: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 12, { duration: 0.8 });
  }, [map, position]);

  return null;
}

export function DestinationMap() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(destinationLocations[0]);
  const locations = useMemo(
    () => (filter === "Todos" ? destinationLocations : destinationLocations.filter((item) => item.type === filter)),
    [filter]
  );

  const markerIcon = divIcon({
    className: "",
    html: '<div style="width:18px;height:18px;border:2px solid #0A0807;background:#C1694F;box-shadow:0 0 0 6px rgba(193,105,79,.22);transform:rotate(45deg);"></div>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div>
        <div className="hide-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                filter === item ? "border-[#C1694F] bg-[#C1694F] text-black" : "border-white/15 bg-white/5 text-white/62 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="bohemian-border z-0">
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <FlyTo position={selected.position} />
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={markerIcon}
              eventHandlers={{
                click: () => setSelected(location)
              }}
            >
              <Tooltip>{location.name}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <aside className="glass overflow-hidden">
        <div className="relative h-64">
          <Image src={selected.image} alt={selected.name} fill className="object-cover" sizes="380px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.26em] text-[#C1694F]">{selected.type}</p>
        </div>
        <div className="p-6">
          <h2 className="font-display text-4xl text-white">{selected.name}</h2>
          <p className="mt-4 text-sm leading-7 text-white/66">{selected.description}</p>
          <div className="mt-6 grid gap-3 border-y border-[#C1694F]/15 py-5 text-sm text-white/70">
            <p><span className="text-white/42">Distancia:</span> {selected.travel}</p>
            <p><span className="text-white/42">Tiempo estimado:</span> {selected.distance}</p>
          </div>
          <Button href="/concierge" className="mt-6 w-full">Planificar Visita</Button>
        </div>
      </aside>
    </div>
  );
}
