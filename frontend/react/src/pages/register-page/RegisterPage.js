import React, { useState } from "react";
import { useDispatch } from "react-redux";

import registerPage from "./RegisterPage.module.scss";
import RegisterForm from "./components/RegisterForm";
import { registerUserRequest } from "../../actions/user.action";
import AlertComponent from "../../components/alert/Alert.component";


const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(registerUserRequest(values));

    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div className={`${registerPage.wrapper} ${registerPage.register}`}>
      <AlertComponent show={show} keyReducer="user" text="User was successfuly registered"/>
      <RegisterForm onSubmit={onSubmit} initialValues={{ firstName: "", lastName: "", email: "", password: "" }} />
    </div>
  );
};

export default RegisterPage;
