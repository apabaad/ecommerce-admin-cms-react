import React from 'react';
import { AdminRegForm } from '../../components/registration-form/AdminRegForm';
import AdminLayout from '../Layout/AdminLayout';

export const Registration = () => {
  return (
    <AdminLayout>
      <AdminRegForm />
    </AdminLayout>
  );
};
