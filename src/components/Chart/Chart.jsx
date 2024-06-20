import React, { useState, useEffect, useRef, useContext } from "react";
import ApexCharts from "apexcharts";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { UserContext } from "../../Context/UserContext";

const Chart = () => {
  const [currentInterval, setCurrentInterval] = useState("day");
  const { setUserToken } = useContext(UserContext);
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const decoded = jwtDecode(token);

        const userId = decoded.usrid;

        const response = await axios.get(`https://gogreenserver-1-1-numd.onrender.com/api/${userId}/consumption`);
        const data = response.data;
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (chartData) {
      const updateChart = () => {
        const chartDataForInterval = chartData[currentInterval];
        const { labels, values, xaxisTitle } = getChartData(chartDataForInterval);

        if (chartInstance) {
          chartInstance.updateSeries([{ data: values }]);
          chartInstance.updateOptions({
            xaxis: {
              categories: labels,
              title: {
                text: xaxisTitle
              }
            }
          });
        } else {
          const options = getChartOptions(labels, values, xaxisTitle);
          const chart = new ApexCharts(chartContainerRef.current, options);
          chart.render();
          setChartInstance(chart);
        }
      };

      updateChart();
    }
  }, [chartData, currentInterval]);

//... rest of the code remains the same

  const handleIntervalChange = (interval) => {
    setCurrentInterval(interval);
  };

  const getChartData = (chartData) => {
    let labels, values, xaxisTitle;

    if (currentInterval === "day") {
      labels = chartData.map(item => item.hour);
      values = chartData.map(item => item.consumption);
      xaxisTitle = "Hour";
    } else if (currentInterval === "week") {
      labels = chartData.map(item => item.day);
      values = chartData.map(item => item.consumption);
      xaxisTitle = "Day";
    } else if (currentInterval === "month") {
      labels = chartData.map(item => item.month);
      values = chartData.map(item => item.consumption);
      xaxisTitle = "Month";
    } else if (currentInterval === "year") {
      labels = chartData.map(item => item.year);
      values = chartData.map(item => item.consumption);
      xaxisTitle = "Year";
    }

    return { labels, values, xaxisTitle };
  };

  const getChartOptions = (labels, values, xaxisTitle) => ({
    chart: {
      type: "bar",
      height: 400
    },
    series: [{ data: values }],
    xaxis: {
      categories: labels,
      title: {
        text: xaxisTitle
      }
    },
    yaxis: {
      title: {
        text: "Consumption"
      }
    }
  });

  return (
    <div className="shadow p-3 mb-5 bg-body rounded mx-5 " >
      <div className="mt-4  d-flex justify-content-evenly overflow-auto" role="group">
        <button className={`btn px-5 ${currentInterval === 'day' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleIntervalChange('day')}>Day</button>
        <button className={`btn px-5 ${currentInterval === 'week' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleIntervalChange('week')}>Week</button>
        <button className={`btn px-5 ${currentInterval === 'month' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleIntervalChange('month')}>Month</button>
        <button className={`btn px-5 ${currentInterval === 'year' ? 'btn-primary active' : 'btn-secondary'}`} onClick={() => handleIntervalChange('year')}>Year</button>
      </div>
      <div ref={chartContainerRef} />
    </div>

  );
};

export default Chart;