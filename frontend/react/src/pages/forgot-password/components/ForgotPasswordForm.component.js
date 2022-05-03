import React from "react";

import formStyles from "../../../common/forms.module.scss";
import forgotPasswordStyles from "./ForgotPasswordForm.module.scss";
import * as Yup from "yup";
import InputComponent from "../../../components/input/Input.component";
import Button from "../../../components/button/Button";
import { Formik } from "formik";

const ForgotPasswordFormComponent = ({ onSubmit, initialValues }) => {
  return (
    <div className={forgotPasswordStyles.forgot_password_form}>
      <h1 className={formStyles.title}>Forgot Password Form</h1>
      <Formik validationSchema={Yup.object().shape({
        email: Yup
          .string()
          .email("Invalid email")
          .required("Required")
      })} onSubmit={onSubmit} initialValues={initialValues}>{
        ({
           handleSubmit,
           values,
           errors,
           setFieldValue
         }) => {
          return (
            <form onSubmit={handleSubmit}>
              <InputComponent error={errors.email} label="Email" value={values.email} placeholder="Email"
                              onChange={(event) => setFieldValue("email", event.target.value)} type="text" size="big" />
              <Button type="submit" text="Sent" />
            </form>
          );
        }
      }</Formik>
    </div>
  );
};

export default ForgotPasswordFormComponent;
