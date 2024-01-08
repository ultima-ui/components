import{a as J,c as K,d as Q}from"./chunk-Q5WFXUKX.js";import{f as $,h as tt,k as et}from"./chunk-NG7DX5CH.js";import{a as N,b as G,i as U}from"./chunk-AIOTMJMK.js";import"./chunk-ZWLOGJRW.js";import{e as k,i as z}from"./chunk-V6DSZBW7.js";import{a as W,f as Z}from"./chunk-L7K65B2M.js";import"./chunk-7YIU7TQ5.js";import"./chunk-EX6KPJX2.js";import{a as ot,b as it,c as nt,d as rt,e as lt}from"./chunk-7B5XJ67J.js";import{a as V,g as q}from"./chunk-2NHQWN5D.js";import"./chunk-62MZ54RB.js";import"./chunk-7EG655BJ.js";import{Ab as l,Bb as B,Ib as I,Nb as x,Qa as Y,Ua as n,V as O,Y as S,_ as g,_a as C,aa as c,ba as E,bc as j,ca as X,cb as A,cc as F,eb as r,ib as y,nb as s,ob as a,pb as D,pc as L,qb as T,rb as M,sb as R,ta as v,tc as H,vb as d,wb as P,wc as f}from"./chunk-OPISKUNG.js";import"./chunk-CWTPBX7D.js";var _=new S("Tooltip data");function dt(o,t){if(o&1&&(T(0),l(1),M()),o&2){let h=P();n(1),B(h._data)}}function mt(o,t){o&1&&R(0)}function ut(o,t){if(o&1&&(T(0),y(1,mt,1,0,"ng-container",1),M()),o&2){let h=P();n(1),r("ngTemplateOutlet",h._data)}}var at=(()=>{let t=class t{constructor(){this._data=g(_)}get isDataTemplateRef(){return this._data instanceof x}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=c({type:t,selectors:[["ult-tooltip"]],hostAttrs:[1,"ult-tooltip"],exportAs:["ult-tooltip"],decls:2,vars:2,consts:[[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(p,e){p&1&&y(0,dt,2,1,"ng-container",0)(1,ut,2,1,"ng-container",0),p&2&&(r("ngIf",!e.isDataTemplateRef),n(1),r("ngIf",e.isDataTemplateRef))},dependencies:[L,H],styles:["[_nghost-%COMP%]{display:block;position:relative;box-shadow:var(--ult-tooltip-shadow);padding:var(--ult-tooltip-padding);border-radius:var(--ult-tooltip-border-radius);background:var(--ult-tooltip-bg);color:var(--ult-tooltip-color);font-size:var(--ult-tooltip-font-size);animation:.15s _ngcontent-%COMP%_ult-tooltip-animation}.ult-tooltip-above[_nghost-%COMP%], .ult-tooltip-above   [_nghost-%COMP%]{margin-bottom:var(--ult-tooltip-offset);transform-origin:bottom}.ult-tooltip-below[_nghost-%COMP%], .ult-tooltip-below   [_nghost-%COMP%]{margin-top:var(--ult-tooltip-offset);transform-origin:top}.ult-tooltip-before[_nghost-%COMP%], .ult-tooltip-before   [_nghost-%COMP%]{margin-inline-end:var(--ult-tooltip-offset);transform-origin:right}.ult-tooltip-after[_nghost-%COMP%], .ult-tooltip-after   [_nghost-%COMP%]{margin-inline-start:var(--ult-tooltip-offset);transform-origin:left}@keyframes _ngcontent-%COMP%_ult-tooltip-animation{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}"]});let o=t;return o})();var b=class{constructor(){this._positions={"below-start":{originY:"bottom",overlayY:"top",originX:"start",overlayX:"start",panelClass:["ult-tooltip-below","ult-tooltip-below-start"]},"below-center":{originY:"bottom",overlayY:"top",originX:"center",overlayX:"center",panelClass:["ult-tooltip-below","ult-tooltip-below-center"]},"below-end":{originY:"bottom",overlayY:"top",originX:"end",overlayX:"end",panelClass:["ult-tooltip-below","ult-tooltip-below-end"]},"above-start":{originY:"top",overlayY:"bottom",originX:"start",overlayX:"start",panelClass:["ult-tooltip-above","ult-tooltip-above-start"]},"above-center":{originY:"top",overlayY:"bottom",originX:"center",overlayX:"center",panelClass:["ult-tooltip-above","ult-tooltip-above-center"]},"above-end":{originY:"top",overlayY:"bottom",originX:"end",overlayX:"end",panelClass:["ult-tooltip-above","ult-tooltip-above-end"]},"before-start":{originY:"top",overlayY:"top",originX:"start",overlayX:"end",panelClass:["ult-tooltip-before","ult-tooltip-before-start"]},"before-center":{originY:"center",overlayY:"center",originX:"start",overlayX:"end",panelClass:["ult-tooltip-before","ult-tooltip-before-center"]},"before-end":{originY:"bottom",overlayY:"bottom",originX:"start",overlayX:"end",panelClass:["ult-tooltip-before","ult-tooltip-before-end"]},"after-end":{originY:"bottom",overlayY:"bottom",originX:"end",overlayX:"start",panelClass:["ult-tooltip-after","ult-tooltip-after-end"]},"after-center":{originY:"center",overlayY:"center",originX:"end",overlayX:"start",panelClass:["ult-tooltip-after","ult-tooltip-after-center"]},"after-start":{originY:"top",overlayY:"top",originX:"end",overlayX:"start",panelClass:["ult-tooltip-after","ult-tooltip-after-start"]}},this._positionPairs={"below-start":"above-start","below-center":"above-center","below-end":"above-end","above-start":"below-start","above-center":"below-center","above-end":"below-end","before-end":"before-start","before-center":"after-center","before-start":"before-end","after-end":"after-start","after-center":"before-center","after-start":"after-end"}}build(t){return[this._positions[t],this._positions[this._positionPairs[t]]]}};var st=(()=>{let t=class t{constructor(){this._overlay=g(et),this._elementRef=g(Y),this._directionality=g($,{optional:!0}),this._injector=g(v),this._overlayRef=null,this.delay=200,this.enabled=!0,this.position="top-center",this.opened=new C,this.closed=new C,this.api={show:()=>this._show(),hide:()=>this._hide()}}ngOnDestroy(){this._hide()}_handleMouseEnter(){this.enabled&&(this._timeout=setTimeout(()=>{this._show()},this.delay))}_handleMouseLeave(){this._hide()}_show(){this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._overlayRef.attach(this._getContentPortal()),this.opened.emit()}_hide(){clearTimeout(this._timeout),this._overlayRef?.detach(),this._overlayRef=null,this.opened.emit()}_getContentPortal(){let u=v.create({providers:[{provide:_,useValue:this.tooltip}],parent:this._injector});return this._portal=new W(at,null,u),this._portal}_getOverlayConfig(){return new tt({positionStrategy:this._getOverlayPositionStrategy(),scrollStrategy:this._overlay.scrollStrategies.reposition(),direction:this._directionality||void 0})}_getOverlayPositionStrategy(){return this._overlay.position().flexibleConnectedTo(this._elementRef).withLockedPosition().withGrowAfterOpen().withPositions(this._getOverlayPositions())}_getOverlayPositions(){return new b().build(this.position)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275dir=X({type:t,selectors:[["","ultTooltip",""]],hostAttrs:[1,"ult-tooltip-trigger"],hostBindings:function(p,e){p&1&&d("mouseenter",function(){return e._handleMouseEnter()})("mouseleave",function(){return e._handleMouseLeave()})},inputs:{tooltip:["ultTooltip","tooltip"],delay:["delay","delay",F],enabled:["enabled","enabled",j],position:"position"},outputs:{opened:"opened",closed:"closed"},exportAs:["ultTooltip"],features:[A]});let o=t;return o})();var pt=(()=>{let t=class t{};t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=E({type:t}),t.\u0275inj=O({imports:[f,Z]});let o=t;return o})();var Kt=(()=>{let t=class t{constructor(){this.basicTooltip={position:"above-center"}}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[I],decls:36,vars:13,consts:[[1,"text-xl","font-bold","mb-8"],["ultButton","","ultTooltip","This is basic tooltip",3,"position"],["value","above-start","name","basicPosition",3,"ngModel","ngModelChange"],["value","above-center","name","basicPosition",3,"ngModel","ngModelChange"],["value","above-end","name","basicPosition",3,"ngModel","ngModelChange"],["value","below-start","name","basicPosition",3,"ngModel","ngModelChange"],["value","below-center","name","basicPosition",3,"ngModel","ngModelChange"],["value","below-end","name","basicPosition",3,"ngModel","ngModelChange"],["value","before-start","name","basicPosition",3,"ngModel","ngModelChange"],["value","before-center","name","basicPosition",3,"ngModel","ngModelChange"],["value","before-end","name","basicPosition",3,"ngModel","ngModelChange"],["value","after-start","name","basicPosition",3,"ngModel","ngModelChange"],["value","after-center","name","basicPosition",3,"ngModel","ngModelChange"],["value","after-end","name","basicPosition",3,"ngModel","ngModelChange"]],template:function(p,e){p&1&&(s(0,"h1",0),l(1,"Tooltip"),a(),s(2,"playground")(3,"playground-content")(4,"button",1),l(5,"Hover me!"),a()(),s(6,"playground-properties")(7,"ult-form-field")(8,"ult-label"),l(9,"Position:"),a(),s(10,"ult-radio-group")(11,"ult-radio",2),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(12,"Above Start"),a(),s(13,"ult-radio",3),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(14,"Above Center"),a(),s(15,"ult-radio",4),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(16,"Above End"),a(),s(17,"ult-radio",5),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(18,"Below Start"),a(),s(19,"ult-radio",6),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(20,"Below Center"),a(),s(21,"ult-radio",7),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(22,"Below End"),a(),s(23,"ult-radio",8),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(24,"Before Start"),a(),s(25,"ult-radio",9),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(26,"Before Center"),a(),s(27,"ult-radio",10),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(28,"Before End"),a(),s(29,"ult-radio",11),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(30,"After Start"),a(),s(31,"ult-radio",12),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(32,"After Center"),a(),s(33,"ult-radio",13),d("ngModelChange",function(i){return e.basicTooltip.position=i}),l(34,"After End"),a()()()(),D(35,"playground-controls"),a()),p&2&&(n(4),r("position",e.basicTooltip.position),n(7),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position),n(2),r("ngModel",e.basicTooltip.position))},dependencies:[f,pt,st,lt,ot,it,nt,rt,q,V,U,k,z,N,G,Q,J,K],encapsulation:2});let o=t;return o})();export{Kt as TooltipComponent};