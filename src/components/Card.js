import React from 'react';

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card)
    }
    return(

        <li className="card">
            <img className="card__image" onClick={handleCardClick} src={props.card.link} alt={`Фотография ${props.card.name}`} />
            <button type="button" className="card__delete"/>
            <div className="card__item">
                <h2 className="card__title text-content" > </h2>
                <div className="card__like-container">
                    <button type="button" className="card__like"/>
                    <span className="card__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}
export default Card;