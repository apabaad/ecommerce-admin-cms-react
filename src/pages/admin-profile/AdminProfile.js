import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminLayout from '../Layout/AdminLayout';
import { getUserProfile } from '../admin-user/userAction';

const AdminProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    !user?._id && dispatch(getUserProfile());
  }, [dispatch, user]);
  return (
    <AdminLayout>
      <h1 className="text-center">Welcome, {user?.fname} </h1>
      <hr />
      <div className="edit-profile-form">
        <h2>Update profile information</h2>
        here will be user profile form
      </div>
      <hr />
      <div className="update-password-form">
        <h2>update password</h2>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
