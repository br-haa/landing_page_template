export default function ({ route, store }) {
  store.dispatch('camp/set', route.query.camp || route.query.Camp)
  switch (route.query.camp || route.query.Camp) {
    case 'chapter-7':
      store.dispatch('headlines/set', 'chapter7')
      store.dispatch('camp/set', 'chapter-7')
      break
    case 'chapter-13':
      store.dispatch('headlines/set', 'chapter13')
      store.dispatch('camp/set', 'chapter-13')
      break
    default:
      store.dispatch('camp/set', 'bankruptcy')
      store.dispatch('headlines/set', 'default')
  }
}
