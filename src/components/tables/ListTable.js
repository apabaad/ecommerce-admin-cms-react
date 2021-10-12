import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsAction } from '../../pages/product/productAction';

export const ListTable = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

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
            <th>Edit</th>
            <th>Delete</th>
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
                  <td>{row.price}</td>
                  <td>{row.qty}</td>
                  <td>
                    <Button variant="info">Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
