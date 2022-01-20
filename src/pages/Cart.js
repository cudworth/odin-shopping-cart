import "./Cart.css";

function Cart(props) {
  const { items, cartItems, removeFromCart } = props;
  console.log({ cartItems });
  return (
    <div className="Cart">
      <div>Cart</div>
    </div>
  );
}

export default Cart;
