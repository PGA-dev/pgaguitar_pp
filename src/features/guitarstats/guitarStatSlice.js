//import { GUITARSTAT } from '../../app/shared/GUITARSTAT';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchGuitarStat = createAsyncThunk(
    'guitarstat/fetchGuitarStat',
    async () => {
        const response = await fetch(baseUrl + 'guitarstat');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    guitarstatArray:  [],
    isLoading: true,
    errMsg: ''
};

const guitarstatSlice = createSlice({
    name: 'guitarstat',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGuitarStat.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGuitarStat.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.guitarstatArray = action.payload;
        },
        [fetchGuitarStat.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const guitarstatReducer = guitarstatSlice.reducer;

export const selectStatByGuitarId = (guitarid) => (state) => {
    return state.guitarstat.guitarstatArray.filter(
        (guitarstat) => guitarstat.guitarid === parseInt(guitarid)
    );
};