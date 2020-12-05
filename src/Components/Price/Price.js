import React, { useState } from "react";
import General from "./Components/General";
import Cumulative from "./Components/Cumulative";
import Order from "./Components/Order";
import styled from "styled-components";

function Price() {
  const [current, setCurrent] = useState(0);

  const handleClickCurrent = (index) => {
    setCurrent(index);
  };

  return (
    <Fragment>
      <MenuTabs>
        {MENUTAB.map((el, index) => {
          return (
            <MenuList
              key={index}
              index={index}
              clickIndex={current}
              onClick={() => handleClickCurrent(index)}
            >
              {el.title}
            </MenuList>
          );
        })}
      </MenuTabs>
      <WrapMenuContent>{CONTENT[current]}</WrapMenuContent>
    </Fragment>
  );
}

export default Price;

const Fragment = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 6px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;

const MenuTabs = styled.div`
  height: 43px;
`;

const MenuList = styled.li`
  display: inline-block;
  width: 33.3%;
  height: 100%;
  padding-top: 13px;
  list-style: none;
  text-align: center;
  color: ${({ index, clickIndex }) =>
    index === clickIndex ? "#115dcb" : "#2b2b2b"};
  font-weight: bolder;
  border-bottom: ${({ index, clickIndex }) =>
    index === clickIndex ? "3px solid #115dcb" : "1px solid #d4d6dc"};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const WrapMenuContent = styled.div`
  width: 100%;
  height: 753px;
`;

const MENUTAB = [
  {
    id: 1,
    title: "일반호가",
  },
  {
    id: 2,
    title: "누적호가",
  },
  {
    id: 3,
    title: "호가주문",
  },
];

const CONTENT = {
  0: <General />,
  1: <Cumulative />,
  2: <Order />,
};
