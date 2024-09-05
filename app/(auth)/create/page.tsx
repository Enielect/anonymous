import RegisterForm from "@/components/RegisterForm";
import React from "react";

const CreateAccountPage = () => {
  return (
    <div>
      <RegisterForm
        title="Create Account"
        remark="Join our platform today"
        path="/"
        firstLabel="Enter Email"
        secondLabel="Enter Password"
        buttonText="Log in"
      />
    </div>
  );
};

export default CreateAccountPage;
