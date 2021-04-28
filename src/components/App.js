import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm'
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const[selectedCard, setSelectedCard] = React.useState(false)

    function handleEditProfileClick() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    function closeAllPopups(){
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(false)
    }
  return (
    <div className="App">
< div className="root">
      <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>
    <PopupWithForm

        name="edit"
        title="Редактировать профиль"
        children={
            <>
                <input id="name-input" type="text" name="title" minLength='2' maxLength='40' required
                       className="popup__input" />
                <span className="popup__input-error name-input-error" />
                <input id="job-input" type="text" name="description" minLength='2' maxLength='200' required
                       className="popup__input" />
                <span className="popup__input-error job-input-error" />
            </>
        }
        submitMessage="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
            />
    <PopupWithForm
        name="add"
        title="Новое место"
        children={
            <>
            <input id="title-input" type="text" name="caption" required minLength='2' maxLength='30' placeholder="Название" className="popup__input"/>
                <span className="popup__input-error title-input-error" />
                <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" className="popup__input"/>
                <span className="popup__input-error url-input-error" />

            </>
        }
        submitMessage="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
    />
    <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        children={
            <>
            </>
        }
        submitMessage="Да"

    />
    <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
            <>
                <input id="avatar-input" type="url" name="avatar"  required className="popup__input" />
                <span className="popup__input-error avatar-input-error" />
            </>
        }
        submitMessage="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
    />
    <ImagePopup />


</div>
    </div>

  );
}

export default App;
