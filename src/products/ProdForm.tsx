import React, { useState } from "react"
import { addProducts, Tproducts } from '../products/prod.slice'
import { useAppDispatch } from "../store/store.hooks"
const ProdForm = () => {

    const dispatch = useAppDispatch()

  const [product, setProduct] = useState<Tproducts>({
    id: 0,
    title: '',
    price: 0,
  })

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
    (prev as any)[name] = value
    const newValue = { ...prev }
    return newValue
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addProducts(product))
  }

  return (
    <>
      <h2>Add game to the stor</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Game title" name='title' value={product.title} onChange={handleChange} />
        <input type='number' placeholder="Price" name="price" value={product.price} onChange={handleChange} />
        <input type='text' placeholder="ID" name='id' value={product.id} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </>

  )
}

export default ProdForm