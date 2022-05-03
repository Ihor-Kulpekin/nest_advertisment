import React from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import registerForm from './RegisterForm.module.scss'
import loginFormStyles from "../../../components/forms/login-form/LoginForm.module.scss";
import InputComponent from "../../../components/input/Input.component";
import Button from "../../../components/button/Button";


const RegisterForm = ({initialValues, onSubmit}) => {
  return (
    <div className={registerForm.register_form}>
      <h1 className={loginFormStyles.title}>Register Form</h1>
      <Formik validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Too short')
          .required('Required')
      })} onSubmit={onSubmit} initialValues={initialValues}>{
        ({
           handleSubmit,
           values,
           errors,
           setFieldValue,
           setFieldError,
           isSubmitting,
         }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={loginFormStyles.input_block}>
                <InputComponent label="First Name" value={values.firstName} placeholder="First Name" onChange={(event)=>setFieldValue('firstName', event.target.value)} type="text" size="big"/>
                {errors.firstName ? <div className={registerForm.error_text}>{errors.firstName}</div> : null}
              </div>
              <div className={loginFormStyles.input_block}>
                <InputComponent label="Last Name" value={values.lastName} placeholder="Last Name" onChange={(event)=>setFieldValue('lastName', event.target.value)} type="text" size="big"/>
                {errors.lastName ? <div className={registerForm.error_text}>{errors.lastName}</div> : null}
              </div>
              <div className={loginFormStyles.input_block}>
                <InputComponent label="Email" value={values.email} placeholder="Email" onChange={(event)=>setFieldValue('email', event.target.value)} type="text" size="big"/>
                {errors.email ? <div className={registerForm.error_text}>{errors.email}</div> : null}
              </div>
              <div className={loginFormStyles.input_block}>
                <InputComponent label="Password" value={values.password} placeholder="Password" onChange={(event)=>setFieldValue('password', event.target.value)} type="text" size="big"/>
                {errors.password ? <div className={registerForm.error_text}>{errors.password}</div> : null}
              </div>
              <Button type="submit" text="Register"/>
            </form>
          )
        }
      }</Formik>
    </div>
  );
};

export default RegisterForm;
