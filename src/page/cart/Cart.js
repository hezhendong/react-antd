import React, { Component } from 'react';
import './Cart.css';
class Cart extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large'
    }  
  }
  render() {
    return (
      <div className="Cart">
        this is Cart page
      </div>
    );
  }
}

export default Cart;
