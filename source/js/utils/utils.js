const disablePageScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enablePageScroll = () => {
  document.body.style.overflow = 'visible';
};

export {disablePageScroll, enablePageScroll};

