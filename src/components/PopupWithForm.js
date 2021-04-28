import React from 'react';

function PopupWithForm(props){
  return  (
      <section className="overlay">
                  <div className={`popup popup_type_${props.name}`}>
                       <form noValidate  className="popup__container" name={props.name}>
                           <h2 className="popup__heading">{props.title}</h2>
                           {props.children}
                           <button  type="submit" className="popup__button ">{props.submitMessage}</button>
                       </form>
                      <button type="button" className=" overlay__close popup__close"></button>
                   </div>
              </section>
    )
}
export default PopupWithForm;
// <>
//     <section className="overlay overlay_type_edit">
//         <div className="popup">
//             <form noValidate  name="edit" className="popup__container popup__container_type_edit">
//                 <h2 className="popup__heading">Редактировать профиль</h2>
//                 <input id="name-input" type="text" name="title" minLength='2' maxLength='40' required className="popup__input"></input>
//                 <span className="popup__input-error name-input-error"></span>
//                 <input id="job-input" type="text" name="description"   minLength='2' maxLength='200' required className="popup__input"></input>
//                 <span className="popup__input-error job-input-error"></span>
//                 <button  type="submit" className="popup__button popup__button_type_edit">Сохранить</button>
//             </form>
//             <button type="button" className=" overlay__close popup__close popup__close_type_edit"></button>
//         </div>
//     </section>
//     <section className="overlay overlay_type_add">
//         <div className="popup">
//             <form  noValidate  name="add" className="popup__container popup__container_type_add">
//                 <h2 className="popup__heading">Новое место</h2>
//                 <input id="title-input" type="text" name="caption" required minLength='2' maxLength='30' placeholder="Название" className="popup__input"></input>
//                 <span className="popup__input-error title-input-error"></span>
//                 <input id="url-input" type="url" name="url" required placeholder="Ссылка на картинку" className="popup__input"></input>
//                 <span className="popup__input-error url-input-error"></span>
//                 <button type="submit" className="popup__button popup__button_disabled  popup__button_type_add ">Создать</button>
//             </form>
//             <button type="button" className=" overlay__close popup__close popup__close_type_add"></button>
//         </div>
//     </section>
//     <section className="overlay overlay_delete-card">
//         <div className="popup">
//             <form noValidate  name="delete-card" className="popup__container popup__container_delete-card">
//                 <h2 className="popup__heading">Вы уверены?</h2>
//                 <button  type="submit" className="popup__button popup__button_delete-card">Да</button>
//             </form>
//             <button type="button" className=" overlay__close popup__close popup__close_delete-card"></button>
//         </div>
//     </section>
//     <section className="overlay overlay_avatar">
//         <div className="popup">
//             <form noValidate  name="avatar" className="popup__container popup__container_avatar">
//                 <h2 className="popup__heading">Обновить аватар</h2>
//                 <input id="avatar-input" type="url" name="avatar"  required className="popup__input"></input>
//                 <span className="popup__input-error avatar-input-error"></span>
//                 <button  type="submit" className="popup__button popup__button_avatar">Сохранить</button>
//             </form>
//             <button type="button" className=" overlay__close popup__close popup__close_avatar"></button>
//         </div>
//     </section>
// </>