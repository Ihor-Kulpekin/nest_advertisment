import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";

import loginFormStyles from "./LoginForm.module.scss";
import formStyles from "../../../common/forms.module.scss";

import InputComponent from "../../input/Input.component";
import Button from "../../button/Button";

const LoginForm = ({ initialValues, onSubmit, error }) => {
  return (
    <div className={loginFormStyles.login_form}>
      <h1 className={formStyles.title}>Login Form</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({
            handleSubmit,
            values,
            errors,
            setFieldValue,
          }) => {
          return (
            <form onSubmit={handleSubmit}>
              <InputComponent error={errors.email} label="Email" value={values.email} placeholder="Email"
                              onChange={(event) => setFieldValue("email", event.target.value)} type="text" size="big" />
              <InputComponent error={errors.password} label="Password" value={values.password} placeholder="Password (at least 8 symbols)"
                              onChange={(event) => setFieldValue("password", event.target.value)} type="text"
                              size="big" />
              <Button type="submit" text="Login" />
            </form>
          );
        }}
      </Formik>
      <div className={loginFormStyles.controlls_elements_block}>
        <NavLink to="/register">
          <div className={loginFormStyles.contolls_element}>Register</div>
        </NavLink>
        <NavLink to="/forgot-password">
          <div className={loginFormStyles.contolls_element}>Forgot Password?</div>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
