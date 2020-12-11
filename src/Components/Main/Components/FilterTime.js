import React from "react";
import styled from "styled-components";

function FilterTime({ setIsModal }) {
  return (
    <div>
      <ModalBg onClick={() => setIsModal(false)}></ModalBg>
      <ModalContent>
        {/* <button>1일</button>
        <hr /> */}
        <button>1분</button>
        <button>5분</button>
        <button>10분</button>
        <button>30분</button>
        <button>1시간</button>
      </ModalContent>
    </div>
  );
}

export default FilterTime;

const ModalBg = styled.div`
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContent = styled.div`
  z-index: 9;
  position: absolute;
  overflow: scroll;
  top: 24px;
  left: 0;
  margin-top: 5px;
  padding-bottom: 3px;
  padding-top: 10px;
  max-height: 166px;
  border-bottom: 3px solid #fff;
  background: #fff;
  color: #2b2b2b;
  border-radius: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  button {
    padding: 0 20px;
    line-height: 27px;
    height: 27px;
    display: block;
  }
`;
