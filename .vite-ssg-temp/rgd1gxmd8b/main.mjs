import { ViteSSG } from "vite-ssg";
import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { RouterView } from "vue-router";
import { createI18n } from "vue-i18n";
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RouterView), _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_0__ = () => import("./assets/Index-Xl8ZPCCL.js");
const __pages_import_1__ = () => import("./assets/Articles-C2rU4iRk.js");
const routes = [{ "name": "Index", "path": "/", "component": __pages_import_0__, "props": true }, { "name": "Articles", "path": "/articles", "component": __pages_import_1__, "props": true }];
const hero_signup_branding$1 = "Register an account to enjoy all the features on this website";
const most_equipped$1 = "Vue.js Learning Platform";
const hero_title$1 = "Most Equipped";
const hero_description$1 = "Learn all about Vue.js";
const enter_your_email$1 = "Enter your email";
const enter_your_password$1 = "Enter your password";
const sign_up$1 = "Sign Up";
const accept_tos$1 = "By signing up, you agree to BelajarVue's Terms of Service & Privacy Policy.";
const register_option$1 = "Or Signup with:";
const already_register$1 = "Already create an account?";
const home$1 = "Home";
const article$1 = "Article";
const search_article_placeholder$1 = "Search article, series, or challenge";
const article_latest$1 = "Latest Article";
const article_latest_description$1 = "Latest article we've published.";
const see_more$1 = "See more";
const contact$1 = "Contact";
const newsletter$1 = "Newsletter";
const newsletter_description$1 = "Get updated notifications from email when we publish an article.";
const subscribe$1 = "Subscribe";
const article_list_description$1 = "All articles that have been published, whether included in a series or not.";
const en = {
  hero_signup_branding: hero_signup_branding$1,
  most_equipped: most_equipped$1,
  hero_title: hero_title$1,
  hero_description: hero_description$1,
  enter_your_email: enter_your_email$1,
  enter_your_password: enter_your_password$1,
  sign_up: sign_up$1,
  accept_tos: accept_tos$1,
  register_option: register_option$1,
  already_register: already_register$1,
  home: home$1,
  article: article$1,
  search_article_placeholder: search_article_placeholder$1,
  article_latest: article_latest$1,
  article_latest_description: article_latest_description$1,
  see_more: see_more$1,
  contact: contact$1,
  newsletter: newsletter$1,
  newsletter_description: newsletter_description$1,
  subscribe: subscribe$1,
  article_list_description: article_list_description$1
};
const hero_signup_branding = "Daftar akun untuk menikmati semua fitur di website ini";
const hero_title = "Platform Belajar Vue.js";
const most_equipped = "Terlengkap";
const hero_description = "Pelajari semua hal mengenai Vue.js";
const enter_your_email = "Masukkan email Anda";
const enter_your_password = "Masukkan password Anda";
const sign_up = "Daftar";
const accept_tos = "Dengan mendaftar akun, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi BelajarVue.";
const register_option = "Atau daftar dengan:";
const already_register = "Sudah memiliki akun?";
const home = "Beranda";
const article = "Artikel";
const search_article_placeholder = "Cari artikel, series, atau challenge";
const article_latest = "Artikel Terbaru";
const article_latest_description = "Artikel terbaru yang telah kami terbitkan.";
const see_more = "Lihat semua";
const contact = "Kontak";
const newsletter = "Berlangganan Artikel";
const newsletter_description = "Dapatkan notifikasi secara update dari email ketika kami menerbitkan sebuah artikel.";
const subscribe = "Langganan";
const article_list_description = "Semua artikel yang telah dipublikasikan termasuk yang masuk kedalam series maupun tidak.";
const id = {
  hero_signup_branding,
  hero_title,
  most_equipped,
  hero_description,
  enter_your_email,
  enter_your_password,
  sign_up,
  accept_tos,
  register_option,
  already_register,
  home,
  article,
  search_article_placeholder,
  article_latest,
  article_latest_description,
  see_more,
  contact,
  newsletter,
  newsletter_description,
  subscribe,
  article_list_description
};
window.global || (window.global = window);
const createApp = ViteSSG(
  _sfc_main,
  {
    base: "/",
    routes
  },
  ({ app }) => {
    const i18n = createI18n({
      legacy: false,
      locale: "id",
      fallbackLocale: "en",
      messages: {
        en,
        id
      }
    });
    app.use(i18n);
  }
);
export {
  createApp
};
