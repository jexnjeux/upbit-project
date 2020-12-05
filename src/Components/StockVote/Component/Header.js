import React, { useState } from "react";
import styled from "styled-components";

function Header({ isContractClicked }) {
  const [visible, setVisible] = useState(false);
  return (
    <WrapHeader>
      <table>
        <thead>
          <tr>
            {(isContractClicked ? CONTRACTTITLE : DAYTITLE).map((el, index) => {
              return (
                <th key={index}>
                  {el.title}
                  {!isContractClicked && index === 0 ? (
                    <i
                      className="far fa-question-circle"
                      onMouseEnter={() => setVisible(true)}
                      onMouseLeave={() => setVisible(false)}
                    />
                  ) : (
                    ""
                  )}
                  {!isContractClicked && index === 0 && visible ? (
                    <ToolTip>
                      위코인은 UTC(협정세계시)를 사용해 일별 <br /> 데이터를
                      계산합니다. 대다수의 글로벌 <br /> 거래소들이 UTC 기준
                      시간을 사용하고 있으며, 한국시간(KST)보다는 9시간이
                      느립니다. <br />
                      <br />
                      <Bold>일별 종가</Bold>
                      UTC 24시(=한국시간 오전 9시) 기준 가격
                      <br />
                      <br />
                      <Bold>전일대비 등락률</Bold>
                      UTC 기준 전일 종가 대비 등락률
                    </ToolTip>
                  ) : null}
                </th>
              );
            })}
          </tr>
        </thead>
      </table>
    </WrapHeader>
  );
}

export default Header;

const WrapHeader = styled.div`
  font-size: 12px;

  th {
    position: relative;
    background-color: #f9fafc;
  }

  th:first-child {
    width: 100px;
    height: 32px;
    padding-top: 12px;
    padding-right: 2px;
    border-bottom: 1px solid #f1f1f4;

    i {
      margin-left: 3px;
      font-weight: bolder;

      :hover {
        color: #115dcb;
        cursor: pointer;
      }
    }
  }

  th:not(:first-child) {
    width: 300px;
    height: 32px;
    padding-top: 9px;
    padding-right: 14px;
    text-align: right;
    border-bottom: 1px solid #f1f1f4;
  }

  tr {
    padding: 2px 0px;
  }
`;

const ToolTip = styled.div`
  position: absolute;
  width: 250px;
  height: 135px;
  background-color: white;
  border: 1px solid #d4d6dc;
  padding: 5px;
  color: black;
  position: absolute;
  text-align: left;
  z-index: 1;
  top: 35px;
  left: 25px;

  :after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 15%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #d4d6dc transparent;
  }
`;

const Bold = styled.h2`
  font-weight: bolder;
`;

const CONTRACTTITLE = [
  {
    title: "체결시간",
  },
  {
    title: "체결가격(KRW)",
  },
  {
    title: "체결량(BTC)",
  },
  {
    title: "체결금액(KRW)",
  },
];

const DAYTITLE = [
  {
    title: "일자",
  },
  {
    title: "종가(KRW)",
  },
  {
    title: "전일대비",
  },
  {
    title: "거래양(BTC)",
  },
];
