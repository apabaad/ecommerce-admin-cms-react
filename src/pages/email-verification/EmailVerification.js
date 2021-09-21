import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verifyUserEmail } from '../admin-user/userAction';

const EmailVerification = () => {
  const dispatch = useDispatch();
  const queries = new URLSearchParams(useLocation().search);

  const { isPending, emailVerificationResp } = useSelector(
    (state) => state.user
  );

  const otp = queries.get('otp');
  const email = queries.get('email');
  console.log(otp, email);

  useEffect(() => {
    //call acting to call api
    dispatch(verifyUserEmail({ otp, email }));
  }, [dispatch, otp, email]);

  return (
    <div className="text-center mt-5">
      <h2>Validation email</h2>
      {isPending && <Spinner variant="primary" animation="border" />}
      {emailVerificationResp.message && (
        <Alert>
          {' '}
          variant=
          {emailVerificationResp.status === 'success' ? 'success' : 'danger'}
          {emailVerificationResp.message}
        </Alert>
      )}
    </div>
  );
};

export default EmailVerification;
