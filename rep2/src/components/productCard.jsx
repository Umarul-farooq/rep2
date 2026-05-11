function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>{product.price}</h3>

      <span>{product.category}</span>
    </div>
  );
}

export default ProductCard;