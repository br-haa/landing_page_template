export const state = () => ({
  value: '',
})

export const mutations = {
  set(state, content) {
    state.value = content
  },
}

export const actions = {
  set(context, content) {
    context.commit('set', content)
  },
}
