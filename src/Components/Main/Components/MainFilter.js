import React, { useState } from "react";
import styled from "styled-components";
import FilterTime from "./FilterTime";
import { Fullscreen, Edit, Plus } from "@styled-icons/boxicons-regular";
import { KeyboardArrowDown } from "@styled-icons/material";

function MainFilter() {
  const [isModal, setIsModal] = useState(false);
  const [id, setId] = useState();

  const handleModal = (e) => {
    setIsModal(!isModal);
  };

  return (
    <FilterContainer>
      <FilterList>
        <li>
          <Fullscreen size="20" color="#2b2b2b" />
        </li>
        <li>
          <Edit size="20" color="#2b2b2b" />
        </li>
        <li>
          <Plus size="20" color="#2b2b2b" />
        </li>
        <li>
          <button onClick={(e) => handleModal(e)}>
            <span>30분</span>
            <KeyboardArrowDown size="20" color="#2b2b2b" />
          </button>
          {isModal && <FilterTime setIsModal={setIsModal} />}
          <button>
            <span>차트설정</span>
            <KeyboardArrowDown size="20" color="#2b2b2b" />
            {/* {isModal && <FilterSet />} */}
          </button>
          <button>
            <span>지표</span>
            <KeyboardArrowDown size="20" color="#2b2b2b" />
            {/* {isModal && <FilterGraph />} */}
          </button>
        </li>
        <li>
          <button>초기화</button>
        </li>
      </FilterList>
      <FilterRight>기본 차트</FilterRight>
    </FilterContainer>
  );
}

export default MainFilter;

const FilterContainer = styled.div`
  ${({ theme }) => theme.flex("space-between", "center")};
  height: 38px;
  background-color: #f8f8f8;
  border-top: 1px solid #d4d6dc;
  border-bottom: 1px solid #d4d6dc;
`;

const FilterList = styled.ul`
  ${({ theme }) => theme.flex(null)};
  li {
    ${({ theme }) => theme.flex(null)};
    position: relative;
    margin: 8px 0 8px 8px;
    &:after {
      ${({ theme }) => theme.flex("center", "center")};
      margin-left: 8px;
      content: "|";
      color: #e0e0e0;
    }
    button {
      ${({ theme }) => theme.flex("center", "center")};
      margin-right: 8px;
      cursor: pointer;
    }
    svg {
      cursor: pointer;
    }
  }
`;

const FilterRight = styled.span`
  margin-right: 8px;
  font-size: 13px;
  color: #2b2b2b;
`;
