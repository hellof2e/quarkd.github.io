;(function(){System.register(['./mobile-legacy.405d3770.js'],function(exports){'use strict';var Locale,defineComponent;return{setters:[function(module){Locale=module.L;defineComponent=module.d;}],execute:function(){exports('c',createComponent);const isFunction=val=>typeof val==="function";const getPropByPath=(obj,keyPath)=>{try{return keyPath.split(".").reduce((prev,curr)=>prev[curr],obj);}catch(error){return"";}};function createComponent(name){const componentName="quark-"+name;return{componentName,translate(keyPath,...args){const languages=Locale.languages();const text=getPropByPath(languages,`${name.replace("-","")}.${keyPath}`)||getPropByPath(languages,keyPath);return isFunction(text)?text(...args):text;},createDemo:function(_component){_component.baseName=name;_component.name="demo-"+name;return defineComponent(_component);}};}}};});})();
