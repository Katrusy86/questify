import React, { Component } from 'react'
import styled from '../card/select.module.css'



// const initialState = {
//   className: null,
// }

const SelectCategory = props => {

  // const [state, setSelectState] = useState(initialState)

  // console.log('group', group)

  // let [selectOption, setSelectOption] = useState(group) 
  // console.log('selectOption', selectOption)

  // const gethandleChange =(e)=>{
  //   setSelectOption(e.target.value)
  // }

//   colorChange = ({className}) => {
//   // this.setState({value: event.target.value});

    return(
      <select className={styled[props.defaultSelectColor]} onChange={props.onSelectChange} >
      <option value="stuff">STUFF</option>
      <option value="learning" className={styled.learning_category}>LEARNING</option>
      <option value="health" className={styled.health_category}>HEALTH</option>
      <option value="work" className={styled.work_category}>WORK</option>
      <option value="leisure" className={styled.leisure_category}>LEISURE</option>
      <option value="productivity" className={styled.productivity_category}>PRODUCTIVITY</option>
      <option value="social" className={styled.social_category}>SOCIAL</option>
      <option value="sport" className={styled.sport_category}>SPORT</option>
    </select>
  )}

export default SelectCategory;


