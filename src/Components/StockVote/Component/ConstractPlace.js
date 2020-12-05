import React, { Fragment } from "react";
import styled from "styled-components";

function ConstractPlace({ constractPrice }) {
  return (
    <Fragment>
      {constractPrice.map((el, idx) => (
        <WrapConstract key={idx}>
          <Date>{(el.ExecutionDate * 0.01).toFixed(2)}</Date>
          <Time>{(el.ExecutionTime * 0.01).toFixed(2)}</Time>
          <ExecutionPrice>
            {Number(el.ExecutionPrice).toLocaleString("en")}
          </ExecutionPrice>
          <ExecutionVolume>
            {(el.ExecutionVolume * 0.00000001).toFixed(8)}
          </ExecutionVolume>
          <ExecutionAmount>
            {Number(el.ExecutionAmount).toLocaleString("en")}
          </ExecutionAmount>
        </WrapConstract>
      ))}
    </Fragment>
  );
}

export default ConstractPlace;

const WrapConstract = styled.div`
  display: flex;
  height: 32px;
  line-height: 30px;
  font-size: 13px;

  :nth-child(2n) {
    background-color: #f9fafc;
  }
`;

const Date = styled.div`
  width: 50px;
  text-align: end;
  color: #2b2b2b;
  font-size: 12px;
  padding-right: 5px;
`;

const Time = styled.div`
  width: 50px;
  text-align: start;
  color: #999999;
  font-size: 12px;
  padding-left: 3px;
`;

const ExecutionPrice = styled.div`
  width: 280px;
  text-align: end;
  color: #0051c7;
  font-weight: bold;
`;

const ExecutionVolume = styled.div`
  width: 300px;
  text-align: end;
`;

const ExecutionAmount = styled.div`
  width: 300px;
  text-align: end;
`;
