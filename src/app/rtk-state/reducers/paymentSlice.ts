import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface PaymentState {
  isLoading: boolean;
  status: string;
  error: string | null;
  cardToken: any;
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
}

const initialState: PaymentState = {
  isLoading: false,
  status: "",
  error: null,
  cardToken: {},
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
  card_surcharge: number | any;
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

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CardTokenCreate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.cardToken = "";
      })
      .addCase(
        CardTokenCreate.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.cardToken = action.payload;
        }
      )
      .addCase(CardTokenCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(GetCardSurcharge.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        GetCardSurcharge.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.cardSurcharge = action.payload;
        }
      )
      .addCase(GetCardSurcharge.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(GetAfterPaySurcharge.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        GetAfterPaySurcharge.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.afterPaySurcharge = action.payload;
        }
      )
      .addCase(GetAfterPaySurcharge.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(PaymentsCreateByToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        // state.PaymentsCreateByTokenResData = {};
      })
      .addCase(
        PaymentsCreateByToken.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
          state.CreateAppointmentCreatorResData = action.payload;
        }
      )
      .addCase(CreateAppointmentCreator.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(PaymentCreationNotify.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.PaymentCreationNotifyResData = "";
      })
      .addCase(
        PaymentCreationNotify.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
          state.PaymentCreationNotifyResData = action.payload;
        }
      )
      .addCase(PaymentCreationNotify.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
      .addCase(AppointmentCreationNotify.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.appointmentCreationNotifyResData = "";
      })
      .addCase(
        AppointmentCreationNotify.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
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
          state.isLoading = false;
          state.status = "success";
          state.appointmentHistoryCreateResData = action.payload;
          

          state.cardToken = "";
          state.cardSurcharge = "";
          state.afterPaySurcharge = "";
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
        }
      )
      .addCase(AppointmentHistoryCreate.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

// Selector
// export const selectCardTokenCreate = (state: RootState) => state.contacts;

// Reducer export
export default paymentSlice.reducer;
