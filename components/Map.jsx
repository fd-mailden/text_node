import React from "react";
import { GoogleMap } from "react-google-maps";

function Map() {
  return (
      <GoogleMap defaultZoom={14} defaultCenter={{ lat: 34.101151, lng: -118.343719 }}/>
  );
}



export default Map;
