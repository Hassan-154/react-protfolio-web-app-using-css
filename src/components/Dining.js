import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

const Dining = () => {
  return (
    <div className="dining">
      <div id="dining">
        <div className="banner">
          <h1>Book your table now</h1>
        </div>
      </div>
      <div className="dining-info">
        <h1>Fabulous Dining at LA 16</h1>
        <p>Whether entertaining a select group or hosting a large reception throughout the entire restaurant, LA 16 offers a number of options suitable for any occasion or event. A dedicated staff ensures that every detail of your event is attended to.</p>
        <h2>Book the best one here</h2>
      </div>
      <div className="dining-select">
        <Link smooth to="#login" class="one">
          <div className="card">
            <h1>Regular Dining</h1>
            <div className="price">
              <p>$799</p>
            </div>
          </div>
        </Link>
        <Link smooth to="#login" class="two">
          <div className="card">
            <h1>Exclusive Dining</h1>
            <div className="price">
              <p>$1199</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dining;
