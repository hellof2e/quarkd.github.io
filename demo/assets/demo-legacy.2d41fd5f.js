;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".demo-circle quark-circle {\n  margin-bottom: 12px;\n  margin-right: 8px;\n}\n.demo-circle .custom {\n  --quark-circle-transition: all linear 0.3s;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.6a122872.js','./mobile-legacy.caaf24ea.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,ref,onMounted,createElementBlock,createBaseVNode,toDisplayString,createTextVNode,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;ref=module.r;onMounted=module.g;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createTextVNode=module.h;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("cell");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{CellTitle:{basicUsage:"基本用法",custom:"样式定制",position:"起始位置"},size:"大小定制",color:"颜色定制",strokewidth:"宽度定制",layercolor:"轨道颜色",anticlockwise:"逆时针",gradient:"渐变色",right:"右侧",bottom:"下侧",left:"左侧",increase:"增加",decrease:"减少"},"en-US":{CellTitle:{basicUsage:"Basic Usage",custom:"Custom Style",position:"Start Position"},size:"Size",color:"Color",strokewidth:"Strokewidth",layercolor:"Layercolor",anticlockwise:"Anticlockwise",gradient:"Gradient",right:"Right",bottom:"Bottom",left:"Left",increase:"Increase",decrease:"Decrease"}});});const rate=ref(10);const increase=()=>{rate.value+=rate.value>=100?0:10;};const decrease=()=>{rate.value-=rate.value<=0?0:10;};const anticlockwise=ref(true);const circleRef=ref();onMounted(()=>{circleRef.value.setGradient({"0%":"#3fecff","100%":"#6149f6"});});return{translate,rate,circleRef,increase,decrease,anticlockwise};}});const _hoisted_1={class:"demo demo-circle"};const _hoisted_2=["rate"];const _hoisted_3=["rate"];const _hoisted_4=["rate"];const _hoisted_5=["rate"];const _hoisted_6=["rate"];const _hoisted_7=["rate","anticlockwise"];const _hoisted_8=["rate"];const _hoisted_9=["rate"];const _hoisted_10=["rate"];const _hoisted_11=["rate"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.basicUsage")),1),createBaseVNode("quark-circle",{rate:_ctx.rate},toDisplayString(_ctx.rate)+"%",9,_hoisted_2),createBaseVNode("div",null,[createBaseVNode("quark-button",{type:"primary",shape:"square",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.increase&&_ctx.increase(...args))},toDisplayString(_ctx.translate("increase")),1),createTextVNode("   "),createBaseVNode("quark-button",{type:"danger",shape:"square",onClick:_cache[1]||(_cache[1]=(...args)=>_ctx.decrease&&_ctx.decrease(...args))},toDisplayString(_ctx.translate("decrease")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.custom")),1),createBaseVNode("quark-circle",{rate:_ctx.rate,size:"80"},toDisplayString(_ctx.translate("size")),9,_hoisted_3),createBaseVNode("quark-circle",{rate:_ctx.rate,color:"#02b357"},toDisplayString(_ctx.translate("color")),9,_hoisted_4),createBaseVNode("quark-circle",{rate:_ctx.rate,strokewidth:5},toDisplayString(_ctx.translate("strokewidth")),9,_hoisted_5),createBaseVNode("quark-circle",{rate:_ctx.rate,layercolor:"#f00"},toDisplayString(_ctx.translate("layercolor")),9,_hoisted_6),createBaseVNode("quark-circle",{rate:_ctx.rate,anticlockwise:_ctx.anticlockwise},toDisplayString(_ctx.translate("anticlockwise")),9,_hoisted_7),createBaseVNode("quark-circle",{ref:"circleRef",class:"custom",strokewidth:5,rate:_ctx.rate,size:"100"},toDisplayString(_ctx.translate("gradient")),9,_hoisted_8),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.position")),1),createBaseVNode("quark-circle",{rate:_ctx.rate,startposition:"right"},toDisplayString(_ctx.translate("right")),9,_hoisted_9),createBaseVNode("quark-circle",{rate:_ctx.rate,startposition:"bottom"},toDisplayString(_ctx.translate("bottom")),9,_hoisted_10),createBaseVNode("quark-circle",{rate:_ctx.rate,startposition:"left"},toDisplayString(_ctx.translate("left")),9,_hoisted_11)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
