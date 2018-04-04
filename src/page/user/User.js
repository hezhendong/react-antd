import React, { Component } from 'react';
import './User.css';
class User extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      size: 'large'
    }  
  }
  render() {
    return (
      <div className="User">
        this is User page
      </div>
    );
  }
}

export default User;
