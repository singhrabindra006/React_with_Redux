import {createSlice} from "@reduxjs/toolkit";

const counterSlice  = createSlice({
   name : 'counter',
   initialState : { 
      counterVal : 0
   },
   reducers : {
      increament: (state)=>{
         state.counterVal ++;
      },
      decreament: (state)=>{
         state.counterVal --;
      },
      add: (state, action)=>{
         state.counterVal +=  Number(action.payload.num)
      },
      subtract: (state, action)=>{
         state.counterVal -= Number(action.payload.num)
      }
   }
})

export const counterAction = counterSlice.actions;

export default counterSlice;