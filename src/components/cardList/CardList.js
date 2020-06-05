import React from 'react'
import Card from '../card/Card'
import styled from "../card/card.module.css";
import CardChallenge from '../card/CardChallenge';

const CardList = ({todayCard}) => {
    return (
        <ul className={styled.card_list}>
            {todayCard.map(card=><li data-id={card._id} key={card._id} className={card.isEdit ? styled.card_active : styled.card_border}>
                <Card todayCard={card}/>
                {/* {challengeSendToUser &&  
                <CardChallenge todayCard={card}/> } */}
                </li>)}
                
        </ul>

    
)};

export default CardList;