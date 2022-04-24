import {createSlice} from "@reduxjs/toolkit";

export const photoSlise = createSlice({
    name:'photo',
    initialState:{
        photo:[],
        isLoading: false,
        error:''
    },
    reducers:{
        getPhotoFetch:(state) => {
            state.isLoading = true;
        },
        getPhotoSuccess:(state, action) =>{
            state.photo = action.payload;
            state.isLoading = false;
            state.error= '';
        },
        getPhotoFailure:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {getPhotoFetch, getPhotoSuccess, getPhotoFailure} = photoSlise.actions
export default photoSlise.reducer;