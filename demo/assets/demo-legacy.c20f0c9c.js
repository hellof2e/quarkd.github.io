;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".demo-cell quark-cell {\n  margin-bottom: 10px;\n}\n.demo-cell quark-cell-group quark-cell {\n  margin: 0;\n}\n.demo-cell .quark-cell {\n  padding: 13px 16px;\n  background: #fff;\n  box-shadow: 0 1px 7px #edeef1;\n  font-size: 14px;\n  color: #666;\n  margin: 10px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: 1fr 20px;\n}\n.demo-cell .my-cell {\n  --cell-title-white-space: nowrap;\n  --cell-title-text-overflow: ellipsis;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.87cfe170.js','./mobile-legacy.f7c4d57a.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("cell");const _sfc_main=createDemo({setup(){const fruit=ref("apple");const onChange=({detail})=>{fruit.value=detail.value;};onBeforeMount(()=>{useTranslate({"zh-CN":{CellTitle:{basicUsage:"基本用法",router:"链接跳转",icon:"展示图标",group:"分组用法",custom:"自定义样式，省略号展示",right:"自定义右侧描述"},title:"这是标题",desc:"描述文字",longTitle:"这是标题非常的长，太长会自动换行的哦",longLongTitle:"这是标题很长长长长长长长长长长长长长长长长长长长长长长长长",router:"路由跳转",url:"链接跳转"},"en-US":{CellTitle:{basicUsage:"Basic Usage",router:"Router",icon:"Icon",group:"Inset Grouped",custom:"Custom Style",right:"Right content"},title:"Cell Title",desc:"Description",longTitle:"This is a very long title, it will automatically wrap.",longLongTitle:"The title is very very very very very very very long",router:"Router",url:"Url"}});});return{fruit,translate,onChange};}});const _hoisted_1={class:"demo no-padding demo-cell"};const _hoisted_2=["title","desc"];const _hoisted_3=["title"];const _hoisted_4=["title","desc"];const _hoisted_5=["title","desc"];const _hoisted_6=["title"];const _hoisted_7=["title"];const _hoisted_8=["title","desc"];const _hoisted_9=["title"];const _hoisted_10=["title"];const _hoisted_11=["title"];const _hoisted_12=["title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.basicUsage")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{title:_ctx.translate('title'),desc:_ctx.translate('desc')},null,8,_hoisted_2),createBaseVNode("quark-cell",{title:_ctx.translate('title'),islink:""},null,8,_hoisted_3),createBaseVNode("quark-cell",{title:_ctx.translate('title'),desc:_ctx.translate('desc'),islink:""},null,8,_hoisted_4),createBaseVNode("quark-cell",{title:_ctx.translate('longTitle'),desc:_ctx.translate('desc'),islink:""},null,8,_hoisted_5)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.router")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{title:_ctx.translate('router'),to:"#/button",islink:""},null,8,_hoisted_6),createBaseVNode("quark-cell",{title:_ctx.translate('url'),to:"https://baidu.com",islink:""},null,8,_hoisted_7)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.icon")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{title:_ctx.translate('title'),desc:_ctx.translate('desc'),islink:"",icon:"https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png?x-oss-process=image/quality,q_80"},null,8,_hoisted_8)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.group")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{title:_ctx.translate('title')},null,8,_hoisted_9),createBaseVNode("quark-cell",{title:_ctx.translate('title')},null,8,_hoisted_10)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.custom")),1),createBaseVNode("quark-cell",{class:"my-cell",title:_ctx.translate('longLongTitle')},null,8,_hoisted_11),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.right")),1),createBaseVNode("quark-cell",{title:_ctx.translate('title')},[createBaseVNode("div",null,toDisplayString(_ctx.translate("CellTitle.right")),1)],8,_hoisted_12)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
