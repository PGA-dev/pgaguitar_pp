import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../sitemisc/baseUrl';


export const fetchContact = createAsyncThunk(
    'contact/fetchContact',
    async () => {
        const response = await fetch(baseUrl + 'contact');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postContact = createAsyncThunk(
    'contact/postContact',
    async (contact, {dispatch}) => {
        const response = await fetch(baseUrl + 'contact', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        dispatch(addContact(data));
    }
);

const initialState = {
    contactArray:  [],
    isLoading: true,
    errMsg: ''
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            console.log('addContact action.payload:', action.payload);
            console.log('addContact state.contactArray:', state.contactArray);
            const newContact = {
                id: state.contactArray.length + 1,
                ...action.payload
            };
            state.contactArray.push(newContact);
        }
    },
    extraReducers: {
        [fetchContact.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchContact.fulfilled]: (state, action) => {
            state.contactArray = action.payload;
            state.isLoading = false;
            state.errMsg = '';
            
        },
        [fetchContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [fetchContact.rejected]: (state, action) => {
            alert(
                'Your comment could not be posted\nError: ' +
            (action.error ? action.error.message : 'Fetch failed')
            );

        }
    }
});

export const contactReducer = contactSlice.reducer;

export const { addContact } = contactSlice.actions;

export const selectAllContact = (state) => {
    return state.contact.contactArray;
};