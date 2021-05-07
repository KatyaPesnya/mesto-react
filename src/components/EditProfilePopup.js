import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props){
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  return(
      <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      submitText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
  >
    <input className="popup__input" id="name-input" type="text" name="title" minLength='2' maxLength='40'
           required/>
    <span className="popup__input-error name-input-error"/>
    <input className="popup__input" id="job-input" type="text" name="description" minLength='2'
           maxLength='200' required/>
    <span className="popup__input-error job-input-error"/>

  </PopupWithForm>)
}
export default EditProfilePopup;