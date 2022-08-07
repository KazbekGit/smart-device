import {userPhones} from '../utils/elements';

let getInputNumbersValue = function (input) {
  return input.value.replace(/\D/g, '');
};

const onPhoneInput = function (evt) {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = '';

  const firstSymbols = '+7';

  formattedInputValue = firstSymbols;

  if (inputNumbersValue.length > 1) {
    formattedInputValue += '(' + inputNumbersValue.slice(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ')' + inputNumbersValue.slice(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += inputNumbersValue.slice(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += inputNumbersValue.slice(9, 11);
  }

  input.value = formattedInputValue;
};

const setPhoneMask = () => {
  userPhones.forEach((elem) => {
    elem.addEventListener('input', onPhoneInput, false);
  });
};

export {setPhoneMask};
