import{e as X,f as Y,h as M,k as D}from"./chunk-BABXWJEM.js";import{b as R}from"./chunk-3YTM6DSX.js";import{P as l,Qa as b,V as f,_ as s,_a as c,aa as m,ba as g,ca as _,f as h,gb as y,hb as T,sb as C,ta as d,tc as P,ub as w,v as a,vb as O,w as p}from"./chunk-Z37IT2PE.js";var E=["*"],F=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["ult-popover"]],hostAttrs:[1,"ult-popover"],exportAs:["ultPopover"],ngContentSelectors:E,decls:1,vars:0,template:function(t,i){t&1&&(w(),O(0))},styles:["[_nghost-%COMP%]{display:block;position:relative;border:var(--ult-popover-border);box-shadow:var(--ult-popover-shadow);border-radius:var(--ult-popover-border-radius);background:var(--ult-popover-bg);animation:.15s _ngcontent-%COMP%_ult-popover-animation}.ult-popover-above[_nghost-%COMP%], .ult-popover-above   [_nghost-%COMP%]{margin-bottom:var(--ult-popover-margin-offset);transform-origin:bottom}.ult-popover-below[_nghost-%COMP%], .ult-popover-below   [_nghost-%COMP%]{margin-top:var(--ult-popover-margin-offset);transform-origin:top}.ult-popover-before[_nghost-%COMP%], .ult-popover-before   [_nghost-%COMP%]{margin-inline-end:var(--ult-popover-margin-offset);transform-origin:right}.ult-popover-after[_nghost-%COMP%], .ult-popover-after   [_nghost-%COMP%]{margin-inline-start:var(--ult-popover-margin-offset);transform-origin:left}@keyframes _ngcontent-%COMP%_ult-popover-animation{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}"]});let r=e;return r})();var v=class{constructor(){this._positions={"below-start":{originY:"bottom",overlayY:"top",originX:"start",overlayX:"start",panelClass:["ult-popover-below","ult-popover-below-start"]},"below-center":{originY:"bottom",overlayY:"top",originX:"center",overlayX:"center",panelClass:["ult-popover-below","ult-popover-below-center"]},"below-end":{originY:"bottom",overlayY:"top",originX:"end",overlayX:"end",panelClass:["ult-popover-below","ult-popover-below-end"]},"above-start":{originY:"top",overlayY:"bottom",originX:"start",overlayX:"start",panelClass:["ult-popover-above","ult-popover-above-start"]},"above-center":{originY:"top",overlayY:"bottom",originX:"center",overlayX:"center",panelClass:["ult-popover-above","ult-popover-above-center"]},"above-end":{originY:"top",overlayY:"bottom",originX:"end",overlayX:"end",panelClass:["ult-popover-above","ult-popover-above-end"]},"before-start":{originY:"top",overlayY:"top",originX:"start",overlayX:"end",panelClass:["ult-popover-before","ult-popover-before-start"]},"before-center":{originY:"center",overlayY:"center",originX:"start",overlayX:"end",panelClass:["ult-popover-before","ult-popover-before-center"]},"before-end":{originY:"bottom",overlayY:"bottom",originX:"start",overlayX:"end",panelClass:["ult-popover-before","ult-popover-before-end"]},"after-end":{originY:"bottom",overlayY:"bottom",originX:"end",overlayX:"start",panelClass:["ult-popover-after","ult-popover-after-end"]},"after-center":{originY:"center",overlayY:"center",originX:"end",overlayX:"start",panelClass:["ult-popover-after","ult-popover-after-center"]},"after-start":{originY:"top",overlayY:"top",originX:"end",overlayX:"start",panelClass:["ult-popover-after","ult-popover-after-start"]}},this._positionPairs={"below-start":"above-start","below-center":"above-center","below-end":"above-end","above-start":"below-start","above-center":"below-center","above-end":"below-end","before-end":"before-start","before-center":"after-center","before-start":"before-end","after-end":"after-start","after-center":"before-center","after-start":"after-end"}}build(e){return[this._positions[e],this._positions[this._positionPairs[e]]]}};var z=(()=>{let e=class e{constructor(){this.trigger="click",this.position="below-center",this.delay=500,this.opened=new c,this.closed=new c,this._overlay=s(D),this._elementRef=s(b),this._directionality=s(Y,{optional:!0}),this._viewContainerRef=s(T),this._injector=s(d),this._overlayRef=null,this._destroy$=new h,this._openTimeout=null,this._closeTimeout=null,this._closeDelay=500,this._setType()}_handleClick(){this.trigger==="click"&&(this._isOpen()?this._close():this._open())}_handleMouseover(){!this._isOpen()&&this.trigger==="hover"&&(this._openTimeout=setTimeout(()=>{this._open()},this.delay))}_handleMouseout(){this._isOpen()||clearTimeout(this._openTimeout)}ngOnDestroy(){this._close(),this._destroyOverlay()}get api(){return{isOpen:()=>this._isOpen(),open:()=>this._open(),close:()=>this._close()}}_isOpen(){return!!this._overlayRef?.hasAttached()}_open(){!this._isOpen()&&this.popoverTemplateRef!=null&&(this.opened.emit(),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._overlayRef.attach(this._getPopoverContentPortal()),this._subscribeToHostMouseleave(),this._subscribeToOutsideClicks())}_close(){clearTimeout(this._closeTimeout),this.closed.next(),this._overlayRef?.detach()}_destroyOverlay(){clearTimeout(this._openTimeout),clearTimeout(this._closeTimeout),this._overlayRef?.dispose(),this._overlayRef=null}_subscribeToOutsideClicks(){this._overlayRef&&this._overlayRef.outsidePointerEvents().pipe(l(this._destroy$)).subscribe(o=>{let t=X(o),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this._close()})}_getPopoverContentPortal(){return this._popoverPortal=new R(this.popoverTemplateRef,this._viewContainerRef,null,this._injector),this._popoverPortal}_getOverlayConfig(){return new M({positionStrategy:this._getOverlayPositionStrategy(),scrollStrategy:this._overlay.scrollStrategies.reposition(),direction:this._directionality||void 0})}_getOverlayPositionStrategy(){return this._overlay.position().flexibleConnectedTo(this.origin?this.origin:this._elementRef).withLockedPosition().withGrowAfterOpen().withPositions(this._getOverlayPositions())}_getOverlayPositions(){return new v().build(this.position)}_setType(){if(this.trigger==="hover")return;let o=this._elementRef.nativeElement;o.nodeName==="BUTTON"&&!o.getAttribute("type")&&o.setAttribute("type","button")}_subscribeToHostMouseleave(){if(this.trigger==="hover"&&this._overlayRef){a(this._elementRef.nativeElement,"mouseleave").pipe(l(p(this.closed,this._destroy$))).subscribe(t=>{this._closeTimeout=setTimeout(()=>{this._close()},this._closeDelay)});let o=this._overlayRef.overlayElement;a(o,"mouseenter").pipe(l(p(this.closed,this._destroy$))).subscribe(t=>{clearTimeout(this._closeTimeout),this._closeTimeout=null}),a(o,"mouseleave").pipe(l(p(this.closed,this._destroy$))).subscribe(t=>{this._closeTimeout=setTimeout(()=>{this._close()},this._closeDelay)})}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=_({type:e,selectors:[["","ultPopoverTriggerFor",""]],hostAttrs:[1,"ult-popover-trigger-for"],hostVars:2,hostBindings:function(t,i){t&1&&C("click",function(n){return i._handleClick(n)})("mouseenter",function(n){return i._handleMouseover(n)})("mouseleave",function(n){return i._handleMouseout(n)}),t&2&&y("ult-popover-trigger-for--is-open",i.api.isOpen())},inputs:{popoverTemplateRef:["ultPopoverTriggerFor","popoverTemplateRef"],trigger:"trigger",position:"position",delay:"delay",origin:"origin"},outputs:{opened:"opened",closed:"closed"},exportAs:["ultPopoverTriggerFor"]});let r=e;return r})();var Q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=f({imports:[P]});let r=e;return r})();export{F as a,z as b,Q as c};