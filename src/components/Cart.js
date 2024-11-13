import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ items, onRemoveItem }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Aquí iría la lógica de checkout
    alert('¡Gracias por tu compra!');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Volver a la tienda
        </button>
        <h2>Carrito de Compras</h2>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <img src="/empty-cart.png" alt="Carrito vacío" />
            <h3>Tu carrito está vacío</h3>
            <p>¡Agrega algunos productos increíbles!</p>
            <button className="continue-shopping" onClick={() => navigate('/')}>
              Continuar comprando
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.cartId} className="cart-item">
                <img src={item.src} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="item-price">${item.price}</div>
                <button 
                  className="remove-item"
                  onClick={() => onRemoveItem(item.cartId)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 