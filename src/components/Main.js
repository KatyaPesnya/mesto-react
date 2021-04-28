import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg'


function Main(props) {
    return (
        <main className="content">
            <section className="profile page__content">
                <div className="profile__overlay">
                    <img src= {profileAvatar} alt="#" className="profile__avatar" />
                    <button  onClick={props.onEditAvatar}
                             className="profile__avatar-edit-button" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title text-content">Жак-Ив Кусто</h1>
                    <p className="profile__description text-content">Исследователь океана</p>
                    <button onClick={props.onEditProfile}
                            type="button"
                            className="profile__popup-button" />
                </div>
                <button onClick={props.onAddPlace}
                        type="button"
                        className="profile__add-button" />
            </section>
            <section className="cards" aria-label="#">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    )
}
export default Main;

