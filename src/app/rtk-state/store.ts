import { configureStore } from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import categoryReducer from './reducers/blogCategorySlice'
import serviceReducer from './reducers/serviceSlice'
import userReducer from './reducers/userSlice'
import SubmitUserInfoReducer from './reducers/userInfoSubmitSlice'
import addressReducer from './reducers/addressSlice'
import contactsReducer from './reducers/contactsSlice'
import bookingReducer from "./reducers/bookingSlice"
import customerReducer from "./reducers/customerSlice";

const saveStateToLocalStorage = (state: RootState) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
  } catch (e) {
      console.error('Error saving state to localStorage:', e);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; 
    }
    const parsedState = JSON.parse(serializedState);

    return {
      blogCategory: parsedState.blogCategory || undefined,
      services: parsedState.services || undefined,
      users: parsedState.users || undefined,
      userInfoAfterSubmit: parsedState.userInfoAfterSubmit || undefined,
      addresses: parsedState.addresses || undefined,
      contacts: parsedState.contacts || undefined,
      booking: parsedState.booking || undefined,
      customer: parsedState.customer || undefined,
    };
  } catch (e) {
    console.error('Error loading state from localStorage:', e);
    return undefined;
  }
};

// Load the preloaded state from localStorage
const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    blogCategory: categoryReducer,
    services: serviceReducer,
    users: userReducer,
    userInfoAfterSubmit: SubmitUserInfoReducer,
    addresses:addressReducer,
    contacts: contactsReducer,
    booking: bookingReducer,
    customer: customerReducer
  },
  preloadedState,
  
})

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch











