import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { Button } from 'react-bootstrap';
import { ListTable } from '../../components/tables/ListTable';
import EditProductForm from '../../components/add-product-form/EditProductForm';

const EditProduct = () => {
  return (
    <AdminLayout>
      <div className="p-2">
        <h1>Edit product</h1>
        <hr />
        <EditProductForm />
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
