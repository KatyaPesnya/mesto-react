import React from 'react';
import api from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const[userAvatar, setUserAvatar] = React.useState()
React.useEffect(()=>{
    api.getInfo()
        .then((data)=>{
            const userData = data;
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar)
        })
        .catch((err) => {
            console.log(err);
        })
}, [userName, userDescription, userAvatar])

    return (
        <main className="content">
            <section className="profile page__content">
                <div className="profile__overlay">
                    <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})`}} alt={`Аватар пользователя ${userName}`} className="profile__avatar" />
                    <button  onClick={props.onEditAvatar}
                             className="profile__avatar-edit-button" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title text-content">{userName}</h1>
                    <p className="profile__description text-content">{userDescription}</p>
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

