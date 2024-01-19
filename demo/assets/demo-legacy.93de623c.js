;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".quark-popover {\n  width: 100px;\n  background-color: #0088ff;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  margin-right: 20px;\n}\n.quark-popover-content {\n  width: 160px;\n  height: 140px;\n  background-color: #4a4a4a;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  color: white;\n}";document.head.appendChild(__vite_style__);System.register(['./mobile-legacy.d0262e76.js','./component-legacy.437a8e3a.js'],function(exports){'use strict';var _export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,createComponent;return{setters:[function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.g;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;},function(module){createComponent=module.c;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("popover");const _sfc_main=createDemo({setup(){const data=ref({light:false,dark:false,icon:false,disable:false,content:false});const lightRef=ref(null);const darkRef=ref(null);const iconRef=ref(null);const disableRef=ref(null);onBeforeMount(()=>{useTranslate({"zh-CN":{basicUsage:"基础用法",lightStyle:"浅色风格",darkStyle:"深色风格",settings:"选项配置",showIcon:"展示图标",disable:"禁用状态",customContent:"自定义内容",content:"我是自定义内容",options:["选项一","选项二","选项三"]},"en-US":{basicUsage:"Basic Usage",lightStyle:"Light Style",darkStyle:"Dark Style",settings:"Option Settings",showIcon:"Show Icon",disable:"disabled",customContent:"Custom Content",content:"This is custom content",options:["Option 1","Option 2","Option 3"]}});});onMounted(()=>{const actions=[{text:`${translate("options")[0]}`},{text:`${translate("options")[1]}`},{text:`${translate("options")[2]}`}];lightRef.value.setActions(actions);darkRef.value.setActions(actions);iconRef.value.setActions([{text:`${translate("options")[0]}`},{text:`${translate("options")[1]}`,icon:"tel"},{text:`${translate("options")[2]}`,icon:"https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"}]);disableRef.value.setActions([{text:`${translate("options")[0]}`,disabled:true},{text:`${translate("options")[1]}`},{text:`${translate("options")[2]}`}]);});const handleLightSelect=({detail})=>{const{action,index}=detail;Toast.text(action.text);close("light");};const handleDarkSelect=({detail})=>{const{action,index}=detail;Toast.text(action.text);close("dark");};const handleIconSelect=({detail})=>{const{action,index}=detail;Toast.text(action.text);close("icon");};const handleDisableSelect=({detail})=>{const{action,index}=detail;Toast.text(action.text);close("disable");};const open=name=>{data.value[name]=true;data.value.test=true;};const close=name=>{data.value[name]=false;};return{translate,data,lightRef,darkRef,iconRef,disableRef,handleLightSelect,handleDarkSelect,handleIconSelect,handleDisableSelect,open,close};}});const _hoisted_1={class:"demo"};const _hoisted_2=["open"];const _hoisted_3=["open"];const _hoisted_4=["open"];const _hoisted_5=["open"];const _hoisted_6=["open"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basicUsage")),1),createBaseVNode("quark-popover",{scrollhidden:"",open:_ctx.data.light,theme:"light",placement:"bottomleft",ref:"lightRef",onClose:_cache[1]||(_cache[1]=$event=>_ctx.close('light')),onSelect:_cache[2]||(_cache[2]=(...args)=>_ctx.handleLightSelect&&_ctx.handleLightSelect(...args))},[createBaseVNode("div",{class:"quark-popover",onClick:_cache[0]||(_cache[0]=$event=>_ctx.open('light'))},toDisplayString(_ctx.translate("lightStyle")),1)],40,_hoisted_2),createBaseVNode("quark-popover",{scrollhidden:"",open:_ctx.data.dark,theme:"dark",ref:"darkRef",onClose:_cache[4]||(_cache[4]=$event=>_ctx.close('dark')),onSelect:_cache[5]||(_cache[5]=(...args)=>_ctx.handleDarkSelect&&_ctx.handleDarkSelect(...args))},[createBaseVNode("div",{class:"quark-popover",onClick:_cache[3]||(_cache[3]=$event=>_ctx.open('dark'))},toDisplayString(_ctx.translate("darkStyle")),1)],40,_hoisted_3),createBaseVNode("h2",null,toDisplayString(_ctx.translate("settings")),1),createBaseVNode("quark-popover",{scrollhidden:"",open:_ctx.data.icon,placement:"bottomleft",ref:"iconRef",theme:"light",onClose:_cache[7]||(_cache[7]=$event=>_ctx.close('icon')),onSelect:_cache[8]||(_cache[8]=(...args)=>_ctx.handleIconSelect&&_ctx.handleIconSelect(...args))},[createBaseVNode("div",{class:"quark-popover",onClick:_cache[6]||(_cache[6]=$event=>_ctx.open('icon'))},toDisplayString(_ctx.translate("showIcon")),1)],40,_hoisted_4),createBaseVNode("quark-popover",{scrollhidden:"",theme:"light",open:_ctx.data.disable,ref:"disableRef",onClose:_cache[10]||(_cache[10]=$event=>_ctx.close('disable')),onSelect:_cache[11]||(_cache[11]=(...args)=>_ctx.handleDisableSelect&&_ctx.handleDisableSelect(...args))},[createBaseVNode("div",{class:"quark-popover",onClick:_cache[9]||(_cache[9]=$event=>_ctx.open('disable'))},toDisplayString(_ctx.translate("disable")),1)],40,_hoisted_5),createBaseVNode("h2",null,toDisplayString(_ctx.translate("")),1),createBaseVNode("quark-popover",{scrollhidden:"",open:_ctx.data.content,placement:"bottomleft",onClose:_cache[14]||(_cache[14]=$event=>_ctx.close('content'))},[createBaseVNode("div",{class:"quark-popover",onClick:_cache[12]||(_cache[12]=$event=>_ctx.open('content'))},toDisplayString(_ctx.translate("customContent")),1),createBaseVNode("div",{slot:"content",class:"quark-popover-content",onClick:_cache[13]||(_cache[13]=$event=>_ctx.close('content'))},toDisplayString(_ctx.translate("content")),1)],40,_hoisted_6)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
