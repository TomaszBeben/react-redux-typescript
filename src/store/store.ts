import { configureStore } from '@reduxjs/toolkit'
import prodSlice from '../products/prod.slice'

const store = configureStore({
  reducer:{
    prodSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store