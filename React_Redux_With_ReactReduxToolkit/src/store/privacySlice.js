import {createSlice} from "@reduxjs/toolkit";

const privacySlice = createSlice({
   name : 'privacy',
   initialState : false,
   reducers : {
      privacy : (state)=>{
          return state = !state
      }
   }
})

export const privacyAction = privacySlice.actions;

export default privacySlice;