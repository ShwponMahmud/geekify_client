import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from './reducers/bookingSlice'

export const store = configureStore({
  reducer: {
    Services: servicesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch