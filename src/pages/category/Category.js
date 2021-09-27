import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { AddCategoryForm } from '../../components/add-category-form/AddCategoryForm';
import CategoryList from '../../components/category-list/CategoryList.js';
import AdminLayout from '../Layout/AdminLayout';
import { getCategories } from './categoryAction';

const Category = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  });

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
          <CategoryList />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Category;
