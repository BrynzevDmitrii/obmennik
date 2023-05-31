import { configureStore } from "@reduxjs/toolkit"
import  currentListSlice  from '../shared/ListToday/redux/currentListSlice'
import CurrencyConverterSlise from "../widgets/CurrencyConverter/redux/CurrencyConverterSlise"

export const store = configureStore({
    reducer: {
        currentList: currentListSlice,
        CurrencyConverter: CurrencyConverterSlise
      
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
  