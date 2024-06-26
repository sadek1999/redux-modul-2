import { createSlice } from "@reduxjs/toolkit";

const initialState={count:0}

const counterslice=createSlice({
    name:'counter',
    initialState,
    reducers:{}
})