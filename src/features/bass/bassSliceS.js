import { createSlice } from "@reduxjs/toolkit";
import { BASS } from "../../app/shared/BASS";

const initialState = {
    bassArray: BASS
};

const bassSlice = createSlice({
    name: 'bass',
    initialState
})

export const bassReducer = bassSlice.reducer;

export const selectAllBass = (state) => {
    return state.bass.bassArray;
};

export const selectBassById = (bassid) => (state) =>{
    return state.bass.bassArray.find((bass) => bass.id === parseInt(bassid));
};

export const selectFeaturedBass= (state) => {
    return state.bass.bassArray.find((bass) => bass.featured);
};