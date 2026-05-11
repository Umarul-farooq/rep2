import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./styles/style.css";

function App() {
  return (
    <div>
      <Header />

      <ProductList products={products} />
    </div>
  );
}

export default App;