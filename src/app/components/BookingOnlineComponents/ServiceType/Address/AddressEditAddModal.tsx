import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useRef, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  Autocomplete,
  Data,
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

const libraries: "places"[] = ["places"];
type AddressComponents = {
  street: string;
  suburb: string;
  state: string | any;
  post_code: string;
  country: string;
};

const australianStates = [
  "Australian Capital Territory",
  "New South Wales",
  "Northern Territory",
  "Queensland",
  "South Australia",
  "Tasmania",
  "Victoria",
  "Western Australia",
];

const defaultAustralianStates = [
  {
    short_name: "act",
    name: "Australian Capital Territory",
  },
  {
    short_name: "nsw",
    name: "New South Wales",
  },
  {
    short_name: "nt",
    name: "Northern Territory",
  },
  {
    short_name: "qld",
    name: "Queensland",
  },
  {
    short_name: "sa",
    name: "South Australia",
  },
  {
    short_name: "tas",
    name: "Tasmania",
  },
  {
    short_name: "vic",
    name: "Victoria",
  },
  {
    short_name: "wa",
    name: "Western Australia",
  },
];

export default function AddressEditAddModal() {
  // Get Address Methods by google map...............
  const [address, setAddress] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    google.maps.places.PlaceResult[]
  >([]);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [addressComponents, setAddressComponents] = useState<AddressComponents>(
    {
      street: "",
      suburb: "",
      state: "",
      post_code: "",
      country: "",
    }
  );
  const [selectedState, setSelectedState] = useState<string>("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCjIopCc7-Bgw5MNE3C8QO7NxSsalxKFRE", // Replace with your API key
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      setAddress(place.formatted_address || "");

      if (place.address_components) {
        const components = extractAddressComponents(place.address_components);
        setAddressComponents(components);
      }
    }
  };

  const extractAddressComponents = (
    components: google.maps.GeocoderAddressComponent[]
  ): AddressComponents => {
    const result: AddressComponents = {
      street: "",
      suburb: "",
      state: "",
      post_code: "",
      country: "",
    };

    components.forEach((component) => {
      const types = component.types;

      if (types.includes("street_number")) {
        result.street = `${component.long_name} ${result.street}`.trim();
      }
      if (types.includes("route")) {
        result.street = `${result.street} ${component.long_name}`.trim();
      }
      if (types.includes("locality")) {
        result.suburb = component.long_name;
      }
      if (types.includes("administrative_area_level_1")) {
        result.state = component.long_name;
      }
      if (types.includes("postal_code")) {
        result.post_code = component.long_name;
      }
      if (types.includes("country")) {
        result.country = component.long_name;
      }
    });

    return result;
  };

  const handleSelectedStateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedState(event.target.value);
  };

  return (
    <>
      <div className=" mt-4">
        <form action="">
          <div className="">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="">
              <Autocomplete
                onLoad={(autocomplete) => {
                  if (autocomplete) {
                    autocompleteRef.current = autocomplete;
                    autocomplete.setComponentRestrictions({
                      country: "AU",
                    }); // Restrict to Australia
                  }
                }}
                onPlaceChanged={onPlaceChanged}
              >
                <input
                  type="text"
                  id="address"
                  placeholder="Please type your address"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                />
              </Autocomplete>
            </div>
          </div>
        </form>
        {address && (
          <div className="address_modify_container mt-4">
            <h2 className="text-sm font-semibold mb-4 text-orange-400 flex items-center gap-1">
              <span className="text-[16px]">
                <BsFillInfoCircleFill />
              </span>{" "}
              Please modify the following address fields, if there is anything
              wrong.
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={addressComponents.street}
                    onChange={(e) =>
                      setAddressComponents({
                        ...addressComponents,
                        street: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="suburb"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Suburb
                  </label>
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={addressComponents.suburb}
                    onChange={(e) =>
                      setAddressComponents({
                        ...addressComponents,
                        suburb: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>

                  <select
                    id="state-select"
                    value={selectedState}
                    onChange={handleSelectedStateChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value={addressComponents.state} selected>
                      {addressComponents.state}
                    </option>
                    {australianStates.map((state, index) => (
                      <>
                        {addressComponents.state == state ? (
                          <option key={index} value={state}>
                            {addressComponents.state}
                          </option>
                        ) : (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        )}
                      </>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="3065"
                    value={addressComponents.post_code}
                    onChange={(e) =>
                      setAddressComponents({
                        ...addressComponents,
                        post_code: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
