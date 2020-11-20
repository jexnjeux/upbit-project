import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../config/api";

function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      try {
        axios
          .post(`${api}/accounts/signin/`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("Authorization", res.data.Authorization);
              history.push("/");
            }
          });
      } catch (err) {
        console.log(err);
        alert("오류 발생!!");
      }
    }
  };
  return (
    <SignInWrap>
      <LoginContainer>
        <LoginContent>
          <Logo src="Images/wecoin_blue.svg" />
          <LoginText>
            방문하신 사이트의 주소가 일치하는지 확인해주세요.
          </LoginText>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput isError={errors.email}>
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                placeholder="이메일 입력하세요"
                name="email"
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.email && <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>}
            </FormInput>

            <FormInput isError={errors.password}>
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                name="password"
                ref={register({
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                })}
                type="password"
                placeholder="비밀번호 입력해주세요."
                autoComplete="off"
              />
              {errors.password && errors.password.type === "required" && (
                <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <ErrorMsg>
                  비밀번호는 8~20글자의 영문대소문자, 숫자, 특수문자를 조합해야
                  합니다.
                </ErrorMsg>
              )}
            </FormInput>
            <FormInput>
              <SubmitButton type="submit" className="btn btn-success">
                Sign in
              </SubmitButton>
            </FormInput>
          </Form>
        </LoginContent>
      </LoginContainer>
    </SignInWrap>
  );
}

export default SignIn;

const SignInWrap = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  background-color: #e9ecf1;
  height: 680px;
`;

const LoginContainer = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  width: 532px;
  background-color: #fff;
`;

const LoginContent = styled.div``;

const LoginText = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;
  color: #666;
  line-height: 22px;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 24px;
  width: 124px;
`;

const Form = styled.form`
  margin: 24px 0;
  width: 100%;
`;

const FormInput = styled.div`
  position: relative;
  ${({ theme }) => theme.flex(null, null, "column")};
  margin: 0 16px;
  margin-top: 20px;
  border-radius: 4px;
  label {
    margin-bottom: 8px;
    text-align: left;
  }
  /* isError - 에러 메세지가 있을 경우  */
  input {
    display: block;
    padding: 9px 12px;
    border: 1px solid ${({ isError }) => (isError ? "#a94442" : "#ddd")};
    border-radius: 4px;
    outline: 0;
    &:placeholder {
      color: #ddd;
    }
    &:focus {
      border: 1px solid ${({ isError }) => (isError ? "#a94442" : "#999999")};
      border-radius: 4px;
    }
  }
`;

const ErrorMsg = styled.p`
  display: block;
  margin-top: 8px;
  font-size: 13px;
  color: #a94442;
`;

const SubmitButton = styled.button`
  display: block;
  padding: 8px 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  outline: 0;
  border-radius: 4px;
  background-color: #0d498b;
  color: #fff;
`;
