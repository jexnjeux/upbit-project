import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatWindow from "./Components/ChatWindow";
import { ChatDots } from "@styled-icons/bootstrap";
import { socketApi } from "../../config/api";

let socket = new WebSocket(`${socketApi}`);

function Chat() {
  const [isModal, setIsModal] = useState(false);
  const [chatMsg, setChatMsg] = useState(false);
  const [msgInput, setMsgInput] = useState("");

  const handleModal = (e) => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    socket.onopen = function () {
      console.log("connection server");
    };
  }, []);

  socket.onmessage = function (e) {
    const msg = JSON.parse(e.data);
    console.log("data >>", msg.message);
    setChatMsg(msg.message);
  };

  const inputHandler = (e) => {
    setMsgInput(e.target.value);
  };

  const sendMsg = () => {
    socket.send(
      JSON.stringify({
        message: msgInput,
      })
    );
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] 커넥션이 정상적으로 종료되었습니다(code=${event.code} reason=${event.reason})`
      );
    } else {
      // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
      // event.code가 1006이 됩니다.
      console.log("[close] 커넥션이 죽었습니다.");
    }
  };

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
  };

  return (
    <ChatIconWrap>
      <ChatIconBtn onClick={(e) => handleModal(e)}>
        <ChatDots size="32" color="#fff" />
      </ChatIconBtn>
      {isModal && (
        <ChatWindow
          setIsModal={setIsModal}
          chatMsg={chatMsg}
          sendMsg={sendMsg}
          inputHandler={inputHandler}
          msgInput={msgInput}
        />
      )}
    </ChatIconWrap>
  );
}

export default Chat;

const ChatIconWrap = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #0d498b;
  border-radius: 48px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 1, 0.1);
`;

const ChatIconBtn = styled.button`
  cursor: pointer;
`;
