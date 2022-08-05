import {userPhones} from '../utils/elements';

const setPrefix = () => {
  userPhones.forEach((elem) => {
    elem.value = '+7(';
  });
  userPhones.forEach((elem) => {
    elem.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 8 && elem.value.length < 4) {
        evt.preventDefault();
      }
    }, false);
    elem.addEventListener('input', () => {
      const numbersCount = elem.value.length;
      if (numbersCount === 6) {
        elem.value += ')';
        console.log(elem.value);
        numbersCount = 0;
      }
    }, false);
  });
};

const setPhoneMask = () => {
  userPhones.forEach((elem) => {
    elem.addEventListener('focus', setPrefix, false);
  });
};

export {setPhoneMask};

