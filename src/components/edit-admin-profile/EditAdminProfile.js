import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

export const EditAdminProfile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const handleOnSubmit = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    e.preventDefault();
  };

  const handleOnChange = (e) => {};

  return (
    <Card className="p-2">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            First Name *
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="fname"
              value={userInfo.fname}
              placeholder="Sam"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Last Name *
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="lname"
              value={userInfo.lname}
              placeholder="Smith"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            DOB
          </Form.Label>
          <Col sm="9">
            <Form.Control type="date" name="dob" onChange={handleOnChange} />
            value = {userInfo.dob}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Email *
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="email"
              name="email"
              value={userInfo.email}
              placeholder="your@email.com"
              required
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Password *
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Phone
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="phone"
              placeholder="0410000000"
              onChange={handleOnChange}
              value={userInfo.phone}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Address
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="address"
              placeholder="Sydney, 2000"
              onChange={handleOnChange}
              value={userInfo.address}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 mt-3">
          <Form.Label column sm="3">
            Gender
          </Form.Label>
          <Col sm="9">
            <InputGroup>
              <InputGroup.Radio
                name="gender"
                value="male"
                aria-label="Male"
                onChange={handleOnChange}
                value={userInfo.gender}
              />
              <Form.Label>Male</Form.Label>

              <InputGroup.Radio
                name="gender"
                value="female"
                aria-label="Female"
                onChange={handleOnChange}
              />
              <Form.Label>Female</Form.Label>
            </InputGroup>
          </Col>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="primary" size="lg">
            Update Profile
          </Button>
        </div>
      </Form>
    </Card>
  );
};
