import { useSelector } from 'react-redux'
import { getProductsSelector } from './prod.slice'

const ProdList = () => {
  const products = useSelector(getProductsSelector)

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
    </div>
  )
}

export default ProdList