import React from "react";
import RegisterForm from "@/app/components/RegisterForm";

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
    </div>
  );
};

export default Login;
