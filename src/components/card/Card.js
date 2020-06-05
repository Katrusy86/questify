import React, { useState } from "react";
import chroma from "chroma-js";
import { css } from "emotion";
import DatePicker from "react-date-picker";
import Select from "react-select";
import styled from "./card.module.css";
import { useDispatch } from "react-redux";
import SelectCategory from "./SelectCategory"
import { removeCard } from "../../redux/dashboardOperations";



function Card({ todayCard }) {
  const optionHandleChange = (props) => {
    setSelectOption(props);
  };

  const handleChange = (props) => {
    setValue(props);
    // console.log('tempData', props)
  };
  const tempCard = todayCard;
  // console.log("tempCard :>> ", tempCard.name);
  const { dueDate, name, isPriority, group, difficulty, _id } = tempCard;
  // console.log("id", _id);
  // console.log('difficulty', difficulty)
  let [value, setValue] = useState(new Date(dueDate));
  let [selectOption, setSelectOption] = useState(difficulty.toLowerCase());
  // console.log('selectOption', selectOption)


  const dispatch = useDispatch()
  const deleteCard = (_id) => {
    dispatch(removeCard(_id))
  };


  return (
    <>
      <div className={styled.card_header}>
        <Select />

        {isPriority && <div className={styled.star_icon}></div>}
      </div>
      <div className={styled.card_wrapper}>
        <div className={styled.card_container}>
          <input
            className={styled.card_input}
            type="text"
            placeholder="Enter quest name"
            name="text"
            value={name}
            autoFocus
            required
          />
          <div className={styled.date}>
            <DatePicker
              className={styled.date_picker}
              selected={value}
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styled.card_block}>
          <div className={styled.card_category}>
            <SelectCategory group={group}/>
          </div>
          <div className={styled.card_btn__create}>
            {/* <button className={styled.delete}></button> 
                        <div className={styled.strip}></div>              
                        <button className={styled.start}>Start</button> */}

            <button className={styled.save}></button>
            <div className={styled.strip}></div>
            <button
              onClick={() => deleteCard(_id)}
              className={styled.delete}
            ></button>
            <div className={styled.strip}></div>
            <button className={styled.done}></button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Card;
