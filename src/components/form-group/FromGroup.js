import React from 'react';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';

const GlobalForm = ({ label, ...rest }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="9">
        <Form.Control {...rest} />
      </Col>
    </Form.Group>
  );
};

export default GlobalForm;
