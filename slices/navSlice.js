import { createSlice } from "@reduxjs/toolkit";

/*
    The three actions we're having is: when you input your current location(Origin) as jigjiga it will dispatch this action into that data layer and now its part of the data layer and we can pull it whenver we need it. 
                        Same way for destination and travelinformation and all of this is inside of the reducer. 
        1: Set Origin: 
        2: Set Destination: 
        3: Set TravelTimeInformation: 
*/

const initialState = { 
    origin: null,
    destination: null, 
    travelTimeInformation: null
}

//DataLayer

export const navSlice = createSlice({ // createSlice: A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
    name: 'nav',    //name = The slice's name. Used to namespace the generated action types.

    initialState,   //The initial state to be returned by the slice reducer.

    reducers: {     // we create the action explained above in this reducer 
        setOrigin: (state, action) => {                     //To set the origin we pass the state which is the current state and action and it return us a payload which get assgined back to the state.orgin.
            state.origin = action.payload;
        },

        setDestination: (state, action) => {
            state.destination = action.payload;
        },

        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },



    },

});



//Exposing the dataLayer created above in my application by passing all the data sets and destructring. Basically allows us export and use it elsewhere else in our application.
export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;




//when we push data into the datalayer - we need to pull it back and grab it from the datalayer and this how we do it. we include selector 
//Selector for each dataleyer actions: 
export const selectOrigin = (state) => state.nav.origin;                     //when i call this selector(selectOrigin) - it should go to state.nav.orign and give me the current value we have inside the data layer
export const selectDestination = (state) => state.nav.destination;           // same here too.
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;   // and here too. 




export default navSlice.reducer;