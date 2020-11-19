import React from "react";
import styled from "styled-components";

function SideCoinsBar() {
  return (
    <Fragment>
      <First>지은님</First>
      <First>주희님이 레이아웃</First>
      <First>잘 잡아놨으니까</First>
      <First>예쁘게</First>
      <First>잡아주세요</First>
      <First>^^</First>
    </Fragment>
  );
}

export default SideCoinsBar;

const Fragment = styled.div`
  width: 400px;
  height: calc(100vh - 90px);
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
  overflow: scroll;
  position: sticky;
  right: 0;
  top: 80px;
  @media (max-width: 1400px) {
    flex: 1;
    margin-left: 12px;
  }
`;

const First = styled.div`
  height: 200px;
  background: lightblue;
  margin: 24px;
`;
