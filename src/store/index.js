import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages = [message, ...state.messages];
    }
  },
  actions: {
    sendMessage({ commit, getters }, message) {
      commit("addMessage", {
        id: getters.getNewId,
        type: "message",
        text: message
      });
      const formData = new FormData();
      formData.set("q", message);
      axios.post("/api/get-answer", formData).then(res => {
        if (!res.data.ok) console.log("Error", res.data.error);
        else {
          setTimeout(() => {
            commit("addMessage", {
              id: getters.getNewId,
              type: "answer",
              text: res.data.a
            });
          }, 1000);
        }
      });
    }
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
    getNewId(state) {
      return state.messages.length;
    }
  }
});
