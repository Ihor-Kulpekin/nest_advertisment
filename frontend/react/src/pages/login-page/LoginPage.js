import React, { useState } from "react";

import loginPageStyles from './LoginPage.module.scss'
import LoginForm from "../../components/forms/login-form/LoginForm.component";
import { useDispatch } from "react-redux";
import { useErrors } from "../../hooks/useErrors";
import { loginUserFailed, loginUserRequest, loginUserSuccess } from "../../actions/user.action";
import AlertComponent from "../../components/alert/Alert.component";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/user.api";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {error} = useErrors('user');

  const history = useHistory();

  const onSubmit = async (values) => {
    dispatch(loginUserRequest({ values, history, setShow }))
  }

  return (
    <div className={`${loginPageStyles.wrapper} ${loginPageStyles.login_page}`}>
      <AlertComponent show={show} keyReducer="user"/>
      <LoginForm error={error} initialValues={{email: '', password: ''}} onSubmit={onSubmit}/>
    </div>
  );
};

export default LoginPage;
