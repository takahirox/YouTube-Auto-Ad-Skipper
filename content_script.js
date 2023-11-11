{
  const classNames = '.ytp-ad-skip-button-modern, .ytp-ad-skip-button';

  const skipAd = () => {
    const buttons = document.querySelectorAll(classNames);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
    setTimeout(skipAd, 1000);
  };
  skipAd();
}

