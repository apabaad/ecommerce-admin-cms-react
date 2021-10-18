import React, { useEffect } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../pages/category/categoryAction';

const ProductCatList = ({ handleOnCatSelect, prodCategory }) => {
  const dispatch = useDispatch();
  const { catList } = useSelector((state) => state.category);

  useEffect(() => {
    !catList.length && dispatch(getCategories());
  }, [dispatch]);

  return (
    <div
      className="product-cat-list"
      style={{ height: '300px', overflow: 'scroll' }}
    >
      <ListGroup>
        {catList?.map((row) => (
          <ListGroup.Item key={row._id}>
            <Form.Check
              name="category"
              label={row.name}
              checked={prodCategory.includes(row._id)}
              onChange={handleOnCatSelect}
              defaultValue={row._id}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProductCatList;
