import React from 'react';
import { ListGroup, Button, Spinner, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCat } from '../../pages/category/categoryAction';
import { onCategorySelect } from '../../pages/category/categorySlice';
import { EditCategoryForm } from '../edit-category-form/EditCategoryForm';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);

  //filter parent category only
  const parentCatOnly = catList.filter((row) => !row.parentCat);

  //filter child category only
  const childCat = catList.filter((row) => row.parentCat);

  const handleOnDelete = (catId) => {
    // make sure that parent cat doesnt have child before deleting
    const hasChildCat = childCat.some((item) => item.parentCat === catId);
    if (hasChildCat) {
      return alert(
        'This category has some child categories. Remove them or reassign to another category before deleting.'
      );
    }

    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteCat(catId));
    }
  };

  return (
    <div>
      <EditCategoryForm />
      {isPending && <Spinner variant="primary" animation="border" />}
      <ListGroup>
        {parentCatOnly?.length &&
          parentCatOnly.map((row) => (
            <div key={row._id}>
              <ListGroup.Item className="d-flex justify-content-between">
                <span> {row.name} </span>
                <span>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(onCategorySelect(row))}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      return handleOnDelete(row._id);
                    }}
                    variant="danger"
                    style={{ marginLeft: '1rem' }}
                  >
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>

              {childCat?.length &&
                childCat.map(
                  (item) =>
                    item.parentCat === row._id && (
                      <ListGroup.Item
                        key={item._id}
                        className="d-flex justify-content-between"
                      >
                        <span> =&gt; {item.name} </span>
                        <span>
                          <Button
                            onClick={() => dispatch(onCategorySelect(item))}
                            variant="primary"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => {
                              return handleOnDelete(item._id);
                            }}
                            variant="danger"
                            style={{ marginLeft: '1rem' }}
                          >
                            Delete
                          </Button>
                        </span>
                      </ListGroup.Item>
                    )
                )}
            </div>
          ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
