import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "../css/MapComponent.css";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "./MarkerIcon";

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function MapComponent({ coordinates }) {
  let zoom = 12;

  return (
    <MapContainer
      center={{ lat: coordinates[0], lng: coordinates[1] }}
      zoomControl={false}
      zoom={zoom}
    >
      <ChangeMap
        center={{ lat: coordinates[0], lng: coordinates[1] }}
        zoom={zoom}
      />
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={MarkerIcon}
        position={{ lat: coordinates[0], lng: coordinates[1] }}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
