import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    const handleSetName = (evt) => {
        setName(evt.target.value);
    }

    const handleSetDescription = (evt) => {
        setDescription(evt.target.value);
    }

    const handleSubmit = (evt) => {
      evt.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
          name='type_edit'
          title='Редактировать профиль'
          buttonText='Сохранить'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}>
          <input className="popup__input popup__input_type_name" value={name || ''} onChange={handleSetName} id="name-input" name="name" minLength="2" maxLength="30" type="text" placeholder="Имя" required />
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input popup__input_type_job" value={description || ''} onChange={handleSetDescription} id="about-input" type="text" name="about" minLength="2" maxLength="50" placeholder="О себе" required />
          <span className="popup__input-error job-input-error"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup;