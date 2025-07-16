const observer = new MutationObserver(() => {
    const banners = document.querySelectorAll('[aria-label="fundraising banner"]');
    if (banners.length > 0) {
      banners.forEach(el => el.remove());
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  