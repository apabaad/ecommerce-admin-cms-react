import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Form,
  Row,
  Button,
  FloatingLabel,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { addNewCat } from '../../pages/category/categoryAction';

const initialState = {
  name: '',
  parentCat: '',
};

export const AddPaymentOptionForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* {isPending && <Spinner variant="primary" animation="border" />}
			{categoryResp.message && (
				<Alert
					variant={categoryResp.status === "success" ? "success" : "danger"}
				>
					{categoryResp.message}
				</Alert>
			)} */}

      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={2} className="mt-2">
            <Form.Check
              name="status"
              onChange={handleOnChange}
              label="Status"
              required
            />
          </Col>
          <Col md={2} className="mt-2">
            <Form.Control
              name="name"
              onChange={handleOnChange}
              placeholder="payment name"
              aria-label="payment name"
            />
          </Col>
          <Col md={6} className="mt-2">
            <Form.Control
              name="info"
              placeholder="Description"
              onChange={handleOnChange}
              aria-label="Description"
            />
          </Col>
          <Col className="mt-2">
            <Button type="submit" size="lg">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
