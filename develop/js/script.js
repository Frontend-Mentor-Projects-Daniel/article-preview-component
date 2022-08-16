const btnShares = document.querySelectorAll('[data-btn-share]');
const btnShareDesktop = btnShares[0];
const btnShareMobile = btnShares[1];
const userBlock = document.querySelector('[data-block-user]');
const shareBlock = document.querySelector('[data-block-share]');
const screen = document.body;

// cause pop-up to appear differently depending on whether user is viewing component on a mobile size viewport or not
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
