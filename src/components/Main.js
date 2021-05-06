import React, {useState} from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = useState([])
  const currentUser = React.useContext(CurrentUserContext);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
  .catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    api.getCards()
        .then((data) => {
          setCards(data)
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])
  return (
      <main className="content">
        <section className="profile page__content">
          <div className="profile__overlay">
            <img src={currentUser.avatar} style={{backgroundImage: `url(${currentUser.avatar})`}}
                 alt={`Аватар пользователя ${currentUser.name}`} className="profile__avatar"/>
            <button onClick={props.onEditAvatar}
                    className="profile__avatar-edit-button"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__title text-content">{currentUser.name}</h1>
            <p className="profile__description text-content">{currentUser.about}</p>
            <button onClick={props.onEditProfile}
                    type="button"
                    className="profile__popup-button"/>
          </div>
          <button onClick={props.onAddPlace}
                  type="button"
                  className="profile__add-button"/>
        </section>
        <section className="cards" aria-label="#">
          <ul className="cards__list">
            {cards.map(card =>
                <Card
                    key={card._id}
                    card={card}
                    onCardClick={props.onCardClick}
                    onCardLike={handleCardLike}
                   // onCardDelete={handleCardDelete}
                />
            )}
          </ul>
        </section>
      </main>
  )
}

export default Main;

