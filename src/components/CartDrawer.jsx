import React from 'react';

export default function CartDrawer({ cart, isOpen, onClose, changeQty, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatPrice = (price) => {
    return 'R$ ' + price.toFixed(2).replace('.', ',');
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Carrinho</h2>
          <button className="cart-close" onClick={onClose} title="Fechar Carrinho">
            <svg viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Seu carrinho está vazio.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <div style={{ flex: 1 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{formatPrice(item.price)}</div>
                  <div className="cart-item-qty">
                    <button className="qty-btn" onClick={() => changeQty(item.name, -1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(item.name, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => changeQty(item.name, -item.qty)}
                  title="Remover Item"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button className="btn-checkout" onClick={onCheckout}>
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
}
