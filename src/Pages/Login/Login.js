import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <LoginWrap>
      <LoginContainer>
        <LoginContent>
          <LoginBox></LoginBox>
        </LoginContent>
      </LoginContainer>
    </LoginWrap>
  );
}

export default Login;
