import "./Shop.css";
import ShopItem from "../components/ShopItem";

function Shop(props) {
  const { items, addToCart } = props;

  function renderItems() {
    return (
      <div>
        {Object.keys(items).map((key) => {
          return (
            <ShopItem
              key={`shop_item_${key}`}
              uid={key}
              item={items[key]}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    );
  }

  return <div className="Shop">{renderItems()}</div>;
}

export default Shop;
