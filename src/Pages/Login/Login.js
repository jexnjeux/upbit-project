import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <LoginWrap>
      <LoginContainer>
        <LoginContent>
          <LoginBox>
            <h2>WEcoin</h2>
            <p>방문하신 사이트의 주소가 아래와 일치하는지 확인해주세요.</p>
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

const LoginBox = styled.div`
  h2 {
    font-family: "Fugaz One", cursive;
    font-size: 40px;
    font-weight: bold;
  }
`;
