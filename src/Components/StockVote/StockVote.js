import React from "react";
import styled from "styled-components";

function stockVote() {
  return <Fragment> 체결/일별 </Fragment>;
}

export default stockVote;

const Fragment = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 434px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;
