import React from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import "./Map.css";

const center = [43.653225, -79.383186];
const union = [43.6452, -79.3806];

const MapComp = ({ onOpen }) => {
  return (
    <div style={{ paddingTop: "56px" }}>
    <MapContainer style={{ height: "calc(100vh - 56px)" }} center={center} zoom={13}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap de">
          <TileLayer
            url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap fr">
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>More Info</button>
        </Popup>
      </Marker>
      <Marker position={union} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>More Info</button>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default MapComp;
