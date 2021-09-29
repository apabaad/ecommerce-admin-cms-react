import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { adminLogin } from '../../pages/admin-user/userAction';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const initialState = {
    email: 'ee3h@a.com',
    password: 'password',
  };

  const { isPending, userResp, isLoggedIn } = useSelector(
    (state) => state.user
  );

  const [loginInfo, setLoginInfo] = useState(initialState);

  const from = location?.state?.from?.pathname || 'dashboard';

  useEffect(() => {
    isLoggedIn && history.replace(from);
  }, [isLoggedIn, history, from]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      return alert('please input both email or password');
    }
    dispatch(adminLogin(loginInfo));
  };

  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Admin User Registration</h1>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === 'success' ? 'success' : 'danger'}>
            {userResp.message}
          </Alert>
        )}{' '}
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={loginInfo.email}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Password *
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength="6"
                value={loginInfo.password}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button type="submit" variant="primary" size="lg">
              Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
