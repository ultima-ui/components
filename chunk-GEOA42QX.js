import{a as N,c as R}from"./chunk-G3PGNMAQ.js";import{a as x}from"./chunk-ZDQ2A3WC.js";import{Cb as P,S as _,U as C,Ua as k,V as b,_ as m,_b as c,aa as s,ba as y,cb as d,eb as w,gb as u,kb as h,lb as p,mb as O,sb as f,ta as M,tc as j,ub as a,vb as r}from"./chunk-Z37IT2PE.js";var I=["*",[["ult-radio-content"]]],S=["*","ult-radio-content"],v=(()=>{let t=class t{constructor(){this._accessors=[]}add(o,e){this._accessors.push([o,e])}remove(o){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===o){this._accessors.splice(e,1);return}}select(o){this._accessors.forEach(e=>{this._isSameGroup(e,o)&&e[1]!==o&&e[1].fireUncheck(o.value)})}_isSameGroup(o,e){return o[0].control?o[0].control?.parent===e._control.control?.parent&&o[1].name===e.name:!1}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"any"});let n=t;return n})(),L=(()=>{let t=class t{constructor(){this._injector=m(M),this._registry=m(v),this.block=!1,this._active=!1,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(R),this._checkName(),this._registry.add(this._control,this)}writeValue(o){this._checked=this.value===o}registerOnChange(o){this.onChange=()=>{o(this.value),this._registry.select(this)}}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=x(o)}check(){this._checked=!0,this.onChange(this.value),this.onTouched()}fireUncheck(o){this.writeValue(o)}_handleMousedown(){this._active=!0}_handleMouseup(){this._active=!1}_checkName(){if(this.name&&this.formControlName&&this.name!==this.formControlName)throw new Error(`
        If you define both a name and a formControlName attribute on your radio component, their values
        must match. Ex: <ult-radio formControlName="food" name="food">
      `);!this.name&&this.formControlName&&(this.name=this.formControlName)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["ult-radio"]],hostAttrs:[1,"ult-radio"],hostVars:10,hostBindings:function(e,i){e&1&&f("click",function(){return i.check()})("mousedown",function(){return i._handleMousedown()})("mouseup",function(){return i._handleMouseup()}),e&2&&u("is-checked",i._checked)("is-focused",i._focused)("is-active",i._active)("is-disabled",i.disabled)("is-block",i.block)},inputs:{name:"name",formControlName:"formControlName",value:"value",disabled:["disabled","disabled",c],block:["block","block",c]},exportAs:["ultRadio"],features:[P([{provide:N,useExisting:_(()=>t),multi:!0}]),d],ngContentSelectors:S,decls:7,vars:3,consts:[[1,"flex","items-center"],["type","radio",3,"value","name","disabled","focusin","focusout"],[1,"control"],[1,"indicator"],[1,"label"]],template:function(e,i){e&1&&(a(I),h(0,"div",0)(1,"input",1),f("focusin",function(){return i._focused=!0})("focusout",function(){return i._focused=!1}),p(),h(2,"div",2),O(3,"div",3),p(),h(4,"div",4),r(5),p()(),r(6,1)),e&2&&(k(1),w("value",i.value)("name",i.formControlName||i.name)("disabled",i.disabled))},styles:["[_nghost-%COMP%]{display:block;cursor:pointer}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0;max-width:0;max-height:0;overflow:hidden}.is-block[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{width:var(--ult-radio-control-size);height:var(--ult-radio-control-size);display:flex;align-items:center;justify-content:center;border-radius:50%;flex:none;border:var(--ult-radio-control-border-width) solid var(--ult-radio-control-border-color);box-shadow:var(--ult-radio-control-shadow)}[_nghost-%COMP%]:not(.is-checked):hover   .control[_ngcontent-%COMP%]{border-color:var(--ult-radio-hover-control-border-color)}[_nghost-%COMP%]   .indicator[_ngcontent-%COMP%]{width:var(--ult-radio-indicator-size);height:var(--ult-radio-indicator-size);border-radius:50%;background:var(--ult-radio-indicator-bg);-webkit-user-select:none;user-select:none}.is-checked[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{background:var(--ult-radio-checked-control-bg);border-color:var(--ult-radio-checked-control-border-color)}.is-checked[_nghost-%COMP%]   .indicator[_ngcontent-%COMP%]{background:var(--ult-radio-checked-indicator-bg)}.is-focused[_nghost-%COMP%]{outline:var(--ult-outline-size) solid var(--ult-outline-color);outline-offset:var(--ult-outline-offset)}.is-disabled[_nghost-%COMP%]{pointer-events:none;opacity:var(--ult-control-opacity)}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-size:var(--ult-radio-label-font-size);color:var(--ult-radio-label-color);-webkit-user-select:none;user-select:none;flex-grow:1;margin-inline-start:var(--ult-radio-gap)}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]:empty{display:none}"]});let n=t;return n})();var T=["*"],q=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["ult-radio-content"]],hostAttrs:[1,"ult-radio-content"],exportAs:["ultRadioContent"],ngContentSelectors:T,decls:1,vars:0,template:function(e,i){e&1&&(a(),r(0))},styles:["[_nghost-%COMP%]{display:block;margin:var(--ult-radio-content-margin)}"]});let n=t;return n})();var A=[[["ult-radio"]]],D=["ult-radio"],X=(()=>{let t=class t{constructor(){this.inline=!1}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["ult-radio-group"]],hostAttrs:[1,"ult-radio-group"],hostVars:2,hostBindings:function(e,i){e&2&&u("is-inline",i.inline)},inputs:{inline:["inline","inline",c]},exportAs:["ultRadioGroup"],features:[d],ngContentSelectors:D,decls:1,vars:0,template:function(e,i){e&1&&(a(A),r(0))},styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;width:100%;gap:var(--ult-radio-group-vgap);flex-direction:column;padding:var(--ult-radio-group-padding)}.is-inline[_nghost-%COMP%]{flex-direction:row;gap:var(--ult-radio-group-hgap)}"]});let n=t;return n})();var et=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y({type:t}),t.\u0275inj=b({providers:[v],imports:[j]});let n=t;return n})();export{L as a,q as b,X as c,et as d};
