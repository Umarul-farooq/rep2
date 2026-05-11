import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <section className="page cart-page">
      <div className="page-header">
        <div>
          <h2>Shopping Cart</h2>
          <p>Review items, change quantities, or remove products.</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add items from the home page or a category to get started.</p>
        </div>
      ) : (
        <div className="cart-items-wrapper">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p className="item-price">{item.price}</p>
                <div className="quantity-group">
                  <button
                    className="quantity-button"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
            <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
