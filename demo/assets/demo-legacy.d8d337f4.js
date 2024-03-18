;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="\n#app .list-demo.no-padding {\n  height: 100%;\n}\n.list-list {\n  padding: 0 16px;\n  height: 60px;\n  line-height: 60px;\n  margin: 0 16px;\n  text-align: center;\n  border-bottom: 1px solid rgb(235, 237, 240);\n}\n.list-text {\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  box-sizing: border-box;\n  color: #879099;\n}\n";document.head.appendChild(__vite_style__);System.register(['./component-legacy.8af3f4c3.js','./mobile-legacy.a1274c88.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,Fragment,renderList,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;Fragment=module.F;renderList=module.m;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_vue_vue_type_style_index_0_lang='';const{createDemo,translate}=createComponent("list");const _sfc_main=createDemo({setup(){const data=ref({list1:[],list2:[],list3:[],list4:[],loading1:false,loading2:false,loading3:false,loading4:false,finished1:false,finished2:false,finished3:false,finished4:false,error1:false,error2:false,error3:false,error4:false});const onLoad1=()=>{data.value.loading1=true;setTimeout(()=>{for(let i=0;i<10;i++){data.value.list1.push(data.value.list1.length+1);}data.value.loading1=false;if(data.value.list1.length>=40){data.value.finished1=true;}},1000);};const onLoad2=()=>{data.value.error2=false;data.value.loading2=true;setTimeout(()=>{for(let i=0;i<10;i++){data.value.list2.push(data.value.list2.length+1);}if(data.value.list2.length===10){data.value.error2=true;}else{data.value.error2=false;}data.value.loading2=false;if(data.value.list2.length>=40){data.value.finished2=true;}},1000);};const onLoad3=()=>{data.value.loading3=true;setTimeout(()=>{for(let i=0;i<10;i++){data.value.list3.push(data.value.list3.length+1);}data.value.loading3=false;if(data.value.list3.length>=40){data.value.finished3=true;}},1000);};const onLoad4=()=>{data.value.loading4=true;setTimeout(()=>{for(let i=0;i<10;i++){data.value.list4.push(data.value.list4.length+1);}data.value.loading4=false;if(data.value.list4.length>=40){data.value.finished4=true;}},1000);};const onRefresh=()=>{data.value.loading4=true;data.value.list4=[];for(let i=0;i<10;i++){data.value.list4.push(data.value.list4.length+1);}data.value.finished4=false;onLoad4();};onBeforeMount(()=>{useTranslate({"zh-CN":{label:{basic:"基础用法",error:"错误提示",custom:"自定义提示",refresh:"下拉刷新"},message:{finished:"结束提示",error:"出错了, 点击重试",custom:{finished:"自定义的结束提示",error:"自定义的错误提示",loading:"自定义的加载中..."}}},"en-US":{label:{basic:"Basic",error:"Error",custom:"Custom",refresh:"Refresh"},message:{finished:"Finished Message",error:"Something went wrong, please retry",custom:{finished:"Custom Finished Message",error:"Custom Error Message",loading:"Custom Loading..."}}}});});return{data,onLoad1,onLoad2,onLoad3,onLoad4,onRefresh,translate};}});const _hoisted_1={class:"demo list-demo no-padding"};const _hoisted_2={sticky:"",offsettop:"15vw"};const _hoisted_3=["label"];const _hoisted_4=["loading","finished","finishedtext"];const _hoisted_5={slot:"content"};const _hoisted_6=["label"];const _hoisted_7=["loading","error","errortext","finished"];const _hoisted_8={slot:"content"};const _hoisted_9=["label"];const _hoisted_10=["loading","error","finished"];const _hoisted_11={slot:"content"};const _hoisted_12={class:"list-text",slot:"finished"};const _hoisted_13={class:"list-text",slot:"error"};const _hoisted_14={class:"list-text",slot:"loading"};const _hoisted_15={size:"15"};const _hoisted_16=["label"];const _hoisted_17=["loading"];const _hoisted_18={slot:"content",class:"pull-content"};const _hoisted_19=["loading","finished","finishedtext"];const _hoisted_20={slot:"content"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("quark-tabs",_hoisted_2,[createBaseVNode("quark-tab-content",{label:_ctx.translate('label.basic')},[createBaseVNode("quark-list",{onLoad:_cache[0]||(_cache[0]=(...args)=>_ctx.onLoad1&&_ctx.onLoad1(...args)),loading:_ctx.data.loading1,finished:_ctx.data.finished1,finishedtext:_ctx.translate('message.finished')},[createBaseVNode("div",_hoisted_5,[(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.data.list1,item=>{return openBlock(),createElementBlock("div",{key:item,class:"list-list"},toDisplayString(item),1);}),128))])],40,_hoisted_4)],8,_hoisted_3),createBaseVNode("quark-tab-content",{label:_ctx.translate('label.error')},[createBaseVNode("quark-list",{onLoad:_cache[1]||(_cache[1]=(...args)=>_ctx.onLoad2&&_ctx.onLoad2(...args)),onReload:_cache[2]||(_cache[2]=(...args)=>_ctx.onLoad2&&_ctx.onLoad2(...args)),loading:_ctx.data.loading2,error:_ctx.data.error2,errortext:_ctx.translate('message.error'),finished:_ctx.data.finished2},[createBaseVNode("div",_hoisted_8,[(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.data.list2,item=>{return openBlock(),createElementBlock("div",{key:item,class:"list-list"},toDisplayString(item),1);}),128))])],40,_hoisted_7)],8,_hoisted_6),createBaseVNode("quark-tab-content",{label:_ctx.translate('label.custom')},[createBaseVNode("quark-list",{onLoad:_cache[3]||(_cache[3]=(...args)=>_ctx.onLoad3&&_ctx.onLoad3(...args)),loading:_ctx.data.loading3,error:_ctx.data.error3,finished:_ctx.data.finished3},[createBaseVNode("div",_hoisted_11,[(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.data.list3,item=>{return openBlock(),createElementBlock("div",{key:item,class:"list-list"},toDisplayString(item),1);}),128))]),createBaseVNode("div",_hoisted_12,toDisplayString(_ctx.translate("message.custom.finished")),1),createBaseVNode("div",_hoisted_13,toDisplayString(_ctx.translate("message.custom.error")),1),createBaseVNode("div",_hoisted_14,[createBaseVNode("quark-loading",_hoisted_15,toDisplayString(_ctx.translate("message.custom.loading")),1)])],40,_hoisted_10)],8,_hoisted_9),createBaseVNode("quark-tab-content",{label:_ctx.translate('label.refresh')},[createBaseVNode("quark-pull-refresh",{loading:_ctx.data.loading4,onRefresh:_cache[5]||(_cache[5]=(...args)=>_ctx.onRefresh&&_ctx.onRefresh(...args))},[createBaseVNode("div",_hoisted_18,[createBaseVNode("quark-list",{onLoad:_cache[4]||(_cache[4]=(...args)=>_ctx.onLoad4&&_ctx.onLoad4(...args)),loading:_ctx.data.loading4,finished:_ctx.data.finished4,finishedtext:_ctx.translate('message.finished')},[createBaseVNode("div",_hoisted_20,[(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.data.list4,item=>{return openBlock(),createElementBlock("div",{key:item,class:"list-list"},toDisplayString(item),1);}),128))])],40,_hoisted_19)])],40,_hoisted_17)],8,_hoisted_16)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
