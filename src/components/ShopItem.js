import "./ShopItem.css";

function ShopItem(props) {
  const { name, price, description, src } = props.item;
  const addToCart = props.addToCart;
  const uid = props.uid;

  return (
    <div className="ShopItem">
      <img src={src} alt={name} />
      <div className="shop-item-text">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <hr />
        </div>
        <div>{`Asking price:   $${price}`}</div>
        <div>{`Description provided:   ${description}`}</div>
        <div>
          <button onClick={() => addToCart(uid)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
