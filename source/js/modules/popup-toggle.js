import {popupToggle, popup, overlay, popupCloser, userName} from '../utils/elements';
import {enablePageScroll, disablePageScroll} from '../utils/utils';
import {setPhoneMask} from './phone-mask';

const isEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

const onEscKeyDown = () => {
  document.addEventListener('keydown', isEscKeyDown, false);
};

const openPopup = () => {
  popup.classList.remove('closed');
  userName.focus();

  popupToggle.removeEventListener('click', openPopup, false);

  disablePageScroll();
  overlay.classList.remove('closed');

  onEscKeyDown();
  setPhoneMask();

  overlay.addEventListener('click', closePopup, false);
  popupCloser.addEventListener('click', closePopup, false);
};

const closePopup = () => {
  popup.classList.add('closed');

  popupToggle.addEventListener('click', openPopup, false);

  enablePageScroll();
  overlay.classList.add('closed');

  overlay.removeEventListener('click', closePopup, false);
  popupCloser.removeEventListener('click', closePopup, false);
  document.removeEventListener('keydown', isEscKeyDown, false);
};

const togglePopup = () => {
  if (popupToggle) {
    popupToggle.addEventListener('click', openPopup, false);
  } else {
    throw new Error('Модальное окно не найдено');
  }
};

export {togglePopup, closePopup, openPopup};

