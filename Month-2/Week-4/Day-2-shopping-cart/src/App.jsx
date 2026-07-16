import { useReducer } from "react";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { cartReducer, initialState } from "./reducer/cartReducer";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    emoji: "💻",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    emoji: "📱",
    gradient: "linear-gradient(135deg, #a855f7, #6d28d9)",
  },
  {
    id: 3,
    name: "Headphones",
    price: 4000,
    emoji: "🎧",
    gradient: "linear-gradient(135deg, #f59e0b, #b45309)",
  },
];

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">GizmoCart</span>
          </div>
          <div className="cart-status">
            <div className="cart-status-badge">
              <span className="icon">🛒</span>
              <span className="badge-count">{totalItems}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="products-column">
          <h2 className="column-title">Trending Tech</h2>
          <div className="products-grid">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="cart-column">
          <Cart
            cart={state.cart}
            dispatch={dispatch}
          />
        </div>
      </main>
    </div>
  );
}

export default App;