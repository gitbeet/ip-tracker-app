import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "../css/MapComponent.css";
import "leaflet/dist/leaflet.css";
import markerIcon from "../markers/markerIcon";
import { useDarkMode } from "../context/darkModeContext";
import markerIconDarkMode from "../markers/markerIconDarkMode";
import ZoomButtons from "./ZoomButtons";

function ChangeMap({
  center,
  zoom,
}: {
  center: { lat: number; lng: number };
  zoom: number;
}): null {
  const map = useMap();
  map.setView(center, zoom);

  return null;
}

export default function MapComponent({
  coordinates,
}: {
  coordinates: [number, number];
}) {
  const { darkMode } = useDarkMode();
  const [zoom, setZoom] = useState<number>(12);
  return (
    <>
      <ZoomButtons setZoom={setZoom} />
      <MapContainer
        center={{ lat: coordinates[0], lng: coordinates[1] }}
        zoomControl={false}
        zoom={zoom}
      >
        <ChangeMap
          center={{ lat: coordinates[0], lng: coordinates[1] }}
          zoom={zoom}
        />

        <TileLayer
          key={darkMode ? 2 : 1}
          attribution={
            darkMode
              ? '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }
          url={
            darkMode
              ? `https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${process.env.REACT_APP_JAWG_ACCESS_TOKEN}`
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        <Marker
          icon={darkMode ? markerIconDarkMode : markerIcon}
          position={{ lat: coordinates[0], lng: coordinates[1] }}
        ></Marker>
      </MapContainer>
    </>
  );
}
