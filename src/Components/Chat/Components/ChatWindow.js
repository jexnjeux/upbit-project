import React from "react";
import styled from "styled-components";
import { CloseOutline } from "@styled-icons/evaicons-outline";

function ChatWindow({ setIsModal, chatMsg, sendMsg, inputHandler, msgInput }) {
  return (
    <ChatWindowWrap>
      <ChatContainer>
        <ChatHeader>
          <h3>WeCoin Chat</h3>
          <CloseBtn onClick={() => setIsModal(false)}>
            <CloseOutline size="24" color="#fff" />
          </CloseBtn>
        </ChatHeader>
        <ChatContent>{chatMsg ? chatMsg : "대화를 시작해보세요."}</ChatContent>
        <UserChat>
          <textarea
            type="text"
            value={msgInput}
            placeholder="메세지를 입력해주세요."
            onChange={inputHandler}
          />
          <button onClick={() => sendMsg()}>전송</button>
        </UserChat>
      </ChatContainer>
    </ChatWindowWrap>
  );
}

export default ChatWindow;

const ChatWindowWrap = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 360px;
  height: 600px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(81, 99, 120, 0.3) 0px 6px 60px 0px;
  z-index: 9999;
  overflow: hidden;
  animation: 0.25s ease-out 0s;
`;

const ChatContainer = styled.div``;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #0d498b;
  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
`;

const CloseBtn = styled.button`
  cursor: pointer;
`;

const ChatContent = styled.div`
  overflow: scroll;
  padding: 8px 16px;
  height: 492px;
  border: 1px solid red;
`;

const UserChat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #ddd;
  textarea {
    flex: 1;
    height: 24px;
    outline: 0;
    border: none;
    resize: none;
  }
  button {
    margin-left: 16px;
    cursor: pointer;
  }
`;
