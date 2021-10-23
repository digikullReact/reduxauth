// For Global store configuration  

import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice  from '../reducers/authentication'


export const store = configureStore({
  reducer: {
   auth:authenticationSlice,
   something:authenticationSlice

    // all our reducers that we will create in reducers folder
  },
  
})