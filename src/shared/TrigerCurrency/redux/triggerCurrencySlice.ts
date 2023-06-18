import { createSlice } from "@reduxjs/toolkit";

const triggerCurrencySlice = createSlice({
    name: 'triggerCurrency',
    initialState: {
        isActiveBtn: 'rub/cur',
    },
    reducers: {
        setIsActiveBtn(state, payload) {
            state.isActiveBtn = payload.payload
        }
    },
})


export const { setIsActiveBtn } = triggerCurrencySlice.actions

export default triggerCurrencySlice.reducer