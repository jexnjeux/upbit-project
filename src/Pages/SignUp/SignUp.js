import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../config/api";

function SignUp() {
  const { register, handleSubmit, errors, watch } = useForm();
  const history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);
    if (data) {
      try {
        axios
          .post(`${api}/accounts/signup`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.status === 200) {
              history.push("/signin");
            }
          });
      } catch (err) {
        console.log(err);
        alert("오류 발생!!");
      }
    }
  };
  return (
    <SignUpWrap>
      <SignUpContainer>
        <SignUpContent>
          <Logo src="Images/wecoin_blue.svg" />
          <SignUpText>
            방문하신 사이트의 주소가 일치하는지 확인해주세요.
          </SignUpText>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput isError={errors.user_name}>
              <label htmlFor="user_name">닉네임</label>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                name="user_name"
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.user_name && <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>}
            </FormInput>

            <FormInput isError={errors.user_email}>
              <label htmlFor="user_email">아이디</label>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                name="user_email"
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.user_email && <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>}
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
            <FormInput isError={errors.rePasswrod}>
              <label htmlFor="rePassword">비밀번호 재입력</label>
              <input
                type="password"
                placeholder="한번 더 입력해주세요."
                name="rePassword"
                ref={register({
                  required: true,
                  validate: (value) =>
                    value === watch("password") ||
                    "비밀번호가 일치하지 않습니다",
                })}
                autoComplete="off"
              />
              {errors.rePassword && (
                <ErrorMsg>{errors.rePassword.message}</ErrorMsg>
              )}
            </FormInput>
            <FormInput>
              <SubmitButton type="submit" className="btn btn-success">
                Sign up
              </SubmitButton>
            </FormInput>
          </Form>
        </SignUpContent>
      </SignUpContainer>
    </SignUpWrap>
  );
}

export default SignUp;

const SignUpWrap = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  background-color: #e9ecf1;
  height: 680px;
`;

const SignUpContainer = styled.div`
  margin: 0 auto;
  width: 532px;
  background-color: #fff;
`;

const SignUpContent = styled.div``;

const SignUpText = styled.p`
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
