import {noJSElements} from './elements';
import {footerHeaderBlocks} from './elements';

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
  footerHeaderBlocks.forEach((elem) => {
    elem.classList.add('footer__header-block--add-plus');
  });
};

export {disablePageScroll, enablePageScroll, removeNoJS, addPluses};

