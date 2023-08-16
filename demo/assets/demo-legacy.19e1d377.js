;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".flex-box[data-v-84a6474c] {\n  display: flex;\n}\n.flex-box quark-button[data-v-84a6474c] {\n  margin: 0 8px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.7fd1ef29.js','./mobile-legacy.6e8ed174.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onMounted,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,withDirectives,vModelText,Fragment,renderList,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onMounted=module.f;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;withDirectives=module.w;vModelText=module.v;Fragment=module.F;renderList=module.l;openBlock=module.b;pushScopeId=module.p;popScopeId=module.m;}],execute:function(){var demo_scss_vue_type_style_index_0_src_scoped_true_lang='';const{createDemo,translate}=createComponent("form");const _sfc_main=createDemo({setup(){const formData=ref({checkbox:["apple"],radio:"",rate:"",stepper:"",switch:false,textarea:"",uploader:[],picker:""});const form=ref({name:"",password:"",other:{age:18}});const formRef=ref(null);const pickerRef=ref(null);const ruleFormRef=ref(null);const ruleForm=ref({name:"",password:"",age:""});const formAttrRef=ref();const attrsForm=ref({name:"",password:"",age:""});const formItemsRef=ref();const dynamicFormData=ref({user:[{name:"",age:""}]});const addDynamicForm=()=>{dynamicFormData.value.user.push({name:"",age:""});};const dynamicRules={name:[{required:true,message:translate("error.name")}],age:[{required:true,message:translate("error.age1")}]};onMounted(()=>{var _formRef$value,_formRef$value2,_formItemsRef$value,_formAttrRef$value,_formAttrRef$value2,_ruleFormRef$value,_dynamicFormRef$value;const picker=pickerRef.value;picker.setColumns([{defaultIndex:0,values:translate("cities")}]);(_formRef$value=formRef.value)===null||_formRef$value===void 0?void 0:_formRef$value.setModel(form.value);(_formRef$value2=formRef.value)===null||_formRef$value2===void 0?void 0:_formRef$value2.setRules({name:[{required:true,message:translate("error.name")}],password:{required:true,message:translate("error.password")},other:{age:[{required:true,message:translate("error.age1")}]}});(_formItemsRef$value=formItemsRef.value)===null||_formItemsRef$value===void 0?void 0:_formItemsRef$value.setModel(formData.value);(_formAttrRef$value=formAttrRef.value)===null||_formAttrRef$value===void 0?void 0:_formAttrRef$value.setModel(attrsForm.value);(_formAttrRef$value2=formAttrRef.value)===null||_formAttrRef$value2===void 0?void 0:_formAttrRef$value2.setRules({name:[{required:true,message:translate("error.name")}],age:{required:true,message:translate("error.age1")}});(_ruleFormRef$value=ruleFormRef.value)===null||_ruleFormRef$value===void 0?void 0:_ruleFormRef$value.setRules({name:[{required:true,message:translate("error.errorMsg"),pattern:/\w{6}/}],password:[{required:true,validator:validatorPassword}],age:[{required:true,asyncValidator:asyncValidator}]});(_dynamicFormRef$value=dynamicFormRef.value)===null||_dynamicFormRef$value===void 0?void 0:_dynamicFormRef$value.setModel(dynamicFormData.value);});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",rule:"自定义校验规则",items:"表单项类型",slots:"使用插槽",attrs:"表单属性",dynamic:"动态增加表单项"},label:{name:"姓名",password:"密码",age:"年龄",checkbox:"复选框",radio:"单选框",switch:"开关",rate:"评分",stepper:"步进器",textarea:"文本域",uploader:"文件上传",picker:"选择器"},placeholders:{pattern:"正则校验",validator:"函数校验",asyncValidator:"异步校验"},cities:["杭州","嘉兴","绍兴","宁波","湖州","千岛湖"],submit:"提交",reset:"重置",add:"添加",error:{name:"请输入姓名",password:"请输入密码",age1:"请输入年龄",age:"不能小于18岁",errorMsg:"请输入正确内容",errorPwd:"密码不能为123456"},pickerTitle:"请选择城市",enum:{apple:"苹果",banana:"香蕉",square:"方形",circle:"圆形"},customLabel:"自定义label",search:"搜索"},"en-US":{title:{basic:"Basic Usage",rule:"Custom Rules",items:"Form Items",slots:"Use slots",attrs:"Form Attributes",dynamic:"Add form items dynamically"},label:{name:"Name",password:"Password",age:"Age",checkbox:"Checkbox",radio:"Radio",switch:"Swicth",rate:"Rate",stepper:"Stepper",textarea:"Textarea",uploader:"Uploader",picker:"Picker"},placeholders:{pattern:"Use pattern",validator:"Use validator",asyncValidator:"Use async validator"},cities:["Hangzhou","Jiaxing","Shaoxing","Ningbo","Huzhou","Qiandaohu"],submit:"Submit",reset:"Reset",add:"Add",error:{name:"Name is required",password:"Password is required",age:"Must not be younger than 18",age1:"Age is required",errorMsg:"Error message",errorPwd:"Password can not be 123456"},pickerTitle:"Please choose city",enum:{apple:"apple",banana:"banana",square:"square",circle:"circle"},customLabel:"Custom Label",search:"Search"}});});const submit=ref=>{ref.validate((valid,errorMsg)=>{console.log("submit",valid,errorMsg);});};const reset=()=>{formRef.value.resetFields();};const getValues=ref=>{const values=ref.getValues();console.log(values);};const onCheckboxChange=({detail})=>{formData.value.checkbox=detail.value;};const onRadioChange=({detail})=>{formData.value.radio=detail.value;};const pickerVisible=ref(false);const close=()=>{pickerVisible.value=false;};const confirm=({detail})=>{formData.value.picker=detail.value.map(i=>i.value).join("");pickerVisible.value=false;};const ruleFormSubmit=async()=>{const valid=await ruleFormRef.value.validate();console.log(valid);};const validatorPassword=(rule,val,callback)=>{if(!val){callback(new Error(translate("error.errorMsg")));}else if(val==="123456"){callback(new Error(translate("error.errorPwd")));}else{callback();}};const asyncValidator=(rule,value)=>{return new Promise((resolve,reject)=>{if(value<18){reject(translate("error.age"));}else{resolve();}});};const dynamicFormRef=ref();return{formRef,formData,pickerRef,translate,close,confirm,onCheckboxChange,pickerVisible,onRadioChange,submit,reset,form,ruleFormRef,ruleForm,ruleFormSubmit,formAttrRef,attrsForm,formItemsRef,getValues,addDynamicForm,dynamicRules,dynamicFormData,dynamicFormRef};}});const _withScopeId=n=>(pushScopeId("data-v-84a6474c"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo scoped-form"};const _hoisted_2={ref:"formRef",labelwidth:"70px"};const _hoisted_3=["label"];const _hoisted_4=["placeholder"];const _hoisted_5=["label"];const _hoisted_6=["placeholder"];const _hoisted_7=["label"];const _hoisted_8=["placeholder"];const _hoisted_9=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("br",null,null,-1));const _hoisted_10={class:"flex-box"};const _hoisted_11={ref:"ruleFormRef",labelwidth:"90px"};const _hoisted_12=["label"];const _hoisted_13=["placeholder"];const _hoisted_14=["label"];const _hoisted_15=["placeholder"];const _hoisted_16=["label"];const _hoisted_17=["placeholder"];const _hoisted_18=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("br",null,null,-1));const _hoisted_19={class:"flex-box"};const _hoisted_20={ref:"formItemsRef"};const _hoisted_21=["label"];const _hoisted_22=["value"];const _hoisted_23={name:"apple"};const _hoisted_24={name:"banana"};const _hoisted_25=["label"];const _hoisted_26=["value"];const _hoisted_27={name:"square"};const _hoisted_28={name:"circle"};const _hoisted_29=["label"];const _hoisted_30=["checked"];const _hoisted_31=["label"];const _hoisted_32=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-rate",null,null,-1));const _hoisted_33=[_hoisted_32];const _hoisted_34=["label"];const _hoisted_35=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-stepper",{min:"0",max:"99"},null,-1));const _hoisted_36=[_hoisted_35];const _hoisted_37=["label"];const _hoisted_38=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-textarea",{autosize:""},null,-1));const _hoisted_39=[_hoisted_38];const _hoisted_40=["label"];const _hoisted_41=["label"];const _hoisted_42=["value"];const _hoisted_43=["title","open"];const _hoisted_44=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("br",null,null,-1));const _hoisted_45={class:"flex-box"};const _hoisted_46={ref:"formAttrRef",labelwidth:"60px",labelposition:"right",labelsuffix:"："};const _hoisted_47=["label"];const _hoisted_48=["placeholder"];const _hoisted_49=["label","rules"];const _hoisted_50=["placeholder"];const _hoisted_51=["label"];const _hoisted_52=["placeholder"];const _hoisted_53={slot:"label"};const _hoisted_54=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-field",null,null,-1));const _hoisted_55={slot:"suffix"};const _hoisted_56={type:"primary",size:"small"};const _hoisted_57={ref:"dynamicFormRef"};const _hoisted_58=["label","prop","rules"];const _hoisted_59=["onUpdate:modelValue","placeholder"];const _hoisted_60=["label","prop","rules"];const _hoisted_61=["onUpdate:modelValue","placeholder"];const _hoisted_62=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("br",null,null,-1));const _hoisted_63={class:"flex-box"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("quark-form",_hoisted_2,[createBaseVNode("quark-form-item",{prop:"name",label:_ctx.translate('label.name')},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":_cache[0]||(_cache[0]=$event=>_ctx.form.name=$event),placeholder:_ctx.translate('label.name')},null,8,_hoisted_4),[[vModelText,_ctx.form.name]])],8,_hoisted_3),createBaseVNode("quark-form-item",{prop:"password",label:_ctx.translate('label.password')},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":_cache[1]||(_cache[1]=$event=>_ctx.form.password=$event),type:"password",placeholder:_ctx.translate('label.password')},null,8,_hoisted_6),[[vModelText,_ctx.form.password]])],8,_hoisted_5),createBaseVNode("quark-form-item",{prop:"other.age",label:_ctx.translate('label.age')},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":_cache[2]||(_cache[2]=$event=>_ctx.form.other.age=$event),placeholder:_ctx.translate('label.age')},null,8,_hoisted_8),[[vModelText,_ctx.form.other.age]])],8,_hoisted_7)],512),_hoisted_9,createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-button",{type:"primary",size:"big",onClick:_cache[3]||(_cache[3]=$event=>_ctx.submit(_ctx.formRef))},toDisplayString(_ctx.translate("submit")),1),createBaseVNode("quark-button",{size:"big",onClick:_cache[4]||(_cache[4]=(...args)=>_ctx.reset&&_ctx.reset(...args))},toDisplayString(_ctx.translate("reset")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.rule")),1),createBaseVNode("quark-form",_hoisted_11,[createBaseVNode("quark-form-item",{prop:"name",label:_ctx.translate('label.name')},[createBaseVNode("quark-field",{placeholder:_ctx.translate('placeholders.pattern')},null,8,_hoisted_13)],8,_hoisted_12),createBaseVNode("quark-form-item",{prop:"password",label:_ctx.translate('label.password')},[createBaseVNode("quark-field",{value:"123456",placeholder:_ctx.translate('placeholders.validator')},null,8,_hoisted_15)],8,_hoisted_14),createBaseVNode("quark-form-item",{prop:"age",label:_ctx.translate('label.age')},[createBaseVNode("quark-field",{placeholder:_ctx.translate('placeholders.asyncValidator')},null,8,_hoisted_17)],8,_hoisted_16)],512),_hoisted_18,createBaseVNode("div",_hoisted_19,[createBaseVNode("quark-button",{type:"primary",size:"big",onClick:_cache[5]||(_cache[5]=(...args)=>_ctx.ruleFormSubmit&&_ctx.ruleFormSubmit(...args))},toDisplayString(_ctx.translate("submit")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.items")),1),createBaseVNode("quark-form",_hoisted_20,[createBaseVNode("quark-form-item",{prop:"checkbox",label:_ctx.translate('label.checkbox')},[createBaseVNode("quark-checkbox-group",{value:_ctx.formData.checkbox,onChange:_cache[6]||(_cache[6]=(...args)=>_ctx.onCheckboxChange&&_ctx.onCheckboxChange(...args))},[createBaseVNode("quark-checkbox",_hoisted_23,toDisplayString(_ctx.translate("enum.apple")),1),createBaseVNode("quark-checkbox",_hoisted_24,toDisplayString(_ctx.translate("enum.banana")),1)],40,_hoisted_22)],8,_hoisted_21),createBaseVNode("quark-form-item",{prop:"radio",label:_ctx.translate('label.radio')},[createBaseVNode("quark-radio-group",{value:_ctx.formData.radio,direction:"horizontal",onChange:_cache[7]||(_cache[7]=(...args)=>_ctx.onRadioChange&&_ctx.onRadioChange(...args))},[createBaseVNode("quark-radio",_hoisted_27,toDisplayString(_ctx.translate("enum.square")),1),createBaseVNode("quark-radio",_hoisted_28,toDisplayString(_ctx.translate("enum.circle")),1)],40,_hoisted_26)],8,_hoisted_25),createBaseVNode("quark-form-item",{prop:"swich",label:_ctx.translate('label.switch')},[createBaseVNode("quark-switch",{checked:_ctx.formData.switch},null,8,_hoisted_30)],8,_hoisted_29),createBaseVNode("quark-form-item",{prop:"rate",label:_ctx.translate('label.rate')},_hoisted_33,8,_hoisted_31),createBaseVNode("quark-form-item",{prop:"stepper",label:_ctx.translate('label.stepper')},_hoisted_36,8,_hoisted_34),createBaseVNode("quark-form-item",{prop:"textarea",label:_ctx.translate('label.textarea')},_hoisted_39,8,_hoisted_37),createBaseVNode("quark-form-item",{prop:"uploader",label:_ctx.translate('label.uploader')},[withDirectives(createBaseVNode("quark-uploader",{"onUpdate:modelValue":_cache[8]||(_cache[8]=$event=>_ctx.formData.uploader=$event),preview:""},null,512),[[vModelText,_ctx.formData.uploader]])],8,_hoisted_40),createBaseVNode("quark-form-item",{prop:"picker",label:_ctx.translate('label.picker'),islink:""},[createBaseVNode("quark-field",{value:_ctx.formData.picker,readonly:"",onClick:_cache[9]||(_cache[9]=$event=>_ctx.pickerVisible=true)},null,8,_hoisted_42),createBaseVNode("quark-picker",{title:_ctx.translate('pickerTitle'),ref:"pickerRef",open:_ctx.pickerVisible,onClose:_cache[10]||(_cache[10]=(...args)=>_ctx.close&&_ctx.close(...args)),onConfirm:_cache[11]||(_cache[11]=(...args)=>_ctx.confirm&&_ctx.confirm(...args))},null,40,_hoisted_43)],8,_hoisted_41)],512),_hoisted_44,createBaseVNode("div",_hoisted_45,[createBaseVNode("quark-button",{type:"primary",size:"big",onClick:_cache[12]||(_cache[12]=$event=>_ctx.getValues(_ctx.formItemsRef))},toDisplayString(_ctx.translate("submit")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.attrs")),1),createBaseVNode("quark-form",_hoisted_46,[createBaseVNode("quark-form-item",{prop:"name",label:_ctx.translate('label.name'),labelwidth:"70px"},[createBaseVNode("quark-field",{placeholder:_ctx.translate('label.name')},null,8,_hoisted_48)],8,_hoisted_47),createBaseVNode("quark-form-item",{prop:"password",hideasterisk:"",label:_ctx.translate('label.password'),rules:[{required:true,message:_ctx.translate('error.password')}]},[createBaseVNode("quark-field",{type:"password",placeholder:_ctx.translate('label.password')},null,8,_hoisted_50)],8,_hoisted_49),createBaseVNode("quark-form-item",{prop:"age",label:_ctx.translate('label.age'),hidemessage:""},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":_cache[13]||(_cache[13]=$event=>_ctx.attrsForm.age=$event),placeholder:_ctx.translate('label.age')},null,8,_hoisted_52),[[vModelText,_ctx.attrsForm.age]])],8,_hoisted_51)],512),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.slots")),1),createBaseVNode("quark-form",null,[createBaseVNode("quark-form-item",null,[createBaseVNode("div",_hoisted_53,toDisplayString(_ctx.translate("customLabel")),1),_hoisted_54,createBaseVNode("div",_hoisted_55,[createBaseVNode("quark-button",_hoisted_56,toDisplayString(_ctx.translate("search")),1)])])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.dynamic")),1),createBaseVNode("quark-form",_hoisted_57,[(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.dynamicFormData.user,(item,index)=>{return openBlock(),createElementBlock(Fragment,{key:index},[createBaseVNode("quark-form-item",{label:`${_ctx.translate('label.name')}${index}`,prop:`user.${index}.name`,rules:[{required:true,message:_ctx.translate('error.name')}]},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":$event=>item.name=$event,placeholder:_ctx.translate('label.name')},null,8,_hoisted_59),[[vModelText,item.name]])],8,_hoisted_58),createBaseVNode("quark-form-item",{label:`${_ctx.translate('label.age')}${index}`,prop:`user.${index}.age`,rules:[{required:true,message:_ctx.translate('error.age1')}]},[withDirectives(createBaseVNode("quark-field",{"onUpdate:modelValue":$event=>item.age=$event,placeholder:_ctx.translate('label.age')},null,8,_hoisted_61),[[vModelText,item.age]])],8,_hoisted_60),_hoisted_62],64);}),128))],512),createBaseVNode("div",_hoisted_63,[createBaseVNode("quark-button",{type:"primary",size:"big",onClick:_cache[14]||(_cache[14]=$event=>_ctx.submit(_ctx.dynamicFormRef))},toDisplayString(_ctx.translate("submit")),1),createBaseVNode("quark-button",{size:"big",onClick:_cache[15]||(_cache[15]=(...args)=>_ctx.addDynamicForm&&_ctx.addDynamicForm(...args))},toDisplayString(_ctx.translate("add")),1)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-84a6474c"]]));}};});})();
