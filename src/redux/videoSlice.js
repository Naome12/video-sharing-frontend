import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentVideo:null,
    loading:false,
    error:false,
}

export const videoSlice =createSlice({
    name:'video',
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading = true
        },
        fetchSucess:(state,action)=>{
            state.loading = true
            state.currentVideo = action.payload;
        },
        fetchFailure:(state)=>{
            state.loading = false;
            state.err = true
        },
        like:(state,action)=>{
            if(!state.currentVideo.likes.includes(action.payload)){
                state.currentVideo.likes.push(action.payload)
                state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex((userId)=>userId === action.payload),1)
            }
        },
        dislike:(state,action)=>{
            if(!state.currentVideo.dislikes.includes(action.payload)){
                state.currentVideo.dislikes.push(action.payload)
                state.currentVideo.likes.splice(state.currentVideo.likes.findIndex((userId)=>userId === action.payload),1)
            }
        }


    }
})

export const {fetchStart,fetchSucess,fetchFailure,like,dislike} = videoSlice.actions

export default videoSlice.reducer