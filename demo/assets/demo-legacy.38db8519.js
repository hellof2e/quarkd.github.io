;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".action-sheet-demo .demo-buttons quark-button {\n  margin-right: 6px;\n  margin-top: 6px;\n}\n.action-sheet-demo .demo-buttons {\n  margin-bottom: 24px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.fa47725b.js','./mobile-legacy.7a0a3cdf.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,ActionSheet,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;ActionSheet=module.G;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("sharesheet");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basicUsage:"基本使用",customStyle:"自定义样式",titleStyle:"标题样式",cancelButtonStyle:"取消按钮样式",options:["微信","微信朋友圈","QQ","QQ空间","微博","二维码"],maskClick:"蒙版点击",cancel:"取消"},"en-US":{basicUsage:"Basic Usage",customStyle:"Custom Style",titleStyle:"Title Style",cancelButtonStyle:"Cancel Button Style",options:["WeChat","WeChat Moments","QQ","QQ Space","WeiBo","QR Code"],maskClick:"Mask Click",cancel:"Cancel"}});});const showBase=()=>{ActionSheet({options:[{name:`${translate("options")[0]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"},{name:`${translate("options")[1]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"},{name:`${translate("options")[2]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png"},{name:`${translate("options")[3]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png"},{name:`${translate("options")[4]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png"},{name:`${translate("options")[5]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png"}],select:(index,action)=>{Toast.text(action.name);}});};const showTitleCustom=()=>{ActionSheet({titleColor:"red",titleFontSize:20,options:[{name:`${translate("options")[0]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"},{name:`${translate("options")[1]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"},{name:`${translate("options")[2]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png"}],select:(index,action)=>{Toast.text(action.name);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};const showCancelCustom=()=>{ActionSheet({options:[{name:`${translate("options")[0]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"},{name:`${translate("options")[1]}`,icon:"https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"}],cancelColor:"red",select:(index,action)=>{Toast.text(action.name);},cancel:()=>{Toast.text(`${translate("cancel")}`);},close:()=>{Toast.text(`${translate("maskClick")}`);}});};return{showBase,showTitleCustom,showCancelCustom,translate};}});const _hoisted_1={class:"demo no-padding action-sheet-demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basicUsage")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.showBase&&_ctx.showBase(...args)),title:_ctx.translate('basicUsage')},null,8,_hoisted_2)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customStyle")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[1]||(_cache[1]=(...args)=>_ctx.showTitleCustom&&_ctx.showTitleCustom(...args)),title:_ctx.translate('titleStyle')},null,8,_hoisted_3),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[2]||(_cache[2]=(...args)=>_ctx.showCancelCustom&&_ctx.showCancelCustom(...args)),title:_ctx.translate('cancelButtonStyle')},null,8,_hoisted_4)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
