import {popupToggle, popup, overlay, popupCloser, userName, popupButton} from '../utils/elements';
import {enablePageScroll, disablePageScroll} from '../utils/utils';
import {setPhoneMask} from './phone-mask';

const isEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

const isEnterKeyDown = (evt) => {
  if (evt.key === 'Enter') {
    closePopup();
  }
};

const onEscKeyDown = () => {
  document.addEventListener('keydown', isEscKeyDown, false);
};

let focusableEls = popup.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
let firstFocusableEl = focusableEls[0];
let lastFocusableEl = focusableEls[focusableEls.length - 1];
const KEYCODE_TAB = 9;

const setFocus = (e) => {
  if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }
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
  popupCloser.addEventListener('keydown', isEnterKeyDown, false);
  popupButton.addEventListener('keydown', setFocus, false);
};

const closePopup = () => {
  popup.classList.add('closed');

  popupToggle.addEventListener('click', openPopup, false);

  enablePageScroll();
  overlay.classList.add('closed');

  overlay.removeEventListener('click', closePopup, false);
  popupCloser.removeEventListener('click', closePopup, false);
  document.removeEventListener('keydown', isEscKeyDown, false);
  popupCloser.addEventListener('keydown', isEnterKeyDown, false);
};

const togglePopup = () => {
  if (popupToggle) {
    popupToggle.addEventListener('click', openPopup, false);
  } else {
    throw new Error('Модальное окно не найдено');
  }
};

export {togglePopup, closePopup, openPopup};

