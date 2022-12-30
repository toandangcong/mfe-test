import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REMOTE_APP_ROUTING_PREFIX } from '../../constants';
import { mount } from 'cart/Module';

const cartBaseName = `/${REMOTE_APP_ROUTING_PREFIX.CART}`;

console.log('mount cart: ', mount);

const Cart = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside remote cart app.
  useEffect(() => {
    const cartAppNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${cartBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      `[${REMOTE_APP_ROUTING_PREFIX.CART}] navigated`,
      cartAppNavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        `[${REMOTE_APP_ROUTING_PREFIX.CART}] navigated`,
        cartAppNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for host location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(cartBaseName)) {
      window.dispatchEvent(
        new CustomEvent('[host] navigated', {
          detail: location.pathname.replace(cartBaseName, ''),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);

  // Mount cart MFE
  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    mount({
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(cartBaseName, ''),
    });
    isFirstRunRef.current = false;
  }, [location]);

  return <div ref={wrapperRef} id="cart-mfe" />;
};

export default Cart;
