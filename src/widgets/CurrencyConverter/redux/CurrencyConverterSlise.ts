import { createSlice } from "@reduxjs/toolkit";

const CurrencyConverterSlise = createSlice({
    name: 'CurrencyConverter',
    initialState: {
        selectedWay : 'В офисе (наличные)',
        conversion: 'Наличная конвертация'
    },
    reducers: {
        updateSelectedWay(state, payload) {
            state.selectedWay = payload.payload
        },
        updateConversion( state, payload) {
            if(state.selectedWay !== 'В офисе (наличные)'){
                state.conversion = payload.payload
            }else
            state.conversion = 'Наличная конвертация'
            
        }
    }
})
export const { updateSelectedWay, updateConversion } = CurrencyConverterSlise.actions;
export  default CurrencyConverterSlise.reducer;