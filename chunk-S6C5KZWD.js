import{b as E,e as X,f as Y}from"./chunk-3YTM6DSX.js";import{a as W}from"./chunk-OLO7QV74.js";import{a as Z}from"./chunk-7LZEMMX5.js";import{c as tt}from"./chunk-ETM6BSIJ.js";import{Cb as z,Kb as q,Lb as l,Mb as L,Nb as _,Ob as p,Pb as I,U as P,Ua as g,V as u,Y as O,_ as s,_a as U,_b as G,aa as f,ba as h,ca as S,cb as j,eb as c,gb as C,hb as F,ib as M,kb as A,lb as V,mb as k,mc as J,nb as D,ob as B,pb as R,qc as K,sb as N,tb as w,tc as x,ub as b,vb as v,wb as Q,xb as H,zb as $}from"./chunk-Z37IT2PE.js";var et=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=S({type:t,selectors:[["","ult-tab-label",""],["","ultTabLabel",""]]});let i=t;return i})();var m=(()=>{let t=class t{constructor(){this._selectionModel=new W(!1,[0]),this.tabIdChange=new U}activate(n,e=!0){this._selectionModel.select(n),e&&this.tabIdChange.emit(n)}isActive(n){return this._selectionModel.isSelected(n)}hasActive(){return this._selectionModel.hasValue()}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=P({token:t,factory:t.\u0275fac});let i=t;return i})();var y=new O("Tabs");var ot=["content"];function rt(i,t){i&1&&R(0)}function st(i,t){if(i&1&&(D(0),M(1,rt,1,0,"ng-container",3),B()),i&2){let T=w();g(1),c("ngTemplateOutlet",T.labelRef)}}function at(i,t){if(i&1&&H(0),i&2){let T=w();$(" ",T.label,`
`)}}function ct(i,t){i&1&&v(0)}var lt=["*"],it=(()=>{let t=class t{constructor(){this.api=s(m),this._container=s(y,{optional:!0}),this.id=this._container?this._container.nextId++:null,this.disabled=!1}get active(){return this.api.isActive(this.id)}activate(){this.disabled||this.api.activate(this.id)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f({type:t,selectors:[["ult-tab"],["","ultTab",""]],contentQueries:function(e,o,r){if(e&1&&_(r,et,5,q),e&2){let a;l(a=p())&&(o.labelRef=a.first)}},viewQuery:function(e,o){if(e&1&&L(ot,7),e&2){let r;l(r=p())&&(o.contentRef=r.first)}},hostAttrs:[1,"ult-tab"],hostVars:4,hostBindings:function(e,o){e&1&&N("click",function(){return o.activate()}),e&2&&C("is-active",o.active)("is-disabled",o.disabled)},inputs:{id:["tabId","id"],disabled:["disabled","disabled",G],label:"label"},exportAs:["ultTab"],features:[j],ngContentSelectors:lt,decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["labelDefault",""],["content",""],[4,"ngTemplateOutlet"]],template:function(e,o){if(e&1&&(b(),M(0,st,2,1,"ng-container",0)(1,at,1,1,"ng-template",null,1,I)(3,ct,1,0,"ng-template",null,2,I)),e&2){let r=Q(2);c("ngIf",o.labelRef)("ngIfElse",r)}},dependencies:[J,K],styles:['[_nghost-%COMP%]{-webkit-user-select:none;user-select:none;flex:none;display:flex;align-items:center;justify-content:center;height:100%;gap:var(--ult-tab-gap);padding:var(--ult-tab-padding);color:var(--ult-tab-color);font-size:var(--ult-tab-font-size);position:relative;cursor:pointer}[_nghost-%COMP%]:after{content:"";position:absolute;left:0;bottom:0;right:0;flex:none;height:var(--ult-tab-hl-height);border-radius:var(--ult-tab-hl-border-radius)}.is-active[_nghost-%COMP%]{color:var(--ult-tab-active-color)}.is-active[_nghost-%COMP%]:after{background:var(--ult-tab-hl-active-color)}[_nghost-%COMP%]:not(.is-active):hover{color:var(--ult-tab-hover-color)}[_nghost-%COMP%]:not(.is-active):hover:after{background:var(--ult-tab-hl-hover-color)}.is-stretch[_nghost-%COMP%], .is-stretch   [_nghost-%COMP%]{flex-grow:1}.is-disabled[_nghost-%COMP%]{pointer-events:none;opacity:var(--ult-disabled-opacity)}.is-bordered:after[_nghost-%COMP%], .is-bordered:after   [_nghost-%COMP%]{bottom:var(--ult-tabs-nav-border-height)}']});let i=t;return i})();var pt=[[["ult-tab"]]],dt=["ult-tab"],Qt=(()=>{let t=class t{constructor(){this.api=s(m),this._vcr=s(F),this.bordered=!0,this.stretch=!1,this.align="start",this.nextId=0}set activeTabId(n){this.api.activate(n,!1)}get tabIdChange(){return this.api.tabIdChange}ngAfterContentInit(){let n=this._tabs.find(e=>this.api.isActive(e.id));n&&(this.portal=new E(n.contentRef,this._vcr)),this.api.tabIdChange.subscribe(e=>{let o=this._tabs.find(r=>r.id===e);this.portal=new E(o.contentRef,this._vcr)})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f({type:t,selectors:[["ult-tabs"]],contentQueries:function(e,o,r){if(e&1&&_(r,it,4),e&2){let a;l(a=p())&&(o._tabs=a)}},hostAttrs:[1,"ult-tabs"],hostVars:10,hostBindings:function(e,o){e&2&&C("is-bordered",o.bordered)("is-align-start",o.align=="start")("is-align-center",o.align=="center")("is-align-end",o.align=="end")("is-stretch",o.stretch)},inputs:{bordered:"bordered",stretch:"stretch",align:"align",activeTabId:"activeTabId"},outputs:{tabIdChange:"tabIdChange"},exportAs:["ultTabs"],features:[z([{provide:y,useExisting:t},m])],ngContentSelectors:dt,decls:3,vars:1,consts:[[1,"nav"],[1,"content",3,"cdkPortalOutlet"]],template:function(e,o){e&1&&(b(pt),A(0,"div",0),v(1),V(),k(2,"div",1)),e&2&&(g(2),c("cdkPortalOutlet",o.portal))},dependencies:[X],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;align-items:center;flex:none;height:var(--ult-tabs-nav-height);gap:var(--ult-tabs-nav-gap)}.is-bordered[_nghost-%COMP%]   .nav[_ngcontent-%COMP%]{border-bottom:var(--ult-tabs-nav-border)}.is-align-start[_nghost-%COMP%]   .nav[_ngcontent-%COMP%]{justify-content:start}.is-align-center[_nghost-%COMP%]   .nav[_ngcontent-%COMP%]{justify-content:center}.is-align-end[_nghost-%COMP%]   .nav[_ngcontent-%COMP%]{justify-content:end}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{display:block}"]});let i=t;return i})();var nt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=u({imports:[x,Y]});let i=t;return i})();var ce=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=u({imports:[x,nt,tt,Z]});let i=t;return i})();export{et as a,it as b,Qt as c,nt as d,ce as e};