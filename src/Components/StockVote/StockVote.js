import React, { useState, useEffect } from "react";
import MenuTab from "./Component/MenuTab";
import MenuContent from "./Component/MenuContent";
import styled from "styled-components";

function StockVote() {
  const [current, setCurrent] = useState(1);
  const [isContractClicked, setIsContractClicked] = useState(false);

  const handleClickCurrent = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (current === 1) {
      setIsContractClicked(false);
    } else {
      setIsContractClicked(true);
    }
  }, [current]);

  return (
    <Fragment>
      <MenuTab current={current} handleClickCurrent={handleClickCurrent} />
      <MenuContent isContractClicked={isContractClicked} />
    </Fragment>
  );
}

export default StockVote;

const Fragment = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 434px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;
