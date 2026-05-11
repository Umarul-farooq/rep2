import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import products from "../data/product";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    if (!normalizedQuery) return products;
    return products.filter((product) =>
      [product.name, product.description, product.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [searchQuery]);

  return (
    <section className="page home-page">
      <div className="page-header">
        <div>
          <h2>Home</h2>
          <p>Search products, explore categories, and build your cart.</p>
        </div>
        <input
          className="search-input"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search products..."
        />
      </div>

      <div className="category-links">
        {categories.map((category) => (
          <Link key={category} to={`/category/${category.toLowerCase()}`} className="category-pill">
            {category}
          </Link>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="empty-state">
          <h3>No products match your search</h3>
          <p>Try another keyword or browse a category.</p>
        </div>
      )}
    </section>
  );
}

export default Home;
