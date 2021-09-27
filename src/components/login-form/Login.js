import React from 'react';
import { Card } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <Card className="p-5 mt-4">
        <h1>Admin User Registration</h1>

        {/* {isPending && <Spinner variant="primary" animation="border" />}
        {userResp?.message && (
          <Alert variant={userResp.status === 'success' ? 'success' : 'danger'}>
            {userResp.message}
          </Alert>
        )} */}
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Email
            </Form.Label>

            <Col sm="9">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              Registration
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
