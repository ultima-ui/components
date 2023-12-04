import{a as Z,b as $}from"./chunk-75DJ5IHY.js";import{a as K,d as X}from"./chunk-ESWC6C5H.js";import{e as me}from"./chunk-4XTMSOEY.js";import{a as L,b as q,i as W}from"./chunk-TMYFOP77.js";import"./chunk-3YTM6DSX.js";import"./chunk-O57A3VT7.js";import{d as Q,h as Y}from"./chunk-G3PGNMAQ.js";import"./chunk-OLO7QV74.js";import{b as J}from"./chunk-ZDQ2A3WC.js";import{a as ne,b as ie,c as le,d as oe,e as re}from"./chunk-OI6J547Z.js";import"./chunk-ZJMLONPG.js";import{b as ae}from"./chunk-EP6OWM5N.js";import{b as ee,c as te}from"./chunk-UAECVVLN.js";import"./chunk-AFVKOC36.js";import"./chunk-P3HWLSJF.js";import{g as G}from"./chunk-54AK7NXU.js";import{Cb as B,Fb as N,Kb as F,Lb as j,Nb as z,Ob as V,Qa as w,Sa as P,Ua as a,V as T,Y as S,_ as f,_a as D,aa as E,ba as I,ca as h,eb as r,gb as O,ib as v,kb as l,lb as t,mb as c,mc as M,nb as g,ob as _,pb as R,qc as H,sb as d,tb as U,tc as x,ub as k,vb as A,xb as i}from"./chunk-Z37IT2PE.js";import"./chunk-CWTPBX7D.js";var y=new S("Alert");var b=(()=>{let o=class o{constructor(){this.templateRef=f(F,{optional:!0})}};o.\u0275fac=function(p){return new(p||o)},o.\u0275dir=h({type:o,selectors:[["","ultAlertIcon",""]],hostAttrs:[1,"ult-alert-icon"],exportAs:["ultAlertIcon"]});let m=o;return m})();function ve(m,o){if(m&1&&R(0,3),m&2){let ce=U();r("ngTemplateOutlet",ce.iconRef.templateRef)}}var fe=[[["","ultAlertIcon",""]],"*"],he=["[ultAlertIcon]","*"],de=(()=>{let o=class o{constructor(){this._renderer=f(P),this._elementRef=f(w),this._variant="primary",this.bordered=!1,this.closed=new D}set autoClose(u){clearTimeout(this._autoCloseTimeout),u=J(u),u&&(clearTimeout(this._autoCloseTimeout),this._autoCloseTimeout=setTimeout(()=>{this._close()},u))}set variant(u){this._variant=u,this._renderer.setAttribute(this._elementRef.nativeElement,"alert-variant",this._variant)}get variant(){return this._variant}get api(){return{close:()=>this._close()}}ngOnInit(){this._renderer.setAttribute(this._elementRef.nativeElement,"alert-variant",this._variant)}_close(){clearTimeout(this._autoCloseTimeout),this.closed.emit(this.data),this._elementRef.nativeElement.remove()}};o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=E({type:o,selectors:[["ult-alert"]],contentQueries:function(p,e,s){if(p&1&&z(s,b,5),p&2){let n;j(n=V())&&(e.iconRef=n.first)}},hostAttrs:[1,"ult-alert"],hostVars:2,hostBindings:function(p,e){p&2&&O("is-bordered",e.bordered)},inputs:{data:"data",autoClose:"autoClose",variant:"variant",bordered:"bordered"},outputs:{closed:"closed"},exportAs:["ultAlert"],features:[B([{provide:y,useExisting:o}])],ngContentSelectors:he,decls:5,vars:1,consts:[[1,"thumbnail"],[3,"ngTemplateOutlet",4,"ngIf"],[1,"content"],[3,"ngTemplateOutlet"]],template:function(p,e){p&1&&(k(fe),l(0,"div",0),A(1),v(2,ve,1,1,"ng-container",1),t(),l(3,"div",2),A(4,1),t()),p&2&&(a(2),r("ngIf",e.iconRef))},dependencies:[M,H],styles:["[_nghost-%COMP%]{position:relative;display:flex;width:100%;align-items:center;border-radius:var(--ult-alert-border-radius);padding:var(--ult-alert-padding);background-color:var(--ult-alert-bg-color);color:var(--ult-alert-color);gap:var(--ult-alert-gap);font-size:var(--ult-alert-font-size);border:var(--ult-alert-border-width) solid transparent}[_nghost-%COMP%]:has(.ult-alert-title){align-items:stretch}.is-bordered[_nghost-%COMP%]{border-color:var(--ult-alert-border-color)}[_nghost-%COMP%]   .thumbnail[_ngcontent-%COMP%]{background-color:var(--ult-alert-thumbnail-bg);color:var(--ult-alert-icon-color);width:var(--ult-alert-thumbnail-size);height:var(--ult-alert-thumbnail-size);border-radius:var(--ult-alert-thumbnail-border-radius);display:flex;align-items:center;justify-content:center;flex:none}[_nghost-%COMP%]   .thumbnail[_ngcontent-%COMP%]:empty{display:none}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]     .ult-alert-title{font-weight:600;margin-bottom:.25rem;font-size:calc(var(--ult-alert-font-size) - 1px)}[_nghost-%COMP%]     .ult-alert-close{position:absolute;top:var(--ult-alert-close-top);right:.625rem;cursor:pointer;color:var(--ult-alert-close-color);font-size:var(--ult-alert-close-font-size)}[_nghost-%COMP%]     .ult-alert-close:hover{color:var(--ult-alert-close-hover-color)}"]});let m=o;return m})();var se=(()=>{let o=class o{constructor(){this._alert=f(y)}_handleClick(){this._alert.api.close()}};o.\u0275fac=function(p){return new(p||o)},o.\u0275dir=h({type:o,selectors:[["","ultAlertClose",""]],hostAttrs:[1,"ult-alert-close"],hostBindings:function(p,e){p&1&&d("click",function(){return e._handleClick()})},exportAs:["ultAlertClose"]});let m=o;return m})();var pe=(()=>{let o=class o{};o.\u0275fac=function(p){return new(p||o)},o.\u0275dir=h({type:o,selectors:[["ult-alert-title"],["","ultAlertTitle",""]],hostAttrs:[1,"ult-alert-title"],exportAs:["ultAlertTitle"]});let m=o;return m})();var ue=(()=>{let o=class o{};o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=I({type:o}),o.\u0275inj=T({imports:[x]});let m=o;return m})();function xe(m,o){m&1&&(g(0),i(1,"Yes"),_())}function ye(m,o){m&1&&(g(0),i(1,"No"),_())}function be(m,o){m&1&&(g(0),i(1,"Yes"),_())}function Ae(m,o){m&1&&(g(0),i(1,"No"),_())}function Te(m,o){m&1&&(g(0),i(1,"Yes"),_())}function Se(m,o){m&1&&(g(0),i(1,"No"),_())}function Ie(m,o){m&1&&c(0,"ult-icon",43)}function we(m,o){m&1&&(g(0),i(1,"Yes"),_())}function Pe(m,o){m&1&&(g(0),i(1,"No"),_())}var ut=(()=>{let o=class o{constructor(){this.importExample="import { UltAlertModule } from '@ultima-ui/components';",this.basicExample={variant:"primary",bordered:!1},this.titleExample={variant:"informative",bordered:!1},this.iconExample={variant:"notice",bordered:!1},this.closeExample={variant:"secondary",bordered:!1},this.autoClose=0}closed(u){console.log("closed data:"+u)}setVariant(u,p){u.variant=p}isSelected(u,p){return u.variant===p}};o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=E({type:o,selectors:[["app-alert"]],standalone:!0,features:[N],decls:152,vars:49,consts:[[1,"grid","grid-cols-12","gap-10"],[1,"col-span-8","space-y-8"],[1,"space-y-6"],[1,"text-2xl","font-bold"],[3,"code"],[1,"px-20"],[3,"variant","bordered"],[1,"space-y-5"],[1,"flex","flex-wrap","gap-3"],["name","basicExample","value","primary",3,"ngModel","ngModelChange"],["name","basicExample","value","secondary",3,"ngModel","ngModelChange"],["name","basicExample","value","informative",3,"ngModel","ngModelChange"],["name","basicExample","value","positive",3,"ngModel","ngModelChange"],["name","basicExample","value","negative",3,"ngModel","ngModelChange"],["name","basicExample","value","notice",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[4,"ngIf"],["ultAlertTitle",""],["name","titleExample","value","primary",3,"ngModel","ngModelChange"],["name","titleExample","value","secondary",3,"ngModel","ngModelChange"],["name","titleExample","value","informative",3,"ngModel","ngModelChange"],["name","titleExample","value","positive",3,"ngModel","ngModelChange"],["name","titleExample","value","negative",3,"ngModel","ngModelChange"],["name","titleExample","value","notice",3,"ngModel","ngModelChange"],[1,"px-10"],[1,"w-full","space-y-5"],["name","ph:warning-fill","ultAlertIcon",""],["name","ph:warning-circle-fill","ultAlertIcon",""],[1,"list-disc","space-y-1","ps-3.5"],["name","iconExample","value","primary",3,"ngModel","ngModelChange"],["name","iconExample","value","secondary",3,"ngModel","ngModelChange"],["name","iconExample","value","informative",3,"ngModel","ngModelChange"],["name","iconExample","value","positive",3,"ngModel","ngModelChange"],["name","iconExample","value","negative",3,"ngModel","ngModelChange"],["name","iconExample","value","notice",3,"ngModel","ngModelChange"],["name","ph:x","size","20","ultAlertClose",""],["ultAlertIcon",""],["name","closeExample","value","primary",3,"ngModel","ngModelChange"],["name","closeExample","value","secondary",3,"ngModel","ngModelChange"],["name","closeExample","value","informative",3,"ngModel","ngModelChange"],["name","closeExample","value","positive",3,"ngModel","ngModelChange"],["name","closeExample","value","negative",3,"ngModel","ngModelChange"],["name","closeExample","value","notice",3,"ngModel","ngModelChange"],["name","ph:question-fill"]],template:function(p,e){p&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),i(4,"Alert"),t()(),l(5,"div",2)(6,"p"),i(7,"Import module:"),t(),c(8,"code-block",4),t(),l(9,"h3"),i(10,"Basic"),t(),l(11,"playground")(12,"playground-content",5)(13,"ult-alert",6),i(14,"This is a Ultima UI Alert \u2014 check it out!"),t()(),l(15,"playground-properties",7)(16,"ult-form-field")(17,"ult-label"),i(18,"Variant"),t(),l(19,"div",8)(20,"ult-custom-radio",9),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(21,"primary"),t(),l(22,"ult-custom-radio",10),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(23,"secondary"),t(),l(24,"ult-custom-radio",11),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(25,"informative"),t(),l(26,"ult-custom-radio",12),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(27,"positive"),t(),l(28,"ult-custom-radio",13),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(29,"negative"),t(),l(30,"ult-custom-radio",14),d("ngModelChange",function(n){return e.basicExample.variant=n}),i(31,"notice"),t()()(),c(32,"hr"),l(33,"ult-form-field")(34,"ult-label"),i(35,"Bordered"),t(),l(36,"ult-switch",15),d("ngModelChange",function(n){return e.basicExample.bordered=n}),v(37,xe,2,0,"ng-container",16)(38,ye,2,0,"ng-container",16),t()()(),c(39,"playground-controls"),t(),l(40,"h3"),i(41,"With Title"),t(),l(42,"playground")(43,"playground-content",5)(44,"ult-alert",6)(45,"div",17),i(46,"Whoops, something went wrong:"),t(),i(47," This is a Ultima UI Alert \u2014 check it out! "),t()(),l(48,"playground-properties",7)(49,"ult-form-field")(50,"ult-label"),i(51,"Variant"),t(),l(52,"div",8)(53,"ult-custom-radio",18),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(54,"primary"),t(),l(55,"ult-custom-radio",19),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(56,"secondary"),t(),l(57,"ult-custom-radio",20),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(58,"informative"),t(),l(59,"ult-custom-radio",21),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(60,"positive"),t(),l(61,"ult-custom-radio",22),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(62,"negative"),t(),l(63,"ult-custom-radio",23),d("ngModelChange",function(n){return e.titleExample.variant=n}),i(64,"notice"),t()()(),c(65,"hr"),l(66,"ult-form-field")(67,"ult-label"),i(68,"Bordered"),t(),l(69,"ult-switch",15),d("ngModelChange",function(n){return e.titleExample.bordered=n}),v(70,be,2,0,"ng-container",16)(71,Ae,2,0,"ng-container",16),t()()(),c(72,"playground-controls"),t(),l(73,"h3"),i(74,"Icon"),t(),l(75,"playground")(76,"playground-content",24)(77,"div",25)(78,"ult-alert",6),c(79,"ult-icon",26),i(80," This is a Ultima UI Alert \u2014 check it out! "),t(),l(81,"ult-alert",6),c(82,"ult-icon",27),l(83,"div",17),i(84,"Whoops, something went wrong:"),t(),l(85,"ul",28)(86,"li"),i(87,"A negative message"),t(),l(88,"li"),i(89,"This field is required"),t()()()()(),l(90,"playground-properties",7)(91,"ult-form-field")(92,"ult-label"),i(93,"Variant"),t(),l(94,"div",8)(95,"ult-custom-radio",29),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(96,"primary"),t(),l(97,"ult-custom-radio",30),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(98,"secondary"),t(),l(99,"ult-custom-radio",31),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(100,"informative"),t(),l(101,"ult-custom-radio",32),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(102,"positive"),t(),l(103,"ult-custom-radio",33),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(104,"negative"),t(),l(105,"ult-custom-radio",34),d("ngModelChange",function(n){return e.iconExample.variant=n}),i(106,"notice"),t()()(),c(107,"hr"),l(108,"ult-form-field")(109,"ult-label"),i(110,"Bordered"),t(),l(111,"ult-switch",15),d("ngModelChange",function(n){return e.iconExample.bordered=n}),v(112,Te,2,0,"ng-container",16)(113,Se,2,0,"ng-container",16),t()()(),c(114,"playground-controls"),t(),l(115,"h3"),i(116,"Close"),t(),l(117,"playground")(118,"playground-content")(119,"div",25)(120,"ult-alert",6),c(121,"ult-icon",35),i(122," This is a Ultima UI Alert \u2014 check it out! "),t(),l(123,"ult-alert",6),v(124,Ie,1,0,"ng-template",36),c(125,"ult-icon",35),i(126," This is a Ultima UI Alert \u2014 check it out! "),t()()(),l(127,"playground-properties",7)(128,"ult-form-field")(129,"ult-label"),i(130,"Variant"),t(),l(131,"div",8)(132,"ult-custom-radio",37),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(133,"primary"),t(),l(134,"ult-custom-radio",38),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(135,"secondary"),t(),l(136,"ult-custom-radio",39),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(137,"informative"),t(),l(138,"ult-custom-radio",40),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(139,"positive"),t(),l(140,"ult-custom-radio",41),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(141,"negative"),t(),l(142,"ult-custom-radio",42),d("ngModelChange",function(n){return e.closeExample.variant=n}),i(143,"notice"),t()()(),c(144,"hr"),l(145,"ult-form-field")(146,"ult-label"),i(147,"Bordered"),t(),l(148,"ult-switch",15),d("ngModelChange",function(n){return e.closeExample.bordered=n}),v(149,we,2,0,"ng-container",16)(150,Pe,2,0,"ng-container",16),t()()(),c(151,"playground-controls"),t()()()),p&2&&(a(8),r("code",e.importExample),a(5),r("variant",e.basicExample.variant)("bordered",e.basicExample.bordered),a(7),r("ngModel",e.basicExample.variant),a(2),r("ngModel",e.basicExample.variant),a(2),r("ngModel",e.basicExample.variant),a(2),r("ngModel",e.basicExample.variant),a(2),r("ngModel",e.basicExample.variant),a(2),r("ngModel",e.basicExample.variant),a(6),r("ngModel",e.basicExample.bordered),a(1),r("ngIf",e.basicExample.bordered),a(1),r("ngIf",!e.basicExample.bordered),a(6),r("variant",e.titleExample.variant)("bordered",e.titleExample.bordered),a(9),r("ngModel",e.titleExample.variant),a(2),r("ngModel",e.titleExample.variant),a(2),r("ngModel",e.titleExample.variant),a(2),r("ngModel",e.titleExample.variant),a(2),r("ngModel",e.titleExample.variant),a(2),r("ngModel",e.titleExample.variant),a(6),r("ngModel",e.titleExample.bordered),a(1),r("ngIf",e.titleExample.bordered),a(1),r("ngIf",!e.titleExample.bordered),a(7),r("variant",e.iconExample.variant)("bordered",e.iconExample.bordered),a(3),r("variant",e.iconExample.variant)("bordered",e.iconExample.bordered),a(14),r("ngModel",e.iconExample.variant),a(2),r("ngModel",e.iconExample.variant),a(2),r("ngModel",e.iconExample.variant),a(2),r("ngModel",e.iconExample.variant),a(2),r("ngModel",e.iconExample.variant),a(2),r("ngModel",e.iconExample.variant),a(6),r("ngModel",e.iconExample.bordered),a(1),r("ngIf",e.iconExample.bordered),a(1),r("ngIf",!e.iconExample.bordered),a(7),r("variant",e.closeExample.variant)("bordered",e.closeExample.bordered),a(3),r("variant",e.closeExample.variant)("bordered",e.closeExample.bordered),a(9),r("ngModel",e.closeExample.variant),a(2),r("ngModel",e.closeExample.variant),a(2),r("ngModel",e.closeExample.variant),a(2),r("ngModel",e.closeExample.variant),a(2),r("ngModel",e.closeExample.variant),a(2),r("ngModel",e.closeExample.variant),a(6),r("ngModel",e.closeExample.bordered),a(1),r("ngIf",e.closeExample.bordered),a(1),r("ngIf",!e.closeExample.bordered))},dependencies:[x,M,ue,de,se,pe,b,G,ae,me,re,ne,ie,le,oe,W,Q,Y,L,q,X,K,$,Z,te,ee],encapsulation:2});let m=o;return m})();export{ut as AlertComponent};
