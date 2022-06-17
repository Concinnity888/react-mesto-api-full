import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  return (
    <main className='page__content content'>
      <section className='profile'>
        <div className='profile__wrap-avatar'>
          <img
            className='profile__avatar'
            src={avatar}
            alt='Фото пользователя'
          />
          <button
            className='profile__btn-update-avatar'
            type='button'
            onClick={onEditAvatar}
            aria-label='Загрузить аватар'
          ></button>
        </div>

        <div className='profile__info'>
          <h1 className='profile__name'>{name}</h1>
          <button
            className='profile__btn-edit'
            type='button'
            onClick={onEditProfile}
            aria-label='Редактировать'
          ></button>
          <p className='profile__desc'>{about}</p>
        </div>

        <button
          className='profile__btn-add'
          type='button'
          onClick={onAddPlace}
          aria-label='Добавить'
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {cards.length &&
            cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
