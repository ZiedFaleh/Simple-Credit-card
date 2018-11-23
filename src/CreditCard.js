import React, { Component } from 'react';
import logo from './images/world_c_background.jpg';
import logo2 from './images/e975bcbf3010e4600da8ebbe9ec3dcc5.png';
import logo3 from './images/s-l300.jpg';
import logo4 from './images/arrow_triangle_right_1238505.png'

function CreditCard ()
{


 return  (<header className="App-header">
          
    <img src={logo} className="backgroundpicture" alt="backgroundpicture" />
    <p className="title">
      CREDIT CARD
    </p>
    <img src={logo2} className="puce" alt="puce" />
    <div className="card-info">
    <div className="user-info">
    <p className="cc-number">
      7235  3256  7895  1245
    </p>
    <div className="validity">
    <p className="serie-number">
      5422
    </p>
    <div className="zone1">
    <p className="validity-txt">
      VALID<br/>THRU
    </p>
    <img src={logo4} className="arrow" alt="arrow" />
    <div className="zone2">
    <p className="validity-info">
      MONTH/YEAR
    </p>
    <p className="validity-date">
      11/50
    </p>
    </div>
    </div>
    </div>
    <p className="cardholder">
      CARDHOLDER
    </p>
    </div>
    <img src={logo3} className="cc-company" alt="cc-company" />
    </div>
  </header>)
}
export default CreditCard