import React from "react";
import styled from "styled-components";

function SideCoinsBar() {
  return <Fragment>사이드코인바</Fragment>;
}

export default SideCoinsBar;

const Fragment = styled.div`
  width: 400px;
  height: calc(100vh - 100px);
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
  position: sticky;
  right: 0;
  top: 80px;
`;
