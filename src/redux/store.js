import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/CounterSlides'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})