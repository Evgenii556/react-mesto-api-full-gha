import React  from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card.name && "popup_opened"}`} >
      <div className="popup__image-container">
        <img className="popup__image" src={card.link} alt={card.name}/>
        <p className="popup__capture">{card.name}</p>
        <button className="popup__close-icon" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}
export default ImagePopup;