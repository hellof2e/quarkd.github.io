;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".quark-tip {\n  width: 100%;\n  background-color: white;\n  margin-bottom: 30px;\n  min-height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 1;\n  padding: 10px;\n}\n.left {\n  width: 30px;\n  height: auto;\n  word-break: normal;\n}\n.custom-tips {\n  --tips-background-color: #0088ff;\n  --tips-font-weight: 500;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.2e55fa5a.js','./mobile-legacy.5076583d.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("tooltip");const _sfc_main=createDemo({setup(){const data=ref({top:false,topleft:false,topright:false,bottom:false,bottomleft:false,bottomright:false,left:false,lefttop:false,leftbottom:false,right:false,righttop:false,rightbottom:false,topclose:false,autoclose:false,customstyle:false});onBeforeMount(()=>{useTranslate({"zh-CN":{tipsPosition:"Tips 位置（所有支持的位置参见placement 参数）",topPosition:"top 位置",topLeftPosition:"top left 位置",topRightPosition:"top right 位置",tips:"气泡文字",showCloseButton:"显示关闭按钮",setAutoOffTime:"设置自动关闭时间",customStyle:"自定义样式"},"en-US":{tipsPosition:"Tips Position(See placement parameter for all supported positions)",topPosition:"Top Position",topLeftPosition:"Top Left Position",topRightPosition:"Top Right Position",tips:"Bubble Text",shoeCloseButton:"Show Close Button",setAutoOffTime:"Set auto-off time",customStyle:"Custom Style"}});});const open=placement=>{data.value[placement]=true;};const close=placement=>{data.value[placement]=false;};return{data,open,close,translate};}});const _hoisted_1={class:"demo"};const _hoisted_2={class:"quark-tip"};const _hoisted_3=["tips","open"];const _hoisted_4={class:"quark-tip"};const _hoisted_5=["tips","open"];const _hoisted_6={class:"quark-tip"};const _hoisted_7=["tips","open"];const _hoisted_8={class:"quark-tip"};const _hoisted_9=["tips","open"];const _hoisted_10={class:"quark-tip"};const _hoisted_11=["tips","open"];const _hoisted_12={class:"quark-tip"};const _hoisted_13=["tips","open"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("tipsPosition")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-tooltip",{placement:"top",tips:_ctx.translate('tips'),scroolhidden:"",open:_ctx.data.top,onClick:_cache[0]||(_cache[0]=$event=>_ctx.open('top')),onClose:_cache[1]||(_cache[1]=$event=>_ctx.close('top'))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topPosition")),1)],40,_hoisted_3)]),createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-tooltip",{placement:"topleft",tips:_ctx.translate('tips'),scroolhidden:"",open:_ctx.data.topleft,onClick:_cache[2]||(_cache[2]=$event=>_ctx.open('topleft')),onClose:_cache[3]||(_cache[3]=$event=>_ctx.close('topleft'))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topLeftPosition")),1)],40,_hoisted_5)]),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-tooltip",{placement:"topright",tips:_ctx.translate('tips'),scroolhidden:"",open:_ctx.data.topright,onClick:_cache[4]||(_cache[4]=$event=>_ctx.open('topright')),onClose:_cache[5]||(_cache[5]=$event=>_ctx.close('topright'))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topRightPosition")),1)],40,_hoisted_7)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("showCloseButton")),1),createBaseVNode("div",_hoisted_8,[createBaseVNode("quark-tooltip",{placement:"top",closeable:"",scroolhidden:"",tips:_ctx.translate('tips'),open:_ctx.data.topclose,onClick:_cache[6]||(_cache[6]=$event=>_ctx.open('topclose')),onClose:_cache[7]||(_cache[7]=$event=>_ctx.close('topclose'))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topPosition")),1)],40,_hoisted_9)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("setAutoOffTime")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-tooltip",{placement:"top",autoclose:"",opentime:"5000",scroolhidden:"",tips:_ctx.translate('tips'),open:_ctx.data.autoclose,onClick:_cache[8]||(_cache[8]=$event=>_ctx.open('autoclose')),onClose:_cache[9]||(_cache[9]=$event=>_ctx.close('autoclose'))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topPosition")),1)],40,_hoisted_11)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customStyle:")),1),createBaseVNode("div",_hoisted_12,[createBaseVNode("quark-tooltip",{placement:"top",autoclose:"",closeable:"",opentime:"5000",scroolhidden:"",tips:_ctx.translate('tips'),open:_ctx.data.customstyle,onClick:_cache[10]||(_cache[10]=$event=>_ctx.open('customstyle')),onClose:_cache[11]||(_cache[11]=$event=>_ctx.close('customstyle')),class:"custom-tips"},[createBaseVNode("div",null,toDisplayString(_ctx.translate("topPosition")),1)],40,_hoisted_13)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
