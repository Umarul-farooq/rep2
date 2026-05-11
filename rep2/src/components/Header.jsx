import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>QuickCart</h1>
          <p>Your one-stop shopping destination</p>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart ({totalItems})
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
