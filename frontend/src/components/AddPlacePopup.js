import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='add'
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    >
      <div className='popup__field-wrap'>
        <input
          className='popup__field'
          type='text'
          name='title'
          id='title'
          placeholder='Название'
          minLength='2'
          maxLength='30'
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className='popup__error-message' id='title-error'></span>
      </div>
      <div className='popup__field-wrap'>
        <input
          className='popup__field'
          type='url'
          name='link'
          id='link'
          placeholder='Ссылка на картинку'
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className='popup__error-message' id='link-error'></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
