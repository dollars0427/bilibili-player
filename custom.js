//允許用戶使用ESC按鈕回到上一頁
document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'Escape':
      history.go(-1);
      break;
    default:
      return;
  }
  e.preventDefault();
});

//建立mutationObserver 偵測網頁內容更新
const mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    //每次網頁更新時，移除連結裡的_blank屬性以避免開新視窗，否則會導致視窗無法維持置頂狀態）
    const links = document.querySelectorAll('a[target="_blank"]');
    Array.prototype.forEach.call(links, function(link, i){
      link.removeAttribute('target');
    });

    //偵測網頁是否已經進入網頁全屏模式，及是否存在網頁全屏按鈕，是則自動進入網頁全屏模式
    const body = document.querySelector('body');
    const fullscreenBtn = document.querySelector('.bilibili-player-video-web-fullscreen');
    if(!body.classList.contains('player-mode-webfullscreen')){
      if(fullscreenBtn){
        fullscreenBtn.click();
      }
    }
  });
});

//設定mutationObserver
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
