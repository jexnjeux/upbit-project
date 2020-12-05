import React, { useState, useEffect } from "react";
import ConstractPlace from "./ConstractPlace";
import DailyPlace from "./DailyPlace";
import styled from "styled-components";

function Body({ isContractClicked }) {
  const [constractPrice, setConstractPrice] = useState([]);
  const [dailyPrice, setDailyPrice] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/StockVote/mockdata.json")
      .then((response) => response.json())
      .then((response) => {
        setConstractPrice(response.constractPrice);
        setDailyPrice(response.dailyPrice.reverse());
      });
  }, []);

  console.log(isContractClicked);

  return (
    <WrapBody>
      {isContractClicked ? (
        <ConstractPlace constractPrice={constractPrice} />
      ) : (
        <DailyPlace dailyPrice={dailyPrice} />
      )}
      {/* {(isContractClicked
        ? constractPrice && constractPrice
        : dailyPrice && dailyPrice
      ).map((el, idx) => (
        <WrapDaily key={idx}>
          <Date>{String(el.date).replace(/(..)$/, ".$1")}</Date>
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
      ))} */}
    </WrapBody>
  );
}

export default Body;

const WrapBody = styled.div`
  height: 355px;
  overflow: auto;
`;

// const WrapDaily = styled.div`
//   display: flex;
//   height: 32px;
//   line-height: 30px;
//   font-size: 13px;

//   :nth-child(2n) {
//     background-color: #f9fafc;
//   }
// `;

// const Date = styled.div`
//   width: 100px;
//   text-align: center;
//   color: #2b2b2b;
// `;

// const ColorDiv = styled.div`
//   display: flex;
//   width: auto;
//   text-align: end;
//   color: ${({ percentDifference }) =>
//     percentDifference && percentDifference.includes("+")
//       ? "#0051c7"
//       : "#d60000"};
// `;

// const ClosingPrice = styled.div`
//   width: 333px;
//   font-weight: bolder;
//   padding-right: 20px;
// `;

// const Difference = styled.div`
//   width: 180px;
//   padding-right: 30px;
// `;

// const PercentDifference = styled.div`
//   width: 80px;
//   text-align: start;
//   padding-left: 15px;
// `;

// const TradingVolume = styled.div`
//   width: 286px;
//   padding-right: 10px;
//   text-align: end;
// `;
