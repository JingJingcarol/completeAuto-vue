import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh", // 定义默认语言为中文
  messages: {
    zh: require("./assets/languages/zh.json"),
    en: require("./assets/languages/en.json")
  }
});
new Vue({
  el: "#app",
  i18n,
  render: h => h(App)
});
