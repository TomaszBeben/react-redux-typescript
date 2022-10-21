import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';

export type Tproducts = {
  title: string,
  price: number,
  id: number,
}

const initialProd:Tproducts[] = [
  {
    title: 'Hitman',
    price: 50,
    id: 1,
  },
  {
    title: 'GTA',
    price: 70,
    id: 2,
  },
  {
    title: 'SpiderMan',
    price: 100,
    id: 3,
  },
]

const prodSlice = createSlice({
  name:'products',
  initialState: initialProd,
  reducers: {
    addProducts: (state, action: PayloadAction<Tproducts>) => {
      return [action.payload, ...state]
    }
  }
})

export const { addProducts } = prodSlice.actions

export const getProductsSelector = (state: RootState) => state.prodSlice

export default prodSlice.reducer