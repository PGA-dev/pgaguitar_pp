import { createSlice } from "@reduxjs/toolkit";
import { GUITAR } from "../../app/shared/GUITAR";

const initialState = {
    guitarArray: GUITAR
};

const guitarSlice = createSlice ({
    name: 'guitars',
    initialState
})


export const guitarReducer = guitarSlice.reducer;



export const selectAllGuitar = (state) => {
    return state.guitars.guitarArray;
};


export const selectGuitarById = (guitarid) => (state) =>{
    return state.guitars.guitarArray.find((guitar) => guitar.id === parseInt(guitarid));
};


export const selectFeaturedGuitar1 = () => {
    return state.guitars.guitarArray.find((guitar) => guitar.featured === 1);
};

export const selectFeaturedGuitar2 = () => {
    return state.guitars.guitarArray.find((guitar) => guitar.featured === 2);
};

export const selectFeaturedGuitar3 = () => {
    return state.guitars.guitarArray.find((guitar) => guitar.featured === 3);
};

