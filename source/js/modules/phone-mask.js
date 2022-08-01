import {userPhone} from '../utils/elements';

const setPrefix = () => {
  userPhone.value = '+7(';
};

const setPhoneMask = () => {
  userPhone.addEventListener('focus', setPrefix, false);
};

export {setPhoneMask};

