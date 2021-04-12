import React, { useState } from "react";

const Select = ({ name, options = [], selected }) => {
  const [selectedItem, setSelectedItem] = useState(selected);

  const handleOnSelect = (event) => {
    event.preventDefault();

    setSelectedItem(event.target.value);
  };

  return (
    <select name={name} value={selectedItem} onChange={handleOnSelect}>
      {options.map((value) => (
        <option>{value}</option>
      ))}
    </select>
  );
};

export default Select;
