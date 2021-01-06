import { createStore } from 'vuex'

export default createStore({
  state: {
    user_id: null,
    user_name: null,
    nickname: null,
    avatar: null,
    real_name: null,
    sex: null,
    mobile: null,
    email: null,
    identity: null
  },
  mutations: {
    login (state, data) {
      state.user_id = data.user_id;
      state.user_name = data.user_name;
      state.nickname = data.nickname;
      state.avatar = data.avatar;
      state.real_name = data.real_name;
      state.sex = data.sex;
      state.mobile = data.mobile;
      state.email = data.email;
      state.identity = data.identity;
    }
  },
  actions: {
  },
  modules: {
  }
})
