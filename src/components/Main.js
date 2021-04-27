import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg'
function Main() {
    return (
        <main className="content">
            <section className="profile page__content">
                <div className="profile__overlay">
                    <img src= {profileAvatar} alt="#" className="profile__avatar" />
                    <button className="profile__avatar-edit-button" ></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title text-content">Жак-Ив Кусто</h1>
                    <p className="profile__description text-content">Исследователь океана</p>
                    <button type="button" className="profile__popup-button"></button>
                </div>
                <button type="button" className="profile__add-button"></button>
            </section>
            <section className="cards" aria-label="#">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    )
}
export default Main;