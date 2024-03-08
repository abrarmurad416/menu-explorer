import React from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import "./Map.css";

const center = [43.653225, -79.383186];
const union = [43.6452, -79.3806];

const MapComp = ({ onOpen }) => {
  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={13}>
      <LayersControl position="topright">
        {/* Base layers */}
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Additional Layer">
          <TileLayer
            url="https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        {/* Overlay layers (if any) */}
      </LayersControl>
      {/* Markers */}
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Open Modal</button>
        </Popup>
      </Marker>
      <Marker position={union} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Open Modal</button>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;
