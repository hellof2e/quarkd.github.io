;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".action-sheet-demo .demo-buttons quark-button {\n  margin-right: 6px;\n  margin-top: 6px;\n}\n.action-sheet-demo .demo-buttons {\n  margin-bottom: 24px;\n}";document.head.appendChild(__vite_style__);System.register(['./mobile-legacy.acf41fda.js','./component-legacy.6360d350.js'],function(exports){'use strict';var _export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,ActionSheet,Toast,openBlock,createComponent;return{setters:[function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;ActionSheet=module.A;Toast=module.T;openBlock=module.b;},function(module){createComponent=module.c;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("actionsheet");const _sfc_main=createDemo({props:{},setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基本用法",customStyle:"自定义样式",title:"带标题",cancel:"带取消按钮",titleStyle:"标题样式",optionStyle:"选项样式",cancelStyle:"取消按钮样式",options:["选项一","选项二","选项三"],titleTxt:"我是标题信息",maskClick:"蒙版点击"},"en-US":{basic:"Basic Usage",customStyle:"Custom Style",title:"Title",cancel:"Cancel",titleStyle:"Title Style",optionStyle:"Option Style",cancelStyle:"Cancel Style",options:["Option 1","Option 2","Option 3"],titleTxt:"Title Message",maskClick:"Mask Click"}});});const showBase=()=>{ActionSheet({actions:[{name:`${translate("options")[0]}`},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],select:(index,action)=>{Toast.text(action.name);}});};const showTitle=()=>{ActionSheet({title:`${translate("titleTxt")}`,actions:[{name:`${translate("options")[0]}`},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],select:(index,action)=>{Toast.text(action.name);}});};const showCancel=()=>{ActionSheet({title:`${translate("titleTxt")}`,actions:[{name:`${translate("options")[0]}`},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],cancelText:`${translate("cancel")}`,select:(index,action)=>{Toast.text(action.name);},cancel:()=>{Toast.text(`${translate("cancel")}`);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};const showTitleCustom=()=>{ActionSheet({title:`${translate("titleTxt")}`,titleColor:"red",titleFontSize:20,actions:[{name:`${translate("options")[0]}`},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],select:(index,action)=>{Toast.text(action.name);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};const showActionCustom=()=>{ActionSheet({title:`${translate("titleTxt")}`,actions:[{name:`${translate("options")[0]}`,color:"#999",fontSize:20},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],select:(index,action)=>{Toast.text(action.name);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};const showCancelCustom=()=>{ActionSheet({title:`${translate("titleTxt")}`,cancelText:`${translate("cancel")}`,actions:[{name:`${translate("options")[0]}`},{name:`${translate("options")[1]}`},{name:`${translate("options")[2]}`}],cancelTextColor:"red",select:(index,action)=>{Toast.text(action.name);},cancel:()=>{Toast.text(`${translate("cancel")}`);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};return{translate,showBase,showTitle,showCancel,showTitleCustom,showActionCustom,showCancelCustom};}});const _hoisted_1={class:"demo no-padding action-sheet-demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["title"];const _hoisted_6=["title"];const _hoisted_7=["title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{type:"primary",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.showBase&&_ctx.showBase(...args)),title:_ctx.translate('basic')},null,8,_hoisted_2),createBaseVNode("quark-cell",{type:"primary",onClick:_cache[1]||(_cache[1]=(...args)=>_ctx.showTitle&&_ctx.showTitle(...args)),title:_ctx.translate('title')},null,8,_hoisted_3),createBaseVNode("quark-cell",{type:"primary",onClick:_cache[2]||(_cache[2]=(...args)=>_ctx.showCancel&&_ctx.showCancel(...args)),title:_ctx.translate('cancel')},null,8,_hoisted_4)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customStyle")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{type:"primary",onClick:_cache[3]||(_cache[3]=(...args)=>_ctx.showTitleCustom&&_ctx.showTitleCustom(...args)),title:_ctx.translate('titleStyle')},null,8,_hoisted_5),createBaseVNode("quark-cell",{type:"primary",onClick:_cache[4]||(_cache[4]=(...args)=>_ctx.showActionCustom&&_ctx.showActionCustom(...args)),title:_ctx.translate('optionStyle')},null,8,_hoisted_6),createBaseVNode("quark-cell",{type:"primary",onClick:_cache[5]||(_cache[5]=(...args)=>_ctx.showCancelCustom&&_ctx.showCancelCustom(...args)),title:_ctx.translate('cancelStyle')},null,8,_hoisted_7)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
