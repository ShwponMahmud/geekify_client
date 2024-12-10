"use client"
import { Autocomplete, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRef, useState } from "react";

const libraries: "places"[] = ["places"];

export default function AddressWithGoogleMap() {
  const [address, setAddress] = useState<string>("");
  const [suggestions, setSuggestions] = useState<google.maps.places.PlaceResult[]>([]);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCjIopCc7-Bgw5MNE3C8QO7NxSsalxKFRE",
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      setAddress(place.formatted_address || "");
    }
  };


  return (
    <div>
      <div className="p-4 max-w-lg mx-auto">
        <div className="mb-4">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </Autocomplete>
        </div>
        <div className="bg-white shadow rounded p-2">
          {suggestions.map((place, index) => (
            <div key={index} className="py-2 border-b last:border-none">
              {place.name || place.formatted_address}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
