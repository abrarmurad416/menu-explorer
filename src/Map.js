import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import "./Map.css";

const center = [51.505, -0.09];

const MapComp = ({ onOpen }) => {
  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Open Modal</button>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;
