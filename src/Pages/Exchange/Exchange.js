import React from "react";
import MainView from "../../Components/MainView/MainView";
import SideCoinsBar from "../../Components/SideCoinsBar/SideCoinsBar";
import styled from "styled-components";

function Exchange() {
  return (
    <Fragment>
      <MainView />
      <SideCoinsBar />
    </Fragment>
  );
}

export default Exchange;

const Fragment = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1414px;
  margin: 0px auto 60px auto;
  padding-top: 80px;
  background-color: #efefef;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;
