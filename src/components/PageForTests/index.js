import React from "react";
import LatestNews from "./LatestNews";
import Select from "./Select";
import TimeZoneSelector from "./TimeZoneSelector";

const options = ["A", "B", "C"];
const exampleOfTimeZones = ["Australia/Melbourne", "Europe/London"];

function PageForTests() {
  return (
    <div>
      <LatestNews />
      <Select name="Hello" options={options} selected={options[1]} />
      <TimeZoneSelector
        name="Hello"
        timeZones={exampleOfTimeZones}
        selected={options[1]}
      />
    </div>
  );
}

export default PageForTests;
