import { createSlice } from "@reduxjs/toolkit";

/*

*/

const initialState = { 
    origin: null,
    destination: null, 
    travelTimeInformation: null
}


export const navSlice = createSlice({ // createSlice: A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
    name: 'nav',    //name = The slice's name. Used to namespace the generated action types.

})