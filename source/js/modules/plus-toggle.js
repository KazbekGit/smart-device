import {footerHeaderBlocks} from '../utils/elements';
import {footerContainer} from '../utils/elements';


const togglePlus = () => {
  footerContainer.addEventListener('click', (evt) => {
    if (evt.target.matches('.footer__header-block')) {
      const blockId = evt.target.dataset.id;
      console.log(evt.target);
      console.log(blockId);
      console.log(footerHeaderBlocks[blockId - 1]);
    }
  });
};

export {togglePlus};

