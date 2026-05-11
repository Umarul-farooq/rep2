function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>QuickCart</h1>
          <p>Your One Stop Shopping Destination</p>
        </div>
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          <span>{cartCount} item{cartCount !== 1 ? "s" : ""}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;