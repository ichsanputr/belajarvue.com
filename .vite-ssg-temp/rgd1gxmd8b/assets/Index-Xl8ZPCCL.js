import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, H as Header, a as Hero, F as Footer } from "./Footer-D-B3o9IQ.js";
import { ref, onMounted, nextTick, mergeProps, useSSRContext } from "vue";
import "vue-router";
import "vue-i18n";
const _sfc_main$2 = {
  __name: "SeriesSlider",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        title: "Vue.js 3 Fundamental",
        description: "Tingkatkan level keahlian Anda melalui screencast dan artikel yang mendalam. Pelajari beragam topik"
      }
    ]);
    onMounted(async () => {
      await nextTick();
      document.getElementById("scrollSeries").scrollLeft += document.getElementById("scrollSeries").scrollWidth / 2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#10162F] py-8" }, _attrs))} data-v-a82c1506><div class="w-[85%] mx-auto mt-4 mb-8" data-v-a82c1506><h2 class="text-white font-medium text-[20px]" data-v-a82c1506>Ingin belajar apa hari ini?</h2><p class="text-white text-[14px] mt-2" data-v-a82c1506>Hei, ada banyak pilihan menarik di sini, loh! Yuk, temukan sesuatu yang seru untuk dipelajari.</p></div><div class="flex w-full justify-between items-center overflow-x-scroll my-12" id="scrollSeries" style="${ssrRenderStyle({ "scrollbar-width": "none" })}" data-v-a82c1506><!--[-->`);
      ssrRenderList(15, (i, index) => {
        _push(`<div class="${ssrRenderClass([{ "ml-10": index == 0 }, "shadow bg-white relative w-[300px] mr-10 rounded-lg flex flex-none h-[200px] flex-col py-6 space-y-1"])}" data-v-a82c1506><div class="block px-4 mt-6" data-v-a82c1506><div class="font-semibold text-[16px]" data-v-a82c1506>Vue.js + Supabase</div><div class="text-[14px]" data-v-a82c1506> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div></div><div class="absolute top-[-5px] bg-[#EAFDC6] w-full rounded-t-md text-center font-medium py-1" data-v-a82c1506> 12 article </div><div class="absolute text-[14px] bottom-0 w-full rounded-b-md px-4 pb-2 border-t-2 border-dotted font-medium py-1" data-v-a82c1506> Vue.js 3, Supabase, Firebase, Pinia </div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SeriesSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SeriesSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a82c1506"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#FBEEE4] py-8" }, _attrs))} data-v-01cd096e><div class="mx-auto w-full md:w-[85%] pb-8" data-v-01cd096e><div class="mt-4 mb-8 md:mx-0 mx-8" data-v-01cd096e><h2 class="font-semibold text-[20px]" data-v-01cd096e>${ssrInterpolate(_ctx.$t("article_latest"))}</h2><p class="text-[14px] mt-2" data-v-01cd096e>${ssrInterpolate(_ctx.$t("article_latest_description"))}</p></div><div class="w-full px-8 md:px-0 mx-auto block md:grid grid-cols-3 gap-16" data-v-01cd096e><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(`<div class="w-full cursor-pointer my-10 md:my-0" data-v-01cd096e><img width="100%" class="rounded-lg shadow" src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" data-v-01cd096e><div class="my-3 font-semibold text-[18px] mt-6" data-v-01cd096e>Membuat Aplikasi Donasi dengan Vue 3, Firebase, Tailwind CSS</div><div class="my-3 font-normal text-[14px] md:text-[16px]" data-v-01cd096e>Pelajari cara kerja Blueprint untuk mempercepat pembuatan model, controller, dan komponen aplikasi....</div></div>`);
  });
  _push(`<!--]--></div><div class="cursor-pointer float-right mx-8 md:mx-0 text-[#387ADF] md:text-[16px] text-[14px] font-medium flex items-center mt-0 md:mt-3 hover:bg-[white] hover:shadow px-2 py-2 rounded-lg" data-v-01cd096e><span class="mr-1" data-v-01cd096e>${ssrInterpolate(_ctx.$t("see_more"))}</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" data-v-01cd096e><path fill="currentColor" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01" data-v-01cd096e></path></svg></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SeriesLatest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SeriesLatest = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-01cd096e"]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(SeriesSlider, null, null, _parent));
      _push(ssrRenderComponent(SeriesLatest, null, null, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
