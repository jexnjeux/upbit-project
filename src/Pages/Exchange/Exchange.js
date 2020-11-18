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
  position: relative;
  width: 1400px;
  margin: 0 auto;
  padding-top: 10px;
  background-color: #efefef;
`;
