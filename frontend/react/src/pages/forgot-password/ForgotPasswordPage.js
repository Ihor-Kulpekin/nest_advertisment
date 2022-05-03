import React from "react";

import forgotPasswordPage from './ForgotPassword.module.scss'
import ForgotPasswordFormComponent from "./components/ForgotPasswordForm.component";


const ForgotPasswordPage = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className={`${forgotPasswordPage.forgot_password} ${forgotPasswordPage.wrapper}`}>
      <ForgotPasswordFormComponent onSubmit={onSubmit} initialValues={{email: ''}}/>
    </div>
  );
}

export default ForgotPasswordPage;
