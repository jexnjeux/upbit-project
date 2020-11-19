import React from "react";
import Transaction from "../Transaction/Transaction";
import PriceTab from "../PriceTab/PriceTab";
import styled from "styled-components";

function MiddleSideView() {
  return (
    <Fragment>
      <Transaction />
      <PriceTab />
    </Fragment>
  );
}

export default MiddleSideView;

const Fragment = styled.div`
  width: 50%;
  margin-left: 6px;
`;
