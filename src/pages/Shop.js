import "./Shop.css";
import ShopItem from "../components/ShopItem";

function Shop(props) {
  const { items, addToCart } = props;

  function renderItems() {
    return Object.keys(items).map((key) => {
      return (
        <ShopItem key={key} uid={key} item={items[key]} addToCart={addToCart} />
      );
    });
  }

  return <div className="Shop">{renderItems()}</div>;
}

export default Shop;
