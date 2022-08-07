import {footerHeaderBlocks, footerSectionsToggle, footerContactsToggle} from '../utils/elements';

const allLists = document.querySelectorAll('.closed-list');

const setAccorionToggle = () => {
  footerHeaderBlocks.forEach((elem) => {
    elem.addEventListener('click', () => {
      const currentList = elem.parentNode.querySelector('.accordion');
      if (elem.classList.contains('footer__header-block--add-plus')) {
        allLists.forEach((list) => {
          list.classList.add('closed-list');
        });
        footerHeaderBlocks.forEach((el) => {
          el.classList.add('footer__header-block--add-plus');
        });
        elem.classList.remove('footer__header-block--add-plus');
        currentList.classList.remove('closed-list');
      } else {
        elem.classList.add('footer__header-block--add-plus');
        currentList.classList.add('closed-list');
      }
    });
  });
  footerSectionsToggle.addEventListener();
};

export {setAccorionToggle};

