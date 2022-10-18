import { useState } from 'react'

const initialProd = [
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

interface Tproducts {
  title: string;
  price: number;
  id: number;
}

const ProdList = () => {
  const [products, setProducts] = useState<Tproducts[]>(initialProd)

  return (
    <div>
      <h2>Game List</h2>
      {products.map(prod => {
        return(
          <div key={prod.id}>
            <span>{`${prod.title} : ${prod.price}$`}</span>
          </div>
        )
      })}

      <button onClick={() => setProducts( prevProd => [...prevProd, {
        title: 'Fortnite',
        price: 20,
        id: 4,
      }])}>Add Fortnite</button>
    </div>
  )
}

export default ProdList