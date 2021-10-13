import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { Button } from 'react-bootstrap';
import { ListTable } from '../../components/tables/ListTable';
import AddProductForm from '../../components/add-product-form/AddProductForm';

const AddProduct = () => {
  return (
    <AdminLayout>
      <div className="p-2">
        <h1>Add new product</h1>
        <hr />
        <AddProductForm />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;
