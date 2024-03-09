import { useSSRContext, mergeProps, unref, ref, onMounted, computed } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Search.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Search = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$g = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M13.1 23h-2.6l.5-.312q.5-.313 1.088-.7t1.087-.7l.5-.313q2.025-.15 3.738-1.225t2.712-2.875q-2.15-.2-4.075-1.088t-3.45-2.412q-1.525-1.525-2.425-3.45T9.1 5.85Q7.175 6.925 6.088 8.813T5 12.9v.3l-.3.138q-.3.137-.663.287t-.662.288l-.3.137q-.05-.275-.062-.575T3 12.9q0-3.15 1.9-5.875T9.875 3.4q.275-.075.5-.025t.425.2q.2.15.288.363t.062.487q-.15 2.125.613 4.088t2.262 3.462q1.525 1.525 3.438 2.25t4.037.6q.275-.025.513.088t.362.312q.125.2.175.425t-.05.5q-1.075 3.125-3.55 4.988T13.1 23M6 21h4.5q.625 0 1.063-.437T12 19.5q0-.625-.425-1.062T10.55 18h-1.3l-.5-1.2q-.35-.825-1.1-1.312T6 15q-1.25 0-2.125.863T3 18q0 1.25.875 2.125T6 21m0 2q-2.075 0-3.537-1.463T1 18q0-2.075 1.463-3.537T6 13q1.5 0 2.738.813T10.575 16Q12 16.05 13 17.063t1 2.437q0 1.45-1.025 2.475T10.5 23z"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Night.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Night = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$f = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="currentColor" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Hamburger.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Hamburger = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$e = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path><path fill="currentColor" d="M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Article.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Article = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$d = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h11v16H6q-.425 0-.712.288T5 19q0 .425.288.713T6 20h13V4h2v18zm3-6h6V4H9zm-2 0V4H6q-.425 0-.712.288T5 5v11.175q.25-.075.488-.125T6 16zM5 4v12.175z"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Series.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Series = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$c = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 22V12h6v10"></path></g></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Home.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 32 32"
  }, _attrs))}><path fill="currentColor" d="M22 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-12-3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1m-8 4C2 10.477 6.477 6 12 6h8c5.523 0 10 4.477 10 10s-4.477 10-10 10h-8C6.477 26 2 21.523 2 16m10-8a8 8 0 1 0 0 16h8a8 8 0 1 0 0-16z"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Challenge.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Challenge = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Login.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {
  __name: "Lang",
  __ssrInlineRender: true,
  props: ["isSticky"],
  setup(__props) {
    const { locale } = useI18n({ useScope: "global" });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cursor-pointer flex px-2 py-2 border border-black rounded-lg shadow", props.isSticky ? "bg-white" : "bg-[#fbeee4]"]
      }, _attrs))}>`);
      if (unref(locale) == "id") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#f9f9f9" d="M31.8 62c16.6 0 30-13.4 30-30h-60c0 16.6 13.4 30 30 30"></path><path fill="#ff1a30" d="M31.8 2c-16.6 0-30 13.4-30 30h60c0-16.6-13.4-30-30-30"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#2a5f9e" d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2m20 0c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4zM3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42zm51.5 0l3.9 2.9c.4-.9.8-1.9 1.2-2.9z"></path><path fill="#fff" d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38zm37.9 0H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4"></path><path fill="#fb3c4f" d="M7.7 49.6c.8 1.1 1.6 2.1 2.5 3.1L22 44.1v-2h-4zM45.5 42l10.7 7.8c.4-.5.7-1 1.1-1.5c.1-.1.1-.2.2-.2c.3-.5.7-1.1 1-1.6L52.2 42z"></path><path fill="#2a5f9e" d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7m-20 0c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6zM60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22zM8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9z"></path><path fill="#fff" d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26zM2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4"></path><g fill="#fb3c4f"><path d="M56.3 14.4c-.8-1.1-1.6-2.1-2.5-3.1L42 19.9v2h4zM18.5 22L7.9 14.2c-.4.5-.7 1-1.1 1.5c-.1.1-.1.2-.2.2c-.3.5-.7 1.1-1 1.6l6.1 4.5z"></path><path d="M61.4 26H38V2.6c-1.9-.4-3.9-.6-6-.6s-4.1.2-6 .6V26H2.6c-.4 1.9-.6 3.9-.6 6s.2 4.1.6 6H26v23.4c1.9.4 3.9.6 6 .6s4.1-.2 6-.6V38h23.4c.4-1.9.6-3.9.6-6s-.2-4.1-.6-6"></path></g></svg>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Partials/Lang.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute();
    const stickyActive = ref(false);
    const windowWidth = ref(window.innerWidth);
    onMounted(async () => {
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
      document.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          stickyActive.value = true;
        } else {
          stickyActive.value = false;
        }
      });
    });
    const headerClass = computed(() => {
      if (stickyActive.value) {
        return "bg-white border-b border-black";
      }
      return "bg-[#fbeee4]";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["sticky top-0 z-50", headerClass.value]
      }, _attrs))} data-v-7197e5d6>`);
      if (windowWidth.value > 600) {
        _push(`<div class="flex justify-between items-center py-4 mx-auto w-[85%]" data-v-7197e5d6><span class="cursor-pointer font-semibold text-xl" data-v-7197e5d6>BelajarVue.com _&lt; </span><div class="flex justify-between items-center" data-v-7197e5d6><span class="cursor-pointer" data-v-7197e5d6>${ssrInterpolate(_ctx.$t("home"))}</span><span class="mx-6 cursor-pointer" data-v-7197e5d6>Series</span><span class="cursor-pointer" data-v-7197e5d6>${ssrInterpolate(_ctx.$t("article"))}</span><span class="ml-6 mr-3 cursor-pointer" data-v-7197e5d6>Challenge</span><span class="mx-4" data-v-7197e5d6>|</span>`);
        _push(ssrRenderComponent(_sfc_main$9, {
          class: "mx-2",
          "is-sticky": stickyActive.value
        }, null, _parent));
        if (unref(router).path != "/") {
          _push(ssrRenderComponent(Night, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(Search, { class: "ml-2 cursor-pointer" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex justify-between items-center px-4 py-3" data-v-7197e5d6><div class="font-semibold text-lg" data-v-7197e5d6>BelajarVue.com _&lt; </div><div class="flex items-center" data-v-7197e5d6>`);
        _push(ssrRenderComponent(_sfc_main$9, {
          class: "mr-3",
          "is-sticky": stickyActive.value
        }, null, _parent));
        _push(`<div class="drawer drawer-end" data-v-7197e5d6><input id="my-drawer" type="checkbox" class="drawer-toggle" data-v-7197e5d6><div class="drawer-content" data-v-7197e5d6><label for="my-drawer" class="drawer-button" data-v-7197e5d6>`);
        _push(ssrRenderComponent(Hamburger, null, null, _parent));
        _push(`</label></div><div class="drawer-side" data-v-7197e5d6><label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" data-v-7197e5d6></label><div style="${ssrRenderStyle({ "width": "20rem" })}" class="pa-4 menu min-h-full bg-[#fbeee4]" data-v-7197e5d6><div class="flex items-center justify-between px-3 my-2" data-v-7197e5d6><span class="font-semibold text-lg" data-v-7197e5d6>BelajarVue.com </span><label for="my-drawer" aria-label="close sidebar" class="font-normal rounded-full py-[7px] px-[7px] border border-black" data-v-7197e5d6><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" data-v-7197e5d6><path fill="currentColor" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z" clip-rule="evenodd" data-v-7197e5d6></path></svg></label></div><label class="input my-4 mx-3 input-bordered flex items-center gap-2" data-v-7197e5d6><input type="text" class="grow"${ssrRenderAttr("placeholder", _ctx.$t("search_article_placeholder"))} data-v-7197e5d6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 opacity-70" data-v-7197e5d6><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" data-v-7197e5d6></path></svg></label><ul class="text-base-content" data-v-7197e5d6><li data-v-7197e5d6><a data-v-7197e5d6>`);
        _push(ssrRenderComponent(Home, null, null, _parent));
        _push(` Home </a></li><li data-v-7197e5d6><a data-v-7197e5d6>`);
        _push(ssrRenderComponent(Article, null, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("article"))}</a></li><li data-v-7197e5d6><a data-v-7197e5d6>`);
        _push(ssrRenderComponent(Series, null, null, _parent));
        _push(` Series </a></li><li data-v-7197e5d6><a data-v-7197e5d6>`);
        _push(ssrRenderComponent(Challenge, null, null, _parent));
        _push(` Challenge </a></li><div class="border-t-2 my-3 border-slate-200" data-v-7197e5d6></div><li data-v-7197e5d6><a data-v-7197e5d6>`);
        _push(ssrRenderComponent(Login, null, null, _parent));
        _push(` Login </a></li></ul></div></div></div></div></div>`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7197e5d6"]]);
const _imports_0$1 = "/assets/vue-DBdQddpA.png";
const _imports_1 = "/assets/pinia-BwhXk5Xj.png";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "/assets/typescript-V75qstfN.png";
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 128 128"
  }, _attrs))}><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Google.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Google = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 16 16"
  }, _attrs))}><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Github.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Github = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 256 256"
  }, _attrs))}><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Facebook.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Facebook = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    viewBox: "0 0 256 221"
  }, _attrs))}><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"></path><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"></path><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Vue.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Vue = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const matery = ref(["Vue.js 2", "Pinia State Manegement", "Nuxt.js 2", "Vuex", "Quasar", "Vue.js 3", "Nuxt.js 3", "Supabase"]);
    const currentMatery = ref(0);
    const { locale } = useI18n({ useScope: "global" });
    const windowWidth = ref(window.innerWidth);
    setInterval(() => {
      if (currentMatery.value == matery.value.length - 1) {
        currentMatery.value = -1;
      }
      currentMatery.value += 1;
    }, 2500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:grid grid-cols-2 bg-[#fbeee4]" }, _attrs))} data-v-3a2e6eca><div class="bg-dotted flex justify-center items-center relative" data-v-3a2e6eca>`);
      if (windowWidth.value > 768) {
        _push(`<div class="block" data-v-3a2e6eca><div class="absolute flex w-fit bottom-4 left-5 z-0" data-v-3a2e6eca><img width="110px" style="${ssrRenderStyle({ "transform": "rotate(12deg)", "height": "85px" })}"${ssrRenderAttr("src", _imports_0$1)} data-v-3a2e6eca></div><div class="absolute flex w-fit bottom-4 right-8 z-0 h-[120px]" data-v-3a2e6eca><img height="50" style="${ssrRenderStyle({ "transform": "rotate(-20deg)" })}"${ssrRenderAttr("src", _imports_1)} data-v-3a2e6eca></div><div class="absolute flex w-fit top-4 left-6 z-0 h-[120px]" data-v-3a2e6eca><img width="120px" style="${ssrRenderStyle({ "height": "80px", "transform": "rotate(-15deg)" })}"${ssrRenderAttr("src", _imports_2)} data-v-3a2e6eca></div><div class="absolute flex w-fit top-4 right-8 z-0 h-[120px]" data-v-3a2e6eca><img width="90px" style="${ssrRenderStyle({ "height": "90px", "transform": "rotate(15deg)" })}"${ssrRenderAttr("src", _imports_3)} data-v-3a2e6eca></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mx-auto w-[90%] md:w-[70%] h-fit my-auto block md:py-0 py-10" data-v-3a2e6eca><h1 class="px-4 py-2 w-fit text-[28px] max-[380px]:text-[26px] md:text-[40px] font-bold bg-[#FBEEE4] shadow" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("hero_title"))}</h1><div class="px-4 py-2 w-fit text-[28px] max-[380px]:text-[26px] md:text-[40px] font-bold bg-[#FBEEE4] mt-3 shadow flex items-center" data-v-3a2e6eca><span class="mr-1" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("most_equipped"))}</span>`);
      if (unref(locale) == "id") {
        _push(ssrRenderComponent(Vue, { class: "flex md:hidden" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-black px-3 py-2 mt-6 mb-3 max-[380px]:text-[12px] text-white w-fit text-sm shadow" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("hero_description"))}</div><div class="bg-black px-3 py-2 max-[380px]:text-[12px] text-white w-fit text-sm shadow" data-v-3a2e6eca><span data-v-3a2e6eca>${ssrInterpolate(matery.value[currentMatery.value])}</span></div></div></div><div class="flex justify-center items-center" data-v-3a2e6eca><div class="block w-[90%] md:w-[60%] py-8 md:py-12" data-v-3a2e6eca><span class="font-semibold text-[18px] md:text-[22px]" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("hero_signup_branding"))}</span><br data-v-3a2e6eca><label class="mt-5 block text-sm font-normal mb-2" for="email" data-v-3a2e6eca> Email </label><input class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"${ssrRenderAttr("placeholder", _ctx.$t("enter_your_email"))} data-v-3a2e6eca><label class="mt-5 block text-sm font-normal mb-2" for="password" data-v-3a2e6eca> Password </label><input class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text"${ssrRenderAttr("placeholder", _ctx.$t("enter_your_password"))} data-v-3a2e6eca><button class="bg-[#387ADF] py-2 w-full text-white font-medium rounded-md mt-8 mb-4" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("sign_up"))}</button><span class="font-light text-sm" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("accept_tos"))}</span><div class="my-5 text-base" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("register_option"))}</div><div class="flex" data-v-3a2e6eca><div class="bg-white border border-black px-3 py-3 rounded-lg cursor-pointer" data-v-3a2e6eca>`);
      _push(ssrRenderComponent(Google, null, null, _parent));
      _push(`</div><div class="bg-white border mx-3 border-black px-3 py-3 rounded-lg cursor-pointer" data-v-3a2e6eca>`);
      _push(ssrRenderComponent(Github, null, null, _parent));
      _push(`</div><div class="bg-white border border-black px-3 py-3 rounded-lg cursor-pointer" data-v-3a2e6eca>`);
      _push(ssrRenderComponent(Facebook, null, null, _parent));
      _push(`</div></div><div class="mt-4 text-light text-[16px]" data-v-3a2e6eca>${ssrInterpolate(_ctx.$t("already_register"))}<a class="ml-1" href="https://www.google.com" data-v-3a2e6eca>Login</a></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3a2e6eca"]]);
const _imports_0 = "/assets/logo-BzlYoy0x.png";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 20 20"
  }, _attrs))}><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/FacebookDark.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FacebookDark = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.5em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" fill-rule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Instagram.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Instagram = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FBEEE4] pt-8" }, _attrs))} data-v-a755798e><div class="mx-auto w-full md:w-[85%]" data-v-a755798e><div class="px-4 md:px-0 block md:grid grid-cols-6 gap-6 mb-4 md:mb-10" data-v-a755798e><div class="block col-span-2" data-v-a755798e><img${ssrRenderAttr("src", _imports_0)} width="80" data-v-a755798e><div class="font-semibold text-[20px] mt-3 mb-4" data-v-a755798e>Belajarvue.com _&lt; </div><div class="font-light text-[14px]" data-v-a755798e>Parsinta is a online learning platform intended for web developers.Through series-series such as Laravel, Reactjs, Vuejs, InertiaJs, HTML, Bootstrap, Tailwind CSS, and more.</div><div class="flex mt-3 md:mt-5" data-v-a755798e>`);
      _push(ssrRenderComponent(FacebookDark, null, null, _parent));
      _push(ssrRenderComponent(Github, { class: "mx-3" }, null, _parent));
      _push(ssrRenderComponent(Instagram, null, null, _parent));
      _push(`</div></div><div class="block mt-6 md:mt-0" data-v-a755798e><div class="font-semibold text-[16px]" data-v-a755798e>Indeks</div><ul data-v-a755798e><li data-v-a755798e>Challenge</li><li data-v-a755798e>${ssrInterpolate(_ctx.$t("article"))}</li><li data-v-a755798e>Series</li></ul><div class="font-semibold text-[16px] mt-6" data-v-a755798e>Terms of Service</div><ul data-v-a755798e><li data-v-a755798e>Privacy Policy</li><li data-v-a755798e>Disclaimer</li><li data-v-a755798e>Terms &amp; Conditions</li></ul></div><div class="block mt-5 md:mt-0" data-v-a755798e><div class="font-semibold text-[16px]" data-v-a755798e>${ssrInterpolate(_ctx.$t("contact"))}</div><ul data-v-a755798e><li data-v-a755798e>Instagram</li><li data-v-a755798e>Facebook</li><li data-v-a755798e>Email</li><li data-v-a755798e>Instagram</li></ul></div><div class="block mt-5 md:mt-0 col-span-2" data-v-a755798e><div class="font-semibold text-[16px]" data-v-a755798e>${ssrInterpolate(_ctx.$t("newsletter"))}</div><div class="font-light text-[14px] my-4 mb-5" data-v-a755798e>${ssrInterpolate(_ctx.$t("newsletter_description"))}</div><div class="w-full md:w-[75%] flex justify-between items-center bg-white py-2 rounded-3xl px-2 text-[14px] bprder border-black shadow" data-v-a755798e><input class="pl-3 outline-none" placeholder="Email Address" data-v-a755798e><div class="cursor-pointer flex justify-between items-center bg-[#387ADF] py-2 rounded-3xl px-2" data-v-a755798e><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 32 32" data-v-a755798e><path fill="white" d="M19 24H4L3.997 8.906l11.434 7.916a1 1 0 0 0 1.138 0L28 8.91V18h2V8a2.003 2.003 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h15Zm6.799-16L16 14.784L6.201 8Z" data-v-a755798e></path><circle cx="26" cy="24" r="4" fill="white" data-v-a755798e></circle></svg><div class="text-white ml-1" data-v-a755798e>${ssrInterpolate(_ctx.$t("subscribe"))}</div></div></div></div></div><div class="border-t border-slate-300 mt-5" data-v-a755798e></div><div class="block md:flex justify-between py-4 px-4 md:px-0 md:py-8 mx-2 md:mx-0" data-v-a755798e><div class="text-[14px] mb-1 md:mb-0" data-v-a755798e>© Copyright 2024 Belajarvue. All rights reserved.</div><div class="text-[14px]" data-v-a755798e>Made with ❤️ by Muhammad Ichsan</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a755798e"]]);
export {
  Footer as F,
  Header as H,
  _export_sfc as _,
  Hero as a
};
