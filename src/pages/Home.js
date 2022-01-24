import "./Home.css";
import icon from "../assets/houseicon.png";

function Home(props) {
  return (
    <div className="Home">
      <div className="home-card">
        <img alt="TheHousingMarket Icon" src={icon} />
        <div className="home-text">
          <p>
            <b>Welcome to TheHousingMarket.com!</b>
          </p>
          <p>
            For those frustrated by the housing market, welcome! You have
            arrived at the premier vendor for inexpensive and obtainable
            housing. Simply add one of our advertised houses to your cart and
            proceed to checkout. Your deed will arrive via next-day delivery and
            you may occupy within 48 hours. Property titles are secured via NFT
            and require no additional insurance.
          </p>
          <p>Contact us with any questions at 867-5309</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
