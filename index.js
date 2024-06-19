import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="CRAVIO Logo" />
      </div>
      <div className="header-title">
        <span className="header-title-text">Cravio</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = ({ name, cuisine, costForOne, rating, eta, imageUrl }) => {
  return (
    <div className="res-card">
      <img className="res-logo" alt={`${name} logo`} src={imageUrl} />
      <div className="res-card-details">
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>₹{costForOne} for one</p>
      </div>
      <div className="rating-eta">
        <span className="rating">{rating}</span>
        <span className="eta">{eta}</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="restro-cards">
        <RestaurantCard
          name="Meghana Foods"
          cuisine="Biryani, South Indian, Chinese..."
          costForOne="150"
          rating="4.5"
          eta="30 min"
          imageUrl="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
        />
        <RestaurantCard
          name="KFC"
          cuisine="Chicken, Fast Food"
          costForOne="200"
          rating="4.2"
          eta="25 min"
          imageUrl="https://images.ctfassets.net/wtodlh47qxpt/2MisPscDV1k33qLnGwQ2il/14bdab6e4b9e25e1b91a8578df5097f2/CAT86"
        />
        <RestaurantCard
          name="McDonald's"
          cuisine="Burgers, Fast Food"
          costForOne="180"
          rating="4.0"
          eta="20 min"
          imageUrl="https://www.foodandwine.com/thmb/zaL9eyOyTgCjX99DFOhB3iG7YEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Worst-Time-to-Visit-McDonalds-FT-BLOG0823-711a27313d1a448baf4db4817310ff5d.jpg"
        />
        <RestaurantCard
          name="Taco Bell"
          cuisine="Mexican, Fast Food"
          costForOne="160"
          rating="4.3"
          eta="22 min"
          imageUrl="https://www.taco-bell.ro/wp-content/uploads/Meniuri_TACO_BIG-BELL-BOX.jpg"
        />
        <RestaurantCard
          name="Pizza Hut"
          cuisine="Pizza, Italian"
          costForOne="250"
          rating="4.1"
          eta="28 min"
          imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/190625100035-02-pizza-hut.jpg?q=w_1600,h_1201,x_0,y_0,c_fill"
        />
        <RestaurantCard
          name="Dominos"
          cuisine="Pizza, Fast Food"
          costForOne="180"
          rating="4.0"
          eta="25 min"
          imageUrl="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202310/untitled-1_61-sixteen_nine.jpg?size=948:533"
        />
        <RestaurantCard
          name="Burger King"
          cuisine="Burgers, Fast Food"
          costForOne="190"
          rating="4.2"
          eta="23 min"
          imageUrl="https://b.zmtcdn.com/data/pictures/chains/8/18138658/6352f382ab83cd6c458c3ad6c6fd1d60_featured_v2.jpg?fit=around|960:500&crop=960:500;*,*"
        />
        <RestaurantCard
          name="Starbucks"
          cuisine="Coffee, Beverages"
          costForOne="120"
          rating="4.7"
          eta="15 min"
          imageUrl="https://bsmedia.business-standard.com/_media/bs/img/article/2016-12/07/full/1481130851-7484.jpg"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
