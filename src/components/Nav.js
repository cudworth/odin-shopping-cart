import "./Nav.css";

import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="Nav">
      <Link to="/">The Fly Shop</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Nav;
