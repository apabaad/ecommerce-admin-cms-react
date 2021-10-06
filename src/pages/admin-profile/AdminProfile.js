import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdminLayout from '../Layout/AdminLayout';
import { getUserProfile } from '../admin-user/userAction';
import { EditAdminProfile } from '../../components/edit-admin-profile/EditAdminProfile';

const AdminProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    !user?._id && dispatch(getUserProfile());
  }, [dispatch, user]);
  return (
    <AdminLayout>
      <div className="admin-profile-page p-2">
        <h1 className="text-center">Welcome, {user?.fname} </h1>
        <hr />
        <div className="edit-profile-form">
          <h2>Update profile information</h2>
          <EditAdminProfile />
          here will be user profile form
        </div>
        <hr />
        <div className="update-password-form">
          <h2>update password</h2>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
