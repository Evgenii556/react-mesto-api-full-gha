import React  from 'react';
import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <main>
            <section className="profile">
                <button className="profile__avatar-button"
                  type="button"
                  onClick={onEditAvatar}>
                  <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
                </button>
              <div className="profile__info">
                <div className="profile__info-row">
                  <h1 className="profile__title">{currentUser.name}</h1>
                  <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{currentUser.about}</p>
              </div>
              <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
            {cards.map((card) => (
              <Card 
                 card={card} 
                 key={card._id} 
                 onCardClick={onCardClick} 
                 onCardDelete={onCardDelete}
                 onCardLike={onCardLike} />
              ))}
            </section>
        </main>
    );
}
export default Main;