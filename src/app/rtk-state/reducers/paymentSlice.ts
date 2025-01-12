import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface PaymentState {
  isLoading: boolean;
  status: string;
  error: string | null;
  cardToken: any;
  cardTokenProcess: string,
  cardSurcharge: any;
  afterPaySurcharge: any;
  PaymentsCreateByTokenResData: any;
  createPaymentResData: any;
  createCardPaymentsResData: any;
  createAppointmentsResData: any;
  appointmentChargeResData: any;
  appointmentChargeResStatus: string;
  createAppointmentNotesResData: any;
  CreateAppointmentPaymentsResData: any;
  CreateAppointmentCreatorResData: any;
  PaymentCreationNotifyResData: any;
  appointmentCreationNotifyResData: any;
  AppointmentDiscountStoreListCreateResData: any;
  AppointmentDiscountStoreListCreateResStatus: string;
  appointmentHistoryCreateResData: any;
  couponDiscountUseResData: any;
  appointmentQuestionSubmitResData: any;
  undecidedAppointmentStatus: any;
  paymentOptionFullAmountAfterDiscount: any;
  paymentOptionHalfAmountAfterDiscount: any;
  paymentOptionQuarterAmountAfterDiscount: any;
  UndecidedEmailNotifyCreateResData: any;
  afterPaySetMinimumAmount: any;
  afterPaySetMaximumAmount: any;
  afterPayCreateCheckoutResData: any;
  captureImmediateFullPaymentOfAfterPayStatus: any;
  afterPayDoneStatus: string
  postPaymentAfterAfterPayResData: any;
  postAfterAfterPayPaymentsResData: any;
  postAppointmentAfterAfterPayResData: any;
  AppointmentDiscountStoreListCreateAFterPayResData: any;
  
}

const initialState: PaymentState = {
  isLoading: false,
  status: "",
  error: null,
  cardToken: {},
  cardTokenProcess: "",
  cardSurcharge: {},
  afterPaySurcharge: {},
  PaymentsCreateByTokenResData: {},
  createPaymentResData: {},
  createCardPaymentsResData: {},
  createAppointmentsResData: {},
  appointmentChargeResData: {},
  appointmentChargeResStatus: "",
  createAppointmentNotesResData: {},
  CreateAppointmentPaymentsResData: {},
  CreateAppointmentCreatorResData: {},
  PaymentCreationNotifyResData: {},
  appointmentCreationNotifyResData: {},
  AppointmentDiscountStoreListCreateResData: {},
  AppointmentDiscountStoreListCreateResStatus: "",
  appointmentHistoryCreateResData: {},
  couponDiscountUseResData: {},
  appointmentQuestionSubmitResData: {},
  undecidedAppointmentStatus: "",
  paymentOptionFullAmountAfterDiscount: {},
  paymentOptionHalfAmountAfterDiscount: {},
  paymentOptionQuarterAmountAfterDiscount: {},
  UndecidedEmailNotifyCreateResData: {},
  afterPaySetMinimumAmount: {},
  afterPaySetMaximumAmount: {},
  afterPayCreateCheckoutResData: {},
  captureImmediateFullPaymentOfAfterPayStatus:{},
  afterPayDoneStatus: "",
  postPaymentAfterAfterPayResData: {},
  postAppointmentAfterAfterPayResData:{},
  postAfterAfterPayPaymentsResData:{},
  AppointmentDiscountStoreListCreateAFterPayResData:{}
};

// card token create..................
export interface createTokenFormData {
  card_name: string;
  card_number: number | any;
  card_expire_month: number | any;
  card_expire_year: number | any;
  card_cvc: number | any;
}
// Async thunk for fetching card token create.
export const CardTokenCreate = createAsyncThunk(
  "createToken",
  async (formData: createTokenFormData) => {
    const response = await fetch(
      `${baseUrl}/payment-gateways/card-tokens/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Get Card surcharge rate.......................
export const GetCardSurcharge = createAsyncThunk("cardSurcharge", async () => {
  const response = await fetch(
    `${baseUrl}/settings?type[]=payment&key[]=payment_card_surcharge`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
    }
  );

  if (!response.ok) {
    const data = await response.json();
    return data.field_errors;
  }

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
});
// Get afterpay surcharge rate.......................
export const GetAfterPaySurcharge = createAsyncThunk(
  "afterPaySurcharge",
  async () => {
    const response = await fetch(
      `${baseUrl}/settings?type[]=payment&key[]=payment_afterpay_surcharge`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Payments create by token....................
export interface paymentsCreateByTokenFormData {
  amount: number;
  reference: string | any;
  description: string | any;
  currency: string | any;
  card_token: any;
}
// Async thunk for Payments create by token.
export const PaymentsCreateByToken = createAsyncThunk(
  "paymentsCreateByToken",
  async (formData: paymentsCreateByTokenFormData) => {
    const response = await fetch(
      `${baseUrl}/payment-gateways/payments/create-by-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// create payments.......................
export interface createPaymentsFormData {
  reference: number | any;
  panel: number;
  type: number;
}
// async thunk for create payments.
export const CreatePayments = createAsyncThunk(
  "createPayments",
  async (formData: createPaymentsFormData) => {
    const response = await fetch(`${baseUrl}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// create card payments......................
export interface createCardPaymentsFormData {
  payment_id: number | any;
  paid_by: number | any;
  card_type: string;
  amount: number;
  card_surcharge:  any;
  payment_gateway: string;
  payment_gateway_id: number | any;
  status: number;
}
// Async thunk for create card payments.
export const CreateCardPayments = createAsyncThunk(
  "createCardPayments",
  async (formData: createCardPaymentsFormData) => {
    const response = await fetch(`${baseUrl}/card-payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Create Appointment......................
export interface createAppointmentFormData {
  customer_id: number | any;
  service_id: number;
  address_id: number | any;
  billing_address_id: number | any;
  platform: number;
  type: number;
  date: any;
  time: any;
  status: number | any;
  parking: number;
  length: number | any;
  preference: number;
}

// Async thunk for create appointments.
export const CreateAppointments = createAsyncThunk(
  "createAppointments",
  async (formData: createAppointmentFormData) => {
    const response = await fetch(`${baseUrl}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Create Appointment Charge......................
export interface createAppointmentChargeListFormData {
  appointment_id: number | any;
  charges: any;
}

// Async thunk for create appointments charges.
export const CreateAppointmentsCharge = createAsyncThunk(
  "createAppointmentsCharge",
  async (formData: createAppointmentChargeListFormData) => {
    const response = await fetch(`${baseUrl}/appointment-charges/store-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Create Appointment Notes......................
export interface createAppointmentNotesFormData {
  user_id: number;
  appointment_id: number | any;
  user_type: number;
  type: number;
  description: string;
}

// Async thunk for create appointments notes.
export const CreateAppointmentNotes = createAsyncThunk(
  "createAppointmentNotes",
  async (formData: createAppointmentNotesFormData) => {
    const response = await fetch(`${baseUrl}/appointment-notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Create Appointment payments ......................
export interface createAppointmentPaymentsFormData {
  payment_id: number;
  appointment_id: number;
  transaction_date_time: string | any;
}

// Async thunk for create appointments payments.
export const CreateAppointmentPayments = createAsyncThunk(
  "createAppointmentPayments",
  async (formData: createAppointmentPaymentsFormData) => {
    const response = await fetch(`${baseUrl}/appointment-payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Create Appointment Creator......................
export interface createAppointmentCreatorFormData {
  user_id: number;
  appointment_id: number;
  panel: string | any;
}

// Async thunk for create appointments Creator.
export const CreateAppointmentCreator = createAsyncThunk(
  "createAppointmentCreator",
  async (formData: createAppointmentCreatorFormData) => {
    const response = await fetch(`${baseUrl}/appointment-creators`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Payment Send Creation Notify..................
export interface PaymentCreationNotifyFormData {
  id: number;
  notify_customer: number;
  notify_internal_user: number;
}

// Async thunk for Payment Creation Notify.
export const PaymentCreationNotify = createAsyncThunk(
  "PaymentCreationNotify",
  async (formData: PaymentCreationNotifyFormData) => {
    const response = await fetch(
      `${baseUrl}/payments/send-creation-notify/${formData?.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

//Appointment Creation Notify..................
export interface AppointmentCreationNotifyFormData {
  appointment: number;
  notify_customer: number;
  notify_internal_user: number;
}

// Async thunk for Appointment Creation Notify.
export const AppointmentCreationNotify = createAsyncThunk(
  "AppointmentCreationNotify",
  async (formData: AppointmentCreationNotifyFormData) => {
    const response = await fetch(
      `${baseUrl}/appointments/send-creation-notify/${formData?.appointment}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

//Appointment History Create..................
export interface AppointmentDiscountStoreListFormData {
  user_id: number;
  reference: any;
  discounts: any;
}

// Async thunk for Appointment History Create.
export const AppointmentDiscountStoreListCreate = createAsyncThunk(
  "appointmentDiscountStoreListCreate",
  async (formData: AppointmentDiscountStoreListFormData) => {
    const response = await fetch(`${baseUrl}/discounts/store-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

//Appointment History Create..................
export interface AppointmentHistoryCreateFormData {
  user_id: number;
  appointment_id: number;
  panel: number;
  status: number;
}

// Async thunk for Appointment History Create.
export const AppointmentHistoryCreate = createAsyncThunk(
  "appointmentHistoryCreate",
  async (formData: AppointmentHistoryCreateFormData) => {
    const response = await fetch(`${baseUrl}/appointment-histories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

//Coupon discount usage..................
export interface CouponFormData {
  coupon_id: number;
  user_id: number;
  reference: any;
  discount_amount: number;
}

// Async thunk for Coupon discount create.
export const CouponDiscountUsage = createAsyncThunk(
  "couponDiscountUsage",
  async (formData: CouponFormData) => {
    const response = await fetch(`${baseUrl}/coupon-usages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

//Appointment question submit create..................
export interface AppointmentQuestionSubmitFormData {
  added_by: number;
  appointment_id: number;
  panel: any;
  question: any;
}

// Async thunk for Appointment question submit create.
export const AppointmentQuestionSubmitCreate = createAsyncThunk(
  "appointmentQuestionSubmitCreate",
  async (formData: AppointmentQuestionSubmitFormData) => {
    const response = await fetch(`${baseUrl}/appointment-questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();
      return data.field_errors;
    }

    if (response.ok) {
      const data = await response.json();
      return data.data;
    }
  }
);

// Interface for Undecided Email Notify form data
export interface UndecidedEmailNotifyFormData {
  appointment: number;
  params: {
    notify_customer: number;
    notify_internal_user: number;
  };
}

// Async thunk for Undecided email notify creation
export const UndecidedEmailNotifyCreate = createAsyncThunk(
  "UndecidedEmailNotifyCreate",
  async (formData: UndecidedEmailNotifyFormData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseUrl}/appointments/send-creation-undecided-notify/${formData.appointment}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Client-Secret": "secret",
          },
          body: JSON.stringify(formData.params),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.field_errors || "An error occurred");
      }

      return data.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Network error"
      );
    }
  }
);

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    cardTokenProcess: (state, action: PayloadAction<string>) => {
      state.cardTokenProcess = action.payload;
    },
    undecidedAppointmentStatus: (state, action: PayloadAction<string>) => {
      state.undecidedAppointmentStatus = action.payload;
    },
    paymentOptionFullAmountAfterDiscount: (
      state,
      action: PayloadAction<any>
    ) => {
      state.paymentOptionFullAmountAfterDiscount = action.payload;
    },
    paymentOptionHalfAmountAfterDiscount: (
      state,
      action: PayloadAction<any>
    ) => {
      state.paymentOptionHalfAmountAfterDiscount = action.payload;
    },
    paymentOptionQuarterAmountAfterDiscount: (
      state,
      action: PayloadAction<any>
    ) => {
      state.paymentOptionQuarterAmountAfterDiscount = action.payload;
    },
    afterPaySetMinimumAmount: (state, action: PayloadAction<any>) => {
      state.afterPaySetMinimumAmount = action.payload;
    },
    afterPaySetMaximumAmount: (
      state,
      action: PayloadAction<any>
    ) => {
      state.afterPaySetMaximumAmount = action.payload;
    },
    afterPayCreateCheckoutResData: (
      state,
      action: PayloadAction<any>
    ) => {
      state.afterPayCreateCheckoutResData = action.payload;
    },
    captureImmediateFullPaymentOfAfterPayStatus: (
      state,
      action: PayloadAction<any>
    ) => {
      state.captureImmediateFullPaymentOfAfterPayStatus = action.payload;
    },
    afterPayDoneStatus: (
      state,
      action: PayloadAction<string>
    ) => {
      state.afterPayDoneStatus = action.payload;
    },
    postPaymentAfterAfterPayResData: (
      state,
      action: PayloadAction<any>
    ) => {
      state.postPaymentAfterAfterPayResData = action.payload;
    },
    postAfterAfterPayPaymentsResData: (
      state,
      action: PayloadAction<any>
    ) => {
      state.postAfterAfterPayPaymentsResData = action.payload;
    },
    postAppointmentAfterAfterPayResData: (
      state,
      action: PayloadAction<any>
    ) => {
      state.postAppointmentAfterAfterPayResData = action.payload;
    },
    AppointmentDiscountStoreListCreateAFterPayResData: (
      state,
      action: PayloadAction<any>
    ) => {
      state.AppointmentDiscountStoreListCreateAFterPayResData = action.payload;
    },
    resetPaymentState : () => {
          return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CardTokenCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.cardToken = "";
        state.cardTokenProcess = "start"
      })
      .addCase(
        CardTokenCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.cardToken = action.payload;
        }
      )
      .addCase(CardTokenCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(GetCardSurcharge.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(
        GetCardSurcharge.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.cardSurcharge = action.payload;
        }
      )
      .addCase(GetCardSurcharge.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(GetAfterPaySurcharge.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      })
      .addCase(
        GetAfterPaySurcharge.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.afterPaySurcharge = action.payload;
        }
      )
      .addCase(GetAfterPaySurcharge.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(PaymentsCreateByToken.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
        // state.PaymentsCreateByTokenResData = {};
      })
      .addCase(
        PaymentsCreateByToken.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.PaymentsCreateByTokenResData = action.payload;
        }
      )
      .addCase(PaymentsCreateByToken.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreatePayments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.createPaymentResData = {};
      })
      .addCase(
        CreatePayments.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.createPaymentResData = action.payload;
        }
      )
      .addCase(CreatePayments.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateCardPayments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.createCardPaymentsResData = {};
      })
      .addCase(
        CreateCardPayments.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.createCardPaymentsResData = action.payload;
        }
      )
      .addCase(CreateCardPayments.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateAppointments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.createAppointmentsResData = "";
      })
      .addCase(
        CreateAppointments.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.createAppointmentsResData = action.payload;
        }
      )
      .addCase(CreateAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateAppointmentsCharge.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.appointmentChargeResData = "";
        state.appointmentChargeResStatus = "";
      })
      .addCase(
        CreateAppointmentsCharge.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.appointmentChargeResData = action.payload;
          state.appointmentChargeResStatus = "success";
        }
      )
      .addCase(CreateAppointmentsCharge.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateAppointmentNotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.createAppointmentNotesResData = "";
      })
      .addCase(
        CreateAppointmentNotes.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.createAppointmentNotesResData = action.payload;
        }
      )
      .addCase(CreateAppointmentNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateAppointmentPayments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.CreateAppointmentPaymentsResData = "";
      })
      .addCase(
        CreateAppointmentPayments.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.CreateAppointmentPaymentsResData = action.payload;
        }
      )
      .addCase(CreateAppointmentPayments.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CreateAppointmentCreator.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.CreateAppointmentCreatorResData = "";
      })
      .addCase(
        CreateAppointmentCreator.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.CreateAppointmentCreatorResData = action.payload;
        }
      )
      .addCase(CreateAppointmentCreator.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(PaymentCreationNotify.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
        state.PaymentCreationNotifyResData = "";
      })
      .addCase(
        PaymentCreationNotify.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.PaymentCreationNotifyResData = action.payload;
        }
      )
      .addCase(PaymentCreationNotify.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(AppointmentCreationNotify.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
        state.appointmentCreationNotifyResData = "";
      })
      .addCase(
        AppointmentCreationNotify.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.appointmentCreationNotifyResData = action.payload;
        }
      )
      .addCase(AppointmentCreationNotify.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(AppointmentDiscountStoreListCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.AppointmentDiscountStoreListCreateResData = "";
      })
      .addCase(
        AppointmentDiscountStoreListCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.AppointmentDiscountStoreListCreateResData = action.payload;
          state.AppointmentDiscountStoreListCreateResStatus = "success";
        }
      )
      .addCase(AppointmentDiscountStoreListCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })

      .addCase(AppointmentHistoryCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.appointmentHistoryCreateResData = "";
      })
      .addCase(
        AppointmentHistoryCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.appointmentHistoryCreateResData = action.payload;
        }
      )
      .addCase(AppointmentHistoryCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(CouponDiscountUsage.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
        state.couponDiscountUseResData = "";
      })
      .addCase(
        CouponDiscountUsage.fulfilled,
        (state, action: PayloadAction<any>) => {
          // state.isLoading = false;
          // state.status = "success";
          state.couponDiscountUseResData = action.payload;
        }
      )
      .addCase(CouponDiscountUsage.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(AppointmentQuestionSubmitCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.appointmentQuestionSubmitResData = "";
      })
      .addCase(
        AppointmentQuestionSubmitCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.appointmentQuestionSubmitResData = action.payload;

          state.cardToken = "";
          state.PaymentsCreateByTokenResData = "";
          state.createPaymentResData = "";
          state.createCardPaymentsResData = "";
          state.createAppointmentsResData = "";
          state.appointmentChargeResData = "";
          state.appointmentChargeResStatus = "";
          state.createAppointmentNotesResData = "";
          state.CreateAppointmentPaymentsResData = "";
          state.CreateAppointmentCreatorResData = "";
          state.PaymentCreationNotifyResData = "";
          state.appointmentCreationNotifyResData = "";
          state.AppointmentDiscountStoreListCreateResData = "";
          state.AppointmentDiscountStoreListCreateResStatus = "";
          state.cardTokenProcess = "end";
          state.afterPayDoneStatus = "";

        }
      )
      .addCase(AppointmentQuestionSubmitCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(UndecidedEmailNotifyCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.UndecidedEmailNotifyCreateResData = "";
      })
      .addCase(
        UndecidedEmailNotifyCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.UndecidedEmailNotifyCreateResData = action.payload;

          state.createAppointmentsResData = "";
          state.appointmentChargeResData = "";
          state.appointmentChargeResStatus = "";
          state.createAppointmentNotesResData = "";
          state.CreateAppointmentCreatorResData = "";
          // state.AppointmentDiscountStoreListCreateResData = "";
          // state.AppointmentDiscountStoreListCreateResStatus = "";
        }
      )
      .addCase(UndecidedEmailNotifyCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";

        state.createAppointmentsResData = "";
        state.appointmentChargeResData = "";
        state.appointmentChargeResStatus = "";
        state.createAppointmentNotesResData = "";
        state.CreateAppointmentCreatorResData = "";
        // state.AppointmentDiscountStoreListCreateResData = "";
        // state.AppointmentDiscountStoreListCreateResStatus = "";
      });
  },
});

export const {
  cardTokenProcess,
  undecidedAppointmentStatus,
  paymentOptionFullAmountAfterDiscount,
  paymentOptionHalfAmountAfterDiscount,
  paymentOptionQuarterAmountAfterDiscount,
  afterPaySetMinimumAmount,
  afterPaySetMaximumAmount,
  afterPayCreateCheckoutResData,
  captureImmediateFullPaymentOfAfterPayStatus,
  afterPayDoneStatus,
  postPaymentAfterAfterPayResData,
  postAfterAfterPayPaymentsResData,
  postAppointmentAfterAfterPayResData,
  AppointmentDiscountStoreListCreateAFterPayResData,
  resetPaymentState
} = paymentSlice.actions;

// Selector
// export const selectCardTokenCreate = (state: RootState) => state.contacts;

// Reducer export
export default paymentSlice.reducer;
