const app = {
  state: {
    // 中英文
    language: window.localStorage.getItem("language") || "zh",
    theme: window.localStorage.getItem("theme") || "light"
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      window.localStorage.setItem("language", language);
    },
    SET_THEME: (state, theme) => {
      state.language = theme;
      window.localStorage.setItem("theme", theme);
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    }
  }
};

export default app;
