import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

const BaseLayout = DefaultTheme.Layout

const marqueeData = [
  { text: '\u{1F1F5}\u{1F1F1} Polish users have placed their orders' },
  { text: '\u{1F1FA}\u{1F1F8} American users have placed their orders' },
  { text: '\u{1F1EC}\u{1F1E7} British users have placed their orders' },
  { text: '\u{1F1E9}\u{1F1EA} German users have placed their orders' },
  { text: '\u{1F1EB}\u{1F1F7} French users have placed their orders' },
  { text: '\u{1F1EE}\u{1F1F9} Italian users have placed their orders' },
  { text: '\u{1F1EA}\u{1F1F8} Spanish users have placed their orders' },
  { text: '\u{1F1F3}\u{1F1F1} Dutch users have placed their orders' },
  { text: '\u{1F1E7}\u{1F1F7} Brazilian users have placed their orders' },
  { text: '\u{1F1EF}\u{1F1F5} Japanese users have placed their orders' },
  { text: '\u{1F1F0}\u{1F1F7} Korean users have placed their orders' },
  { text: '\u{1F1E6}\u{1F1FA} Australian users have placed their orders' },
  { text: '\u{1F1E8}\u{1F1E6} Canadian users have placed their orders' },
  { text: '\u{1F1F2}\u{1F1FD} Mexican users have placed their orders' },
  { text: '\u{1F1F8}\u{1F1EA} Swedish users have placed their orders' },
  { text: '\u{1F1F3}\u{1F1F4} Norwegian users have placed their orders' },
  { text: '\u{1F1E9}\u{1F1F0} Danish users have placed their orders' },
  { text: '\u{1F1EB}\u{1F1EE} Finnish users have placed their orders' },
  { text: '\u{1F1E6}\u{1F1F9} Austrian users have placed their orders' },
  { text: '\u{1F1E8}\u{1F1ED} Swiss users have placed their orders' },
]

function createMarqueeContent() {
  const items = []
  marqueeData.forEach((item, index) => {
    items.push(
      h('div', { class: 'marquee-item', key: `item-${index}` }, [
        h('span', { class: 'text' }, item.text)
      ])
    )
    items.push(
      h('span', { class: 'marquee-separator', key: `sep-${index}` }, '\u2726')
    )
  })
  return items
}

const fullMarqueeContent = [...createMarqueeContent(), ...createMarqueeContent()]

export default {
  extends: DefaultTheme,
  Layout() {
    return h(BaseLayout, null, {
      'layout-top': () => h('div', { class: 'marquee-container' }, [
        h('div', { class: 'marquee-track' }, fullMarqueeContent)
      ])
    })
  }
}
