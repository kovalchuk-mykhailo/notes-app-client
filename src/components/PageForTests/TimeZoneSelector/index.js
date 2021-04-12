import React, { useState } from "react";

const exampleOfTimeZones = ["Australia/Melbourne", "Europe/London"];
const def_name = "TimeZones";

function TimeZoneSelector({ name = def_name, timeZones, selected }) {
  const [selectedItem, setSelectedItem] = useState(selected);

  const getDateFromTimeZone = (timeZone = "") => {
    let options = {
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formatter = new Intl.DateTimeFormat([], options);

    return formatter.format(new Date());
  };

  const handleOnSelect = (event) => {
    event.preventDefault();

    const newTimeZone = event.target.value;

    setSelectedItem(newTimeZone);

    const date = getDateFromTimeZone(newTimeZone);

    alert(date);
  };

  return (
    <div>
      {/* <Select name="timeZones" options={timeZones} selected={timeZones[1]} /> */}
      <select name={name} value={selectedItem} onChange={handleOnSelect}>
        {timeZones.map((value) => (
          <option>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default TimeZoneSelector;
