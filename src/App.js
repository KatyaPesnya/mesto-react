import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header page__content">
        <img src= "./images/header-logo.svg" alt="логотип" className="header__logo" />
      </header>
      <main className="content">
        <section className="profile page__content">
          <div className="profile__overlay">
            <img src="./images/profile-avatar.jpg" alt="#" className="profile__avatar" />
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
      <footer className="footer page__content">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
  <section className="overlay overlay_type_edit">
    <div className="popup">
      <form novalidate  name="edit" className="popup__container popup__container_type_edit">
        <h2 className="popup__heading">Редактировать профиль</h2>
        <input id="name-input" type="text" name="title" minlength='2' maxlength='40' required className="popup__input"></input>
          <span className="popup__input-error name-input-error"></span>
          <input id="job-input" type="text" name="description"   minlength='2' maxlength='200' required className="popup__input"></input>
            <span className="popup__input-error job-input-error"></span>
            <button  type="submit" className="popup__button popup__button_type_edit">Сохранить</button>
      </form>
      <button type="button" className=" overlay__close popup__close popup__close_type_edit"></button>
    </div>
  </section>
  <section className="overlay overlay_type_add">
    <div className="popup">
      <form  novalidate  name="add" className="popup__container popup__container_type_add">
        <h2 className="popup__heading">Новое место</h2>
        <input id="title-input" type="text" name="caption" required minlength='2' maxlength='30' placeholder="Название" className="popup__input"></input>
          <span className="popup__input-error title-input-error"></span>
          <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" className="popup__input"></input>
            <span className="popup__input-error url-input-error"></span>
            <button type="submit" className="popup__button popup__button_disabled  popup__button_type_add ">Создать</button>
      </form>
      <button type="button" className=" overlay__close popup__close popup__close_type_add"></button>
    </div>
  </section>
  <section className="overlay overlay_type_preview" aria-label="#">
    <div className="overlay__container overlay__container_type_image">
      <img src="#" alt="#" className="overlay__image"></img>
        <h2 className="overlay__caption"></h2>
        <button type="button" className="overlay__close  overlay__close_type_image"></button>
    </div>
  </section>
  <section className="overlay overlay_delete-card">
    <div className="popup">
      <form novalidate  name="delete-card" className="popup__container popup__container_delete-card">
        <h2 className="popup__heading">Вы уверены?</h2>
        <button  type="submit" className="popup__button popup__button_delete-card">Да</button>
      </form>
      <button type="button" className=" overlay__close popup__close popup__close_delete-card"></button>
    </div>
  </section>
  <section className="overlay overlay_avatar">
    <div className="popup">
      <form novalidate  name="avatar" className="popup__container popup__container_avatar">
        <h2 className="popup__heading">Обновить аватар</h2>
        <input id="avatar-input" type="url" name="avatar"  required className="popup__input"></input>
          <span className="popup__input-error avatar-input-error"></span>
          <button  type="submit" className="popup__button popup__button_avatar">Сохранить</button>
      </form>
      <button type="button" className=" overlay__close popup__close popup__close_avatar"></button>
    </div>
  </section>
  <template className="card-template">
    <li className="card">
        <img className="card__image" src ='#' alt='#'></img>
        <button type="button" className="card__delete"></button>
        <div className="card__item">
          <h2 className="card__title text-content"></h2>
          <div className="card__like-container">
            <button type="button" className="card__like"></button>
            <span className="card__like-count">0</span>
          </div>
        </div>
    </li>
  </template>
    </div>
  );
}

export default App;
