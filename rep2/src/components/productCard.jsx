import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>{product.price}</h3>

      <span>{product.category}</span>

      <button className="add-button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
