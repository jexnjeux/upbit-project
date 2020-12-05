import React from "react";
import styled from "styled-components";

function MenuTab({ current, handleClickCurrent }) {
  return (
    <WrapMenuTab>
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
    </WrapMenuTab>
  );
}

export default MenuTab;

const WrapMenuTab = styled.div``;

const MenuTabs = styled.div`
  height: 43px;
`;

const MenuList = styled.li`
  display: inline-block;
  width: 50%;
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
  }
`;

const MENUTAB = [
  {
    id: 1,
    title: "체결",
  },
  {
    id: 2,
    title: "일별",
  },
];
