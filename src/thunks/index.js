import { createAsyncThunk} from '@reduxjs/toolkit'
import customAxios from '../interceptors'


// First, create the thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
    debugger;
   const response=await  customAxios.get(`user/${userId}`);
   return response.data;
  }
)

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (data) => {
   const response=await  customAxios.get(`user`);
   return response.data;
  }
)