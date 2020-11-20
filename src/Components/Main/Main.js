import React from "react";
import styled from "styled-components";
import ChartHeader from "./Components/ChartHeader";
import Market from "./Components/Market";
import MainFilter from "./Components/MainFilter";
import MainGraph from "./Components/MainGraph";

function Main() {
  return (
    <MainChart>
      <ChartHeader />
      <Market />
      <MainFilter />
      <MainGraph />
    </MainChart>
  );
}

export default Main;

const MainChart = styled.article`
  height: 600px;
  background-color: white;
  box-shadow: 2px 2px 4px #dee1e7;
`;
