;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="quark-marquee {\n  color: #ee8c02;\n}\nquark-marquee .line {\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\nquark-marquee .flex {\n  display: flex;\n  align-items: center;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.a59d49e9.js','./mobile-legacy.4154427b.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("marquee");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",speed:"不同速度",content:"2022 年我们见证了很多技术的新发展新变化：低代码的突然爆火、数据库的接连开源、芯片的短缺与自研、训练模型的参数突破",alert:{return:"返回",clear:"清除"}},"en-US":{basic:"Basic Usage",speed:"Marqueen Speed",content:"In 2022, we will witness many new developments and changes in technology: the sudden explosion of low-code, the continuous open source of databases, the shortage of chips and self-research, and the parameter breakthrough of training models",alert:{return:"Go Back",clear:"Clear"}}});});return{translate};}});const _hoisted_1={class:"demo no-padding"};const _hoisted_2={class:"flex"};const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=/*#__PURE__*/createBaseVNode("br",null,null,-1);const _hoisted_6=["title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-marquee",{title:_ctx.translate('content')},null,8,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("speed")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),speed:"25"},null,8,_hoisted_4),_hoisted_5,createBaseVNode("quark-marquee",{title:_ctx.translate('content'),speed:"100"},null,8,_hoisted_6)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
