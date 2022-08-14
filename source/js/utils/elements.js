const popupToggle = document.querySelector('.main-header__button');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__form');
const feedbackForm = document.querySelector('.feedback__form');
const overlay = document.querySelector('.overlay');
const popupCloser = document.querySelector('.popup__closer');
const userPhones = document.querySelectorAll('input[name="user-phone"]');
const userName = document.querySelector('#popup-name');
const noJSElements = document.querySelectorAll('.nojs');
const footerHeaderBlocks = document.querySelectorAll('.footer__header-block');
const footerContainer = document.querySelector('.footer__container');
const addTextButton = document.querySelector('.about-us__button');
const hidedText = document.querySelector('.about-us__description--hide');
const footerAccordionToggles = document.querySelectorAll('.footer__toggle-wrapper');
const footerSectionBlocks = document.querySelectorAll('.footer__accordion');
const popupButton = popupForm.querySelector('button[type="submit"]');
const popupPhone = popupForm.querySelector('input[name="user-phone"]');
const popupTextarea = popupForm.getElementsByTagName('textarea');
const popupCheckbox = popupForm.querySelector('input[type="checkbox"]');

export {popupToggle, popup, overlay, popupCloser, userPhones, userName, noJSElements, footerHeaderBlocks, footerContainer, addTextButton, hidedText, footerAccordionToggles, footerSectionBlocks, popupForm, popupButton, popupPhone, popupTextarea, popupCheckbox, feedbackForm};

