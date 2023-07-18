import React from "react";
import success from '../images/Success.png';
import error from '../images/Error.png';

function InfoTooltip({ isOpen, onClose, isAuthOk }) {
    return (
        <div className={`popup popup_type_info ${isOpen ? 'popup_opened' : ''}`} >
        <div className="popup__container">
            <img className="popup__sign" src={isAuthOk ? success : error} alt={isAuthOk ? "Успешно" : "Возникли неполадки"}/>
            <h3 className='popup__alert'>{isAuthOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h3>
            <button className='popup__close-icon' type="button" onClick={onClose}></button>
        </div>
    </div>
    );
}
export default InfoTooltip;