import React from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { PaymentOptionTable } from '../../components/payment-option-list/PaymentOptionTable';
import { AddPaymentOptionForm } from '../../components/add-payment-option-form/AddPaymentOptionForm';

const Payment = () => {
  return (
    <AdminLayout>
      <div>
        <h1>Payment Options</h1>
        <hr />
        <AddPaymentOptionForm />
        <hr />
        <PaymentOptionTable />
      </div>
    </AdminLayout>
  );
};

export default Payment;
