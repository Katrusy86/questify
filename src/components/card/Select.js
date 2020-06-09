import React from "react";
import styled from "./select.module.css";

const Select = (props) => {
  const selectedOption = props.difficulty;
  console.log("selected", selectedOption);
  // const selected = selectedOption[selectedOption.selectedIndex].value
  return (
    <select value={selectedOption}
      className={styled[props.defaultSelectGroupClr]}
      onChange={props.onSelectColor}
    >
      <option value="easy" className={styled.easy_select}>
        Easy
      </option>
      <option value="normal" className={styled.normal_select}>
        Normal
      </option>
      <option value="hard" className={styled.hard_select}>
        Hard
      </option>
    </select>
  );
};

export default Select;
