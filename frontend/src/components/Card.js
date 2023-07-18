import { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`);;

    const handlePhotoClick = () => {
        onCardClick(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

  return ( 
    <div className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handlePhotoClick}/>
      <div className="element__image-info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
            <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            <span className="element__like-counter">{card.likes.length}</span>
        </div>
        {isOwn && <button className="element__delete" onClick={handleDeleteClick} type="button"></button>}
      </div>
    </div>
  );
}

export default Card;