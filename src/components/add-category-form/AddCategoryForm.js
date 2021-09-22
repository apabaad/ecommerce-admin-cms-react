import React from 'react';
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';

export const AddCategoryForm = () => {
  const categories = [
    { _id: 1, name: 'Grocery', slug: 'grocery', parentCat: '' },
    { _id: 2, name: 'Milk', slug: 'grocery', parentCat: '1' },
    { _id: 3, name: 'Electronic', slug: 'grocery', parentCat: '' },
    { _id: 4, name: 'Laptop', slug: 'grocery', parentCat: '3' },
    { _id: 5, name: 'Mobile', slug: 'grocery', parentCat: '3' },
  ];
  const handleOnChange = (e) => {};

  //filter parent category only
  const parentCatOnly = categories.filter((row) => !row.parentCat);
  //filter child category only
  const childCat = categories.filter((row) => row.parentCat);
  return (
    <div>
      <Form>
        <Row>
          <Col md={5} className="mt-2">
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Control
                name="name"
                placeholder="Category name"
                onChange={handleOnChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={5}>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Parent Category"
            >
              <Form.Select aria-label="Floating label select example">
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
