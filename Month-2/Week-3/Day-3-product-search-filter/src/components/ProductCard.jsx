function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <h3>₹ {product.price}</h3>
    </div>
  );
}

export default ProductCard;