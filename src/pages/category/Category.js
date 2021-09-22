import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { AddCategoryForm } from '../../components/add-category-form/AddCategoryForm';
import AdminLayout from '../Layout/AdminLayout';

const Category = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1>Category</h1>
        <div className="add-cat-form">
          <AddCategoryForm />
        </div>
        <hr />
        <div className="cat-list">
          <h2>List all the cats</h2>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between">
              <span> Cras justo odio </span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginLeft: '1rem' }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span> Cras justo odio </span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginLeft: '1rem' }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Category;
