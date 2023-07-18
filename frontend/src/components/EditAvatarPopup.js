import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    useEffect(() => {
        if (isOpen) {
            avatarRef.current.value = '';
        }
    }, [isOpen]);

    return (
      <PopupWithForm
        name='type_avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
        <input ref={avatarRef} className="popup__input popup__input_type_avatar" id="avatar-input" type="url" name="link" placeholder="Ссылка" required />
        <span className="popup__input-error avatar-input-error" ></span>
      </PopupWithForm>
  );
}
export default EditAvatarPopup;