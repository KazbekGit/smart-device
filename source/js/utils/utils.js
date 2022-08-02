import {noJSElements} from './elements';

const disablePageScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enablePageScroll = () => {
  document.body.style.overflow = 'visible';
};

const removeNoJS = () => {
  noJSElements.forEach((elem) => {
    elem.classList.remove('nojs');
  });
};

const addPluses = () => {
  
}

export {disablePageScroll, enablePageScroll, removeNoJS};

