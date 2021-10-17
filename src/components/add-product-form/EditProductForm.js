import React, { useState, useEffect } from 'react';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import GlobalForm from '../form-group/FromGroup';
import { useParams } from 'react-router-dom';
import {
  AddProductsAction,
  getSingleProductAction,
} from '../../pages/product/productAction';

const initialState = {
  status: false,
  title: '',
  price: 0,
  qty: 0,
  description: '',
  categories: '',
  salePrice: 0,
  saleStartDate: '',
  saleEndDate: '',
  brand: '',
};

const EditProductForm = () => {
  const dispatch = useDispatch();
  const { isPending, productResp, selectedProduct } = useSelector(
    (state) => state.product
  );
  const [updateProduct, setUpdateProduct] = useState(initialState);
  const { slug } = useParams();

  useEffect(() => {
    if (!selectedProduct._id || slug !== selectedProduct.slug) {
      dispatch(getSingleProductAction(slug));
    }

    setUpdateProduct(selectedProduct);
  }, [dispatch, slug, selectedProduct]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(AddProductsAction(updateProduct));
  };

  const handleOnChange = (e) => {
    const { checked, name, value } = e.target;

    // to change state of toggle button
    if (name === 'status') {
      return setUpdateProduct({
        ...updateProduct,
        status: checked,
      });
    }

    // to change the whole form state
    setUpdateProduct({
      ...updateProduct,
      [name]: value,
    });
  };
  const inputFields = [
    {
      label: 'Title',
      name: 'title',
      placeholder: 'Samsung Tv',
      required: true,
      value: updateProduct.title,
    },
    {
      label: 'Price',
      name: 'price',
      type: 'number',
      placeholder: '$$',
      value: updateProduct.price,
    },

    {
      label: 'Qty',
      name: 'qty',
      type: 'number',
      required: true,
      placeholder: '100',
      value: updateProduct.qty,
    },
    {
      label: 'Description',
      name: 'description',
      as: 'textarea',
      rows: 4,
      placeholder: 'This is this. That is that',
      value: updateProduct.description,
    },
    {
      label: 'Sale Price',
      name: 'salePrice',
      type: 'number',
      placeholder: '$$',
      required: true,
      value: updateProduct.salePrice,
    },
    {
      label: 'Sale Start Date',
      name: 'saleStartDate',
      type: 'date',
      value: updateProduct.saleStartDate
        ? updateProduct.saleStartDate.substr(0, 10)
        : null,
    },
    {
      label: 'Sale End Date',
      name: 'saleEndDate',
      type: 'date',
      value: updateProduct.saleEndDate
        ? updateProduct.saleEndDate.substr(0, 10)
        : null,
    },
    {
      label: 'Brand',
      name: 'brand',
      type: 'text',
      placeholder: 'Samsung',
      value: updateProduct.brand,
    },
  ];
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
          checked={updateProduct.status}
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

export default EditProductForm;
