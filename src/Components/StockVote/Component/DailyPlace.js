import React, { Fragment } from "react";
import styled from "styled-components";

function DailyPlace({ dailyPrice }) {
  return (
    <Fragment>
      {dailyPrice.map((el, idx) => (
        <WrapDaily key={idx}>
          <Date>{(el.date * 0.01).toFixed(2)}</Date>
          <ColorDiv percentDifference={el.percentDifference}>
            <ClosingPrice>
              {Number(el.closingPrice).toLocaleString("en")}
            </ClosingPrice>
            <Difference>
              {Number(el.difference).toLocaleString("en")}
            </Difference>
            <PercentDifference>{el.percentDifference}%</PercentDifference>
          </ColorDiv>
          <TradingVolume>
            {Number(el.tradingVolume).toLocaleString("en")}
          </TradingVolume>
        </WrapDaily>
      ))}
    </Fragment>
  );
}

export default DailyPlace;

const WrapDaily = styled.div`
  display: flex;
  height: 32px;
  line-height: 30px;
  font-size: 13px;

  :nth-child(2n) {
    background-color: #f9fafc;
  }
`;

const Date = styled.div`
  width: 100px;
  text-align: center;
  color: #2b2b2b;
`;

const ColorDiv = styled.div`
  display: flex;
  width: auto;
  text-align: end;
  color: ${({ percentDifference }) =>
    percentDifference && percentDifference.includes("+")
      ? "#0051c7"
      : "#d60000"};
`;

const ClosingPrice = styled.div`
  width: 333px;
  font-weight: bolder;
  padding-right: 20px;
`;

const Difference = styled.div`
  width: 180px;
  padding-right: 30px;
`;

const PercentDifference = styled.div`
  width: 80px;
  text-align: start;
  padding-left: 15px;
`;

const TradingVolume = styled.div`
  width: 286px;
  padding-right: 10px;
  text-align: end;
`;
