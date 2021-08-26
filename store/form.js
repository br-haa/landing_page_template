export const state = () => ({
  value: {
    bjn: '',
    reactor: '',
    leadSource: '',
    leadVendor: '',
    clientLink: '',
  },
})
export const mutations = {
  set(state, info) {
    // state.value = info
    for (const infoItem in info) {
      for (const valueItem in state.value) {
        if (infoItem === valueItem) {
          state.value[valueItem] = info[infoItem]
        }
      }
    }
  },
}
export const actions = {
  set(context, info) {
    context.commit('set', info)
  },
}
