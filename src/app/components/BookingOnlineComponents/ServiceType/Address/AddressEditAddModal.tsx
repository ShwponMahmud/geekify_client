import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useRef, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  Autocomplete,
  Data,
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import {
  billingAddressSelect,
  serviceAddressSelect,
} from "@/app/rtk-state/reducers/bookingSlice";
import { useAppDispatch } from "@/app/rtk-state/hooks";

const libraries: "places"[] = ["places"];

type AddressComponents = {
  street: string;
  suburb: string;
  state: string | undefined;
  post_code: string;
  subpremise: string;
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
  const dispatch = useAppDispatch();
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
      subpremise: "",
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
      subpremise: "",
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

  const AddressInfo = {
    ...addressComponents,
    state: selectedState ? selectedState : addressComponents.state,
  };

  const matchState = defaultAustralianStates.find(
    (i) => i.name == AddressInfo.state
  );

  const AddressInfoForSubmit = {
    ...addressComponents,
    state: matchState?.short_name,
  };

  const SaveAddress = () => {
    dispatch(serviceAddressSelect(AddressInfoForSubmit));

    const successElement = document.querySelector<HTMLElement>(".show_success_text");
    const addressModifyContainer = document.querySelector<HTMLElement>(".address_modify_container");
    const addressInputContainer = document.querySelector<HTMLElement>(".address_input_container");
    if (successElement) {
      successElement.innerHTML = "Address Saved Successfully!";
    }
    if (addressModifyContainer) {
      addressModifyContainer.style.display = "none";
    }
    if (addressInputContainer) {
      addressInputContainer.style.display = "none";
    }
  };

  return (
    <>
      <div className=" mt-4">
        <form action="">
          <div className="address_input_container">
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
              <div className="grid grid-cols-3 gap-4">
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
                    placeholder="Zip code"
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
                <div>
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Flat/Unit
                  </label>
                  <input
                    type="text"
                    id="flatUnit"
                    placeholder="Flat/Unit"
                    value={addressComponents.subpremise}
                    onChange={(e) =>
                      setAddressComponents({
                        ...addressComponents,
                        subpremise: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        <p className="show_success_text text-center  text-green-600 text-3xl font-semibold mt-5"></p>
        <div className="mt-4">
          <Button
            className="inline-flex items-center gap-2 rounded-md bg-primaryColor py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
            onClick={SaveAddress}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
