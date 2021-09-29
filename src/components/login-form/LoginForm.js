import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { adminLogin } from '../../pages/admin-user/userAction';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const from = location?.state?.from?.pathname || 'dashboard';

  const handleOnChange = (e) => {};

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin());
    history.replace(from);
  };

  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Admin User Registration</h1>

        {/* {isPending && <Spinner variant="primary" animation="border" />}
				{userResp?.message && (
					<Alert variant={userResp.status === "success" ? "success" : "danger"}>
						{userResp.message}
					</Alert>
				)} */}
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
