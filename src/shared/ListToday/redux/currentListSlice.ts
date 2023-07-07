import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Root } from "../type/currentType";


export const fetchList = createAsyncThunk(
    'currentList/fetchList',
        async function(_, { rejectWithValue }) {
            const response =  axios('https://www.cbr-xml-daily.ru/daily_json.js');
            const currentList = (await response).data
            if(!(await response).status) {
                return rejectWithValue('Server error')
            }
            return[ currentList];
        }
)

const currentListSlice = createSlice({
    name: 'currentList',
    initialState: {
        date: new Date().toLocaleDateString(),
        loading: false,
        currentList:[] as any[],
    },
    reducers: {},

    extraReducers(builder) {
        builder
        .addCase(
            fetchList.pending, ( state )=>{
                state.loading = true
            }
        )
        .addCase(
            fetchList.fulfilled, (state, action)=>{
                console.log(action.payload)
            state.currentList = action.payload
            state.loading = false;
        })
    }
})

export  default currentListSlice.reducer;