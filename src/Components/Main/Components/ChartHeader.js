import React from "react";
import styled from "styled-components";
import { Settings } from "@styled-icons/ionicons-outline";

function ChartHeader() {
  return (
    <ChartContainer>
      <LeftHeader>
        <h2>비트코인</h2>
        <span>BTC/KRW</span>
      </LeftHeader>
      <RightHeader>
        <span>시세</span>
        <Icon>
          <Settings size="16" color="#2b2b2b" />
        </Icon>
      </RightHeader>
    </ChartContainer>
  );
}

export default ChartHeader;

const ChartContainer = styled.div`
  ${({ theme }) => theme.flex("space-between", "flex-start")};
  padding-left: 16px;
  height: 42px;
  border-bottom: 1px solid #d4d6dc;
`;

const LeftHeader = styled.div`
  ${({ theme }) => theme.flex(null)};

  h2 {
    margin-top: 6px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
  }
  span {
    margin: 18px 4px 0;
    font-size: 12px;
  }
`;

const RightHeader = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  span {
    ${({ theme }) => theme.flex("center", "center")};
    width: 140px;
    height: 42px;
    border-bottom: 3px solid #115dcb;
    color: #115dcb;
    font-weight: bold;
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.flex("center", "center")};
  width: 44px;
  height: 42px;
  border-left: 1px solid #d4d6dc;
`;
