"use client";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import GetUser from "./UserInfoForContact/GetUser";
import { SubmitContactsInfo } from "@/app/rtk-state/reducers/contactsSlice";
import { FormEvent, useRef, useState } from "react";
import {
  Autocomplete,
  Data,
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import { SubmitAddressInfo } from "@/app/rtk-state/reducers/addressSlice";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { SubmitUserInfo } from "@/app/rtk-state/reducers/userInfoSubmitSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const libraries: "places"[] = ["places"];

// type FormValues = {
//   request_for: string;
//   date_time: string;
//   message: string;
// };

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

function GetFreeConsultation() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.users);
  const userInfoAfterSubmit = useAppSelector(
    (state) => state?.userInfoAfterSubmit
  );
  const addressInfo = useAppSelector((state) => state?.addresses);
  const [userInfoFormData, setUserInfoFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    request_for: "",
    date_time: "",
    message: "",
  });

  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      setFormData((prevData) => ({
        ...prevData,
        date_time: date.toISOString(),
      }));
    }
  };

  // user info form data handler...
  const handleUserInfoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserInfoFormData({ ...userInfoFormData, [name]: value });
  };

  // user info submit handler.....
  const userInfoSubmitHandler = () => {
    dispatch(SubmitUserInfo(userInfoFormData)).unwrap();
  };

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

  // Address info submit handler.....
  const AddressInfoSubmitHandler = () => {
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

    dispatch(SubmitAddressInfo(AddressInfoForSubmit));
  };

  // contact form submit methods.......

  const handleContactFormInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ContactsSubmit = async (e: any) => {
    e.preventDefault();

    const userId = userInfoAfterSubmit?.userInfo[0]?.id;
    const addressId = addressInfo?.address[0]?.id;

    const contactSubmitData = {
      ...formData,
      user_id: userId,
      address_id: addressId,
    };

    dispatch(SubmitContactsInfo(contactSubmitData));
  };


 
  return (
    <>
      <div className="get_free_consultation_section">
        <h2 className="text-3xl font-bold text-primaryColor mb-5 text-center md:text-left">
          Service Request
        </h2>
        <p className="text-deepGrayColor mb-5 text-center md:text-left">
          Please enter your details and one of our team members will get back to
          you as soon as possible!
        </p>

        <div className="get_consultation_form border rounded-[10px] mt-10 py-5 lg:py-12 px-5 lg:px-10 hover:shadow-hoverBoxShadow transition-[.5s]">
          {users.status === "" ? (
            <div className="user_request_form_container">
              <GetUser />
            </div>
          ) : (
            <div className="contact_submit_forms_container">
              <div className="user_details_submit_form_container">
                <form className="">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        onChange={handleUserInfoChange}
                        name="first_name"
                        type="text"
                        id="firstName"
                        placeholder="Your first name"
                        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        onChange={handleUserInfoChange}
                        name="last_name"
                        type="text"
                        id="lastName"
                        placeholder="Your last name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        onChange={handleUserInfoChange}
                        name="phone_number"
                        type="text"
                        id="phoneNumber"
                        placeholder="Your phone number"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        onChange={handleUserInfoChange}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="address_info_get_modify_submit_container">
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
                        Please modify the following address fields, if there is
                        anything wrong.
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
              </div>
              <div className="service_request_date_message_submit_form_container mt-5">
                <form className="space-y-4" onSubmit={ContactsSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="request_for"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Request For
                      </label>
                      <select
                        name="request_for"
                        onChange={handleContactFormInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a Request</option>
                        <option value="0">Let us call you</option>
                        <option value="1">Let us reply via email</option>
                        <option value="2">You got some advice</option>
                        <option value="3">Disputes/Complaints</option>
                        <option value="4">One year free hosting</option>
                        <option value="5">
                          Query about Smart Home Solutions
                        </option>
                        <option value="6">Request for a Quotation</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        When do you need this done?
                      </label>
                      {/* <input
                        type="date"
                        id="date_time"
                        name="date_time"
                        onChange={handleContactFormInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      /> */}
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateTimeChange}
                        showTimeSelect
                        timeIntervals={1}
                        dateFormat="d MMMM yyyy, h:mm:ss"
                        placeholderText="Select date and time"
                        isClearable
                        customInput={<input type="text" />}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Write your message"
                      rows={4}
                      name="message"
                      onChange={handleContactFormInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md shadow hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  >
                    Send Request
                  </button>
                </form>
              </div>

              
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GetFreeConsultation;
