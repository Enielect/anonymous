import React from "react";
import RegisterForm from "@/components/RegisterForm";
import InputMessage from "../../../components/card/InputMessage";
import ConfirmSend from "../../../components/card/ConfirmSend";

const Login = () => {
  return (
    <div>
      <RegisterForm
        title="Log in"
        remark="Log in to your account"
        path="/"
        firstLabel="Enter Email"
        secondLabel="Enter Password"
        buttonText="Log in"
      />
      {/* <InputMessage /> */}
      {/* <ConfirmSend /> */}
    </div>
  );
};

export default Login;
