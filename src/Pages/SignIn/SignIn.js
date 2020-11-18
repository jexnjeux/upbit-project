import React from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <LoginWrap>
      <LoginContainer>
        <LoginContent>
          <LoginBox>
            <h1>WEcoin</h1>
            <p>방문하신 사이트의 주소가 아래와 일치하는지 확인해주세요.</p>
            {/* <Form onSubmit={handleSubmit(onSubmit)}>
            <SellerInput isError={errors.password}>
              <label htmlFor="cuurentPwd">현재 비밀번호</label>
              <input
                type="password"
                placeholder="현재 비밀번호"
                name="password"
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.password && <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>}
            </SellerInput>
            <SellerInput isError={errors.new_password}>
              <label htmlFor="password">변경할 비밀번호</label>
              <input
                id="password"
                name="new_password"
                ref={register({
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                })}
                type="password"
                placeholder="변경할 비밀번호"
                autoComplete="off"
              />
              {errors.new_password &&
                errors.new_password.type === "required" && (
                  <ErrorMsg>필수 입력 항목입니다.</ErrorMsg>
                )}
              {errors.new_password &&
                errors.new_password.type === "pattern" && (
                  <ErrorMsg>
                    비밀번호는 8~20글자의 영문대소문자, 숫자, 특수문자를
                    조합해야 합니다.
                  </ErrorMsg>
                )}
            </SellerInput>
            {/* 유효성 검사 에러 메세지 */}
            {/* <SellerInput isError={errors.rePasswrod}>
              <label htmlFor="rePassword">비밀번호 재입력</label>
              <input
                type="password"
                placeholder="한번 더 입력해주세요."
                name="rePassword"
                ref={register({
                  required: true,
                  validate: (value) =>
                    value === watch("new_password") ||
                    "비밀번호가 일치하지 않습니다",
                })}
                autoComplete="off"
              />
              {errors.rePassword && (
                <ErrorMsg>{errors.rePassword.message}</ErrorMsg>
              )}
            </SellerInput>
          </Form> */}
          </LoginBox>
        </LoginContent>
      </LoginContainer>
    </LoginWrap>
  );
}

export default SignIn;
const LoginWrap = styled.div`
  background-color: #e9ecf1;
`;
const LoginContainer = styled.div`
  margin: 0 auto;
  width: 532px;
  background-color: #fff;
`;
const LoginContent = styled.div``;
const LoginBox = styled.div`
  h1 {
  }
`;
// const SignInWrap = styled.div``;
