import React, { useState } from 'react';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import GlobalForm from '../form-group/FromGroup';
import { AddProductsAction } from '../../pages/product/productAction';

const initialState = {
  status: false,
  title: 'samg tv',
  price: 500,
  qty: 50,
  description: 'Save your money',
  categories: 'electoronics',
  salePrice: 0,
  saleStartDate: '',
  saleEndDate: '',
  brand: 'samsung',
};

const inputFields = [
  {
    label: 'Title',
    name: 'title',
    placeholder: 'Samsung Tv',
    required: true,
  },
  {
    label: 'Price',
    name: 'price',
    type: 'number',
    placeholder: '$$',
  },

  {
    label: 'Qty',
    name: 'qty',
    type: 'number',
    required: true,
    placeholder: '100',
  },
  {
    label: 'Description',
    name: 'description',
    as: 'textarea',
    rows: 4,
    placeholder: 'This is this. That is that',
  },
  {
    label: 'Sale Price',
    name: 'salePrice',
    type: 'number',
    placeholder: '$$',
    required: true,
  },
  {
    label: 'Sale Start Date',
    name: 'saleStartDate',
    type: 'date',
  },
  {
    label: 'Sale End Date',
    name: 'saleEndDate',
    type: 'date',
  },
  {
    label: 'Brand',
    name: 'brand',
    type: 'text',
    placeholder: 'Samsung',
  },
];
const AddProductForm = () => {
  const dispatch = useDispatch();
  const { isPending, productResp } = useSelector((state) => state.product);
  const [product, setProduct] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(AddProductsAction(product));
  };

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;
    console.log(checked, name, value);

    // to change state of toggle button
    if (name === 'status') {
      return setProduct({
        ...product,
        status: checked,
      });
    }

    // to change the whole form state
    setProduct({
      ...product,
      [name]: value,
    });
  };
  return (
    <div className="px-3">
      {isPending && <Spinner variant="info" animation="border" />}
      {productResp?.message && (
        <Alert
          variant={productResp.status === 'success' ? 'success' : 'danger'}
        >
          {productResp.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Status"
          name="status"
          required
          onChange={handleOnChange}
        />

        {inputFields.map((row, i) => {
          return <GlobalForm {...row} onChange={handleOnChange} />;
        })}
        <Button variant="success" type="submit">
          Add new product
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
