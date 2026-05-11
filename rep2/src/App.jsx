import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import products from "./data/product";
import "./style/style.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const unitPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1, unitPrice }];
    });
    setIsCartOpen(true);
  };

  const handleQuantityChange = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.flatMap((item) => {
        if (item.id !== productId) return item;
        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

  return (
    <div>
      <Header cartCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <ProductList products={products} onAddToCart={handleAddToCart} />

      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />}

      <CartSidebar
        isOpen={isCartOpen}
        cartItems={cart}
        totalPrice={totalPrice}
        onClose={() => setIsCartOpen(false)}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;