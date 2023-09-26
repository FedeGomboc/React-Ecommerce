import React from "react";

export default function Carrito() {
  return (
    <div className="body">
      <div className="cart-container">
        <div className="header">
        <h3 className="heading">Shopping Cart</h3>
        <h5 className="action">Remove all</h5>
        </div>
        <div class="Cart-Items">
 <div class="image-box">
 <img src="images/apple.png" style={{ height="120px" }} />
 </div>
 <div class="about">
 <h1 class="title">Apple Juice</h1>
 <h3 class="subtitle">250ml</h3>
 <img src="images/veg.png" style={{ height="30px" }}/>
 </div>
 <div class="counter"></div>
 <div class="prices"></div>
 </div>
      </div>
    </div>
  );
}
