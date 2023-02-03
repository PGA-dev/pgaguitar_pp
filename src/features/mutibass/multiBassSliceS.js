import { createSlice } from "@reduxjs/toolkit";
import { MULTIBASS } from "../../app/shared/MULTIBASS";


const initialState = {
    mulitibassArray: MULTIBASS
};

const multibassSlice = createSlice({
    name: 'multibass',
    initialState
});

export const multibassReducer = multibassSlice.reducer;

export const selectFeaturedMultiBass= (state) => {
    return state.multibass.mulitibassArray.find((multibass) => multibass.featured);
};
