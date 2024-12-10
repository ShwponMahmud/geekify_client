"use client";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { getUser, SubmitUserInfo } from "@/app/rtk-state/reducers/contactSlice";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Autocomplete, GoogleMap, useLoadScript } from "@react-google-maps/api";

const libraries: "places"[] = ["places"];

interface CustomFormData {
  email: string;
}

function GetFreeConsultation() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.users);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomFormData>();

  const [userInfoFormData, setUserInfoFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });

  // Get user methods............
  const onSubmit: SubmitHandler<CustomFormData> = async (data) => {
    try {
      await dispatch(getUser(data)).unwrap();
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // user info form data handler...
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserInfoFormData({ ...userInfoFormData, [name]: value });
  };

  // user info submit handler.....
  const userInfoSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(SubmitUserInfo(userInfoFormData)).unwrap();
  };

  // Get Address Methods by google map...............
  const [address, setAddress] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    google.maps.places.PlaceResult[]
  >([]);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCjIopCc7-Bgw5MNE3C8QO7NxSsalxKFRE", // Replace with your API key
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      setAddress(place.formatted_address || "");
    }
  };

  // Address info submit handler.....
  const AddressInfoSubmitHandler = (e: any) => {
    e.preventDefault();
    // dispatch(SubmitUserInfo(userInfoFormData)).unwrap();
  };

  // const [selectedValue, setSelectedValue] = useState<string>("");

  // const handleChange = (event: any) => {
  //   setSelectedValue(event.target.value);
  // };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label
                    htmlFor="contactInfo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email / Phone Number*
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    placeholder="Enter your email / phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address or phone",
                      },
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                  NEXT
                </button>
              </form>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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

              <div className="address_submit_form_container mt-4">
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
                        onLoad={(autocomplete) =>
                          (autocompleteRef.current = autocomplete)
                        }
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
                <div className="mt-4">
                  <h2 className="text-sm font-semibold mb-4 text-orange-500">
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
                          onChange={handleChange}
                          name="street"
                          type="text"
                          placeholder="Street"
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
                          onChange={handleChange}
                          name="street"
                          type="text"
                          placeholder="Street"
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
                          id="state"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option>Victoria</option>
                          <option>New South Wales</option>
                          <option>Queensland</option>
                          {/* Add other states as needed */}
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
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="service_request_date_message_submit_form_container mt-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="requestFor"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Request For
                      </label>
                      <select
                        id="requestFor"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option>Select a Request</option>
                        <option value="" disabled>
                          Select option
                        </option>
                        <option value="call">Let us call you</option>
                        <option value="email">Let us reply via email</option>
                        <option value="advice">You got some advise</option>
                        <option value="complaints">Disputes/Complaints</option>
                        <option value="free-hosting">
                          One year free hosting
                        </option>
                        <option value="smart-home">
                          Query about Smart Home Solutions
                        </option>
                        <option value="quotation">
                          Request for a Quotation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        When do you need this done?
                      </label>
                      <input
                        type="date"
                        id="time"
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    onClick={userInfoSubmitHandler}
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
