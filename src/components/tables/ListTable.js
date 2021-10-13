import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  getProductsAction,
  deleteProductsAction,
} from '../../pages/product/productAction';

export const ListTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      dispatch(deleteProductsAction(_id));
    }
  };

  const handleOnEdit = (_id) => {};

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList?.length &&
            productList.map((row, i) => {
              return (
                <tr key={row._id}>
                  <td>{i + 1}</td>
                  <td>{row.status === true ? 'Online' : 'Offline'}</td>
                  <td>{row.title}</td>
                  <td>${row.price}</td>
                  <td>{row.qty}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => {
                        return handleOnEdit(row._id);
                      }}
                    >
                      {' '}
                      Edit
                    </Button>
                    <span className="ml-3">
                      <Button
                        variant="danger"
                        onClick={() => {
                          return handleOnDelete(row._id);
                        }}
                      >
                        Delete
                      </Button>
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
