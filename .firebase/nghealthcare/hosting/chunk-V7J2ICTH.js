import{Aa as A,La as H,Ya as R,ia as Z,sa as q,ta as y}from"./chunk-WGFAF6LW.js";import{$ as w,$b as j,Ab as f,Bc as N,Gb as r,Hb as s,Ib as g,Jb as x,Kb as S,Pb as C,Qb as B,Rb as L,Sc as Q,Ua as i,Ub as v,V as I,Vc as O,W as $,Wb as _,Xb as T,Zc as P,ac as E,bd as V,fb as u,gb as k,gc as z,ja as M,jb as m,la as c,lb as F,mb as l,vb as h,wb as o,zb as D}from"./chunk-JKMQL6A7.js";var K=["icon"],U=["*"];function W(e,p){if(e&1&&g(0,"span",4),e&2){let t=C(2);o("ngClass",t.icon)}}function X(e,p){if(e&1&&(x(0),l(1,W,1,1,"span",3),S()),e&2){let t=C();i(),o("ngIf",t.icon)}}function Y(e,p){}function ee(e,p){e&1&&l(0,Y,0,0,"ng-template")}function te(e,p){if(e&1&&(r(0,"span",5),l(1,ee,1,0,null,6),s()),e&2){let t=C();i(),o("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var ne=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,ae={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},G=(()=>{class e extends A{name="tag";theme=ne;classes=ae;static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var ie=(()=>{class e extends H{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=w(G);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=u({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,b){if(a&1&&(v(b,K,4),v(b,q,4)),a&2){let d;_(d=T())&&(n.iconTemplate=d.first),_(d=T())&&(n.templates=d)}},hostVars:4,hostBindings:function(a,n){a&2&&(D(n.style),f(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",N]},features:[z([G]),F,m],ngContentSelectors:U,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(B(),L(0),l(1,X,2,1,"ng-container",0)(2,te,2,1,"span",1),r(3,"span",2),j(4),s()),a&2&&(i(),o("ngIf",!n.iconTemplate&&!n._iconTemplate),i(),o("ngIf",n.iconTemplate||n._iconTemplate),i(2),E(n.value))},dependencies:[V,Q,O,P,y],encapsulation:2,changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=k({type:e});static \u0275inj=$({imports:[ie,y,y]})}return e})();var Ie=(()=>{class e extends R{pathId;ngOnInit(){this.pathId="url(#"+Z()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=c(e)))(n||e)}})();static \u0275cmp=u({type:e,selectors:[["TimesCircleIcon"]],features:[m],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(a,n){a&1&&(M(),r(0,"svg",0)(1,"g"),g(2,"path",1),s(),r(3,"defs")(4,"clipPath",2),g(5,"rect",3),s()()()),a&2&&(f(n.getClassNames()),h("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),i(),h("clip-path",n.pathId),i(3),o("id",n.pathId))},encapsulation:2})}return e})();export{Ie as a,ie as b,ve as c};
