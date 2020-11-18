import React from "react";
import Price from "../Price/Price";
import MiddleSideView from "../MiddleSideView/MiddleSideView";
import styled from "styled-components";

function MiddleView() {
  return (
    <Fragment>
      <Price />
      <MiddleSideView />
    </Fragment>
  );
}

export default MiddleView;

const Fragment = styled.div`
  margin-top: 10px;
  width: auto;
  height: 795px;
  border: 1px solid orange;
`;
