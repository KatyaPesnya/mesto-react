import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard('')
  }

  return (
      <div className="App">
        < div className="root">
          <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer/>
          </div>
          <PopupWithForm
              name="edit"
              title="Редактировать профиль"
              submitText="Сохранить"
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
          >
            <>
              <input className="popup__input" id="name-input" type="text" name="title" minLength='2' maxLength='40'
                     required/>
              <span className="popup__input-error name-input-error"/>
              <input className="popup__input" id="job-input" type="text" name="description" minLength='2'
                     maxLength='200' required/>
              <span className="popup__input-error job-input-error"/>

            </>
          </PopupWithForm>
          <PopupWithForm
              name="add"
              title="Новое место"
              submitText="Создать"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
          >
            <>
              <input id="title-input" type="text" name="caption" required minLength='2' maxLength='30'
                     placeholder="Название" className="popup__input"/>
              <span className="popup__input-error title-input-error"/>
              <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку"
                     className="popup__input"/>
              <span className="popup__input-error url-input-error"/>

            </>

          </PopupWithForm>
          <PopupWithForm
              name="delete-card"
              title="Вы уверены?"
              submitText="Да"
          />
          <PopupWithForm
              name="avatar"
              title="Обновить аватар"
              submitText="Сохранить"
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
          >
            <>
              <input id="avatar-input" type="url" name="avatar" required className="popup__input"/>
              <span className="popup__input-error avatar-input-error"/>
            </>

          </PopupWithForm>
          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
          />

        </div>
      </div>

  );
}

export default App;
