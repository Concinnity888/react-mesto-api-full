function ImagePopup({ card, isOpen, onClosePopup }) {
  return (
    <div className={`popup popup-gallery ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container-image'>
        <button
          className='popup__btn-close'
          type='button'
          onClick={onClosePopup}
          aria-label='Закрыть'
        ></button>
        <img className='popup__photo' src={card?.link} alt={card?.name} />
        <h2 className='popup__title-image'>{card?.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
