import React from "react";
import MetricCard from "./MetricCard/MetricCard";

function TopMetricCards() {
  const Graphdata1 = [
    { name: "Page A", uv: 100 },
    { name: "Page B", uv: 2000 },
    { name: "Page C", uv: 1500 },
    { name: "Page C", uv: 3000 },
    { name: "Page C", uv: 2500 },
  ];

  const Graphdata2 = [
    { name: "Page C", uv: 3000 },
    { name: "Page C", uv: 2500 },
    { name: "Page B", uv: 3500 },
    { name: "Page C", uv: 1500 },
    { name: "Page A", uv: 4000 },
    { name: "Page A", uv: 500 },
  ];

  const Graphdata3 = [
    { name: "Page A", uv: 100 },
    { name: "Page B", uv: 2500 },
    { name: "Page C", uv: 1500 },
    { name: "Page C", uv: 3000 },
    { name: "Page C", uv: 2500 },
  ];

  return (
    <div className="flex flex-col 900px:flex-row gap-3 ">
      {/* 1st card: active user */}
      <div className="w-full 900px:w-1/2 lg:w-1/3">
        <MetricCard
          heading={"Active Users"}
          percentage={"30.5626%"}
          count={"3632"}
          graphData={Graphdata1}
          graphColor={"#2a85ff"}
        />
      </div>
      {/* 2nd card: Total Properties */}
      <div className="w-full 900px:w-1/2 lg:w-1/3">
        <MetricCard
          heading={"Total Properties"}
          percentage={"30.5626%"}
          count={"10k+"}
          graphColor={"#f96161"}
          graphData={Graphdata2}
        />
      </div>
      {/* 3rd card: Total Revenue */}
      <div className="w-full 900px:w-1/2 lg:w-1/3">
        <MetricCard
          heading={"Total Revenue"}
          percentage={"30.5626%"}
          count={"$900k"}
          graphColor={"#24bc73"}
          graphData={Graphdata3}
        />
      </div>
    </div>
  );
}

export default TopMetricCards;