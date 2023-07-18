import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import React  from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = useRef();
  const urlRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: urlRef.current.value
    })
  }

  useEffect(() => {
    if (isOpen) {
      nameRef.current.value = '';
      urlRef.current.value = '';
    }
  }, [isOpen]);

  return (
    <PopupWithForm
        name='type_add'
        title='Новое место'
        buttonText='Создать'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
        <input ref={nameRef} className="popup__input popup__input_type_name" id="title-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error title-input-error" ></span>
        <input ref={urlRef} className="popup__input popup__input_type_job" id="url-input" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;