import { createSlice } from "@reduxjs/toolkit";

const currentListSlice = createSlice({
    name: 'currentList',
    initialState: {
        date: new Date().toLocaleDateString(),
        currentList: {},
    },
    reducers: {
        getCurrentList(state){

            state.currentList = 'https://www.cbr-xml-daily.ru/daily_json.js'
        }
    }
})

export  default currentListSlice.reducer;