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
          <LoginBox>
            <Logo>WEcoin</Logo>
            <p>방문하신 사이트의 주소가 아래와 일치하는지 확인해주세요.</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormInput isError={errors.userId}>
                <label htmlFor="cuurentPwd">아이디</label>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  name="userId"
                  autoComplete="off"
                  ref={register({ required: true })}
                />
                {errors.userId && <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>}
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
                    비밀번호는 8~20글자의 영문대소문자, 숫자, 특수문자를
                    조합해야 합니다.
                  </ErrorMsg>
                )}
              </FormInput>
              <SubmitButton type="submit" className="btn btn-success">
                SignIn
              </SubmitButton>
            </Form>
          </LoginBox>
        </LoginContent>
      </LoginContainer>
    </LoginWrap>
  );
}

export default Login;

const LoginWrap = styled.div`
  background-color: #e9ecf1;
`;

const LoginContainer = styled.div`
  margin: 0 auto;
  width: 532px;
  background-color: #fff;
`;

const LoginContent = styled.div``;

const LoginBox = styled.div``;

const Logo = styled.h1`
  font-family: "Fugaz One", cursive !important;
`;

const Form = styled.form`
  width: 100%;
`;

const FormInput = styled.div`
  position: relative;
  ${({ theme }) => theme.flex(null, null, "column")};
  margin-left: 16px;
  margin-bottom: 16px;
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
  margin-top: 4px;
  font-size: 13px;
  color: #a94442;
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  outline: 0;
  border-radius: 4px;
`;
