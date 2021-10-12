import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { Button } from 'react-bootstrap';
import { ListTable } from '../../components/tables/ListTable';
const Product = () => {
  return (
    <AdminLayout>
      <div className="p-2">
        <h1>Product</h1>
        <hr />
        <div className="text-end">
          <Button variant="primary" className="text-end">
            <i class="fas fa-plus"></i> Add new product
          </Button>
        </div>
        <hr />
        <div className="product-list">
          <ListTable />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Product;
