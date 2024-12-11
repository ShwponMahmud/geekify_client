"use client"
import {  useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import GetUser from "./UserInfoForContact/GetUser";
import UserInfoSubmit from "./UserInfoForContact/UserInfoSubmit";
import AddressesInfo from "./AddressesInfo/AddressesInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import { SubmitContactsInfo } from "@/app/rtk-state/reducers/contactsSlice";


type FormValues = {
  user_id: number;
  address_id: number;
  request_for: string;
  date_time: string;
  message: string;
};

function GetFreeConsultation() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.users);
   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  // contact form submit methods.......
    const ContactsSubmit: SubmitHandler<FormValues> = (data) => {
      dispatch(SubmitContactsInfo(data))
      reset();
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
                <UserInfoSubmit />
              </div>
              <div className="address_info_get_modify_submit_container">
                <AddressesInfo />
              </div>
              <div className="service_request_date_message_submit_form_container mt-5">
                {/* <form className="space-y-4">
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
                    onClick={AddressInfoSubmitHandler}
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md shadow hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  >
                    Send Request
                  </button>
                </form> */}

                <form className="space-y-4" onSubmit={handleSubmit(ContactsSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    
                    <div>
                      <label
                        htmlFor="request_for"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Request For
                      </label>
                      <select
                        {...register("request_for", {
                          required: "This field is required",
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a Request</option>
                        <option value="0">Let us call you</option>
                        <option value="1">Let us reply via email</option>
                        <option value="2">You got some advice</option>
                        <option value="3">Disputes/Complaints</option>
                        <option value="4">
                          One year free hosting
                        </option>
                        <option value="5">
                          Query about Smart Home Solutions
                        </option>
                        <option value="6">
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
                        {...register("date_time", {
                          required: "Please select a date",
                        })}
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
                      {...register("message", {
                        required: "Message is required",
                      })}
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
