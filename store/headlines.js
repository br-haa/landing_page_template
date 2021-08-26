export const state = () => ({
  inUse: 'default',
  value: {
    default: {
      headline: `$0 Down Bankruptcy ™*`,
      subhead: `File Now - Pay Attorney Fees Later`,
    },
    chapter7: {
      headline: `Chapter 7 Bankruptcy`,
      subhead: `$0 Down - File Now Pay Later*`,
    },
    chapter13: {
      headline: `Chapter 13 Bankruptcy`,
      subhead: `$0 Down - File Now Pay Later*`,
    },
  },
})

export const mutations = {
  set(state, content) {
    state.inUse = content
  },
}

export const actions = {
  set(context, content) {
    context.commit('set', content)
  },
}
