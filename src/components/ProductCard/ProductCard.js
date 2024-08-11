import React from 'react'
import './ProductCard.css'

const ProductCard = ({image, title, price}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  )
}

export default ProductCard
