function Product({ product, dispatch }) {
    return (
        <div className="product-card">
            <div 
                className="product-image" 
                style={{ background: product.gradient }}
            >
                <span className="product-emoji">{product.emoji}</span>
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price.toLocaleString("en-IN")}</p>
                <button
                    className="btn btn-primary btn-add"
                    onClick={() =>
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                        })
                    }
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;