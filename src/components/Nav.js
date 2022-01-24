import "./Nav.css";

import { Link } from "react-router-dom";

function Nav(props) {
  const itemQty = props.cartItems.length;

  return (
    <div className="Nav">
      <Link to="/odin-shopping-cart/">TheHousingMarket</Link>
      <Link to="/odin-shopping-cart/shop">Shop</Link>
      <Link to="/odin-shopping-cart/cart">Cart ({itemQty})</Link>
    </div>
  );
}

export default Nav;
