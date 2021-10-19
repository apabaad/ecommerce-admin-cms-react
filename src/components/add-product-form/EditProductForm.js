import React, { useState, useEffect } from 'react';
import { Card, Col, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import GlobalForm from '../form-group/FromGroup';
import { useParams } from 'react-router-dom';
import ProductCatList from '../category-list/ProductCatList';
import {
  UpdateProductsAction,
  getSingleProductAction,
} from '../../pages/product/productAction';

const initialState = {
  status: false,
  title: '',
  price: 0,
  qty: 0,
  description: '',
  categories: '',
  salePrice: 0,
  saleStartDate: '',
  saleEndDate: '',
  brand: '',
};

const EditProductForm = () => {
  const dispatch = useDispatch();
  const [prodCategory, setProdCategory] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const { isPending, productResp, selectedProduct } = useSelector(
    (state) => state.product
  );
  const [updateProduct, setUpdateProduct] = useState(initialState);
  const { slug } = useParams();

  useEffect(() => {
    if (!selectedProduct._id || slug !== selectedProduct.slug) {
      dispatch(getSingleProductAction(slug));
    }

    setUpdateProduct(selectedProduct);
    selectedProduct?.categories && setProdCategory(selectedProduct.categories);
  }, [dispatch, slug, selectedProduct]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, slug, images, ...toUpdate } = updateProduct;

    // const filterImageList = images?.filter(itm => !imgToDelete.includes(itm)) //getting images that shouldnt be deleted

    toUpdate.categories = prodCategory;

    toUpdate.imgToDelete = imgToDelete;
    toUpdate.oldImages = images;

    const frmDt = new FormData();

    //append all the form state
    for (const key in toUpdate) {
      if (key === 'saleStartDate' || key === 'saleEndDate') {
        frmDt.append(key, toUpdate[key] ? toUpdate[key] : '');
        continue;
      }
      frmDt.append(key, toUpdate[key]);
    }

    // append images
    newImages.length &&
      [...newImages].map((img, i) => frmDt.append('images', img));

    dispatch(UpdateProductsAction(slug, frmDt));
    window.scrollTo(0, 0);
  };

  const handleOnChange = (e) => {
    const { checked, name, value, files } = e.target;

    if (files) {
      return setNewImages(files);
    }

    // to change state of toggle button
    if (name === 'status') {
      return setUpdateProduct({
        ...updateProduct,
        status: checked,
      });
    }

    // to change the whole form state
    setUpdateProduct({
      ...updateProduct,
      [name]: value,
    });
  };

  const handleOnCatSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (checked) {
      setProdCategory([...prodCategory, value]);
    } else {
      const arg = prodCategory.filter((id) => id !== value);
      setProdCategory(arg);
    }
  };
  const inputFields = [
    {
      label: 'Title',
      name: 'title',
      placeholder: 'Samsung Tv',
      required: true,
      value: updateProduct.title,
    },
    {
      label: 'Price',
      name: 'price',
      type: 'number',
      placeholder: '$$',
      value: updateProduct.price,
    },

    {
      label: 'Qty',
      name: 'qty',
      type: 'number',
      required: true,
      placeholder: '100',
      value: updateProduct.qty,
    },
    {
      label: 'Description',
      name: 'description',
      as: 'textarea',
      rows: 4,
      placeholder: 'This is this. That is that',
      value: updateProduct.description,
    },
    {
      label: 'Sale Price',
      name: 'salePrice',
      type: 'number',
      placeholder: '$$',
      required: true,
      value: updateProduct.salePrice,
    },
    {
      label: 'Sale Start Date',
      name: 'saleStartDate',
      type: 'date',
      value: updateProduct.saleStartDate
        ? updateProduct.saleStartDate.substr(0, 10)
        : null,
    },
    {
      label: 'Sale End Date',
      name: 'saleEndDate',
      type: 'date',
      value: updateProduct.saleEndDate
        ? updateProduct.saleEndDate.substr(0, 10)
        : null,
    },
    {
      label: 'Brand',
      name: 'brand',
      type: 'text',
      placeholder: 'Samsung',
      value: updateProduct.brand,
    },
    {
      label: 'Select Images',
      name: 'image',
      type: 'file',
      multiple: true,
      accept: 'image/*',
    },
  ];

  const handleOnImgDelete = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      // store in the local state
      setImgToDelete([...imgToDelete, value]);
    } else {
      //remove from the state array
      const obj = setImgToDelete.filter((src) => src !== value);
      setImgToDelete(obj);
    }
  };
  return (
    <div className="px-3">
      {isPending && <Spinner variant="info" animation="border" />}
      {productResp?.message && (
        <Alert
          variant={productResp.status === 'success' ? 'success' : 'danger'}
        >
          {productResp.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Status"
            name="status"
            checked={updateProduct.status}
            onChange={handleOnChange}
          />
        </Form.Group>

        {inputFields.map((row, i) => {
          return <GlobalForm {...row} onChange={handleOnChange} />;
        })}

        <Form.Group as={Row} className="mb-3">
          <div className="d-flex flex-wrap just-content-between">
            {updateProduct.images?.map((imgSrc, i) => (
              <div className="d-flex flex-column m-2">
                <img src={imgSrc} alt="product images" width="80px" key={i} />
                <Form.Check
                  label="Delete"
                  defaultValue={imgSrc}
                  onChange={handleOnImgDelete}
                  checked={imgToDelete.includes(imgSrc)}
                />
              </div>
            ))}
          </div>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Categories
          </Form.Label>
          <Col sm="9">
            <ProductCatList
              handleOnCatSelect={handleOnCatSelect}
              prodCategory={prodCategory}
            />
          </Col>
        </Form.Group>
        <Button variant="success" type="submit">
          Update product
        </Button>
      </Form>
    </div>
  );
};

export default EditProductForm;
