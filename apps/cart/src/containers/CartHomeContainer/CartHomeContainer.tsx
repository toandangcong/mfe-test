import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavigationManager } from '../../HOC';

const CartHomeContainer = () => {
  return (
    <div>
      Route of remote cart app
      <ul>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/1">Product 1</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
      </ul>
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    </div>
  );
};

export default CartHomeContainer;
