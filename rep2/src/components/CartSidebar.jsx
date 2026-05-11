function CartSidebar({ isOpen, cartItems, totalPrice, onClose, onQuantityChange, onRemoveItem }) {
  return (
    <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add a product to start shopping and see it appear here.</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="quantity-group">
                  <button
                    className="quantity-button"
                    onClick={() => onQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => onQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button className="remove-button" onClick={() => onRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </aside>
  );
}

export default CartSidebar;
