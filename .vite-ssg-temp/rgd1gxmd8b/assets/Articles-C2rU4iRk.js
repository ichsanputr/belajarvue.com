import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, H as Header, F as Footer } from "./Footer-D-B3o9IQ.js";
import { useSSRContext, mergeProps, ref } from "vue";
import "vue-router";
import "vue-i18n";
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 6l-6 6l6 6m8-12l-6 6l6 6"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/ArrowLeftDouble.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ArrowLeftDouble = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 6l6 6l-6 6M5 6l6 6l-6 6"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/ArrowRightDouble.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ArrowRightDouble = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 6l-6 6l6 6m0-1l"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/ArrowLeft.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 6l6 6l-6 6M5 6l6"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/ArrowRight.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["totalPage"],
  setup(__props) {
    const props = __props;
    const currentPage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-fit flex items-center" }, _attrs))}><div class="cursor-pointer px-2 py-2 border border-black rounded-lg">`);
      _push(ssrRenderComponent(ArrowLeftDouble, null, null, _parent));
      _push(`</div><div class="cursor-pointer ml-2 px-2 py-2 border border-black rounded-lg">`);
      _push(ssrRenderComponent(ArrowLeft, null, null, _parent));
      _push(`</div><div class="cursor-pointer flex items-center mx-4"><span>${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(props.totalPage)}</span></div><div class="cursor-pointer px-2 py-2 border border-black rounded-lg">`);
      _push(ssrRenderComponent(ArrowRightDouble, null, null, _parent));
      _push(`</div><div class="cursor-pointer ml-2 px-2 py-2 border border-black rounded-lg">`);
      _push(ssrRenderComponent(ArrowRight, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Partials/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ArticlesList",
  __ssrInlineRender: true,
  setup(__props) {
    const category = ref(["Vue.js 3", "Pinia", "Quasar", "Supabase", "Firebase"]);
    const categorySelected = ref("");
    const windowWidth = ref(window.innerWidth);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FBEEE4] py-8 pb-10 border-b border-[#CFC6C1]" }, _attrs))} data-v-9f12fa01><div class="mx-auto w-full md:w-[85%] pb-8" data-v-9f12fa01><div class="mt-4 mb-8 md:mx-0 mx-8" data-v-9f12fa01><h2 class="font-semibold text-[20px]" data-v-9f12fa01>${ssrInterpolate(_ctx.$t("article_latest"))}</h2><p class="text-[14px] mt-2" data-v-9f12fa01>${ssrInterpolate(_ctx.$t("article_list_description"))}</p></div><div class="flex overflow-x-auto overflow-auto text-[14px] w-full my-12 border-b border-[#CFC6C1]" data-v-9f12fa01><!--[-->`);
      ssrRenderList(category.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([[index == 0 && windowWidth.value < 680 ? "pl-7" : ""], "cursor-pointer relative flex flex-none justify-center pr-7 pb-4"])}" style="${ssrRenderStyle({ "height": "calc(100% + 200px)" })}" data-v-9f12fa01><span class="${ssrRenderClass([{ "font-medium": categorySelected.value == item }, "mx-auto w-fit"])}" data-v-9f12fa01>${ssrInterpolate(item)}</span>`);
        if (categorySelected.value == item) {
          _push(`<div class="absolute bottom-0 border-b-2 w-full border-[#1F2937]" data-v-9f12fa01></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="w-full px-8 md:px-0 mx-auto block md:grid grid-cols-3 gap-16" data-v-9f12fa01><!--[-->`);
      ssrRenderList(6, (i) => {
        _push(`<div class="w-full cursor-pointer my-10 md:my-0" data-v-9f12fa01><img width="100%" class="rounded-lg shadow" src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" data-v-9f12fa01><div class="my-3 font-semibold text-[18px] mt-6" data-v-9f12fa01>Membuat Aplikasi Donasi dengan Vue 3, Firebase, Tailwind CSS</div><div class="my-3 font-normal text-[14px] md:text-[16px]" data-v-9f12fa01>Pelajari cara kerja Blueprint untuk mempercepat pembuatan model, controller, dan komponen aplikasi....</div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-10" data-v-9f12fa01>`);
      _push(ssrRenderComponent(_sfc_main$2, { totalPage: "8" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ArticlesList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ArticlesList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f12fa01"]]);
const _sfc_main = {
  __name: "Articles",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(ArticlesList, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
