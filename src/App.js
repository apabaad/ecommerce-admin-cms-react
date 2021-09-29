import './App.css';
import { Button } from 'react-bootstrap';
import { Registration } from './pages/admin-registration/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login.js';
import EmailVerification from './pages/email-verification/EmailVerification.js';
import Dashboard from './pages/dashboard/Dashboard';
import Category from './pages/category/Category';
import Payment from './pages/payment/Payment';
import Customer from './pages/customer/Customer';
import Product from './pages/product/Product';
import Order from './pages/order/Order';
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/registration">
            <Registration />
          </PrivateRoute>

          <Route path="/email-verification">
            <EmailVerification />
          </Route>

          <PrivateRoute path="/categories">
            <Category />
          </PrivateRoute>

          <PrivateRoute path="/products">
            <Product />
          </PrivateRoute>

          <PrivateRoute path="/payments">
            <Payment />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>

          <PrivateRoute path="/customers">
            <Customer />
          </PrivateRoute>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
