import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";
import EditProfilePopup from './EditProfilePopup';
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState('')
  React.useEffect(() => {
    api.getUserInfo()
        .then((data) => {
          setCurrentUser(data)
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])
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
    setSelectedCard(null)
  }
  function handleUpdateUser(data){
    api.setUserInfo(data)
        .then((data)=> {
          setCurrentUser(data);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
        })

}
  return (
      <CurrentUserContext.Provider value={currentUser}>
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
          <PopupWithForm
              name="add"
              title="Новое место"
              submitText="Создать"
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
          >
              <input id="title-input" type="text" name="caption" required minLength='2' maxLength='30'
                     placeholder="Название" className="popup__input"/>
              <span className="popup__input-error title-input-error"/>
              <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку"
                     className="popup__input"/>
              <span className="popup__input-error url-input-error"/>

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
              <input id="avatar-input" type="url" name="avatar" required className="popup__input"/>
              <span className="popup__input-error avatar-input-error"/>

          </PopupWithForm>
          <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
          />

        </div>
      </div>
</CurrentUserContext.Provider>
  );
}

export default App;
