// Map.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import CustomModal from "./Modal"; // Import the Modal component
import parkData from "./parkData";
import "../index.css";

const center = [43.653225, -79.383186];

const MapComp = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

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
        {parkData.map((item) => (
          <Marker key={item.id} position={item.position} icon={defaultMarker}>
            <Popup>
              <button onClick={() => handleOpenModal(item.id)}>{item.header}</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* Render the modal */}
      <CustomModal show={selectedItemId !== null} onClose={handleCloseModal} itemId={selectedItemId} />
    </div>
  );
};

export default MapComp;
