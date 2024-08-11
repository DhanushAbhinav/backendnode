import React from 'react'
import ProductCard from './ProductCard'
import './ProductGrid.css'

const products = [
  {id: 1, title: 'Product 1', price: 29.99, image: 'image1.png'},
  {id: 2, title: 'Product 2', price: 49.99, image: 'image2.png'},
]

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductGrid
