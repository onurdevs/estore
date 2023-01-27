import { Carousel } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import Product from '../../components/Product'
import Header from '../../layouts/Header'

function HomeScreen() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }, [])

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          {
            products.map(product => (
            <div className='col-md-3 my-3' key={product.id}>
              <Product product={product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeScreen