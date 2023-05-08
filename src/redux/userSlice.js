import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser:null,
    loading:false,
    error:false,
}

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading = true
        },
        loginSucess:(state,action)=>{
            state.loading = true
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.loading = false;
            state.err = true
        },
        logout:(state) =>{
            state.loading = false;
            state.currentUser = null;
            state.error = false;
        },
        subscriptions: (state, action)=>{
            if(state.currentUser.subscribedUsers.includes(action.payload)){
                state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex((channelId) => channelId === action.payload),1);
            }else{
                state.currentUser.subscribedUsers.push(action.payload)
            }
        }

    }
})

export const {loginStart,loginSucess,loginFailure,logout,subscriptions} = userSlice.actions

export default userSlice.reducer