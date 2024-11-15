import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products, selectedCategory, searchQuery, onAddToCart }) => {
  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.franchise === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product-card"
        >
          <div className="product-image-container">
            <img src={product.src} alt={product.name} className="product-image" />
            <button
              className="add-to-cart-button"
              onClick={() => {
                const button = document.querySelector(`[data-product-id="${product.id}"]`);
                button.classList.add('clicked');
                setTimeout(() => {
                  button.classList.remove('clicked');
                  onAddToCart(product);
                }, 300);
              }}
              data-product-id={product.id}
            >
              Add to Cart
            </button>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <span className="product-price">${product.price}</span>
          </div>
        </div>
      ))}
      
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try another search or category</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid; 