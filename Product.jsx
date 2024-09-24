import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product-image"/>
      <h3>{product.title}</h3>
      <p>⭐ {product.rating?.rate}</p>
      <h3>₹{product.price}</h3>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
