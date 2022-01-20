import "./Nav.css";

import { Link } from "react-router-dom";

function Nav(props) {
  const itemQty = props.cartItems.length;

  return (
    <div className="Nav">
      <Link to="/">TheHousingMarket</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({itemQty})</Link>
    </div>
  );
}

export default Nav;
