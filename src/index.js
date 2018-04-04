import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './commen/css/reset.css';
import App from './App';
import Shop from './page/shop/Shop';



import Cart from './page/cart/Cart';


import User from './page/user/User';



import Home from './page/home/Home';
import AddressBook from './page/home/homechild/addressBook/AddressBook';


import { Router , hashHistory ,Route ,Redirect ,IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Redirect from="/" to="/home" /> 
    <Router path="/app" component={App} >
    	<IndexRoute component={Home} />
    	<Route path="/home" component={Home} >
    		<IndexRoute component={AddressBook} />
    		<Route path="/home/addressbook" component={AddressBook} / >
    	</Route>
    	<Route path="/shop" component={Shop} / >
    	<Route path="/cart" component={Cart} / >
    	<Route path="/user" component={User} / >
   	</Router>
  </Router>,
	document.getElementById('root'));
registerServiceWorker();
