import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__btn-remove ${
    !isOwn ? 'element__btn-remove_hide' : ''
  }`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__btn-like ${
    isLiked ? 'element__btn-like_active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className='elements__item element'>
      <img
        className='element__photo'
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />

      <div className='element__info'>
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__wrap-like'>
          <button
            className={cardLikeButtonClassName}
            type='button'
            onClick={handleLikeClick}
            aria-label='Нравится'
          ></button>
          <span className='element__counter-like'>{card.likes.length}</span>
        </div>
        <button
          className={cardDeleteButtonClassName}
          type='button'
          aria-label='Удалить'
          onClick={handleDeleteClick}
        ></button>
      </div>
    </li>
  );
}

export default Card;
