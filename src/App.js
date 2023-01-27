import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from './screens/Category'
import HomeScreen from './screens/Home'
import Product from './screens/Product'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>

  )
}

export default App