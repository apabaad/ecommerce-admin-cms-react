import React from 'react';
import { ListGroup, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CategoryList = () => {
  const { isPending, catList } = useSelector((state) => state.category);

  return (
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}
      <ListGroup>
        {catList?.length &&
          catList.map((row) => (
            <ListGroup.Item className="d-flex justify-content-between">
              <span> {row.name} </span>
              <span>
                <Button variant="primary">Edit</Button>
                <Button variant="danger" style={{ marginLeft: '1rem' }}>
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
          ))}

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
  );
};

export default CategoryList;
