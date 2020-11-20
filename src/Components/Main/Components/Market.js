import React from "react";
import styled from "styled-components";

function Market() {
  return (
    <MarketContainer>
      <MarketContent>
        <MarketPrice>
          <strong>
            19,546,000<span>KRW</span>
          </strong>
          <PercentData>
            <p>전일대비</p>
            <strong>-0.62%</strong>
            <strong className="upDown">-122,000</strong>
          </PercentData>
        </MarketPrice>
        <HighStock>Mini-graph Area</HighStock>
        <ExchangeList>
          <ul>
            <ListItem>
              <p>고가</p>
              <span className="up">20,030,000</span>
            </ListItem>
            <ListItem>
              <p>저가</p>
              <span className="down">19,460,000</span>
            </ListItem>
          </ul>
          <ul>
            <ListItem>
              <p>거래량(24H)</p>
              <span>6,838.785</span>
              <em>BTC</em>
            </ListItem>
            <ListItem>
              <p>거래대금(24H)</p>
              <span>135,015,443,343</span>
              <em>KRW</em>
            </ListItem>
          </ul>
        </ExchangeList>
      </MarketContent>
      <Foreign>
        <li>
          <em>Bitfinex</em>
          <strong>19,489,624</strong>
          <span>($17,456.00)</span>
        </li>
        <li>
          <em>Kraken</em>
          <strong>19,506,930</strong>
          <span>($17,471.50)</span>
        </li>
        <li>
          <em>Liquid</em>
          <strong>19,528,160</strong>
          <span>(¥1,819,976.00)</span>
        </li>
      </Foreign>
    </MarketContainer>
  );
}

export default Market;

const MarketContainer = styled.div``;

const MarketContent = styled.div`
  ${({ theme }) => theme.flex("space-between", "flex-start")};
`;

const MarketPrice = styled.div`
  padding: 18px 20px 14px;
  strong {
    font-size: 32px;
    font-weight: 700;
    color: #0051c7;
    span {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;

const PercentData = styled.div`
  p {
    display: inline-block;
    margin-right: 4px;
    line-height: 19px;
    color: #666;
    font-size: 11px;
  }
  strong {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #0051c7;
  }
`;

const HighStock = styled.div``;

const ExchangeList = styled.div`
  ${({ theme }) => theme.flex(null)};
  padding: 18px 20px 0;
  ul {
    margin-left: 30px;
    width: 220px;
  }
`;

const ListItem = styled.li`
  ${({ theme }) => theme.flex("space-between", null)};
  font-size: 12px;
  color: #2b2b2b;
  margin-bottom: 8px;
  padding-bottom: 8px;
  &:first-child {
    border-bottom: 1px solid #e3e5ec;
  }
  p {
    display: inline-block;
    width: 38%;
    font-size: 12px;
  }
  span {
    width: 62%;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.05em;
    text-align: right;
    &.up {
      color: #d60000;
    }
    &.down {
      color: #0051c7;
    }
  }
  em {
    margin-left: 8px;
    font-size: 11px;
    color: #999;
  }
`;

const Foreign = styled.ul`
  ${({ theme }) => theme.flex(null)};
  padding: 7px 20px;
  background-color: #f9fafc;
  border-top: 1px solid #f5f6fa;
  li {
    ${({ theme }) => theme.flex(null)};
    flex: 1;
    max-width: 330px;

    em {
      font-size: 12px;
      color: #3f8ac9;
    }
    strong {
      margin: 0 8px;
      font-size: 13px;
      font-weight: 700;
      color: #2b2b2b;
    }
    span {
      font-size: 11px;
      color: #999;
    }
  }
`;
