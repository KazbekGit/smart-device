import {addTextButton} from '../utils/elements';
import {hidedText} from '../utils/elements';

const addText = () => {
  addTextButton.addEventListener('click', () => {
    hidedText.classList.toggle('closed');
    if (hidedText.classList.contains('closed')) {
      addTextButton.innerHTML = 'Подробнее';
    } else {
      addTextButton.innerHTML = 'Свернуть';
    }
  });
};

export {addText};

