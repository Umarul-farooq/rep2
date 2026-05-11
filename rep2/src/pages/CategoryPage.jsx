import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import products from "../data/product";

function CategoryPage() {
  const { categoryName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedCategory = categoryName?.toLowerCase() || "";
  const categoryProducts = useMemo(
    () =>
      products.filter(
        (product) => product.category.toLowerCase() === normalizedCategory
      ),
    [normalizedCategory]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    if (!normalizedQuery) return categoryProducts;
    return categoryProducts.filter((product) =>
      [product.name, product.description, product.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [searchQuery, categoryProducts]);

  return (
    <section className="page category-page">
      <div className="page-header">
        <div>
          <h2>{categoryProducts.length > 0 ? categoryProducts[0].category : "Category"}</h2>
          <p>Browse products in this category and refine with search.</p>
        </div>
        <input
          className="search-input"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search in category..."
        />
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>
            {categoryProducts.length === 0
              ? "This category does not contain any products yet."
              : "Try a different search term or go back to the home page."}
          </p>
          <Link to="/" className="back-button">
            Back to Home
          </Link>
        </div>
      )}
    </section>
  );
}

export default CategoryPage;
