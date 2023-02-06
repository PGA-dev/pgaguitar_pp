import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { GUITAR } from "../../app/shared/GUITAR";
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from "../../sitemisc/mapImageURL";


export const fetchGuitar = createAsyncThunk(
    'guitar/fetchGuitar',
    async () => {
        const response = await fetch(baseUrl + 'guitar');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);
const initialState = {
    guitarArray: [],
    isLoading: true,
    errMsg: ''
};

const guitarSlice = createSlice({
    name: 'guitar',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGuitar.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGuitar.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.guitarArray = mapImageURL(action.payload);
        },
        [fetchGuitar.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});


export const guitarReducer = guitarSlice.reducer;



export const selectAllGuitar = (state) => {
    return state.guitar.guitarArray;
};


export const selectGuitarById = (guitarid) => (state) =>{
    return state.guitar.guitarArray.find(
        (guitar) => guitar.id === parseInt(guitarid));
};


export const selectFeaturedGuitar1 = (state) => {
    return {
        frontFeature: state.guitar.guitarArray.find(
            (guitar) => guitar.featured === 1),
            isLoading: state.guitar.isLoading,
            errMsg: state.guitar.errMsg
    };
};

export const selectFeaturedGuitar2 = (state) => {
    return {
        frontFeature: state.guitar.guitarArray.find(
            (guitar) => guitar.featured === 2),
            isLoading: state.guitar.isLoading,
            errMsg: state.guitar.errMsg
    };
};

export const selectFeaturedGuitar3 = (state) => {
    return {
        frontFeature: state.guitar.guitarArray.find(
            (guitar) => guitar.featured === 3),
            isLoading: state.guitar.isLoading,
            errMsg: state.guitar.errMsg
    };
};

