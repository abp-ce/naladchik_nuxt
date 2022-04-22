export const state = () => ({
  currentPage: 0
})
  
export const mutations = {
  set(state, value) {
    state.currentPage = value
  }
}
  