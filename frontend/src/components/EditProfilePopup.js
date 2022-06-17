import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name ?? '');
    setDescription(currentUser.about ?? '');
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit-profile'
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    >
      <div className='popup__field-wrap'>
        <input
          className='popup__field'
          type='text'
          name='name'
          id='name'
          minLength='2'
          maxLength='40'
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className='popup__error-message' id='name-error'></span>
      </div>
      <div className='popup__field-wrap'>
        <input
          className='popup__field'
          type='text'
          name='desc'
          id='desc'
          minLength='2'
          maxLength='200'
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className='popup__error-message' id='desc-error'></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
