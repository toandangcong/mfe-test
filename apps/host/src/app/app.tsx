import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Cart = React.lazy(() => import('../remotes/Cart/Cart'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      Route of host app
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/cart/*" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
