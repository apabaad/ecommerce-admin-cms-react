import './App.css';
import { Button } from 'react-bootstrap';
import { Registration } from './pages/admin-registration/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login } from './pages/login/Login.js';
import EmailVerification from './pages/email-verification/EmailVerification.js';

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

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
