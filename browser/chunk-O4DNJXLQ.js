import{a as j}from"./chunk-AD54P7GZ.js";import{a as Y,b as W,c as q,d as R,e as z}from"./chunk-2IEELHWK.js";import{$a as P,C as A,P as T,S as I,X as w,Xa as k,Y as U,Ya as B,Za as N,_a as D,b as f,f as x,n as y,o as b,qc as F,rc as V,v as S}from"./chunk-NB6FGFAQ.js";import"./chunk-D6ZYXDGB.js";import"./chunk-ZJMLONPG.js";import{b as L}from"./chunk-EP6OWM5N.js";import"./chunk-AFVKOC36.js";import"./chunk-P3HWLSJF.js";import{Fb as C,Ua as a,aa as E,eb as o,ib as v,kb as l,lb as t,mb as g,mc as M,nb as u,ob as s,sb as r,tc as h,xb as n}from"./chunk-Z37IT2PE.js";import"./chunk-CWTPBX7D.js";function G(d,p){d&1&&(u(0),n(1,"Yes"),s())}function H(d,p){d&1&&(u(0),n(1,"No"),s())}function J(d,p){d&1&&(u(0),n(1,"Yes"),s())}function K(d,p){d&1&&(u(0),n(1,"No"),s())}function O(d,p){d&1&&(u(0),n(1,"Yes"),s())}function Q(d,p){d&1&&(u(0),n(1,"No"),s())}function X(d,p){d&1&&g(0,"ult-icon",43)}function Z(d,p){d&1&&(u(0),n(1,"Yes"),s())}function $(d,p){d&1&&(u(0),n(1,"No"),s())}var Ce=(()=>{let p=class p{constructor(){this.importExample="import { UltAlertModule } from '@ultima-ui/components';",this.basicExample={variant:"primary",bordered:!1},this.titleExample={variant:"informative",bordered:!1},this.iconExample={variant:"notice",bordered:!1},this.closeExample={variant:"secondary",bordered:!1},this.autoClose=0}closed(_){console.log("closed data:"+_)}setVariant(_,c){_.variant=c}isSelected(_,c){return _.variant===c}};p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=E({type:p,selectors:[["app-alert"]],standalone:!0,features:[C],decls:152,vars:49,consts:[[1,"grid","grid-cols-12","gap-10"],[1,"col-span-8","space-y-8"],[1,"space-y-6"],[1,"text-2xl","font-bold"],[3,"code"],[1,"px-20"],[3,"variant","bordered"],[1,"space-y-5"],[1,"flex","flex-wrap","gap-3"],["name","basicExample","value","primary",3,"ngModel","ngModelChange"],["name","basicExample","value","secondary",3,"ngModel","ngModelChange"],["name","basicExample","value","informative",3,"ngModel","ngModelChange"],["name","basicExample","value","positive",3,"ngModel","ngModelChange"],["name","basicExample","value","negative",3,"ngModel","ngModelChange"],["name","basicExample","value","notice",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[4,"ngIf"],["ultAlertTitle",""],["name","titleExample","value","primary",3,"ngModel","ngModelChange"],["name","titleExample","value","secondary",3,"ngModel","ngModelChange"],["name","titleExample","value","informative",3,"ngModel","ngModelChange"],["name","titleExample","value","positive",3,"ngModel","ngModelChange"],["name","titleExample","value","negative",3,"ngModel","ngModelChange"],["name","titleExample","value","notice",3,"ngModel","ngModelChange"],[1,"px-10"],[1,"w-full","space-y-5"],["name","ph:warning-fill","ultAlertIcon",""],["name","ph:warning-circle-fill","ultAlertIcon",""],[1,"list-disc","space-y-1","ps-3.5"],["name","iconExample","value","primary",3,"ngModel","ngModelChange"],["name","iconExample","value","secondary",3,"ngModel","ngModelChange"],["name","iconExample","value","informative",3,"ngModel","ngModelChange"],["name","iconExample","value","positive",3,"ngModel","ngModelChange"],["name","iconExample","value","negative",3,"ngModel","ngModelChange"],["name","iconExample","value","notice",3,"ngModel","ngModelChange"],["name","ph:x","size","20","ultAlertClose",""],["ultAlertIcon",""],["name","closeExample","value","primary",3,"ngModel","ngModelChange"],["name","closeExample","value","secondary",3,"ngModel","ngModelChange"],["name","closeExample","value","informative",3,"ngModel","ngModelChange"],["name","closeExample","value","positive",3,"ngModel","ngModelChange"],["name","closeExample","value","negative",3,"ngModel","ngModelChange"],["name","closeExample","value","notice",3,"ngModel","ngModelChange"],["name","ph:question-fill"]],template:function(c,e){c&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),n(4,"Alert"),t()(),l(5,"div",2)(6,"p"),n(7,"Import module:"),t(),g(8,"code-block",4),t(),l(9,"h3"),n(10,"Basic"),t(),l(11,"playground")(12,"playground-content",5)(13,"ult-alert",6),n(14,"This is a Ultima UI Alert \u2014 check it out!"),t()(),l(15,"playground-properties",7)(16,"ult-form-field")(17,"ult-label"),n(18,"Variant"),t(),l(19,"div",8)(20,"ult-custom-radio",9),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(21,"primary"),t(),l(22,"ult-custom-radio",10),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(23,"secondary"),t(),l(24,"ult-custom-radio",11),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(25,"informative"),t(),l(26,"ult-custom-radio",12),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(27,"positive"),t(),l(28,"ult-custom-radio",13),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(29,"negative"),t(),l(30,"ult-custom-radio",14),r("ngModelChange",function(i){return e.basicExample.variant=i}),n(31,"notice"),t()()(),g(32,"hr"),l(33,"ult-form-field")(34,"ult-label"),n(35,"Bordered"),t(),l(36,"ult-switch",15),r("ngModelChange",function(i){return e.basicExample.bordered=i}),v(37,G,2,0,"ng-container",16)(38,H,2,0,"ng-container",16),t()()(),g(39,"playground-controls"),t(),l(40,"h3"),n(41,"With Title"),t(),l(42,"playground")(43,"playground-content",5)(44,"ult-alert",6)(45,"div",17),n(46,"Whoops, something went wrong:"),t(),n(47," This is a Ultima UI Alert \u2014 check it out! "),t()(),l(48,"playground-properties",7)(49,"ult-form-field")(50,"ult-label"),n(51,"Variant"),t(),l(52,"div",8)(53,"ult-custom-radio",18),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(54,"primary"),t(),l(55,"ult-custom-radio",19),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(56,"secondary"),t(),l(57,"ult-custom-radio",20),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(58,"informative"),t(),l(59,"ult-custom-radio",21),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(60,"positive"),t(),l(61,"ult-custom-radio",22),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(62,"negative"),t(),l(63,"ult-custom-radio",23),r("ngModelChange",function(i){return e.titleExample.variant=i}),n(64,"notice"),t()()(),g(65,"hr"),l(66,"ult-form-field")(67,"ult-label"),n(68,"Bordered"),t(),l(69,"ult-switch",15),r("ngModelChange",function(i){return e.titleExample.bordered=i}),v(70,J,2,0,"ng-container",16)(71,K,2,0,"ng-container",16),t()()(),g(72,"playground-controls"),t(),l(73,"h3"),n(74,"Icon"),t(),l(75,"playground")(76,"playground-content",24)(77,"div",25)(78,"ult-alert",6),g(79,"ult-icon",26),n(80," This is a Ultima UI Alert \u2014 check it out! "),t(),l(81,"ult-alert",6),g(82,"ult-icon",27),l(83,"div",17),n(84,"Whoops, something went wrong:"),t(),l(85,"ul",28)(86,"li"),n(87,"A negative message"),t(),l(88,"li"),n(89,"This field is required"),t()()()()(),l(90,"playground-properties",7)(91,"ult-form-field")(92,"ult-label"),n(93,"Variant"),t(),l(94,"div",8)(95,"ult-custom-radio",29),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(96,"primary"),t(),l(97,"ult-custom-radio",30),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(98,"secondary"),t(),l(99,"ult-custom-radio",31),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(100,"informative"),t(),l(101,"ult-custom-radio",32),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(102,"positive"),t(),l(103,"ult-custom-radio",33),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(104,"negative"),t(),l(105,"ult-custom-radio",34),r("ngModelChange",function(i){return e.iconExample.variant=i}),n(106,"notice"),t()()(),g(107,"hr"),l(108,"ult-form-field")(109,"ult-label"),n(110,"Bordered"),t(),l(111,"ult-switch",15),r("ngModelChange",function(i){return e.iconExample.bordered=i}),v(112,O,2,0,"ng-container",16)(113,Q,2,0,"ng-container",16),t()()(),g(114,"playground-controls"),t(),l(115,"h3"),n(116,"Close"),t(),l(117,"playground")(118,"playground-content")(119,"div",25)(120,"ult-alert",6),g(121,"ult-icon",35),n(122," This is a Ultima UI Alert \u2014 check it out! "),t(),l(123,"ult-alert",6),v(124,X,1,0,"ng-template",36),g(125,"ult-icon",35),n(126," This is a Ultima UI Alert \u2014 check it out! "),t()()(),l(127,"playground-properties",7)(128,"ult-form-field")(129,"ult-label"),n(130,"Variant"),t(),l(131,"div",8)(132,"ult-custom-radio",37),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(133,"primary"),t(),l(134,"ult-custom-radio",38),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(135,"secondary"),t(),l(136,"ult-custom-radio",39),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(137,"informative"),t(),l(138,"ult-custom-radio",40),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(139,"positive"),t(),l(140,"ult-custom-radio",41),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(141,"negative"),t(),l(142,"ult-custom-radio",42),r("ngModelChange",function(i){return e.closeExample.variant=i}),n(143,"notice"),t()()(),g(144,"hr"),l(145,"ult-form-field")(146,"ult-label"),n(147,"Bordered"),t(),l(148,"ult-switch",15),r("ngModelChange",function(i){return e.closeExample.bordered=i}),v(149,Z,2,0,"ng-container",16)(150,$,2,0,"ng-container",16),t()()(),g(151,"playground-controls"),t()()()),c&2&&(a(8),o("code",e.importExample),a(5),o("variant",e.basicExample.variant)("bordered",e.basicExample.bordered),a(7),o("ngModel",e.basicExample.variant),a(2),o("ngModel",e.basicExample.variant),a(2),o("ngModel",e.basicExample.variant),a(2),o("ngModel",e.basicExample.variant),a(2),o("ngModel",e.basicExample.variant),a(2),o("ngModel",e.basicExample.variant),a(6),o("ngModel",e.basicExample.bordered),a(1),o("ngIf",e.basicExample.bordered),a(1),o("ngIf",!e.basicExample.bordered),a(6),o("variant",e.titleExample.variant)("bordered",e.titleExample.bordered),a(9),o("ngModel",e.titleExample.variant),a(2),o("ngModel",e.titleExample.variant),a(2),o("ngModel",e.titleExample.variant),a(2),o("ngModel",e.titleExample.variant),a(2),o("ngModel",e.titleExample.variant),a(2),o("ngModel",e.titleExample.variant),a(6),o("ngModel",e.titleExample.bordered),a(1),o("ngIf",e.titleExample.bordered),a(1),o("ngIf",!e.titleExample.bordered),a(7),o("variant",e.iconExample.variant)("bordered",e.iconExample.bordered),a(3),o("variant",e.iconExample.variant)("bordered",e.iconExample.bordered),a(14),o("ngModel",e.iconExample.variant),a(2),o("ngModel",e.iconExample.variant),a(2),o("ngModel",e.iconExample.variant),a(2),o("ngModel",e.iconExample.variant),a(2),o("ngModel",e.iconExample.variant),a(2),o("ngModel",e.iconExample.variant),a(6),o("ngModel",e.iconExample.bordered),a(1),o("ngIf",e.iconExample.bordered),a(1),o("ngIf",!e.iconExample.bordered),a(7),o("variant",e.closeExample.variant)("bordered",e.closeExample.bordered),a(3),o("variant",e.closeExample.variant)("bordered",e.closeExample.bordered),a(9),o("ngModel",e.closeExample.variant),a(2),o("ngModel",e.closeExample.variant),a(2),o("ngModel",e.closeExample.variant),a(2),o("ngModel",e.closeExample.variant),a(2),o("ngModel",e.closeExample.variant),a(2),o("ngModel",e.closeExample.variant),a(6),o("ngModel",e.closeExample.bordered),a(1),o("ngIf",e.closeExample.bordered),a(1),o("ngIf",!e.closeExample.bordered))},dependencies:[h,M,P,B,N,D,k,A,L,j,z,Y,W,q,R,S,f,x,y,b,I,T,U,w,V,F],encapsulation:2});let d=p;return d})();export{Ce as AlertComponent};
