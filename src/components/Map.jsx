import React, { useEffect } from "react";

function Map({ latitude, longitude }) {
  useEffect(() => {
    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.defer = true;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    };

    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    // Add a marker for the specified location
    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Your Location",
    });
  };

  return <div id="map" style={{ height: "300px", width: "100%" }}></div>;
}

export default Map;
