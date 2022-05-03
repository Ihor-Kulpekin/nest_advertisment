import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import changePasswordStyles from './ChangePassword.module.scss';
import Button from "../../../../components/button/Button";
import { changePasswordRequest } from "../../../../actions/user.action";
import AlertComponent from "../../../../components/alert/Alert.component";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const {user} = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(changePasswordRequest({
      password: values.newPassword,
      history
    }))

    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }

  return (
    <div className={changePasswordStyles.change_password}>
      <AlertComponent show={show} keyReducer="user" text="Password was successfuly changed"/>
      <div className={changePasswordStyles.heading_text}>To change your password you need to input your old password and twice new password</div>
      <Formik
        onSubmit={onSubmit}
        initialValues={{oldPassword: '', newPassword: '', confirmPassword: ''}}
        validate={(values) => {
          const errors = {};

          if (!values.oldPassword) {
            errors.oldPassword = 'Required';
          } else if (values.oldPassword !== user.password) {
            errors.oldPassword = 'Old Password is not correct';
          }

          if (!values.newPassword) {
            errors.newPassword = 'Required';
          } else if (values.newPassword.length<8){
            errors.newPassword = 'New Password has to have at least 8 symbols';
          } else if (values.newPassword === values.oldPassword) {
            errors.newPassword = 'New Password has not to be equal to old password';
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
          } else if (values.confirmPassword !== values.newPassword) {
            errors.confirmPassword = 'Confirm password is not equal to new password';
          }

          return errors;
        }}
      >
        {
          ({
            handleSubmit,
            values,
            errors,
            setFieldValue,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className={changePasswordStyles.profiles_data_item}>
                  <label className={changePasswordStyles.label}>Old Password</label>
                  <input onChange={(event) => setFieldValue('oldPassword', event.target.value)} className={changePasswordStyles.input_profile} type="text" value={values.oldPassword}/>
                  {errors.oldPassword ? <div className={changePasswordStyles.error_text}>{errors.oldPassword}</div> : null}
                </div>
                <div className={changePasswordStyles.profiles_data_item}>
                  <label className={changePasswordStyles.label}>New Password</label>
                  <input onChange={(event) => setFieldValue('newPassword', event.target.value)} className={changePasswordStyles.input_profile} type="text" value={values.newPassword}/>
                  {errors.newPassword ? <div className={changePasswordStyles.error_text}>{errors.newPassword}</div> : null}
                </div>
                <div className={changePasswordStyles.profiles_data_item}>
                  <label className={changePasswordStyles.label}>Confirm New Password</label>
                  <input onChange={(event) => setFieldValue('confirmPassword', event.target.value)}  className={changePasswordStyles.input_profile} type="text" value={values.confirmPassword}/>
                  {errors.confirmPassword ? <div className={changePasswordStyles.error_text}>{errors.confirmPassword}</div> : null}
                </div>
                <Button text="Change Password" type="submit"/>
              </form>
            )
          }
        }
      </Formik>
    </div>
  );
};

export default ChangePassword;
