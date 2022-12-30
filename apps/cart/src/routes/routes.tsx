import { Outlet } from 'react-router-dom';
import {
  CartHomeContainer,
  PaymentContainer,
  ProductDetailContainer,
} from '../containers';
import { NavigationManager } from '../HOC';

const routes = [
  {
    path: '/',
    element: <CartHomeContainer />,
    children: [
      {
        path: ':id',
        element: <ProductDetailContainer />,
      },
      {
        path: 'payment',
        element: <PaymentContainer />,
      },
    ],
  },
];

export default routes;
