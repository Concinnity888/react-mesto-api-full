function InfoTooltip({ isOpen, onClose, isSuccess, isError }) {
  return (
    <div className={`info-tooltip ${isOpen ? 'info-tooltip_opened' : ''}`}>
      <div
        className={`info-tooltip__container ${
          !isSuccess ? 'info-tooltip__container_bg_error' : ''
        }`}
      >
        <button
          className='info-tooltip__btn-close'
          type='button'
          onClick={onClose}
          aria-label='Закрыть'
        ></button>
        <p className='info-tooltip__text'>
          {isSuccess && 'Вы успешно зарегистрировались!'}
          {isError && 'Что-то пошло не так! Попробуйте ещё раз.'}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
