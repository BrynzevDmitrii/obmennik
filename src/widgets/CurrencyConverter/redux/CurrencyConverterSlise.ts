import { createSlice } from "@reduxjs/toolkit";

const CurrencyConverterSlise = createSlice({
    name: 'CurrencyConverter',
    initialState: {
        selectedWay : 'В офисе (наличные)',
    },
    reducers: {
        updateSelectedWay(state, payload) {
            state.selectedWay = payload.payload
        }
    }
})
export const { updateSelectedWay } = CurrencyConverterSlise.actions;
export  default CurrencyConverterSlise.reducer;