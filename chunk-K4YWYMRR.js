import{a as m,b as F,c as H,e as b}from"./chunk-NG7DX5CH.js";import{c as L,e as M}from"./chunk-EX6KPJX2.js";import{$a as f,C as O,E,G as U,M as w,N as Z,P as T,U as h,V as v,Y as D,Z as a,_ as K,ba as y,c as S,f as g,g as R,hc as I,k as j,o as A,p as B,s as P,za as W}from"./chunk-OPISKUNG.js";import{a as C}from"./chunk-CWTPBX7D.js";var re=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({providers:[re]});let s=e;return s})();var G=new Set,_,ce=(()=>{let e=class e{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):de}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ae(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(i){return new(i||e)(a(m),a(W,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function ae(s,e){if(!G.has(s))try{_||(_=document.createElement("style"),e&&(_.nonce=e),_.setAttribute("type","text/css"),document.head.appendChild(_)),_.sheet&&(_.sheet.insertRule(`@media ${s} {body{ }}`,0),G.add(s))}catch(r){console.error(r)}}function de(s){return{matches:s==="all"||s==="",media:s,addListener:()=>{},removeListener:()=>{}}}var q=(()=>{let e=class e{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new g}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Y(L(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=Y(L(t)).map(c=>this._registerQuery(c).observable),o=B(n);return o=P(o.pipe(E(1)),o.pipe(w(1),O(0))),o.pipe(A(c=>{let d={matches:!1,breakpoints:{}};return c.forEach(({matches:u,query:l})=>{d.matches=d.matches||u,d.breakpoints[l]=u}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),o={observable:new S(c=>{let d=u=>this._zone.run(()=>c.next(u));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(Z(i),A(({matches:c})=>({query:t,matches:c})),T(this._destroySubject)),mql:i};return this._queries.set(t,o),o}};e.\u0275fac=function(i){return new(i||e)(a(ce),a(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function Y(s){return s.map(e=>e.split(",")).reduce((e,r)=>e.concat(r)).map(e=>e.trim())}var he=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return le(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=ue(ye(t));if(i&&(z(i)===-1||!this.isVisible(i)))return!1;let n=t.nodeName.toLowerCase(),o=z(t);return t.hasAttribute("contenteditable")?o!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ge(t)?!1:n==="audio"?t.hasAttribute("controls")?o!==-1:!1:n==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return ve(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(i){return new(i||e)(a(m))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function ue(s){try{return s.frameElement}catch{return null}}function le(s){return!!(s.offsetWidth||s.offsetHeight||typeof s.getClientRects=="function"&&s.getClientRects().length)}function fe(s){let e=s.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function me(s){return be(s)&&s.type=="hidden"}function _e(s){return pe(s)&&s.hasAttribute("href")}function be(s){return s.nodeName.toLowerCase()=="input"}function pe(s){return s.nodeName.toLowerCase()=="a"}function J(s){if(!s.hasAttribute("tabindex")||s.tabIndex===void 0)return!1;let e=s.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function z(s){if(!J(s))return null;let e=parseInt(s.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function ge(s){let e=s.nodeName.toLowerCase(),r=e==="input"&&s.type;return r==="text"||r==="password"||e==="select"||e==="textarea"}function ve(s){return me(s)?!1:fe(s)||_e(s)||s.hasAttribute("contenteditable")||J(s)}function ye(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}var N=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,r,t,i,n=!1){this._element=e,this._checker=r,this._ngZone=t,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,n||this.attachAnchors()}destroy(){let e=this._startAnchor,r=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),r&&(r.removeEventListener("focus",this.endAnchorListener),r.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let r=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?r.length?r[0]:this._getFirstTabbableElement(this._element):r.length?r[r.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let r=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(r){if(!this._checker.isFocusable(r)){let t=this._getFirstTabbableElement(r);return t?.focus(e),!!t}return r.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let r=this._getRegionBoundary("start");return r&&r.focus(e),!!r}focusLastTabbableElement(e){let r=this._getRegionBoundary("end");return r&&r.focus(e),!!r}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let r=e.children;for(let t=0;t<r.length;t++){let i=r[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(r[t]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let r=e.children;for(let t=r.length-1;t>=0;t--){let i=r[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(r[t]):null;if(i)return i}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,r){e?r.setAttribute("tabindex","0"):r.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(E(1)).subscribe(e)}},ft=(()=>{let e=class e{constructor(t,i,n){this._checker=t,this._ngZone=i,this._document=n}create(t,i=!1){return new N(t,this._checker,this._ngZone,this._document,i)}};e.\u0275fac=function(i){return new(i||e)(a(he),a(f),a(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function Ie(s){return s.buttons===0||s.detail===0}function Ae(s){let e=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Ee=new D("cdk-input-modality-detector-options"),we={ignoreKeys:[18,17,224,91,16]},ee=650,p=F({passive:!0,capture:!0}),Te=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,i,n,o){this._platform=t,this._mostRecentTarget=null,this._modality=new R(null),this._lastTouchMs=0,this._onKeydown=c=>{this._options?.ignoreKeys?.some(d=>d===c.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=b(c))},this._onMousedown=c=>{Date.now()-this._lastTouchMs<ee||(this._modality.next(Ie(c)?"keyboard":"mouse"),this._mostRecentTarget=b(c))},this._onTouchstart=c=>{if(Ae(c)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=b(c)},this._options=C(C({},we),o),this.modalityDetected=this._modality.pipe(w(1)),this.modalityChanged=this.modalityDetected.pipe(U()),t.isBrowser&&i.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,p),n.addEventListener("mousedown",this._onMousedown,p),n.addEventListener("touchstart",this._onTouchstart,p)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,p),document.removeEventListener("mousedown",this._onMousedown,p),document.removeEventListener("touchstart",this._onTouchstart,p))}};e.\u0275fac=function(i){return new(i||e)(a(m),a(f),a(I),a(Ee,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Me=new D("cdk-focus-monitor-default-options"),k=F({passive:!0,capture:!0}),mt=(()=>{let e=class e{constructor(t,i,n,o,c){this._ngZone=t,this._platform=i,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new g,this._rootNodeFocusAndBlurListener=d=>{let u=b(d);for(let l=u;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=o,this._detectionMode=c?.detectionMode||0}monitor(t,i=!1){let n=M(t);if(!this._platform.isBrowser||n.nodeType!==1)return j();let o=H(n)||this._getDocument(),c=this._elementInfo.get(n);if(c)return i&&(c.checkChildren=!0),c.subject;let d={checkChildren:i,subject:new g,rootNode:o};return this._elementInfo.set(n,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let i=M(t),n=this._elementInfo.get(i);n&&(n.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(n))}focusVia(t,i,n){let o=M(t),c=this._getDocument().activeElement;o===c?this._getClosestElementsInfo(o).forEach(([d,u])=>this._originChanged(d,i,u)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===1||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===0){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?ee:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,i){let n=this._elementInfo.get(i),o=b(t);!n||!n.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),n)}_onBlur(t,i){let n=this._elementInfo.get(i);!n||n.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(n,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,n=this._rootNodeFocusListenerCount.get(i)||0;n||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,k),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,k)}),this._rootNodeFocusListenerCount.set(i,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(T(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let n=this._rootNodeFocusListenerCount.get(i);n>1?this._rootNodeFocusListenerCount.set(i,n-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,k),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,k),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,n){this._setClasses(t,i),this._emitOrigin(n,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((n,o)=>{(o===t||n.checkChildren&&o.contains(t))&&i.push([o,n])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let c=0;c<o.length;c++)if(o[c].contains(i))return!0}return!1}};e.\u0275fac=function(i){return new(i||e)(a(f),a(m),a(Te),a(I,8),a(Me,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Q="cdk-high-contrast-black-on-white",X="cdk-high-contrast-white-on-black",x="cdk-high-contrast-active",ke=(()=>{let e=class e{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=K(q).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(t):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(x,Q,X),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===1?t.add(x,Q):i===2&&t.add(x,X)}}};e.\u0275fac=function(i){return new(i||e)(a(m),a(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),_t=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(i){return new(i||e)(a(ke))},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[V]});let s=e;return s})();export{he as a,ft as b,mt as c,_t as d};