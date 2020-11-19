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
  display: flex;
  margin-top: 12px;
  height: 795px;
`;
