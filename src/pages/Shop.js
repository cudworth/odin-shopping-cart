import "./Shop.css";
import items from "./items";
import ShopItem from "../components/ShopItem";

function Shop(props) {
  function renderItems() {
    return Object.keys(items).map((key) => {
      return <ShopItem key={key} item={items[key]} />;
    });
  }

  return <div className="Shop">{renderItems()}</div>;
}

export default Shop;
