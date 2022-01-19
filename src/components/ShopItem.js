import "./ShopItem.css";

function ShopItem(props) {
  const { name, price, description, src } = props.item;

  return (
    <div className="ShopItem">
      <img src={src} alt={name} />
      <div className="shop-item-text">
        <div>{`${name} - $${price}`}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default ShopItem;
