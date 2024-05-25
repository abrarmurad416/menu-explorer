// imports
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import CustomModal from "./Modal";
import parkData from "./parkData";
import "../index.css";

// const center pinned at Toronto on rendering of site
const center = [43.653225, -79.383186];


const MapComp = () => {
  // selectedItemID - state variable to track currently selected's ID
  // setSelectedItemID - state variable on select
  const [selectedItemId, setSelectedItemId] = useState(null);

  // modal to open function on ID match
  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  // modal to close
  const handleCloseModal = () => {
    setSelectedItemId(null);
  };

  return (
    <div style={{ paddingTop: "56px" }}>
      {/* map container size to fit the map on browser, full viewport - 56px */}
      <MapContainer style={{ height: "calc(100vh - 56px)" }} center={center} zoom={13}>
        {/* customize map layout on top right */}
      <LayersControl position="topright">
        {/* three different map layers */}
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
        {/* mapping over item data from parkData */}
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
