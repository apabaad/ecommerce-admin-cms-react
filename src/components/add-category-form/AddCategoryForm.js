import React, { useState } from 'react';
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const initialState = {
  name: '',
  parentCat: '',
};

export const AddCategoryForm = () => {
  const { isPending, catList } = useSelector((state) => state.category);
  const { newCat, setNewCat } = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewCat({
      ...newCat,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  //filter parent category only
  const parentCatOnly = catList.filter((row) => !row.parentCat);

  //filter child category only
  const childCat = catList.filter((row) => row.parentCat);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col md={5} className="mt-2">
            <FloatingLabel controlId="floatingSelect" label="Category">
              <Form.Control
                name="name"
                placeholder="Category name"
                onChange={handleOnChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={5} className="mt-2">
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Parent Category"
            >
              <Form.Select
                onChange={handleOnChange}
                aria-label="Floating label select example"
              >
                <option>Select Parent Category</option>
                {parentCatOnly.map((row, i) => (
                  <option key={row._id} value={row._id}>
                    {row.name}{' '}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <Button type="submit" size="lg">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
