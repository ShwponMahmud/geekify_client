import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categorySlice'
import serviceReducer from './reducers/serviceSlice'
import userReducer from './reducers/contactSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    services: serviceReducer,
    users: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch