import React from "react";
import Header from "./Header";
import Body from "./Body";
import styled from "styled-components";

function MenuContent({ isContractClicked }) {
  return (
    <WrapMenuContent>
      <Header isContractClicked={isContractClicked} />
      <Body isContractClicked={isContractClicked} />
    </WrapMenuContent>
  );
}

export default MenuContent;

const WrapMenuContent = styled.div``;
