function PopupWithForm({
  title,
  name,
  isOpen,
  children,
  onClosePopup,
  onSubmit,
}) {
  const btnTextField = {
    'edit-profile': 'Сохранить',
    'update-avatar': 'Сохранить',
    add: 'Создать',
    confirm: 'Да',
  };

  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          className='popup__btn-close'
          type='button'
          onClick={onClosePopup}
          aria-label='Закрыть'
        ></button>
        <h2 className='popup__title'>{title}</h2>

        <form
          className={`popup__form popup__form-${name}`}
          name={`form-${name}`}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className='popup__btn-submit'
            type='submit'
            aria-label={btnTextField[name]}
          >
            {btnTextField[name]}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
