;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".uploader-demo {\n  background-color: #fff !important;\n}\n.uploader-demo quark-button {\n  margin-left: 10px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.e42a1b44.js','./mobile-legacy.38efe0fa.js','./vue-router-legacy.2f6ef65b.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,openBlock,Toast,onBeforeRouteLeave;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;Toast=module.T;},function(module){onBeforeRouteLeave=module.o;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("uploader");const _sfc_main=createDemo({setup(){const isPreview=ref(false);const preview=ref(null);const preview2=ref(null);const preview3=ref(null);const maxcount=ref(3);const previewUrls=["https://img.yzcdn.cn/vant/leaf.jpg","https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"];const successUrl=["https://m.hellobike.com/resource/helloyun/15697/JPjd2_WX20220830-141115.png?x-oss-process=image/quality,q_80","https://m.hellobike.com/resource/helloyun/15697/Wc4c2_shop.png?x-oss-process=image/quality,q_80"];onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",remove:"图片删除",readonly:"只读模式"},"en-US":{basic:"Basic Usage",remove:"Picture Remove",readonly:"readonly"}});});onMounted(()=>{console.log(preview3,"333");preview.value.setPreview(previewUrls);preview2.value.setPreview(previewUrls);preview3.value.setPreview(previewUrls);});const sleep=time=>{return new Promise(reslove=>{setTimeout(()=>{reslove(true);},time);});};const callNative=async()=>{const toast=Toast.loading("客户端上传图片中");await sleep(1000);toast.hide();Toast.success("客户端返回数据");return Promise.resolve(successUrl);};const afterRead=async({detail:data})=>{const successData=await callNative();const newData=data.concat(successData);preview.value.setPreview(newData);};const onremove=({detail:item})=>{console.log(item,"item");};onBeforeRouteLeave(()=>{const nodes=document.querySelectorAll("quark-image-preview ");nodes.forEach(i=>i.open=false);});return{isPreview,preview,preview2,preview3,afterRead,translate,onremove,maxcount};}});const _hoisted_1={class:"demo uploader-demo"};const _hoisted_2={class:"flex"};const _hoisted_3=["maxcount"];const _hoisted_4={class:"flex"};const _hoisted_5={class:"flex"};const _hoisted_6={ref:"preview3",readonly:""};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-native-uploader",{ref:"preview",onOnread:_cache[0]||(_cache[0]=(...args)=>_ctx.afterRead&&_ctx.afterRead(...args)),maxcount:_ctx.maxcount},null,40,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("remove")),1),createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-native-uploader",{ref:"preview2",onOnread:_cache[1]||(_cache[1]=(...args)=>_ctx.afterRead&&_ctx.afterRead(...args)),onOnremove:_cache[2]||(_cache[2]=(...args)=>_ctx.onremove&&_ctx.onremove(...args))},null,544)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("readonly")),1),createBaseVNode("div",_hoisted_5,[createBaseVNode("quark-native-uploader",_hoisted_6,null,512)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
