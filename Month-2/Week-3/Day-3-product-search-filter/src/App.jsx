import { useEffect, useState } from "react";
import "./App.css";

import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = products;

    // Search Filter
    if (search !== "") {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    setFilteredProducts(result);
  }, [search, category]);

  return (
    <div className="container">
      <h1>Product Search & Filter</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Footwear</option>
          <option>Accessories</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default App;