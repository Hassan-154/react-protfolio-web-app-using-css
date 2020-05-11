import React from 'react';

const Dining = () => {
  return (
    <div className="dining">
      <div id="dining">
        <div className="dining-banner">
          <h1>Book your table Now</h1>
        </div>
      </div>
      <div className="dining-info">
        <h1>Fabulous Dining at LA 16</h1>
        <p>Whether entertaining a select group or hosting a large reception throughout the entire restaurant, LA 16 offers a number of options suitable for any occasion or event. A dedicated staff ensures that every detail of your event is attended to.</p>
      </div>
      <div className="dining-select">
        <div class="one">
          <div className="dining-select-banner">
            <h1>Regular Dining Table</h1>
          </div>
        </div>
        <div class="two">
          <div className="dining-select-banner">
            <h1>Exclusive Dining Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dining;
