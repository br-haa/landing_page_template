export default function ({ route, store }) {
  store.dispatch('geo/set', route.query.geo || route.query.Geo)
  store.dispatch('camp/set', route.query.camp || route.query.Camp)
  const googleNumbers = {
    // list GOOGLE numbers here!
    123: '123-456-7890',
  }
  const bingNumbers = {
    // list BING numbers here!
    123: '123-456-7890',
  }
  let numbers = {} // shared number object
  const formDefaults = {
    clientLink: 'https://hoglundlaw.com',
  }
  store.dispatch('form/set', formDefaults)
  if (route.query.useHCMBM || route.query.useHCMB) {
    // sets number object  and form to bing if bing url variable is found
    const bingForm = {
      bjn: '',
      reactor: '',
      leadSource: '1',
      leadVendor: '2',
    }
    numbers = bingNumbers
    store.dispatch('bing/set', true) // this controls the adding of the bing CTM script in the default layout
    store.dispatch('form/set', bingForm)
  } else {
    // else sets it to google numbers
    const googleForm = {
      bjn: '',
      reactor: '',
      leadSource: '1',
      leadVendor: '2',
    }
    store.dispatch('form/set', googleForm)
    numbers = googleNumbers
  }
  function pageSet(num) {
    // function takes values from switch statement
    // and pushes them to the store
    store.dispatch('number/set', num)
  }
  switch (route.query.geo || route.query.Geo) {
    case 'north':
      pageSet(numbers['123'])
      break
    case 'south':
      pageSet(numbers['111'])
      break
    default:
      pageSet(numbers['123'])
  }
}
