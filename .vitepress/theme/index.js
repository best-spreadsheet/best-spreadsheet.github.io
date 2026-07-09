import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    const route = useRoute()
    onMounted(() => {
      initOnlineCounter()
    })
    watch(() => route.path, () => {
      setTimeout(initOnlineCounter, 300)
    })
    return DefaultTheme.Layout
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
