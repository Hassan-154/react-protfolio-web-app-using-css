import React from 'react';

const Order = () => {
  return (
    <div id="order">
      <div className="order-title">
        <h1>What We Serve</h1>
      </div>
      <div className="row">
        <div className="column1">
          <div className="brunch"/>
          <h1>Brunch</h1>
        </div>
        <div className="column2">
          <div className="dinner"/>
          <h1>Dinner</h1>
        </div>
        <div className="column3">
          <div className="party"/>
          <h1>Party</h1>
        </div>
      </div>
      <div class="row">
        <div class="call">
          <h2>Call Us</h2>
        </div>
        <div class="walk">
          <h2>Walk In</h2>
        </div>
        <div class="online">
          <h2>Order Online</h2>
        </div>
      </div>
    </div>
  );
}

export default Order;
