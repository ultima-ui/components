import{a as $}from"./chunk-O57A3VT7.js";import{a as J}from"./chunk-G3PGNMAQ.js";import{a as Z}from"./chunk-ZDQ2A3WC.js";import{a as M}from"./chunk-OPDM7W52.js";import{$b as _,Cb as U,Lb as v,Mb as C,Ob as k,Qa as a,S as P,Sa as B,Ua as u,V as D,Xa as F,Y as R,Ya as L,_ as o,_a as O,_b as y,aa as T,ab as A,ba as I,ca as b,cb as H,db as V,eb as x,ec as K,fb as W,gb as X,ib as f,jb as z,kb as d,lb as c,lc as q,mb as m,mc as G,sb as g,tb as j,tc as Y,v as p,xb as N,yb as Q}from"./chunk-Z37IT2PE.js";var h=new R("ULT_SLIDER");var tt=(()=>{let e=class e{constructor(){this._slider=o(h),this._elementRef=o(a),this.max=this._slider.max,this.min=this._slider.min,this.step=this._slider.step}get nativeElement(){return this._elementRef.nativeElement}_handleMouseDown(){this._slider._thumbFocused=!0,this._slider.cdr.markForCheck()}_handleMouseUp(){this._slider._thumbFocused=!1,this._slider.cdr.markForCheck()}_onInput(){let i=+this.nativeElement.value;this._slider._setThumbPositionXByValue(i),this._slider._emitChangeEvent(i)}_onChange(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=b({type:e,selectors:[["input","ultSliderInput",""]],hostAttrs:["type","range",1,"ult-slider-input"],hostVars:3,hostBindings:function(i,n){i&1&&g("change",function(){return n._onChange()})("input",function(){return n._onInput()})("pointerdown",function(){return n._handleMouseDown()})("pointerup",function(){return n._handleMouseUp()}),i&2&&V("step",n.step)("min",n.min)("max",n.max)},exportAs:["ultSliderInput"]});let s=e;return s})();var et=(()=>{let e=class e{constructor(){this._slider=o(h),this._elementRef=o(a),this._destroyRef=o(L),this._document=o(K),this._x=0,this._moving=!1}ngOnInit(){let t,i=Math.ceil((this._slider.max-this._slider.min)/this._slider.step),n=0;p(this._elementRef.nativeElement,"mousedown").pipe(M(this._destroyRef)).subscribe(r=>{this._x=r.clientX,this._moving=!0,t=this._slider._value,n=this._slider.actualSliderWidth/i,this._slider._thumbFocused=!0}),p(this._document,"mousemove").pipe(M(this._destroyRef)).subscribe(r=>{if(!this._moving)return;let l=t,S=this._elementRef.nativeElement.parentElement,it=S.parentElement.getBoundingClientRect(),nt=r.clientX-it.left-S.getBoundingClientRect().width;if(l=this._slider.min+Math.round(nt/n)*this._slider.step,r.clientX>this._x){if(l>this._slider.max){t=this._slider.max,this._slider._setThumbPositionXByValue(t),this._slider._emitChangeEvent(t);return}}else if(l<this._slider.min){t=this._slider.min,this._slider._setThumbPositionXByValue(t),this._slider._emitChangeEvent(t);return}t!==l&&(t=l,this._slider._setThumbPositionXByValue(t),this._slider._emitChangeEvent(t))}),p(this._document,"mouseup").pipe(M(this._destroyRef)).subscribe(r=>{this._moving=!1,this._slider._thumbFocused=!1})}_handleContextMenu(t){t.preventDefault(),t.stopPropagation()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=b({type:e,selectors:[["","ultSliderKnob",""]],hostBindings:function(i,n){i&1&&g("contextmenu",function(l){return n._handleContextMenu(l)})},exportAs:["ultSliderKnob"]});let s=e;return s})();var ot=["slider"],lt=["thumb"],at=["trackActive"];function dt(s,e){s&1&&m(0,"div",14)}function ht(s,e){if(s&1&&(d(0,"div",12),f(1,dt,1,0,"div",13),c()),s&2){let w=e.$implicit,t=e.last;W("max-width",w,"%"),u(1),x("ngIf",!t)}}function ut(s,e){if(s&1&&(d(0,"div",10),f(1,ht,2,3,"div",11),c()),s&2){let w=j();u(1),x("ngForOf",w._tickMarks)}}var Ft=(()=>{let e=class e{set labelDisplay(t){this._labelDisplay=t,this._renderer.setAttribute(this._elementRef.nativeElement,"ult-slider-label-display",t)}get id(){return this._formField?.id||null}get actualSliderWidth(){return this._actualSliderWidth}get thumbElement(){return this._thumb.nativeElement}get trackActive(){return this._trackActive.nativeElement}constructor(){this._formField=o($,{optional:!0}),this._renderer=o(B),this._elementRef=o(a),this.cdr=o(F),this.showLabel=!1,this._labelDisplay="hover",this.max=100,this.min=0,this.step=1,this.showTickMarks=!1,this.disabled=!1,this.changed=new O,this.valueChange=new O,this._tickMarks=[],this._thumbFocused=!1,this._value=0,this._sliderWidth=0,this._thumbWidth=0,this._actualSliderWidth=0,this._onChange=()=>{},this._onTouched=()=>{},A(()=>{this._sliderWidth=this._slider.nativeElement.getBoundingClientRect().width,this._thumbWidth=this._thumb.nativeElement.getBoundingClientRect().width,this._actualSliderWidth=this._sliderWidth-this._thumbWidth,this._setThumbPositionXByValue(this.value)})}ngOnInit(){if(this._renderer.setAttribute(this._elementRef.nativeElement,"ult-slider-label-display",this._labelDisplay),this.step>1){let t=Math.ceil((this.max-this.min)/this.step);for(let i=1;i<=t;i++){let n=100/t*i;this._tickMarks.push(n)}}}writeValue(t){+t!==this.value&&(this.value=+t,this._value=this.value,this._setThumbPositionXByValue(this.value))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=Z(t)}_emitChangeEvent(t){this._value=t,this.valueChange.emit(t),this.changed.emit(t),this._onChange(t)}_setThumbPositionXByValue(t){let i=this._calculatePositionXByValue(t);this.thumbElement.style.transform="translateX("+i+"px)",this.trackActive.style.width=i+this._thumbWidth/2+"px"}_calculatePositionXByValue(t){return Math.ceil(this.actualSliderWidth*((t-this.min)/(this.max-this.min)))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=T({type:e,selectors:[["ult-slider"]],viewQuery:function(i,n){if(i&1&&(C(ot,7),C(lt,7),C(at,7)),i&2){let r;v(r=k())&&(n._slider=r.first),v(r=k())&&(n._thumb=r.first),v(r=k())&&(n._trackActive=r.first)}},hostAttrs:[1,"ult-slider"],hostVars:6,hostBindings:function(i,n){i&2&&X("is-disabled",n.disabled)("has-label",n.showLabel)("thumb-focused",n._thumbFocused)},inputs:{showLabel:["showLabel","showLabel",y],labelDisplay:"labelDisplay",max:["max","max",_],min:["min","min",_],step:["step","step",_],value:["value","value",_],showTickMarks:["showTickMarks","showTickMarks",y],disabled:["disabled","disabled",y]},outputs:{changed:"changed",valueChange:"valueChange"},exportAs:["ultSlider"],features:[U([{provide:J,useExisting:P(()=>e),multi:!0},{provide:h,useExisting:P(()=>e),multi:!1}]),H],decls:11,vars:2,consts:[[1,"track"],["slider",""],[1,"track-active"],["trackActive",""],["class","steps"],["ultSliderInput",""],[1,"thumb"],["thumb",""],["ultSliderKnob","",1,"knob"],[1,"label"],[1,"steps"],["class","step",3,"max-width",4,"ngFor","ngForOf"],[1,"step"],["class","mark",4,"ngIf"],[1,"mark"]],template:function(i,n){i&1&&(d(0,"div",0,1),m(2,"div",2,3),f(4,ut,2,1,"div",4),c(),m(5,"input",5),d(6,"div",6,7),m(8,"button",8),d(9,"div",9),N(10),c()()),i&2&&(u(4),z(4,n.showTickMarks?4:-1),u(6),Q(n._value))},dependencies:[q,G,tt,et],styles:["[_nghost-%COMP%]{display:flex;position:relative;-webkit-user-select:none;user-select:none;align-items:center;width:100%;flex:none;height:var(--ult-slider-height);--ult-slider-label-position: 0}[_nghost-%COMP%]:focus-visible{outline:var(--ult-outline-size) solid var(--ult-outline-color);outline-offset:var(--ult-outline-offset)}.is-disabled[_nghost-%COMP%]{opacity:var(--ult-control-opacity);pointer-events:none}[_nghost-%COMP%]   .track[_ngcontent-%COMP%]{position:absolute;border-radius:var(--ult-slider-border-radius);width:100%;height:var(--ult-slider-track-height);background:var(--ult-slider-track-bg);inset-inline-start:0;inset-inline-end:0;top:50%;transform:translateY(-50%)}[_nghost-%COMP%]   .track-active[_ngcontent-%COMP%]{position:absolute;inset-inline-start:0;width:0;top:0;bottom:0;border-top-left-radius:inherit;border-bottom-left-radius:inherit;background:var(--ult-slider-track-active-bg)}[_nghost-%COMP%]   .thumb[_ngcontent-%COMP%]{position:absolute;display:inline-block;inset-inline-start:0;top:0;line-height:var(--ult-slider-knob-size);z-index:2}[_nghost-%COMP%]   .knob[_ngcontent-%COMP%]{border:none;cursor:pointer;border-radius:var(--ult-slider-knob-border-radius);flex:none;width:var(--ult-slider-knob-size);height:var(--ult-slider-knob-size);background:var(--ult-slider-knob-bg);box-shadow:var(--ult-slider-knob-shadow)}[_nghost-%COMP%]   .knob[_ngcontent-%COMP%]:focus-within, [_nghost-%COMP%]   .knob[_ngcontent-%COMP%]:focus-visible{outline:none}[_nghost-%COMP%]   .knob[_ngcontent-%COMP%]:hover{box-shadow:var(--ult-slider-knob-hover-shadow)}[_nghost-%COMP%]   .knob[_ngcontent-%COMP%]:active{scale:var(--ult-slider-knob-active-scale);box-shadow:var(--ult-slider-knob-hover-shadow)}[_nghost-%COMP%]   .steps[_ngcontent-%COMP%]{position:absolute;border-radius:var(--ult-slider-border-radius);height:var(--ult-slider-track-height);flex:none;display:flex;align-items:center;justify-content:space-between;top:0;bottom:0;left:calc(var(--ult-slider-knob-size) / 2);right:calc(var(--ult-slider-knob-size) / 2)}[_nghost-%COMP%]   .step[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;flex-grow:1;height:100%}[_nghost-%COMP%]   .step[_ngcontent-%COMP%]:first-child{border-start-start-radius:var(--ult-slider-knob-border-radius);border-end-start-radius:var(--ult-slider-knob-border-radius)}[_nghost-%COMP%]   .step[_ngcontent-%COMP%]:last-child{border-start-end-radius:var(--ult-slider-knob-border-radius);border-end-end-radius:var(--ult-slider-knob-border-radius)}[_nghost-%COMP%]   .mark[_ngcontent-%COMP%]{line-height:.0625rem;width:var(--ult-slider-mark-size);height:var(--ult-slider-mark-size);flex:none;background:var(--ult-slider-mark-bg);border-radius:50%}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%;z-index:1;position:absolute;inset:0;cursor:pointer;opacity:0}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:none}.has-label[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{align-items:center;justify-content:center;position:absolute;line-height:0;top:var(--ult-slider-label-offset);left:50%;transform:translate(-50%,-100%);background:var(--ult-slider-label-bg);color:var(--ult-slider-label-color);font-size:var(--ult-slider-label-font-size);border-radius:var(--ult-slider-label-border-radius);box-shadow:var(--ult-slider-label-shadow);padding:var(--ult-slider-label-padding);height:var(--ult-slider-label-height);font-weight:var(--ult-slider-label-font-weight);min-width:var(--ult-slider-label-min-width)}.has-label[ult-slider-label-display=always][_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:flex}.has-label[ult-slider-label-display=hover][_nghost-%COMP%]   .knob[_ngcontent-%COMP%]:hover + .label[_ngcontent-%COMP%], .has-label[ult-slider-label-display=hover].thumb-focused[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:flex}"]});let s=e;return s})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=D({imports:[Y]});let s=e;return s})();export{Ft as a,Ht as b};
