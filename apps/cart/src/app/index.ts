import { mount } from '../bootstrap';

const localRoot = document.getElementById('cart-local');

mount({
  mountPoint: localRoot!,
  routingStrategy: 'browser',
});

export {};
