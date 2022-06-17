import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  useEffect(() => {
    ref.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='update-avatar'
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    >
      <div className='popup__field-wrap'>
        <input
          ref={ref}
          className='popup__field'
          type='url'
          name='avatar-link'
          id='avatar-link'
          placeholder='Ссылка на фото'
          required
        />
        <span className='popup__error-message' id='avatar-link-error'></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
