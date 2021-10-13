import React, { useState } from 'react';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import GlobalForm from '../form-group/FromGroup';

const initialState = {
  status: true,
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
  const [product, setProduct] = useState(initialState);
  return (
    <div>
      <Form>
        <Form.Check type="switch" id="custom-switch" label="Status" required />

        {inputFields.map((row, i) => {
          return <GlobalForm {...row} />;
        })}
        <Button variant="success" type="submit">
          Add new product
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
