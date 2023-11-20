import{a as I,c as R,d as V,e as P}from"./chunk-2IEELHWK.js";import"./chunk-NB6FGFAQ.js";import"./chunk-D6ZYXDGB.js";import"./chunk-ZJMLONPG.js";import{b as F}from"./chunk-EP6OWM5N.js";import"./chunk-AFVKOC36.js";import"./chunk-P3HWLSJF.js";import{Fb as S,Lb as b,Mb as x,Ob as O,Qa as C,Sa as E,Ua as s,V as g,_ as u,_a as c,_b as h,aa as p,ba as v,cb as _,ea as y,eb as l,ec as L,ib as w,kb as d,lb as o,mb as r,mc as z,tb as M,tc as D,xb as m}from"./chunk-Z37IT2PE.js";import"./chunk-CWTPBX7D.js";var q=["contentRef"],T=!1,j=(()=>{let e=class e{constructor(){this._doc=u(L),this._renderer=u(E),this._elementRef=u(C),this.value="",this.language="typescript",this.fontSize=13,this.tabSize=2,this.theme="",this.version="0.44.0",this.readOnly=!1,this.minimap=!1,this.padding={top:10,bottom:10},this.editorLoaded=new c,this.valueChange=new c}get api(){return{refreshLayout:()=>this._refreshLayout()}}ngOnInit(){if(T)this._setupEditor();else{let t="https://unpkg.com/monaco-editor@"+this.version,i=document.createElement("script");i.type="text/javascript",i.src=`${t}/min/vs/loader.js`,i.addEventListener("load",()=>{window.require.config({paths:{vs:`${t}/min/vs`}}),window.require(["vs/editor/editor.main"],()=>{T=!0,this._setupEditor()})}),this._renderer.appendChild(this._doc.body,i)}}ngOnChanges(t){t.language&&!t.language.firstChange&&(t.language.previousValue,t.language.currentValue),t.value&&!t.value.firstChange&&(t.value.previousValue,t.value.currentValue)}_refreshLayout(){let t=this._elementRef.nativeElement;if(t.parentElement){let{width:i,height:a}=t.parentElement.getBoundingClientRect();this._editor.layout({width:i,height:a}),this._editor.getModel().setValue(this._editor.getModel().getValue())}}_setupEditor(){let t=window.monaco,i={readOnly:this.readOnly,theme:this.theme,tabSize:this.tabSize,padding:this.padding,fontSize:this.fontSize,minimap:{enabled:this.minimap},language:this.language,value:this.value};this._editor=t.editor.create(this._contentRef.nativeElement,i),this._editor.getModel().onDidChangeContent(a=>{this.valueChange.emit(this._editor.getModel().getValue())}),this._refreshLayout()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ult-monaco-editor"]],viewQuery:function(i,a){if(i&1&&x(q,7),i&2){let f;b(f=O())&&(a._contentRef=f.first)}},hostAttrs:[1,"ult-monaco-editor"],inputs:{value:"value",language:"language",fontSize:"fontSize",tabSize:"tabSize",theme:"theme",version:"version",readOnly:["readOnly","readOnly",h],minimap:["minimap","minimap",h],padding:"padding"},outputs:{editorLoaded:"editorLoaded",valueChange:"valueChange"},exportAs:["ultMonacoEditor"],features:[_,y],decls:2,vars:0,consts:[[1,"content"],["contentRef",""]],template:function(i,a){i&1&&r(0,"div",0,1)},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0});let n=e;return n})(),k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({});let n=e;return n})();function B(n,e){if(n&1&&r(0,"ult-monaco-editor",7),n&2){let N=M();l("value",N.value)}}var de=(()=>{let e=class e{constructor(){this.importExample="import { UltMonacoEditorModule } from '@ultima-ui/monaco-editor';",this.copyLibraries=`{
  "glob": "**/*",
  "input": "node_modules/monaco-editor",
  "output": "/assets/monaco-editor/"
}`,this.value=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="w-6 h-6 text-gray-600 bg-[#ff8888] hover:text-sky-600 ring-gray-900/5"></div>
  </body>
</html>`,this.show=!1}ngOnInit(){setTimeout(()=>{this.show=!0},5e3)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],standalone:!0,features:[S],decls:21,vars:5,consts:[[1,"grid","grid-cols-12","gap-10"],[1,"col-span-8","space-y-8"],[1,"space-y-6"],[1,"text-2xl","font-bold"],[3,"code"],[1,"overflow-hidden"],[1,"!p-0",3,"centered"],["language","html",1,"w-full","h-full",3,"value"],["language","html","class","w-full h-full",3,"value",4,"ngIf"]],template:function(i,a){i&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),m(4,"Monaco Editor"),o()(),d(5,"div",2)(6,"p"),m(7,"Import module:"),o(),r(8,"code-block",4),o(),d(9,"h3"),m(10,"Basic"),o(),d(11,"playground",5)(12,"playground-content",6),r(13,"ult-monaco-editor",7),o(),r(14,"playground-controls"),o(),d(15,"h3"),m(16,"Lazy Loading"),o(),d(17,"playground",5)(18,"playground-content",6),w(19,B,1,1,"ult-monaco-editor",8),o(),r(20,"playground-controls"),o()()()),i&2&&(s(8),l("code",a.importExample),s(4),l("centered",!1),s(1),l("value",a.value),s(5),l("centered",!1),s(1),l("ngIf",a.show))},dependencies:[D,z,k,j,P,I,R,V,F],encapsulation:2});let n=e;return n})();export{de as MonacoEditorComponent};
