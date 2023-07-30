import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./home-styles/Map.css";
import { useEffect } from "react";
import { useState } from "react";
export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  return <LoadMap isLoaded={isLoaded} />;
}

function LoadMap(isLoaded, lon, lat) {
  if (!isLoaded) {
    return <div id="loading-map">Loading...</div>;
  } else {
    return (
      <a id="map-sec" href="https://www.google.com/maps/place/3528+High+Dr,+St+Ann,+MO+63074/@38.7255392,-90.3983264,17z/data=!3m1!4b1!4m6!3m5!1s0x87df33c2d482e385:0xe8fb3f4985d12445!8m2!3d38.725535!4d-90.3957515!16s%2Fg%2F11crsy0rrl?entry=ttu">
        <GoogleMap zoom={17}  center={{lat:38.72551, lng:-90.39576}} mapContainerClassName="map-con">
          <MarkerF position={{lat:38.72551, lng:-90.39576}}></MarkerF>
        </GoogleMap>
      </a>
    );
  }
}
