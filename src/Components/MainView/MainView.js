import React from "react";
import Main from "../Main/Main";
import MiddleView from "../MiddleView/MiddleView";
import StockVote from "../StockVote/StockVote";
import styled from "styled-components";

function MainView() {
  return (
    <Fragment>
      <Main />
      <MiddleView />
      <StockVote />
    </Fragment>
  );
}

export default MainView;

const Fragment = styled.div`
  float: left;
  width: 990px;
  border: 2px solid pink;
`;
