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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/email-verification">
            <EmailVerification />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/payments">
            <Payment />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
          <Route path="/customers">
            <Customer />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
