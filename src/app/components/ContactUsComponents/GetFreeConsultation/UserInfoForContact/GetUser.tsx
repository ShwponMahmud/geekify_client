"use client"
import { useAppDispatch } from '@/app/rtk-state/hooks';
import { getUser } from '@/app/rtk-state/reducers/userSlice';
import { SubmitHandler, useForm } from 'react-hook-form';


interface CustomFormData {
  email: string;
}

export default function GetUser() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CustomFormData>();


    // Get user methods............
    const onSubmit: SubmitHandler<CustomFormData> = async (data) => {
      try {
        await dispatch(getUser(data)).unwrap();
        reset();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

  return (
    <>
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
    </>
  )
}
