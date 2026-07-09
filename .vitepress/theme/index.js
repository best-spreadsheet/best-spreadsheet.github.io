import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        initOnlineCounter();
      };
      // Run on initial load
      setTimeout(initOnlineCounter, 100);
    }
  }
};

function initOnlineCounter() {
  const el = document.getElementById('onlineCount');
  if (!el) return;

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  el.textContent = randomBetween(300, 500);

  setInterval(() => {
    const current = parseInt(el.textContent, 10);
    const change = randomBetween(-15, 15);
    let next = current + change;
    if (next < 300) next = 300;
    if (next > 500) next = 500;
    el.textContent = next;
  }, 5000);
}
