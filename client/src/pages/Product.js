import React from 'react';

const Product = ({ product: { image, name, desc, price }}) => {
  return (
    <div className='item-card'>
        <img src={image} width={250} height={250} className='image'/>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>${price}</p>
    </div>
  )
}

export default Product