import "./CartItem.css";

function CartItem(props) {
  const { name, price, src } = props.item;
  const removeFromCart = props.removeFromCart;
  const uid = props.uid;

  return (
    <div className="CartItem">
      <div>
        <img alt={name} src={src} />
      </div>
      <div>{`$${price} - ${name}`}</div>
      <div>
        <button onClick={() => removeFromCart(uid)}>Delete</button>
      </div>
    </div>
  );
}

export default CartItem;
