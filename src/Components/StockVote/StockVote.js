import React from "react";
import styled from "styled-components";

function stockVote() {
  return <Fragment> 체결/일별 </Fragment>;
}

export default stockVote;

const Fragment = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 434px;
  border: 2px solid green;
`;
