import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.aalogics.com/sites/default/files/amazon-web-services-banner.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2 CMOS Sensor 3-Axis "
            price={799.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61H6sByGqbL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="4K 120Hz, 16GB RAM, 1TB SSD, CNC, Chroma RGB, Thunderbolt 3, SD Card Reader, Creator Ready"
            price={3699.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71lA9E6ak8L._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="
            All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
            price={59.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61JYD2iM5NL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="
            Frigidaire 3 Piece Kitchen Appliance Package"
            price={34076.07}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61nDnpolk0L._AC_SL1500_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen"
            price={749.99}
            rating={5}
            image="https://static.bhphoto.com/images/images500x500/samsung_c49hg90dmn_49_curved_va_panel_1500399545_1345182.jpg"
          />
          <Product
            id="23445930"
            title="Rustic Wall Sconces Mason Jar Sconces Handmade Wall Art Hanging Design with Remote Control LED"
            price={46.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71ck3ge7PYL._AC_SL1000_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Introducing Amazon Halo – Measure body composition, activity, sleep, and tone of voice - Winter + Silver - Medium"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/818YC9VB5lL._AC_SL1500_.jpg"
          />

          <Product
            id="49538094"
            title="Nikon Z5 Mirrorless Full Frame Camera Body with 24-50mm f/4-6.3 Lens Kit"
            price={1539.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BoTXFwqpL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="
            All-new Echo Frames (2nd Gen) | Smart glasses with open-ear audio and Alexa | Classic Black
            "
            price={249.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/416Fv71ownL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="
            HP Elite 8300 PC with 2 x 24 HP Monitors, Wireless Keyboard and Mouse, WiFi, Gel Mousepad, Intel i5, 8GB Memory, 480GB SSD Storage, Windows 10"
            price={559.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71RLwsjsGcL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <div className="home__row">
            <Product
              id="4903850"
              title="9Pc Rectangle 66/84 Inch Kitchen Table With 18 In Leaf And Eight Parson Chair"
              price={1019.65}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91%2BmOluGPjL._AC_SL1500_.jpg"
            />
            <Product
              id="23445930"
              title="Samsung Electronics Galaxy Watch 3 Titanium (45mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking"
              price={499.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71ejkOW4y2L._AC_SL1500_.jpg"
            />
            <Product
              id="3254354345"
              title="
            Jabra Elite Active 75t True Wireless Bluetooth Earbuds"
              price={149.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71l0f81doRL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
