
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm'
import ImagePopup from "./ImagePopup";
function App() {
  return (
    <div className="App">
< div className="root">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    <PopupWithForm

        name="edit"
        title="Редактировать профиль"
        children={
            <>
                <input id="name-input" type="text" name="title" minLength='2' maxLength='40' required
                       className="popup__input"></input>
                <span className="popup__input-error name-input-error"></span>
                <input id="job-input" type="text" name="description" minLength='2' maxLength='200' required
                       className="popup__input"></input>
                <span className="popup__input-error job-input-error"></span>
            </>
        }
        submitMessage="Сохранить"
            />
    debugger
    <PopupWithForm
        name="add"
        title="Новое место"
        children={
            <>
            <input id="title-input" type="text" name="caption" required minLength='2' maxLength='30' placeholder="Название" className="popup__input"></input>
                <span className="popup__input-error title-input-error"></span>
                <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" className="popup__input"></input>
                <span className="popup__input-error url-input-error"></span>

            </>
        }
        submitMessage="Создать"
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
                <input id="avatar-input" type="url" name="avatar"  required className="popup__input"></input>
                <span className="popup__input-error avatar-input-error"></span>
            </>
        }
        submitMessage="Сохранить"
    />
    <ImagePopup />

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
    </div>

  );
}

export default App;
