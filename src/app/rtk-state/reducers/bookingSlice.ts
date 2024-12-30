import { baseUrl } from "@/assets/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface otpFormData {
  username: string | undefined;
  preferred_channel: string;
}
export interface otpData {
  username: string | undefined;
  code: string;
}
export interface bookingSummerySubmitData {
  preference: number,
  type: number,
  street: string,
  suburb: string,
  post_code: string,
  country: string,
  state: string,
  service_id: string,
  date: string | null,
  time: string | null,
  user_id: string,
  requested_time_interval: string,
  client_panel: number
}

export interface BookingQuestionsAnsData {
  added_by: string,
  appointment_id: string,
  panel: string,
  question: any[]
}

export interface BookingState {
  isLoading: boolean;
  error: any;
  bookingStart: string;
  otpReqSuccess: string;
  otpReqData: any[];
  otpVerifySuccess: string;
  otpVerifyData: any[];
  serviceLocationType: string;
  serviceType: string;
  serviceAddress: any;
  setServiceAddressModal: string;
  newCustomerAddressStatus: string;
  billingAddress: any;
  setBillingAddressModal: string;
  parkingOption: string | null;
  serviceAddressParkingSubmitAfterNextStep: string;
  serviceName: any;
  operatingSystem: any;
  descriptionNote: any,
  necessaryCables: any,
  whereIsDataBackedUpOn:any,
  whereIsData : any,
  haveExistingAntivirus: any,
  existingAntivirusName: any,
  whatTypeOfPhoneIsIt: any,
  haveExistingNetwork: any,
  currentInternetProvider:any,
  otherInternetProvider: any,
  needRouters: any,
  whatIsYourEmailAddress: any,
  doYouKnowPasswordForIt: any,
  serviceQuestionInfoNextStep: string,
  choosePreferredDateAndTime: any,
  choosePreferredDateAndTimeNextStep: string,
  contactInformationForBooking: any,
  contactInformationForBookingNestStep: string,
  bookingSummerySubmitResData: any,
  bookingSummerySaveAndContinue: string,
  paymentOptionSelected: any,
  paymentOptionSelectedAndProceedToPay: string

}

const initialState: BookingState = {
  isLoading: false,
  error: null,
  bookingStart: "",
  otpReqSuccess: "",
  otpReqData: [],
  otpVerifySuccess: "",
  otpVerifyData: [],
  serviceType: "",
  serviceLocationType: "",
  serviceAddress: {},
  setServiceAddressModal: "",
  newCustomerAddressStatus: "",
  billingAddress: {},
  setBillingAddressModal: "",
  parkingOption: "",
  serviceAddressParkingSubmitAfterNextStep: "",
  serviceName: {},
  operatingSystem: {},
  descriptionNote: {},
  necessaryCables: {},
  whereIsDataBackedUpOn:{},
  whereIsData : {},
  haveExistingAntivirus: {},
  existingAntivirusName: {},
  whatTypeOfPhoneIsIt: {},
  haveExistingNetwork: {},
  currentInternetProvider:{},
  otherInternetProvider: {},
  needRouters: {},
  whatIsYourEmailAddress: {},
  doYouKnowPasswordForIt: {},
  serviceQuestionInfoNextStep: "",
  choosePreferredDateAndTime: {},
  choosePreferredDateAndTimeNextStep: "",
  contactInformationForBooking: {},
  contactInformationForBookingNestStep: "",
  bookingSummerySubmitResData: {},
  bookingSummerySaveAndContinue: "",
  paymentOptionSelected: "",
  paymentOptionSelectedAndProceedToPay: ""
};

export const getOTP = createAsyncThunk(
  "otpReqByEmailOrPhone",
  async (formData: otpFormData) => {
    const response = await fetch(`${baseUrl}/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data.data;
  }
);

export const submitOTP = createAsyncThunk(
  "otpSubmitForVerify",
  async (formData: otpData) => {
    const response = await fetch(`${baseUrl}/otp/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data.data;
  }
);
export const submitBookingSummery = createAsyncThunk(
  "submitBookingSummery",
  async (formData: bookingSummerySubmitData) => {
    const response = await fetch(`${baseUrl}/appointments/pre-store-appointment-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data.data;
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    startBooking: (state, action: PayloadAction<string>) => {
      state.bookingStart = action.payload;
    },
    serviceTypeSelect: (state, action: PayloadAction<string>) => {
      state.serviceType = action.payload;
      state.otpVerifySuccess = "";
    },
    serviceLocationTypeSelect: (state, action: PayloadAction<string>) => {
      state.serviceLocationType = action.payload;
      state.otpVerifySuccess = "";
    },
    serviceAddressSelect: (state, action: PayloadAction<any>) => {
      state.serviceAddress = action.payload;
    },
    setServiceAddressModal: (state, action: PayloadAction<string>) => {
      state.setServiceAddressModal = action.payload;
    },
    newCustomerAddressStatus: (state, action: PayloadAction<string>) => {
      state.newCustomerAddressStatus = action.payload;
    },
    billingAddressSelect: (state, action: PayloadAction<any>) => {
      state.billingAddress = action.payload;
    },
    setBillingAddressModal: (state, action: PayloadAction<string>) => {
      state.setBillingAddressModal = action.payload;
    },
    parkingOptionSelect: (state, action: PayloadAction<string | null>) => {
      state.parkingOption = action.payload;
    },
    serviceAddressParkingSubmitAfterNextStep: (state, action: PayloadAction<string>) => {
      state.serviceAddressParkingSubmitAfterNextStep = action.payload;
    },
    serviceName: (state, action: PayloadAction<string>) => {
      state.serviceName = action.payload;
    },
    operatingSystem: (state, action: PayloadAction<string>) => {
      state.operatingSystem = action.payload;
    },
    descriptionNote: (state, action: PayloadAction<string>) => {
      state.descriptionNote = action.payload;
    },
    necessaryCables: (state, action: PayloadAction<string>) => {
      state.necessaryCables = action.payload;
    },
    whereIsDataBackedUpOn: (state, action: PayloadAction<string>) => {
      state.whereIsDataBackedUpOn = action.payload;
    },
    whereIsData: (state, action: PayloadAction<string>) => {
      state.whereIsData = action.payload;
    },
    haveExistingAntivirus: (state, action: PayloadAction<string>) => {
      state.haveExistingAntivirus = action.payload;
    },
    existingAntivirusName: (state, action: PayloadAction<string>) => {
      state.existingAntivirusName = action.payload;
    },
    whatTypeOfPhoneIsIt: (state, action: PayloadAction<string>) => {
      state.whatTypeOfPhoneIsIt = action.payload;
    },
    haveExistingNetwork: (state, action: PayloadAction<string>) => {
      state.haveExistingNetwork = action.payload;
    },
    currentInternetProvider: (state, action: PayloadAction<string>) => {
      state.currentInternetProvider = action.payload;
    },
    otherInternetProvider: (state, action: PayloadAction<string>) => {
      state.otherInternetProvider = action.payload;
    },
    needRouters: (state, action: PayloadAction<string>) => {
      state.needRouters = action.payload;
    },
    whatIsYourEmailAddress: (state, action: PayloadAction<string>) => {
      state.whatIsYourEmailAddress = action.payload;
    },
    doYouKnowPasswordForIt: (state, action: PayloadAction<string>) => {
      state.doYouKnowPasswordForIt = action.payload;
    },
    serviceQuestionInfoNextStep: (state, action: PayloadAction<string>) => {
      state.serviceQuestionInfoNextStep = action.payload;
    },
    choosePreferredDateAndTime: (state, action: PayloadAction<string>) => {
      state.choosePreferredDateAndTime = action.payload;
    },
    choosePreferredDateAndTimeNextStep: (state, action: PayloadAction<string>) => {
      state.choosePreferredDateAndTimeNextStep = action.payload;
    },
    contactInformationForBooking: (state, action: PayloadAction<any>) => {
      state.contactInformationForBooking = action.payload;
    },
    contactInformationForBookingNestStep: (state, action: PayloadAction<string>) => {
      state.contactInformationForBookingNestStep = action.payload;
    },
    otpVerifySuccessReStore: (state, action: PayloadAction<string>) => {
      state.otpVerifySuccess = action.payload;
    },
    bookingSummerySaveAndContinue: (state, action: PayloadAction<string>) => {
      state.bookingSummerySaveAndContinue = action.payload;
    },
    paymentOptionSelected: (state, action: PayloadAction<string | any>) => {
      state.paymentOptionSelected = action.payload;
    },
    paymentOptionSelectedAndProceedToPay: (state, action: PayloadAction<string>) => {
      state.paymentOptionSelectedAndProceedToPay = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getOTP.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otpReqSuccess = "success";
      state.otpReqData = [action.payload];
    });
    builder.addCase(getOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(submitOTP.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(submitOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otpVerifySuccess = "success";
      state.otpVerifyData = [action.payload];
      state.bookingStart = "progress";
    });
    builder.addCase(submitOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(submitBookingSummery.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(submitBookingSummery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookingSummerySubmitResData = action.payload;
    });
    builder.addCase(submitBookingSummery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  startBooking,
  serviceLocationTypeSelect,
  serviceTypeSelect,
  serviceAddressSelect,
  setServiceAddressModal,
  newCustomerAddressStatus,
  billingAddressSelect,
  setBillingAddressModal,
  parkingOptionSelect,
  serviceAddressParkingSubmitAfterNextStep,
  serviceName,
  operatingSystem,
  descriptionNote,
  necessaryCables,
  whereIsDataBackedUpOn,
  whereIsData,
  haveExistingAntivirus,
  existingAntivirusName,
  whatTypeOfPhoneIsIt,
  haveExistingNetwork,
  currentInternetProvider,
  otherInternetProvider,
  needRouters,
  whatIsYourEmailAddress,
  doYouKnowPasswordForIt,
  serviceQuestionInfoNextStep,
  choosePreferredDateAndTime,
  choosePreferredDateAndTimeNextStep,
  contactInformationForBooking,
  contactInformationForBookingNestStep,
  otpVerifySuccessReStore,
  bookingSummerySaveAndContinue,
  paymentOptionSelected,
  paymentOptionSelectedAndProceedToPay
} = bookingSlice.actions;

export default bookingSlice.reducer;
