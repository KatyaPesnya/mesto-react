import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg'

function Main() {
    return (
        <main className="content">
            <section className="profile page__content">
                <div className="profile__overlay">
                    <img src= {profileAvatar} alt="#" className="profile__avatar" />
                    <button  onClick={handleEditAvatarClick}
                             className="profile__avatar-edit-button" ></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title text-content">Жак-Ив Кусто</h1>
                    <p className="profile__description text-content">Исследователь океана</p>
                    <button onClick={handleEditProfileClick}
                            type="button"
                            className="profile__popup-button"></button>
                </div>
                <button onClick={handleAddPlaceClick}
                        type="button"
                        className="profile__add-button"></button>
            </section>
            <section className="cards" aria-label="#">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    )
}
export default Main;

function handleEditAvatarClick(){
   document.querySelector('.popup_type_avatar').parentElement.classList.toggle('overlay_opened')

}
function   handleEditProfileClick(){
        document.querySelector('.popup_type_edit').parentElement.classList.toggle('overlay_opened')

}

function handleAddPlaceClick (){
    document.querySelector('.popup_type_add').parentElement.classList.toggle('overlay_opened')

}