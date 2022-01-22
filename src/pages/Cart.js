import "./Cart.css";

import CartItem from "../components/CartItem";

function Cart(props) {
  const { items, cartItems, removeFromCart } = props;

  function renderSubtotal() {
    if (!cartItems.length) {
      return null;
    } else {
      const subtotal = cartItems.reduce((prev, key) => {
        return prev + items[key].price;
      }, 0);

      return (
        <div className="subtotal">
          <div>
            <h2>{`Subtotal: $${subtotal}`}</h2>
          </div>
          <div>
            <button
              onClick={() =>
                window.alert("Checkout feature has not been implemented.")
              }
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      );
    }
  }

  function renderItems() {
    if (!cartItems.length) {
      return <h3>Your cart is empty.</h3>;
    } else {
      return (
        <div>
          {cartItems.map((key) => {
            return (
              <CartItem
                key={`cart_item_${key}`}
                uid={key}
                item={items[key]}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className="Cart">
      {renderSubtotal()}
      {renderItems()}
    </div>
  );
}

export default Cart;
