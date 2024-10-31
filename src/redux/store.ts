import { configureStore } from '@reduxjs/toolkit'
import { characterApi } from './slices/ApiSlice' 
import paginationReducer from './slices/PaginationSlice'
export const store = configureStore({
  reducer: {
    pagination:paginationReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch