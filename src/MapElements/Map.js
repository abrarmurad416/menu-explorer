import React from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import parkData from "./parkData";
import "../index.css"

const center = [43.653225, -79.383186];
const torontoislandpark = [43.623409, -79.368683];
const highpark = [43.645485, -79.464752];
const queenspark = [43.66263, -79.393308]

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
        {parkData.map((item, index) => (
          <Marker key={index} position={item.position} icon={defaultMarker}>
            <Popup className="request-popup">
              <button onClick={onOpen}>{item.header}</button>
            </Popup>
          </Marker>
        ))}
        {/* <Marker position={highpark} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>High Park</button>
        </Popup>
      </Marker>
      <Marker position={queenspark} icon={defaultMarker}>
        <Popup className="request-popup">
          <button onClick={onOpen}>Queen's Park</button>
        </Popup>
      </Marker> */}
      </MapContainer>
    </div>
  );
};

export default MapComp;
