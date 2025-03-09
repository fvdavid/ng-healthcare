import{k as we,l as xe}from"./chunk-YPJERADE.js";import{Aa as te,D as oe,I as R,La as x,Ma as le,Na as Te,O as re,Z as se,ia as _e,k as ve,sa as ee,t as he,ta as $,u as ye,v as M}from"./chunk-WGFAF6LW.js";import{$ as h,$a as j,$b as be,Ab as W,Bb as I,Bc as T,Cc as X,Dc as u,Fc as fe,Gb as m,Hb as v,Ib as D,Lb as S,Mb as U,Ob as V,Pb as f,Qb as F,Rb as L,Sc as Y,U as E,Ua as l,Ub as k,V as O,Vb as P,Vc as me,W as Q,Wb as p,Xb as b,Yc as ge,Zc as Z,bd as w,cb as K,cc as ue,dd as ae,fb as y,gb as H,gc as G,ha as z,ia as A,ic as J,jb as _,jc as de,kb as ce,la as g,lb as pe,mb as d,ta as C,vb as r,wb as c,xb as q,yb as B}from"./chunk-JKMQL6A7.js";var De=["content"],Fe=(e,s)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":s}),Le=e=>({$implicit:e});function Pe(e,s){if(e&1&&(m(0,"div"),be(1),v()),e&2){let t=f(2);q("display",t.value!=null&&t.value!==0?"flex":"none"),r("data-pc-section","label"),l(),ue("",t.value,"",t.unit,"")}}function Ee(e,s){e&1&&S(0)}function Se(e,s){if(e&1&&(m(0,"div",3)(1,"div",4),d(2,Pe,2,5,"div",5)(3,Ee,1,0,"ng-container",6),v()()),e&2){let t=f();W(t.valueStyleClass),q("width",t.value+"%")("background",t.color),c("ngClass","p-progressbar-value p-progressbar-value-animate"),r("data-pc-section","value"),l(2),c("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),l(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",J(11,Le,t.value))}}function Ve(e,s){if(e&1&&(m(0,"div",7),D(1,"div",8),v()),e&2){let t=f();W(t.valueStyleClass),c("ngClass","p-progressbar-indeterminate-container"),r("data-pc-section","container"),l(),q("background",t.color),r("data-pc-section","value")}}var Me=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Re={root:({instance:e})=>["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Ce=(()=>{class e extends te{name="progressbar";theme=Me;classes=Re;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Ne=(()=>{class e extends x{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=h(Ce);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(k(a,De,4),k(a,ee,4)),i&2){let o;p(o=b())&&(n.contentTemplate=o.first),p(o=b())&&(n.templates=o)}},inputs:{value:[2,"value","value",X],showValue:[2,"showValue","showValue",T],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[G([Ce]),pe,_],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(m(0,"div",0),d(1,Se,4,13,"div",1)(2,Ve,2,7,"div",2),v()),i&2&&(W(n.styleClass),c("ngStyle",n.style)("ngClass",de(12,Fe,n.mode==="determinate",n.mode==="indeterminate")),r("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),l(),c("ngIf",n.mode==="determinate"),l(),c("ngIf",n.mode==="indeterminate"))},dependencies:[w,Y,me,Z,ge,$],encapsulation:2,changeDetection:0})}return e})(),_t=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=H({type:e});static \u0275inj=Q({imports:[Ne,$,$]})}return e})();var Oe=["previcon"],Qe=["nexticon"],ze=["content"],Ae=["prevButton"],je=["nextButton"],Ke=["inkbar"],He=["tabs"],N=["*"],qe=e=>({"p-tablist-viewport":e});function We(e,s){e&1&&S(0)}function Ue(e,s){if(e&1&&d(0,We,1,0,"ng-container",11),e&2){let t=f(2);c("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Ge(e,s){e&1&&D(0,"ChevronLeftIcon")}function Je(e,s){if(e&1){let t=U();m(0,"button",10,3),V("click",function(){z(t);let n=f();return A(n.onPrevButtonClick())}),d(2,Ue,1,1,"ng-container")(3,Ge,1,0,"ChevronLeftIcon"),v()}if(e&2){let t=f();r("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),I(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Xe(e,s){e&1&&S(0)}function Ye(e,s){if(e&1&&d(0,Xe,1,0,"ng-container",11),e&2){let t=f(2);c("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Ze(e,s){e&1&&D(0,"ChevronRightIcon")}function et(e,s){if(e&1){let t=U();m(0,"button",12,4),V("click",function(){z(t);let n=f();return A(n.onNextButtonClick())}),d(2,Ye,1,1,"ng-container")(3,Ze,1,0,"ChevronRightIcon"),v()}if(e&2){let t=f();r("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),l(2),I(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function tt(e,s){e&1&&L(0)}var nt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,it={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},ke=(()=>{class e extends te{name="tabs";theme=nt;classes=it;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var $e=(()=>{class e extends x{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=h(E(()=>ne));isPrevButtonEnabled=j(!1);isNextButtonEnabled=j(!1);resizeObserver;showNavigators=u(()=>this.pcTabs.showNavigators());tabindex=u(()=>this.pcTabs.tabindex());scrollable=u(()=>this.pcTabs.scrollable());constructor(){super(),fe(()=>{this.pcTabs.value(),ae(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&ae(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=R(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=re(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=R(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,o=n>=a?a:n;t.scrollLeft=re(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,o=Math.abs(t.scrollLeft),ie=R(t);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&o!==n-ie)}updateInkBar(){let t=this.content.nativeElement,i=this.inkbar.nativeElement,n=this.tabs.nativeElement,a=he(t,'[data-pc-name="tab"][data-p-active="true"]');i.style.width=ve(a)+"px",i.style.left=oe(a).left-oe(n).left+"px"}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+R(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=y({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&(k(a,Oe,4),k(a,Qe,4),k(a,ee,4)),i&2){let o;p(o=b())&&(n.prevIconTemplate=o.first),p(o=b())&&(n.nextIconTemplate=o.first),p(o=b())&&(n.templates=o)}},viewQuery:function(i,n){if(i&1&&(P(ze,5),P(Ae,5),P(je,5),P(Ke,5),P(He,5)),i&2){let a;p(a=b())&&(n.content=a.first),p(a=b())&&(n.prevButton=a.first),p(a=b())&&(n.nextButton=a.first),p(a=b())&&(n.inkbar=a.first),p(a=b())&&(n.tabs=a.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(r("data-pc-name","tablist"),B("p-tablist",!0)("p-component",!0))},features:[_],ngContentSelectors:N,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){if(i&1){let a=U();F(),d(0,Je,4,4,"button",5),m(1,"div",6,0),V("scroll",function(ie){return z(a),A(n.onScroll(ie))}),m(3,"div",7,1),L(5),D(6,"span",8,2),v()(),d(8,et,4,4,"button",9)}i&2&&(I(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),l(),c("ngClass",J(4,qe,n.scrollable())),l(5),r("data-pc-section","inkbar"),l(2),I(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[w,Y,Z,we,xe,Te,le,$],encapsulation:2,changeDetection:0})}return e})(),at=(()=>{class e extends x{value=K();disabled=C(!1,{transform:T});pcTabs=h(E(()=>ne));pcTabList=h(E(()=>$e));ripple=u(()=>this.config.ripple());id=u(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=u(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=u(()=>se(this.pcTabs.value(),this.value()));tabindex=u(()=>this.active()?this.pcTabs.tabindex():-1);onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?M(n,"data-p-disabled")||M(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?M(n,"data-p-disabled")||M(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){ye(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&V("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),i&2&&(r("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),B("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[ce([le]),_],ngContentSelectors:N,decls:1,vars:0,template:function(i,n){i&1&&(F(),L(0))},dependencies:[w,$],encapsulation:2,changeDetection:0})}return e})(),ot=(()=>{class e extends x{pcTabs=h(E(()=>ne));value=K(void 0);id=u(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=u(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=u(()=>se(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),B("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[_],ngContentSelectors:N,decls:1,vars:1,template:function(i,n){i&1&&(F(),d(0,tt,1,0)),i&2&&I(n.active()?0:-1)},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),rt=(()=>{class e extends x{static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabpanels")("role","presentation"),B("p-tabpanels",!0)("p-component",!0))},features:[_],ngContentSelectors:N,decls:1,vars:0,template:function(i,n){i&1&&(F(),L(0))},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),ne=(()=>{class e extends x{value=K(void 0);scrollable=C(!1,{transform:T});lazy=C(!1,{transform:T});selectOnFocus=C(!1,{transform:T});showNavigators=C(!0,{transform:T});tabindex=C(0,{transform:X});id=j(_e("pn_id_"));_componentStyle=h(ke);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(r("data-pc-name","tabs")("id",n.id),B("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[G([ke]),_],ngContentSelectors:N,decls:1,vars:0,template:function(i,n){i&1&&(F(),L(0))},dependencies:[w],encapsulation:2,changeDetection:0})}return e})(),zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=H({type:e});static \u0275inj=Q({imports:[ne,rt,ot,$e,at]})}return e})();export{Ne as a,_t as b,$e as c,at as d,ot as e,rt as f,ne as g,zt as h};
