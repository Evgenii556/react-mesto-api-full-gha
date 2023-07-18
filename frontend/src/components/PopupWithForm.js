
function PopupWithForm({ children, name, title, buttonText, onClose, isOpen, onSubmit}) {

  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`} >
        <div className="popup__container">
            <h3 className={`popup__title ${name = 'confirm' ? '' : 'popup__title_type_confirm'}`}>{title}</h3>
            <form className={`popup__form popup__form_${name}`} name={name} onSubmit={onSubmit}>
            {children}
                <button className="popup__submit-button" type="submit">{buttonText}</button>
            </form>
            <button className={`popup__close-icon`} type="button" onClick={onClose}></button>
        </div>
    </div>
  );
}
export default PopupWithForm;