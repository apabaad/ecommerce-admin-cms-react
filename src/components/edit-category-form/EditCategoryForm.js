import React, { useState, useEffect } from 'react';
import {
  Col,
  Form,
  Row,
  Button,
  FloatingLabel,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { categoryUpdate } from '../../pages/category/categoryAction';
import CustomModal from '../custom-modal/CustomModal';
import { onDeSelectCategory } from '../../pages/category/categorySlice';

const initialState = {
  name: '',
  parentCat: '',
};

export const EditCategoryForm = () => {
  const dispatch = useDispatch();
  const { isPending, selectedCat, catList, categoryResp } = useSelector(
    (state) => state.category
  );
  const [updateCat, setUpdateCat] = useState({});

  useEffect(() => {
    setUpdateCat(selectedCat);
  }, [selectedCat]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdateCat({
      ...updateCat,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, name, parentCat } = updateCat;
    if (name !== selectedCat.name || parentCat !== selectedCat.parentCat) {
      dispatch(categoryUpdate({ _id, name, parentCat }));
      return;
    }
    alert('Nothing has changed');
  };

  //filter parent category only
  const parentCatOnly = catList?.filter((row) => !row.parentCat);

  //filter child category only
  // const childCat = catList.filter((row) => row.parentCat);

  return (
    <CustomModal
      show={selectedCat._id}
      onHide={() => dispatch(onDeSelectCategory())}
    >
      <div>
        {isPending && <Spinner variant="primary" animation="border" />}

        {categoryResp?.message && (
          <Alert
            variant={categoryResp.status === 'success' ? 'success' : 'danger'}
          >
            {categoryResp.message}{' '}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Col md={5} className="mt-2">
              <FloatingLabel controlId="floatingSelect" label="Category">
                <Form.Control
                  name="name"
                  value={updateCat.name}
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
                  name="parentCat"
                >
                  <option value="">Select Parent Category</option>
                  {parentCatOnly?.map((row, i) => (
                    <option
                      key={row._id}
                      value={row._id}
                      selected={row._id === updateCat._id}
                    >
                      {row.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button type="submit" size="lg">
                Update Category
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </CustomModal>
  );
};
