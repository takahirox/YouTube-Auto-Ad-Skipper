{
  const className = 'ytp-ad-skip-button';

  const skipAd = () => {
    const buttons = document.getElementsByClassName(className);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
    setTimeout(skipAd, 1000);
  };
  skipAd();
}

