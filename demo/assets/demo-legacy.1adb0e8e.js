;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".button-demo .demo-buttons quark-button {\n  margin: 8px;\n}\n.button-demo .flex {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.4e98c68f.js','./mobile-legacy.405d3770.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,ref,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;ref=module.r;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("button");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{title:{type:"按钮类型",shape:"按钮形状",plain:"朴素按钮",disabled:"禁用状态",loading:"加载状态",icon:"图标按钮",size:"按钮尺寸"},type:{default:"默认按钮",primary:"主要按钮",success:"成功按钮",danger:"危险按钮",warning:"警告按钮"},shape:{square:"方形按钮",round:"圆角按钮"},size:{big:"大号尺寸",normal:"普通尺寸",small:"小号尺寸"},loading:"加载中...",click:"点我!",like:"喜欢",name:"张三"},"en-US":{title:{type:"Button Type",shape:"Button Shape",plain:"Plain Button",disabled:"Disabled",loading:"Loading",icon:"Icon Button",size:"Button Size"},type:{default:"Default",primary:"Primary",success:"Success",danger:"Danger",warning:"Warning"},shape:{square:"Square",round:"Round"},size:{big:"Big",normal:"Normal",small:"Small"},loading:"Loading...",click:"Click Me!",like:"Like",name:"Zhang San"}});});const isLoading=ref(false);const changeLoading=()=>{isLoading.value=true;setTimeout(()=>{isLoading.value=false;},2000);};return{translate,isLoading,changeLoading};}});const _hoisted_1={class:"demo button-demo"};const _hoisted_2={class:"demo-buttons"};const _hoisted_3={type:"primary"};const _hoisted_4={type:"success"};const _hoisted_5={type:"danger"};const _hoisted_6={type:"warning"};const _hoisted_7={class:"demo-buttons"};const _hoisted_8={shape:"square",type:"danger"};const _hoisted_9={shape:"round",type:"primary"};const _hoisted_10={class:"demo-buttons"};const _hoisted_11={plain:"",type:"primary"};const _hoisted_12={plain:"",type:"success"};const _hoisted_13={class:"demo-buttons"};const _hoisted_14={type:"primary",disabled:""};const _hoisted_15={type:"success",disabled:""};const _hoisted_16={disabled:""};const _hoisted_17={class:"demo-buttons flex"};const _hoisted_18={loading:"",loadtype:"circular",type:"danger"};const _hoisted_19={loading:"",type:"warning"};const _hoisted_20=["loading"];const _hoisted_21={class:"demo-buttons"};const _hoisted_22={type:"danger",icon:"https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"};const _hoisted_23={type:"primary",icon:"https://m.hellobike.com/resource/helloyun/16682/_pay6_setting%20(1).png"};const _hoisted_24={class:"demo-buttons"};const _hoisted_25={type:"primary",size:"big"};const _hoisted_26={type:"primary"};const _hoisted_27={type:"primary",size:"small"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.type")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-button",null,toDisplayString(_ctx.translate("type.default")),1),createBaseVNode("quark-button",_hoisted_3,toDisplayString(_ctx.translate("type.primary")),1),createBaseVNode("quark-button",_hoisted_4,toDisplayString(_ctx.translate("type.success")),1),createBaseVNode("quark-button",_hoisted_5,toDisplayString(_ctx.translate("type.danger")),1),createBaseVNode("quark-button",_hoisted_6,toDisplayString(_ctx.translate("type.warning")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.shape")),1),createBaseVNode("div",_hoisted_7,[createBaseVNode("quark-button",_hoisted_8,toDisplayString(_ctx.translate("shape.square")),1),createBaseVNode("quark-button",_hoisted_9,toDisplayString(_ctx.translate("shape.round")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.plain")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-button",_hoisted_11,toDisplayString(_ctx.translate("type.primary")),1),createBaseVNode("quark-button",_hoisted_12,toDisplayString(_ctx.translate("type.success")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.disabled")),1),createBaseVNode("div",_hoisted_13,[createBaseVNode("quark-button",_hoisted_14,toDisplayString(_ctx.translate("title.disabled")),1),createBaseVNode("quark-button",_hoisted_15,toDisplayString(_ctx.translate("title.disabled")),1),createBaseVNode("quark-button",_hoisted_16,toDisplayString(_ctx.translate("title.disabled")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.loading")),1),createBaseVNode("div",_hoisted_17,[createBaseVNode("quark-button",_hoisted_18,toDisplayString(_ctx.translate("loading")),1),createBaseVNode("quark-button",_hoisted_19,toDisplayString(_ctx.translate("loading")),1),createBaseVNode("quark-button",{onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.changeLoading&&_ctx.changeLoading(...args)),loading:_ctx.isLoading,type:"success"},toDisplayString(_ctx.translate("click")),9,_hoisted_20)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.icon")),1),createBaseVNode("div",_hoisted_21,[createBaseVNode("quark-button",_hoisted_22,toDisplayString(_ctx.translate("like")),1),createBaseVNode("quark-button",_hoisted_23,toDisplayString(_ctx.translate("name")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.size")),1),createBaseVNode("div",_hoisted_24,[createBaseVNode("quark-button",_hoisted_25,toDisplayString(_ctx.translate("size.big")),1),createBaseVNode("quark-button",_hoisted_26,toDisplayString(_ctx.translate("size.normal")),1),createBaseVNode("quark-button",_hoisted_27,toDisplayString(_ctx.translate("size.small")),1)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
