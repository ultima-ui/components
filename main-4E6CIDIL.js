import{a as Y,b as Z,c as nn,d as en,e as tn,f as on,g as an,h as pn,i as rn,j as mn,k as ln,l as cn,m as kn}from"./chunk-6YDFDXMN.js";import{b as J,c as K,d as W,j as X}from"./chunk-EPWOWN5B.js";import{b as G,c as Q,d as z,f as V,g as j,h as q}from"./chunk-XEOJ4D7Z.js";import"./chunk-ZDQ2A3WC.js";import"./chunk-OPDM7W52.js";import{b as sn,c as dn}from"./chunk-UAECVVLN.js";import{a as un}from"./chunk-AFVKOC36.js";import{a as F,b as R,c as P,e as U,f as B,g as H,h as $}from"./chunk-C45GGN5D.js";import{a as N,d as O}from"./chunk-P3HWLSJF.js";import{Fb as _,Ib as b,Jb as x,Lb as S,Mb as L,Ob as T,Ua as a,_ as s,aa as h,eb as l,ib as d,jc as w,kb as i,lb as o,lc as A,mb as u,mc as E,nb as g,ob as I,rc as M,tb as k,tc as D,x as v,xb as r,yb as y,zb as C}from"./chunk-Z37IT2PE.js";import"./chunk-CWTPBX7D.js";var yn=[{path:"",data:{breadcrumb:"Documentation"},loadComponent:()=>import("./chunk-EH52OELY.js").then(n=>n.CommonComponent),children:[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"overview",data:{breadcrumb:"Overview"},loadComponent:()=>import("./chunk-BP5UUAXA.js").then(n=>n.OverviewComponent)},{path:"apps",data:{breadcrumb:"Apps"},loadChildren:()=>import("./chunk-TTDIPO2B.js").then(n=>n.AppsModule)},{path:"components",data:{breadcrumb:"Components"},loadChildren:()=>import("./chunk-7RUVQAOA.js").then(n=>n.ComponentsModule)}]}];var fn={providers:[H(yn,$()),O(),{provide:un,useValue:{coreLibraryLoader:()=>import("./chunk-J5TOHDY2.js"),languages:{typescript:()=>import("./chunk-ZZ6UPGYI.js"),css:()=>import("./chunk-4UKR73IE.js"),xml:()=>import("./chunk-IWQIUXOR.js"),html:()=>import("./chunk-IWQIUXOR.js")}}}]};var hn=["navigation"];function gn(n,e){if(n&1&&(i(0,"ult-incident"),u(1,"ult-icon",11)(2,"ult-icon",12),i(3,"ult-incident-title"),r(4),o(),i(5,"ult-incident-details"),r(6),o()()),n&2){let t=e.$implicit;a(4),y(t.title),a(2),y(t.details)}}function In(n,e){if(n&1&&(i(0,"ult-layout-top-header",9)(1,"ult-incidents")(2,"ult-incidents-bar")(3,"ult-incidents-title"),r(4,"Maintenance work on the DNS"),o(),i(5,"ult-incidents-description"),r(6,"Description"),o(),u(7,"ult-icon",10),o(),i(8,"ult-incidents-list"),d(9,gn,7,2,"ult-incident",8),b(10,"async"),o()()()),n&2){let t=k();a(9),l("ngForOf",x(10,1,t.incidents$))}}function Cn(n,e){if(n&1&&(i(0,"ult-navigation-heading"),r(1),o()),n&2){let t=k().$implicit;a(1),y(t.name)}}function _n(n,e){if(n&1&&(i(0,"a",15),r(1),o()),n&2){let t=k().$implicit;l("routerLink",t.link)("id",t.link),a(1),C(" ",t.name," ")}}function bn(n,e){if(n&1&&(g(0),d(1,Cn,2,1,"ult-navigation-heading",13)(2,_n,2,3,"a",14),I()),n&2){let t=e.$implicit;a(1),l("ngIf",t.type==="heading"),a(1),l("ngIf",t.type==="link")}}var vn=(()=>{let e=class e{constructor(){this.router=s(U),this.route=s(R),this.location=s(w),this._incidentsService=s(kn),this.incidents$=this._incidentsService.getIncidents(),this.height="200px",this.navItems=[{type:"heading",name:"Main"},{type:"link",name:"Overview",link:"/overview"},{type:"link",name:"Install",link:"/components/install"},{type:"link",name:"Layout",link:"/components/layout"},{type:"heading",name:"Apps"},{type:"link",name:"Favicon Generator",link:"/apps/favicon-generator"},{type:"link",name:"Monaco Editor",link:"/apps/monaco-editor"},{type:"heading",name:"Navigation"},{type:"link",name:"Navigation",link:"/components/navigation"},{type:"link",name:"Breadcrumbs",link:"/components/breadcrumbs"},{type:"link",name:"Sidebar",link:"/components/sidebar"},{type:"heading",name:"Forms"},{type:"link",name:"Text Input",link:"/components/text-input"},{type:"link",name:"Textarea",link:"/components/textarea"},{type:"link",name:"Button",link:"/components/button"},{type:"link",name:"Switch",link:"/components/switch"},{type:"link",name:"Checkbox",link:"/components/checkbox"},{type:"link",name:"Radio",link:"/components/radio"},{type:"link",name:"Select",link:"/components/select"},{type:"link",name:"Content Editable",link:"/components/contenteditable"},{type:"heading",name:"Components"},{type:"link",name:"Alert",link:"/components/alert"},{type:"link",name:"Incidents",link:"/components/incidents"},{type:"link",name:"Spinner",link:"/components/spinner"},{type:"link",name:"Icon",link:"/components/icon"},{type:"link",name:"Badge",link:"/components/badge"},{type:"link",name:"Avatar",link:"/components/avatar"},{type:"link",name:"Accordion",link:"/components/accordion"},{type:"link",name:"Chip",link:"/components/chip"},{type:"link",name:"Tabs",link:"/components/tabs"},{type:"link",name:"Menu",link:"/components/menu"},{type:"link",name:"Paginator",link:"/components/paginator"},{type:"link",name:"Popover",link:"/components/popover"},{type:"link",name:"Tooltip",link:"/components/tooltip"},{type:"link",name:"Gauge",link:"/components/gauge"},{type:"link",name:"Slider",link:"/components/slider"},{type:"link",name:"Dialog",link:"/components/dialog"},{type:"link",name:"Upload",link:"/components/upload"},{type:"link",name:"Panel",link:"/components/panel"},{type:"link",name:"Resizable Container",link:"/components/resizable-container"},{type:"link",name:"Notification",link:"/components/notification"},{type:"link",name:"Date Picker",link:"/components/date-picker"},{type:"link",name:"Color Picker",link:"/components/color-picker"},{type:"link",name:"Skeleton",link:"/components/skeleton"}],this.activeLinkId="/"}ngOnInit(){this._activateLink(),this.router.events.pipe(v(m=>m instanceof F)).subscribe(m=>{this._activateLink()})}get hasIncidents(){return this._incidentsService.hasIncidents()}_activateLink(){let m=this.navItems.find(p=>p.type==="link"&&p.link===this.location.path());m?this.activeLinkId=m.link:this.activeLinkId=null}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],viewQuery:function(p,c){if(p&1&&L(hn,7),p&2){let f;S(f=T())&&(c.navigation=f.first)}},standalone:!0,features:[_],decls:14,vars:3,consts:[[1,"border-b","bg-white","px-7","flex","items-center"],[1,"font-bold"],[1,"text-primary-500"],["height","80px",4,"ngIf"],[1,"border-r","bg-white","overflow-y-auto"],[1,"p-6"],[3,"activeItemId"],["navigation",""],[4,"ngFor","ngForOf"],["height","80px"],["name","ph:caret-down","size","18","ultIncidentsToggleIcon",""],["name","ph:info-fill","ultIncidentIcon",""],["name","ph:x","ultIncidentClose",""],[4,"ngIf"],["ult-navigation-item","",3,"routerLink","id",4,"ngIf"],["ult-navigation-item","",3,"routerLink","id"]],template:function(p,c){p&1&&(i(0,"ult-layout")(1,"ult-layout-topbar",0)(2,"span",1),r(3,"ULTIMA"),i(4,"span",2),r(5,"UI"),o()()(),d(6,In,11,3,"ult-layout-top-header",3),i(7,"ult-layout-sidebar",4)(8,"div",5)(9,"ult-navigation",6,7),d(11,bn,3,2,"ng-container",8),o()()(),i(12,"ult-layout-body"),u(13,"router-outlet"),o()()),p&2&&(a(6),l("ngIf",c.hasIncidents),a(3),l("activeItemId",c.activeLinkId),a(2),l("ngForOf",c.navItems))},dependencies:[D,A,E,M,P,q,G,Q,z,V,j,cn,Y,Z,nn,en,tn,on,an,pn,rn,mn,ln,X,K,J,W,dn,sn,B],encapsulation:2});let n=e;return n})();N(vn,fn).catch(n=>console.error(n));
