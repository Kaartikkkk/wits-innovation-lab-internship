function Cart({ cart, dispatch }) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-card">
            <div className="cart-header">
                <h2 className="cart-title">Your Cart</h2>
                {cart.length > 0 && (
                    <span className="cart-count-pill">
                        {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                    </span>
                )}
            </div>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <span className="cart-empty-emoji">🛒</span>
                    <p className="cart-empty-text">Your cart is empty</p>
                    <p className="cart-empty-sub">Add some trending items to get started!</p>
                </div>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div 
                                    className="cart-item-image" 
                                    style={{ background: item.gradient }}
                                >
                                    <span>{item.emoji}</span>
                                </div>
                                
                                <div className="cart-item-info">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-price-unit">
                                        ₹{item.price.toLocaleString("en-IN")} each
                                    </p>
                                </div>

                                <div className="cart-item-actions">
                                    <div className="quantity-controls">
                                        <button
                                            className="qty-btn"
                                            onClick={() =>
                                                dispatch({
                                                    type: "DECREASE",
                                                    payload: item.id,
                                                })
                                            }
                                        >
                                            −
                                        </button>
                                        <span className="qty-count">{item.quantity}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() =>
                                                dispatch({
                                                    type: "INCREASE",
                                                    payload: item.id,
                                                })
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <button
                                        className="trash-btn"
                                        title="Remove item"
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE",
                                                payload: item.id,
                                            })
                                        }
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="summary-row">
                            <span className="summary-label">Total Amount</span>
                            <span className="summary-value">₹{total.toLocaleString("en-IN")}</span>
                        </div>

                        <div className="cart-action-buttons">
                            <button 
                                className="btn btn-success btn-checkout"
                                onClick={() => alert("Checkout successful! Thank you.")}
                            >
                                Place Order
                            </button>
                            <button
                                className="btn btn-outline-danger btn-clear"
                                onClick={() =>
                                    dispatch({
                                        type: "CLEAR",
                                    })
                                }
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;