import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slicer/authSlice"

export default configureStore({
  reducer: {
    auth: authReducer
  },
})