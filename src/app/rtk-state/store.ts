import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/blogCategorySlice'
import serviceReducer from './reducers/serviceSlice'
import userReducer from './reducers/userSlice'
import addressReducer from './reducers/addressSlice'
import contactsReducer from './reducers/contactsSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    services: serviceReducer,
    users: userReducer,
    addresses:addressReducer,
    contacts: contactsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch