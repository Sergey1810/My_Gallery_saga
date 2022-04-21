import {createSlice} from "@reduxjs/toolkit";

export const photoSlise = createSlice({
    name:'photo',
    initialState:{
        photo:[],
        isLoading: false,
    },
    reducers:{
        getPhotoFetch:(state) => {
            state.isLoading = true;
        },
        getPhotoSuccess:(state, action) =>{
            state.photo = action.payload;
            state.isLoading = false;
        },
        getPhotoFailure:(state)=>{
            state.isLoading = false;
        }
    }
});

export const {getPhotoFetch, getPhotoSuccess, getPhotoFailure} = photoSlise.actions
export default photoSlise.reducer;