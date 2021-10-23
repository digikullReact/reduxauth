import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById,fetchUser } from '../thunks'


const initialState = {
  loggedIn: false,
  allUsers:[],
  showModal:false
}

export const authenticationSlice = createSlice({
  name: 'authenticationReducer',
  initialState,
  reducers:{

    show:(state,action)=>{
      state.showModal=action.payload;


    }

  },
 
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
     
   
      // Add user to the state array
      //state.entities.push(action.payload)
      state.loggedIn=true


    }).addCase(fetchUserById.rejected,(state,action)=>{



    }).addCase(fetchUser.fulfilled, (state, action) => {
   
      // Add user to the state array
      //state.entities.push(action.payload)
      state.allUsers=action.payload.data;


      

    }).addCase(fetchUser.rejected,(state,action)=>{



    })
  },
})

// Action creators are generated for each case reducer function
export const { show } = authenticationSlice.actions

export default authenticationSlice.reducer