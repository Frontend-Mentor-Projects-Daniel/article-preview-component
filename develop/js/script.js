// TODO
// 1) make animation for tooltip pop up
// 2) when screen resizes or anywhere else is clicked close popup

const btnShares = document.querySelectorAll('[data-btn-share]');
const btnShareDesktop = btnShares[0];
const btnShareMobile = btnShares[1];
console.log(btnShareDesktop);
console.log(btnShareMobile);
// const btnShareMobile = document.querySelector('[data-btn-share-mobile]');
const userBlock = document.querySelector('[data-block-user]');
const shareBlock = document.querySelector('[data-block-share]');
const screen = document.body;

const handleClickDesktop = (e) => {};

const handleClickMobile = (e) => {};

const handleClick = (e) => {
  const observer = new ResizeObserver((entries) => {
    const body = entries[0];
    const isMobile = body.contentRect.width < 768;
    if (isMobile) {
      userBlock.classList.toggle('hide');
      shareBlock.classList.toggle('hide');
    } else {
      shareBlock.classList.toggle('hide');
    }
  });

  observer.observe(screen);
};

btnShareMobile.addEventListener('click', handleClick);
btnShareDesktop.addEventListener('click', handleClick);
