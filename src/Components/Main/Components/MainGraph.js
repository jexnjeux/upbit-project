import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import api from "../../../config/api";
import { socketApi } from "../../../config/api";

let socket = new WebSocket(`${socketApi}`);

function MainGraph() {
  let ohlc = [];
  let volume = [];
  const [data, setData] = useState({});
  const [ohlcData, setOhlcData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    navigator: {
      enabled: false,
    },
    rangeSelector: {
      selected: 0,
      allButtonsEnabled: true,
      buttons: [
        {
          count: 1,
          type: "hour",
          text: "1m",
          dataGrouping: {
            forced: true,
            units: [["minute", [1]]],
          },
        },
        {
          count: 5,
          type: "hour",
          text: "5m",
          dataGrouping: {
            forced: true,
            units: [["minute", [5]]],
          },
        },
        {
          count: 10,
          type: "hour",
          text: "10m",
          dataGrouping: {
            forced: true,
            units: [["minute", [10]]],
          },
        },
        {
          count: 1,
          type: "day",
          text: "30m",
          dataGrouping: {
            forced: true,
            units: [["minute", [30]]],
          },
        },
        {
          type: "all",
          text: "All",
        },
      ],
    },

    title: {
      text: "AAPL Historical",
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },

    series: [
      {
        type: "candlestick",
        name: "AAPL",
        data: [],
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios
          // .get(`${api}/reports/`, {
          .get(`${api}/reports/`, {
            headers: {
              Authorization: localStorage.getItem("access_token"),
            },
          })
          .then((res) => {
            console.log("res >>>", res && res.data.myData.mainChart);
            const resultData = res && res.data.myData.mainChart;
            let dataLength = res && resultData.length;
            console.log("length", dataLength);

            for (let i = 0; i < dataLength; i++) {
              ohlc.push([
                resultData[i][0], // the date
                resultData[i][1], // open
                resultData[i][2], // high
                resultData[i][3], // low
                resultData[i][4], // close
              ]);
              volume.push([
                resultData[i][0],
                resultData[i][5], // close
              ]);
            }

            setOhlcData(ohlc && ohlc);
            setVolumeData(volume && volume);
          });

        setChartOptions({
          series: [
            {
              type: "candlestick",
              id: "candlestick",
              name: "AAPL",
              data: ohlc,
            },
            {
              type: "column",
              id: "volume",
              name: "Volume",
              data: volume,
              yAxis: 1,
            },
          ],
        });

        socket.onopen = function () {
          console.log("socket chart connection server");
        };
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log("??", data);
  }, []);

  socket.onmessage = function (res) {
    const chartData = res && JSON.parse(res.data);
    console.log("e >>>", chartData.message);
    const resultData = chartData.message;
    // setData([...data, resultData]);
    // console.log("data333 >>>> ", data);

    let ohlc = [...ohlcData];
    let volume = [...volumeData];

    ohlc.push([
      resultData[0], // the date
      resultData[1], // open
      resultData[2], // high
      resultData[3], // low
      resultData[4], // close
    ]);

    volume.push([
      resultData[0],
      resultData[5], // close
    ]);
    // setOhlcData([...ohlcData, ohlc]);
    // setVolumeData([...volumeData, volume]);
    setChartOptions({
      series: [
        {
          type: "candlestick",
          id: "candlestick",
          name: "AAPL",
          data: ohlc,
        },
        {
          type: "column",
          id: "volume",
          name: "Volume",
          data: volume,
          yAxis: 1,
        },
      ],
    });
  };

  // useEffect(() => {
  //   const fetchChartData = async () => {
  //     try {

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchChartData();
  // }, []);

  console.log("chartdata222 >>> ", chartOptions);
  console.log("ohlcData22 >>> ", ohlcData);
  console.log("volumeData22 >>> ", volumeData);
  return (
    <div>
      <HighchartsReact
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={chartOptions}
      />
      {/* <button onClick={() => sendMsg()}>버튼!!</button> */}
    </div>
  );
}

export default MainGraph;
