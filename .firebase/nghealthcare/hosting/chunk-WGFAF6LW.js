import{$ as b,$a as ee,$b as Ye,Ab as H,Bb as Qe,Bc as f,Cc as Ee,Db as Pn,Dc as me,Eb as Bn,Ec as be,Fb as Hn,Fc as ht,Gb as N,Hb as R,Ib as P,Ic as on,Jb as Le,Kb as Re,Lb as Pe,Lc as we,Mb as Vt,Ob as te,Pb as T,Qb as Be,Rb as He,Sc as Xe,U as ce,Ua as x,Ub as X,V as S,Va as z,Vb as Wn,Vc as Rt,W as M,Wb as Q,Xa as Vn,Xb as Y,Y as _e,Yb as nn,Yc as zn,Za as pt,Zb as Un,Zc as Ie,a as _,ab as tn,ac as Ze,b as he,bd as ne,ca as Mn,dd as Pt,ed as qn,fb as O,ga as ue,gb as $,gc as A,ha as ze,hb as D,hc as jn,ia as qe,ic as xe,j as se,ja as Ce,jb as y,jc as Nt,la as g,lb as Z,mb as V,n as kn,na as en,ob as Nn,qa as G,qb as Ln,ra as $n,s as On,ta as Se,ua as Ve,vb as E,vc as Gn,wb as m,xb as Rn,y as Fn,ya as Ke,yb as fe,yc as Lt,zb as Ne}from"./chunk-JKMQL6A7.js";var ni=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(z(pt),z(Ve))};static \u0275dir=D({type:e})}return e})(),ii=(()=>{class e extends ni{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,features:[y]})}return e})(),ye=new _e("");var Ao={provide:ye,useExisting:ce(()=>oi),multi:!0};function To(){let e=on()?on().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Do=new _e(""),oi=(()=>{class e extends ni{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!To())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(z(pt),z(Ve),z(Do,8))};static \u0275dir=D({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&te("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[A([Ao]),y]})}return e})();function ko(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}var ri=new _e(""),Oo=new _e("");function Fo(e){return ko(e.value)?{required:!0}:null}function Kn(e){return null}function si(e){return e!=null}function ai(e){return Nn(e)?kn(e):e}function li(e){let i={};return e.forEach(t=>{i=t!=null?_(_({},i),t):i}),Object.keys(i).length===0?null:i}function ci(e,i){return i.map(t=>t(e))}function Mo(e){return!e.validate}function ui(e){return e.map(i=>Mo(i)?i:t=>i.validate(t))}function $o(e){if(!e)return null;let i=e.filter(si);return i.length==0?null:function(t){return li(ci(t,i))}}function di(e){return e!=null?$o(ui(e)):null}function Vo(e){if(!e)return null;let i=e.filter(si);return i.length==0?null:function(t){let n=ci(t,i).map(ai);return Fn(n).pipe(On(li))}}function pi(e){return e!=null?Vo(ui(e)):null}function Qn(e,i){return e===null?[i]:Array.isArray(e)?[...e,i]:[e,i]}function No(e){return e._rawValidators}function Lo(e){return e._rawAsyncValidators}function rn(e){return e?Array.isArray(e)?e:[e]:[]}function Ht(e,i){return Array.isArray(e)?e.includes(i):e===i}function Yn(e,i){let t=rn(i);return rn(e).forEach(o=>{Ht(t,o)||t.push(o)}),t}function Zn(e,i){return rn(i).filter(t=>!Ht(e,t))}var Wt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=di(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=pi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},sn=class extends Wt{name;get formDirective(){return null}get path(){return null}},We=class extends Wt{_parent=null;name=null;valueAccessor=null},an=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ro={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ha=he(_({},Ro),{"[class.ng-submitted]":"isSubmitted"}),hi=(()=>{class e extends an{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(z(We,2))};static \u0275dir=D({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&fe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[y]})}return e})();var ft="VALID",Bt="INVALID",Je="PENDING",gt="DISABLED",tt=class{},Ut=class extends tt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},mt=class extends tt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},bt=class extends tt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},et=class extends tt{status;source;constructor(i,t){super(),this.status=i,this.source=t}};function Po(e){return(jt(e)?e.validators:e)||null}function Bo(e){return Array.isArray(e)?di(e):e||null}function Ho(e,i){return(jt(i)?i.asyncValidators:e)||null}function Wo(e){return Array.isArray(e)?pi(e):e||null}function jt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var ln=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return be(this.statusReactive)}set status(i){be(()=>this.statusReactive.set(i))}_status=me(()=>this.statusReactive());statusReactive=ee(void 0);get valid(){return this.status===ft}get invalid(){return this.status===Bt}get pending(){return this.status==Je}get disabled(){return this.status===gt}get enabled(){return this.status!==gt}errors;get pristine(){return be(this.pristineReactive)}set pristine(i){be(()=>this.pristineReactive.set(i))}_pristine=me(()=>this.pristineReactive());pristineReactive=ee(!0);get dirty(){return!this.pristine}get touched(){return be(this.touchedReactive)}set touched(i){be(()=>this.touchedReactive.set(i))}_touched=me(()=>this.touchedReactive());touchedReactive=ee(!1);get untouched(){return!this.touched}_events=new se;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Yn(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Yn(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Zn(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Zn(i,this._rawAsyncValidators))}hasValidator(i){return Ht(this._rawValidators,i)}hasAsyncValidator(i){return Ht(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(he(_({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new bt(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),t&&i.emitEvent!==!1&&this._events.next(new bt(!1,n))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(he(_({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new mt(!1,n))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),t&&i.emitEvent!==!1&&this._events.next(new mt(!0,n))}markAsPending(i={}){this.status=Je;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new et(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(he(_({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=gt,this.errors=null,this._forEachChild(o=>{o.disable(he(_({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ut(this.value,n)),this._events.next(new et(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(he(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=ft,this._forEachChild(n=>{n.enable(he(_({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(he(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,t){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ft||this.status===Je)&&this._runAsyncValidator(n,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ut(this.value,t)),this._events.next(new et(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(he(_({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?gt:ft}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=Je,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ai(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(i,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new et(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,n)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?gt:this.errors?Bt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Je)?Je:this._anyControlsHaveStatus(Bt)?Bt:ft}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,t),o&&this._events.next(new mt(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new bt(this.touched,t)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){jt(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let t=this._parent&&this._parent.dirty;return!i&&!!t&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Bo(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Wo(this._rawAsyncValidators)}};var fi=new _e("CallSetDisabledState",{providedIn:"root",factory:()=>cn}),cn="always";function Uo(e,i){return[...i.path,e]}function jo(e,i,t=cn){zo(e,i),i.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(e.disabled),qo(e,i),Qo(e,i),Ko(e,i),Go(e,i)}function Xn(e,i){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Go(e,i){if(i.valueAccessor.setDisabledState){let t=n=>{i.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),i._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function zo(e,i){let t=No(e);i.validator!==null?e.setValidators(Qn(t,i.validator)):typeof t=="function"&&e.setValidators([t]);let n=Lo(e);i.asyncValidator!==null?e.setAsyncValidators(Qn(n,i.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let o=()=>e.updateValueAndValidity();Xn(i._rawValidators,o),Xn(i._rawAsyncValidators,o)}function qo(e,i){i.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&gi(e,i)})}function Ko(e,i){i.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&gi(e,i),e.updateOn!=="submit"&&e.markAsTouched()})}function gi(e,i){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Qo(e,i){let t=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};e.registerOnChange(t),i._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Yo(e,i){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function Zo(e){return Object.getPrototypeOf(e.constructor)===ii}function Xo(e,i){if(!i)return null;Array.isArray(i);let t,n,o;return i.forEach(r=>{r.constructor===oi?t=r:Zo(r)?n=r:o=r}),o||n||t||null}function Jn(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function ei(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Jo=class extends ln{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,n){super(Po(t),Ho(n,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),jt(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ei(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Jn(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Jn(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){ei(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var er={provide:We,useExisting:ce(()=>yt)},ti=Promise.resolve(),yt=(()=>{class e extends We{_changeDetectorRef;callSetDisabledState;control=new Jo;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new G;constructor(t,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Xo(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Yo(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){jo(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ti.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&f(n);ti.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Uo(t,this._parent):[t]}static \u0275fac=function(n){return new(n||e)(z(sn,9),z(ri,10),z(Oo,10),z(ye,10),z(Lt,8),z(fi,8))};static \u0275dir=D({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[A([er]),y,ue]})}return e})();var tr={provide:ye,useExisting:ce(()=>nr),multi:!0},nr=(()=>{class e extends ii{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&te("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[A([tr]),y]})}return e})();var ir=(()=>{class e{_validator=Kn;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Kn,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(n){return new(n||e)};static \u0275dir=D({type:e,features:[ue]})}return e})();var or={provide:ri,useExisting:ce(()=>rr),multi:!0};var rr=(()=>{class e extends ir{required;inputName="required";normalizeInput=f;createValidator=t=>Fo;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&E("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[A([or]),y]})}return e})();var sr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({})}return e})();var mi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:fi,useValue:t.callSetDisabledState??cn}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[sr]})}return e})();function vi(e,i){return e?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}function Ae(e,i){if(e&&i){let t=n=>{vi(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function ar(){return window.innerWidth-document.documentElement.offsetWidth}function nt(e){for(let i of document?.styleSheets)try{for(let t of i?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function ba(e="p-overflow-hidden"){let i=nt(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,ar()+"px"),Ae(document.body,e)}function Ue(e,i){if(e&&i){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function ya(e="p-overflow-hidden"){let i=nt(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Ue(document.body,e)}function _i(e){let i={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),i}function pn(){let e=window,i=document,t=i.documentElement,n=i.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:o,height:r}}function lr(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function cr(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function va(e,i,t=!0){var n,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:_i(e),l=a.height,c=a.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=cr(),C=lr(),I=pn(),U,J,j="top";p.top+u+l>I.height?(U=p.top+h-l,j="bottom",U<0&&(U=h)):U=u+p.top+h,p.left+c>I.width?J=Math.max(0,p.left+C+d-c):J=p.left+C,e.style.top=U+"px",e.style.left=J+"px",e.style.transformOrigin=j,t&&(e.style.marginTop=j==="bottom"?`calc(${(o=(n=nt(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=nt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Ci(e,i){e&&(typeof i=="string"?e.style.cssText=i:Object.entries(i||{}).forEach(([t,n])=>e.style[t]=n))}function hn(e,i){if(e instanceof HTMLElement){let t=e.offsetWidth;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function _a(e,i,t=!0){var n,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:_i(e),l=i.offsetHeight,c=i.getBoundingClientRect(),u=pn(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=h,t&&(e.style.marginTop=h==="bottom"?`calc(${(o=(n=nt(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=nt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function it(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function fn(e){let i=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?i=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?i=e.el.nativeElement:i=e.el)),it(i)?i:void 0}function Ca(e,i){let t=fn(e);if(t)t.appendChild(i);else throw new Error("Cannot append "+i+" to "+e)}var un=void 0;function Sa(e){if(e){let i=getComputedStyle(e);return e.offsetHeight-e.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(un!=null)return un;let i=document.createElement("div");Ci(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let t=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),un=t,t}}var dn=void 0;function yi(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(dn!=null)return dn;let i=document.createElement("div");Ci(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let t=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),dn=t,t}}function xa(){if(window.getSelection){let e=window.getSelection()||{};e.empty?e.empty():e.removeAllRanges&&e.rangeCount>0&&e.getRangeAt(0).getClientRects().length>0&&e.removeAllRanges()}}function Gt(e,i={}){if(it(e)){let t=(n,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(n,c):Object.entries(c).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?Gt(e,o):(o=n==="class"?[...new Set(t("class",o))].join(" ").trim():n==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}function Ea(e,i={},...t){if(e){let n=document.createElement(e);return Gt(n,i),n.append(...t),n}}function wa(e,i){if(e){e.style.opacity="0";let t=+new Date,n="0",o=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/i}`,e.style.opacity=n,t=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function ur(e,i){return it(e)?Array.from(e.querySelectorAll(i)):[]}function ot(e,i){return it(e)?e.matches(i)?e:e.querySelector(i):null}function Ia(e,i){e&&document.activeElement!==e&&e.focus(i)}function Aa(e,i){if(it(e)){let t=e.getAttribute(i);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Si(e,i=""){let t=ur(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function Ta(e,i){let t=Si(e,i);return t.length>0?t[0]:null}function gn(e){if(e){let i=e.offsetHeight,t=getComputedStyle(e);return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i}return 0}function dr(e){if(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}return 0}function pr(e){if(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}return 0}function xi(e){if(e){let i=e.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function Da(e){var i;if(e){let t=(i=xi(e))==null?void 0:i.childNodes,n=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return n;t[o].nodeType===1&&n++}}return-1}function ka(e,i){let t=Si(e,i);return t.length>0?t[t.length-1]:null}function mn(e){if(e){let i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function zt(e,i){if(e){let t=e.offsetHeight;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Oa(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function hr(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&xi(e))}function Fa(e,i){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(t=i?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=fn((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||hr(o)?o:void 0}}function Ma(){return navigator.userAgent}function bn(e){if(e){let i=e.offsetWidth,t=getComputedStyle(e);return i-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i}return 0}function $a(){return/(android)/i.test(navigator.userAgent)}function Va(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function fr(e){return!!(e&&e.offsetParent!=null)}function Na(e){return!fr(e)}function La(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function Ra(e){return e?getComputedStyle(e).direction==="rtl":!1}function Pa(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ba(e,i){var t,n;if(e){let o=e.parentElement,r=mn(o),s=pn(),a=e.offsetParent?e.offsetWidth:pr(e),l=e.offsetParent?e.offsetHeight:dr(e),c=hn((t=o?.children)==null?void 0:t[0]),u=zt((n=o?.children)==null?void 0:n[0]),d="",p="";r.left+c+a>s.width-yi()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-yi()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+u+l>s.height?p=`-${l-u}px`:p="0px",e.style.top=p,e.style.left=d}}function Ei(e){var i;e&&("remove"in Element.prototype?e.remove():(i=e.parentNode)==null||i.removeChild(e))}function Ha(e,i){let t=fn(e);if(t)t.removeChild(i);else throw new Error("Cannot remove "+i+" from "+e)}function Wa(e,i){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=e.scrollTop,u=e.clientHeight,d=zt(i);l<0?e.scrollTop=c+l:l+d>u&&(e.scrollTop=c+l-u+d)}function wi(e,i="",t){it(e)&&t!==null&&t!==void 0&&e.setAttribute(i,t)}function Ii(){let e=new Map;return{on(i,t){let n=e.get(i);return n?n.push(t):n=[t],e.set(i,n),this},off(i,t){let n=e.get(i);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(i,t){let n=e.get(i);n&&n.slice().map(o=>{o(t)})},clear(){e.clear()}}}var gr=Object.defineProperty,Ai=Object.getOwnPropertySymbols,mr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Ti=(e,i,t)=>i in e?gr(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,yr=(e,i)=>{for(var t in i||(i={}))mr.call(i,t)&&Ti(e,t,i[t]);if(Ai)for(var t of Ai(i))br.call(i,t)&&Ti(e,t,i[t]);return e};function q(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function yn(e,i,t=new WeakSet){if(e===i)return!0;if(!e||!i||typeof e!="object"||typeof i!="object"||t.has(e)||t.has(i))return!1;t.add(e).add(i);let n=Array.isArray(e),o=Array.isArray(i),r,s,a;if(n&&o){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!yn(e[r],i[r],t))return!1;return!0}if(n!=o)return!1;let l=e instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==i.getTime();let u=e instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==i.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!yn(e[a],i[a],t))return!1;return!0}function vr(e,i){return yn(e,i)}function ki(e){return!!(e&&e.constructor&&e.call&&e.apply)}function w(e){return!q(e)}function Te(e,i){if(!e||!i)return null;try{let t=e[i];if(w(t))return t}catch{}if(Object.keys(e).length){if(ki(i))return i(e);if(i.indexOf(".")===-1)return e[i];{let t=i.split("."),n=e;for(let o=0,r=t.length;o<r;++o){if(n==null)return null;n=n[t[o]]}return n}}return null}function ge(e,i,t){return t?Te(e,t)===Te(i,t):vr(e,i)}function Oi(e,i){if(e!=null&&i&&i.length){for(let t of i)if(ge(e,t))return!0}return!1}function _r(e,i){let t=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===e){t=n;break}}return t}function za(e,i){let t;if(w(e))try{t=e.findLast(i)}catch{t=[...e].reverse().find(i)}return t}function qa(e,i){let t=-1;if(w(e))try{t=e.findLastIndex(i)}catch{t=e.lastIndexOf([...e].reverse().find(i))}return t}function de(e,i=!0){return e instanceof Object&&e.constructor===Object&&(i||Object.keys(e).length!==0)}function ae(e,...i){return ki(e)?e(...i):e}function De(e,i=!0){return typeof e=="string"&&(i||e!=="")}function Di(e){return De(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function qt(e,i="",t={}){let n=Di(i).split("."),o=n.shift();return o?de(e)?qt(ae(e[Object.keys(e).find(r=>Di(r)===o)||""],t),n.join("."),t):void 0:ae(e,t)}function Ka(e,i,t,n){if(t.length>0){let o=!1;for(let r=0;r<t.length;r++)if(_r(t[r],n)>i){t.splice(r,0,e),o=!0;break}o||t.push(e)}else t.push(e)}function Kt(e,i=!0){return Array.isArray(e)&&(i||e.length!==0)}function Qa(e){return e instanceof Date&&e.constructor===Date}function Fi(e){return w(e)&&!isNaN(e)}function Ya(e=""){return w(e)&&e.length===1&&!!e.match(/\S| /)}function ie(e,i){if(i){let t=i.test(e);return i.lastIndex=0,t}return!1}function je(...e){let i=(t={},n={})=>{let o=yr({},t);return Object.keys(n).forEach(r=>{de(n[r])&&r in t&&de(t[r])?o[r]=i(t[r],n[r]):o[r]=n[r]}),o};return e.reduce((t,n,o)=>o===0?n:i(t,n),{})}function Ge(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function oe(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in t)e=e.replace(t[n],n)}return e}function Za(e,i,t){e&&i!==t&&(t>=e.length&&(t%=e.length,i%=e.length),e.splice(t,0,e.splice(i,1)[0]))}function Qt(e){return De(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,t)=>t===0?i:"-"+i.toLowerCase()).toLowerCase():e}function vn(e){return De(e)?e.replace(/[A-Z]/g,(i,t)=>t===0?i:"."+i.toLowerCase()).toLowerCase():e}var Yt={};function vt(e="pui_id_"){return Yt.hasOwnProperty(e)||(Yt[e]=0),Yt[e]++,`${e}${Yt[e]}`}function Cr(){let e=[],i=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},n=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var el=Cr();var Mi=["*"],Sr=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Sr||{}),hl=(()=>{class e{requireConfirmationSource=new se;acceptConfirmationSource=new se;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var K=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),fl=(()=>{class e{static AND="and";static OR="or"}return e})(),gl=(()=>{class e{filter(t,n,o,r,s){let a=[];if(t)for(let l of t)for(let c of n){let u=Te(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o);return oe(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=oe(n.toString()).toLocaleLowerCase(o),s=oe(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():t==n?!0:oe(t.toString()).toLocaleLowerCase(o)==oe(n.toString()).toLocaleLowerCase(o),notEquals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():t==n?!1:oe(t.toString()).toLocaleLowerCase(o)!=oe(n.toString()).toLocaleLowerCase(o),in:(t,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(ge(t,n[o]))return!0;return!1},between:(t,n)=>n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1],lt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n,lte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n,gt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n,gte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n,is:(t,n,o)=>this.filters.equals(t,n,o),isNot:(t,n,o)=>this.filters.notEquals(t,n,o),before:(t,n,o)=>this.filters.lt(t,n,o),after:(t,n,o)=>this.filters.gt(t,n,o),dateIs:(t,n)=>n==null?!0:t==null?!1:t.toDateString()===n.toDateString(),dateIsNot:(t,n)=>n==null?!0:t==null?!1:t.toDateString()!==n.toDateString(),dateBefore:(t,n)=>n==null?!0:t==null?!1:t.getTime()<n.getTime(),dateAfter:(t,n)=>n==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>n.getTime())};register(t,n){this.filters[t]=n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ml=(()=>{class e{messageSource=new se;clearSource=new se;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),bl=(()=>{class e{clickSource=new se;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=O({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Mi,decls:1,vars:0,template:function(n,o){n&1&&(Be(),He(0))},encapsulation:2})}return e})(),vl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=O({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Mi,decls:1,vars:0,template:function(n,o){n&1&&(Be(),He(0))},encapsulation:2})}return e})(),ke=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(z(Vn))};static \u0275dir=D({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),B=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[ne]})}return e})(),_l=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})(),Cl=(()=>{class e{dragStartSource=new se;dragStopSource=new se;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(t){this.dragStartSource.next(t)}stopDrag(t){this.dragStopSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var xr=Object.defineProperty,Er=Object.defineProperties,wr=Object.getOwnPropertyDescriptors,Zt=Object.getOwnPropertySymbols,Ni=Object.prototype.hasOwnProperty,Li=Object.prototype.propertyIsEnumerable,$i=(e,i,t)=>i in e?xr(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,k=(e,i)=>{for(var t in i||(i={}))Ni.call(i,t)&&$i(e,t,i[t]);if(Zt)for(var t of Zt(i))Li.call(i,t)&&$i(e,t,i[t]);return e},st=(e,i)=>Er(e,wr(i)),ve=(e,i)=>{var t={};for(var n in e)Ni.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Zt)for(var n of Zt(e))i.indexOf(n)<0&&Li.call(e,n)&&(t[n]=e[n]);return t};var Ir=Ii(),re=Ir;function Vi(e,i){Kt(e)?e.push(...i||[]):de(e)&&Object.assign(e,i)}function Ar(e){return de(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Tr(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function _n(e="",i=""){return Tr(`${De(e,!1)&&De(i,!1)?`${e}-`:e}${i}`)}function Ri(e="",i=""){return`--${_n(e,i)}`}function Dr(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function Pi(e,i="",t="",n=[],o){if(De(e)){let r=/{([^}]*)}/g,s=e.trim();if(Dr(s))return;if(ie(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!n.some(C=>ie(h,C)));return`var(${Ri(t,Qt(p.join("-")))}${w(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return ie(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Fi(e))return e}function kr(e,i,t){De(i,!1)&&e.push(`${i}:${t};`)}function rt(e,i){return e?`${e}{${i}}`:""}var kl=e=>{var i;let t=v.getTheme(),n=Cn(t,e,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Cn(t,e,void 0,"value");return{name:o,variable:n,value:r}},at=(...e)=>Cn(v.getTheme(),...e),Cn=(e={},i,t,n)=>{if(i){let{variable:o,options:r}=v.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=ie(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||q(n)&&a==="strict"?v.getTokenValue(i):Pi(c,void 0,s,[o.excludedKeyRegex],t)}return""};var Or=(e={})=>{let{preset:i,options:t}=e;return{preset(n){return i=i?je(i,n):n,this},options(n){return t=t?k(k({},t),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=st(k({},i),{semantic:st(k({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n?.hasOwnProperty("light")?n?.light:n,l=n?.hasOwnProperty("dark")?n?.dark:n,c={colorScheme:{light:k(k({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:k(k({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=st(k({},i),{semantic:k(k({},s),c)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?v.getPreset():i,options:o?v.getOptions():t}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?je(v.getPreset(),i):i,options:o?k(k({},v.getOptions()),t):t};return v.setTheme(r),r},use(n){let o=this.define(n);return v.setTheme(o),o}}};function Fr(e,i={}){let t=v.defaults.variable,{prefix:n=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let C=ie(p,r)?_n(u):_n(u,Qt(p)),I=Ar(h);if(de(I)){let{variables:U,tokens:J}=s(I,C);Vi(d.tokens,J),Vi(d.variables,U)}else d.tokens.push((n?C.replace(`${n}-`,""):C).replaceAll("-",".")),kr(d.variables,Ri(C),Pi(I,C,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,n);return{value:a,tokens:l,declarations:a.join(""),css:rt(o,a.join(""))}}var pe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=i.map(o=>o.resolve(t)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,i){return Fr(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:n,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=i,C,I,U,J,j,$e,le;if(w(p)&&h.transform!=="strict"){let{primitive:_t,semantic:Ct,extend:St}=p,ct=Ct||{},{colorScheme:xt}=ct,Et=ve(ct,["colorScheme"]),wt=St||{},{colorScheme:It}=wt,ut=ve(wt,["colorScheme"]),dt=xt||{},{dark:At}=dt,Tt=ve(dt,["dark"]),Dt=It||{},{dark:kt}=Dt,Ot=ve(Dt,["dark"]),Ft=w(_t)?this._toVariables({primitive:_t},h):{},Mt=w(Et)?this._toVariables({semantic:Et},h):{},$t=w(Tt)?this._toVariables({light:Tt},h):{},In=w(At)?this._toVariables({dark:At},h):{},An=w(ut)?this._toVariables({semantic:ut},h):{},Tn=w(Ot)?this._toVariables({light:Ot},h):{},Dn=w(kt)?this._toVariables({dark:kt},h):{},[lo,co]=[(r=Ft.declarations)!=null?r:"",Ft.tokens],[uo,po]=[(s=Mt.declarations)!=null?s:"",Mt.tokens||[]],[ho,fo]=[(a=$t.declarations)!=null?a:"",$t.tokens||[]],[go,mo]=[(l=In.declarations)!=null?l:"",In.tokens||[]],[bo,yo]=[(c=An.declarations)!=null?c:"",An.tokens||[]],[vo,_o]=[(u=Tn.declarations)!=null?u:"",Tn.tokens||[]],[Co,So]=[(d=Dn.declarations)!=null?d:"",Dn.tokens||[]];C=this.transformCSS(e,lo,"light","variable",h,n,o),I=co;let xo=this.transformCSS(e,`${uo}${ho}`,"light","variable",h,n,o),Eo=this.transformCSS(e,`${go}`,"dark","variable",h,n,o);U=`${xo}${Eo}`,J=[...new Set([...po,...fo,...mo])];let wo=this.transformCSS(e,`${bo}${vo}color-scheme:light`,"light","variable",h,n,o),Io=this.transformCSS(e,`${Co}color-scheme:dark`,"dark","variable",h,n,o);j=`${wo}${Io}`,$e=[...new Set([...yo,..._o,...So])],le=ae(p.css,{dt:at})}return{primitive:{css:C,tokens:I},semantic:{css:U,tokens:J},global:{css:j,tokens:$e},style:le}},getPreset({name:e="",preset:i={},options:t,params:n,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(w(i)&&t.transform!=="strict"){let h=e.replace("-directive",""),C=i,{colorScheme:I,extend:U,css:J}=C,j=ve(C,["colorScheme","extend","css"]),$e=U||{},{colorScheme:le}=$e,_t=ve($e,["colorScheme"]),Ct=I||{},{dark:St}=Ct,ct=ve(Ct,["dark"]),xt=le||{},{dark:Et}=xt,wt=ve(xt,["dark"]),It=w(j)?this._toVariables({[h]:k(k({},j),_t)},t):{},ut=w(ct)?this._toVariables({[h]:k(k({},ct),wt)},t):{},dt=w(St)?this._toVariables({[h]:k(k({},St),Et)},t):{},[At,Tt]=[(a=It.declarations)!=null?a:"",It.tokens||[]],[Dt,kt]=[(l=ut.declarations)!=null?l:"",ut.tokens||[]],[Ot,Ft]=[(c=dt.declarations)!=null?c:"",dt.tokens||[]],Mt=this.transformCSS(h,`${At}${Dt}`,"light","variable",t,o,r,s),$t=this.transformCSS(h,Ot,"dark","variable",t,o,r,s);u=`${Mt}${$t}`,d=[...new Set([...Tt,...kt,...Ft])],p=ae(J,{dt:at})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:o})},getPresetD({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=i,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:n,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,n){let{cssLayer:o}=i;return o?`@layer ${ae(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:i,params:t,set:o,defaults:r}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=Ge(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){var s;let a={name:e,theme:i,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Ge(l)}</style>`:""},createTokens(e={},i,t="",n="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=ie(r,i.variable.excludedKeyRegex)?t:t?`${t}.${vn(r)}`:vn(r),l=n?`${n}.${r}`:r;de(s)?this.createTokens(s,i,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),ie(s,d)){let C=s.trim().replaceAll(d,J=>{var j;let $e=J.replace(/{|}/g,""),le=(j=o[$e])==null?void 0:j.computed(c,u);return Kt(le)&&le.length===2?`light-dark(${le[0].value},${le[1].value})`:le?.value}),I=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,U=/var\([^)]+\)/g;p=ie(C.replace(U,"0"),I)?`calc(${C})`:C}return q(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(e,i,t){var n;let r=(l=>l.split(".").filter(u=>!ie(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=e[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=ve(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,i,t,n){return t==="class"||t==="attr"?rt(w(i)?`${e}${i},${e} ${i}`:e,n):rt(e,w(i)?rt(i,n):n)},transformCSS(e,i,t,n,o={},r,s,a){if(w(i)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=t==="dark"?c.reduce((u,{type:d,selector:p})=>(w(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),u),""):rt(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};de(l)&&(c.name=ae(l.name,{name:e,type:n})),w(c.name)&&(i=rt(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},v={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=st(k({},i),{options:k(k({},this.defaults.options),i.options)}),this._tokens=pe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),re.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=st(k({},this.theme),{preset:e}),this._tokens=pe.createTokens(e,this.defaults),this.clearLoadedStyleNames(),re.emit("preset:change",e),re.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=st(k({},this.theme),{options:e}),this.clearLoadedStyleNames(),re.emit("options:change",e),re.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return pe.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return pe.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetD(t)},getCustomPreset(e="",i,t,n){let o={name:e,preset:i,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPreset(o)},getLayerOrderCSS(e=""){return pe.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",n){return pe.transformCSS(e,i,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return pe.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return pe.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),re.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&re.emit("theme:load"))}};function Ml(...e){let i=je(v.getPreset(),...e);return v.setPreset(i),i}function $l(e){return Or().surfacePalette(e).update().preset}var Mr=0,Bi=(()=>{class e{document=b(we);use(t,n={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Mr}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:C={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,Gt(s,{type:"text/css",media:d,nonce:p});let I=this.document.head;h&&I.firstChild?I.insertBefore(s,I.firstChild):I.appendChild(s),wi(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var lt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},$r=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Vr=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,F=(()=>{class e{name="base";useStyle=b(Bi);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},o=r=>r)=>{let r=o(ae(t,{dt:at}));return r?this.useStyle.use(Ge(r),_({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(o="")=>v.transformCSS(t.name||this.name,`${o}${n}`));loadGlobalCSS=(t={})=>this.load(Vr,t);loadGlobalTheme=(t={},n="")=>this.load($r,t,(o="")=>v.transformCSS(t.name||this.name,`${o}${n}`));getCommonTheme=t=>v.getCommon(this.name,t);getComponentTheme=t=>v.getComponent(this.name,t);getDirectiveTheme=t=>v.getDirective(this.name,t);getPresetTheme=(t,n,o)=>v.getCustomPreset(this.name,t,n,o);getLayerOrderThemeCSS=()=>v.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let o=ae(this.css,{dt:at}),r=Ge(`${o}${t}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>v.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let o=[v.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=ae(this.theme,{dt:at}),a=Ge(v.transformCSS(r,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Nr=(()=>{class e{theme=ee(void 0);csp=ee({nonce:void 0});isThemeChanged=!1;document=b(we);baseStyle=b(F);constructor(){ht(()=>{re.on("theme:change",t=>{be(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),ht(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){v.clearLoadedStyleNames(),re.clear()}onThemeChange(t){v.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!v.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,_({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,_({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,_({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(_({name:"global-style"},s),r),v.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:o}=t||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Sn=(()=>{class e extends Nr{ripple=ee(!1);platformId=b(Ke);inputStyle=ee(null);inputVariant=ee(null);overlayOptions={};csp=ee({nonce:void 0});filterMatchModeOptions={text:[K.STARTS_WITH,K.CONTAINS,K.NOT_CONTAINS,K.ENDS_WITH,K.EQUALS,K.NOT_EQUALS],numeric:[K.EQUALS,K.NOT_EQUALS,K.LESS_THAN,K.LESS_THAN_OR_EQUAL_TO,K.GREATER_THAN,K.GREATER_THAN_OR_EQUAL_TO],date:[K.DATE_IS,K.DATE_IS_NOT,K.DATE_BEFORE,K.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new se;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=_(_({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c}=t||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Lr=new _e("PRIME_NG_CONFIG");function nc(...e){let i=e?.map(n=>({provide:Lr,useValue:n,multi:!1})),t=Ln(()=>{let n=b(Sn);e?.forEach(o=>n.setConfig(o))});return Mn([...i,t])}var Hi=(()=>{class e extends F{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),L=(()=>{class e{document=b(we);platformId=b(Ke);el=b(Ve);injector=b(en);cd=b(Lt);renderer=b(pt);config=b(Sn);baseComponentStyle=b(Hi);baseStyle=b(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=vt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return qt(t,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!qn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>re.off("theme:change",t))}_loadStyles(){let t=()=>{lt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),lt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!lt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),lt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!v.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,_({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,_({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,_({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(_({name:"global-style"},this.styleOptions),r),v.setLoadedStyleName("common")}if(!v.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,_({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(_({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),v.setLoadedStyleName(this.componentStyle?.name)}if(!v.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,_({name:"layer-order",first:!0},this.styleOptions)),v.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,_({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){lt.clearLoadedStyleNames(),re.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let n=this.componentStyle?.inlineStyles?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:_({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||e)};static \u0275dir=D({type:e,inputs:{dt:"dt"},features:[A([Hi,F]),ue]})}return e})();var xn=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=j=>{if(j)return getComputedStyle(j).getPropertyValue("position")==="relative"?j:r(j.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},C,I;l.top+a+s.height>d.height?(C=l.top-h.top-s.height,t.style.transformOrigin="bottom",l.top+C<0&&(C=-1*l.top)):(C=a+l.top-h.top,t.style.transformOrigin="top");let U=l.left+s.width-d.width,J=l.left-h.left;s.width>d.width?I=(l.left-h.left)*-1:U>0?I=J-U:I=l.left-h.left,t.style.top=C+"px",t.style.left=I+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),C,I;u.top+l+s>h.height?(C=u.top+d-s,t.style.transformOrigin="bottom",C<0&&(C=d)):(C=l+u.top+d,t.style.transformOrigin="top"),u.left+a>h.width?I=Math.max(0,u.left+p+c-a):I=u.left+p,t.style.top=C+"px",t.style.left=I+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(n);u<0?t.scrollTop=d+u:u+h>p&&(t.scrollTop=d+u-p+h)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})(),Wi=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=xn.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ui=(()=>{class e extends L{autofocus=!1;_autofocus=!1;focused=!1;platformId=b(Ke);document=b(we);host=b(Ve);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Pt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=xn.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",f],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[Z,y]})}return e})(),Ec=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({})}return e})();var Rr=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Pr={root:({props:e,instance:i})=>["p-badge p-component",{"p-badge-circle":w(e.value)&&String(e.value).length===1,"p-badge-dot":q(e.value)&&!i.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},ji=(()=>{class e extends F{name="badge";theme=Rr;classes=Pr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var En=(()=>{class e extends L{styleClass=Se();style=Se();badgeSize=Se();size=Se();severity=Se();value=Se();badgeDisabled=Se(!1,{transform:f});_componentStyle=b(ji);containerClass=me(()=>{let t="p-badge p-component";return w(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),q(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(Ne(o.style()),H(o.containerClass()),Rn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([ji]),y],decls:1,vars:1,template:function(n,o){n&1&&Ye(0),n&2&&Ze(o.value())},dependencies:[ne,B],encapsulation:2,changeDetection:0})}return e})(),Gi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[En,B,B]})}return e})();var Hr=["*"],Wr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ur=(()=>{class e extends F{name="baseicon";inlineStyles=Wr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Oe=(()=>{class e extends L{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=q(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",f],styleClass:"styleClass"},features:[A([Ur]),Z,y],ngContentSelectors:Hr,decls:1,vars:0,template:function(n,o){n&1&&(Be(),He(0))},encapsulation:2,changeDetection:0})}return e})();var zi=(()=>{class e extends Oe{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["CheckIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(Ce(),N(0,"svg",0),P(1,"path",1),R()),n&2&&(H(o.getClassNames()),E("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var qi=(()=>{class e extends Oe{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["MinusIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(Ce(),N(0,"svg",0),P(1,"path",1),R()),n&2&&(H(o.getClassNames()),E("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Ki=(()=>{class e extends Oe{pathId;ngOnInit(){this.pathId="url(#"+vt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["SpinnerIcon"]],features:[y],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ce(),N(0,"svg",0)(1,"g"),P(2,"path",1),R(),N(3,"defs")(4,"clipPath",2),P(5,"rect",3),R()()()),n&2&&(H(o.getClassNames()),E("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),x(),E("clip-path",o.pathId),x(3),m("id",o.pathId))},encapsulation:2})}return e})();var iu=(()=>{class e extends Oe{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["TimesIcon"]],features:[y],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(Ce(),N(0,"svg",0),P(1,"path",1),R()),n&2&&(H(o.getClassNames()),E("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var jr=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Gr={root:"p-ink"},Qi=(()=>{class e extends F{name="ripple";theme=jr;classes=Gr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Xt=(()=>{class e extends L{zone=b($n);_componentStyle=b(Qi);animationListener;mouseDownListener;timeout;constructor(){super(),ht(()=>{Pt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Ue(n,"p-ink-active"),!gn(n)&&!bn(n)){let a=Math.max(hn(this.el.nativeElement),zt(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=mn(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-bn(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-gn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Ae(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Ue(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Ue(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Ue(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ei(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=D({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Qi]),y]})}return e})(),hu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({})}return e})();var zr=["content"],qr=["loading"],Kr=["icon"],Qr=["*"],Xi=e=>({class:e});function Yr(e,i){e&1&&Pe(0)}function Zr(e,i){if(e&1&&P(0,"span",8),e&2){let t=T(3);m("ngClass",t.iconClass()),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xr(e,i){if(e&1&&P(0,"SpinnerIcon",9),e&2){let t=T(3);m("styleClass",t.spinnerIconClass())("spin",!0),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function Jr(e,i){if(e&1&&(Le(0),V(1,Zr,1,3,"span",6)(2,Xr,1,4,"SpinnerIcon",7),Re()),e&2){let t=T(2);x(),m("ngIf",t.loadingIcon),x(),m("ngIf",!t.loadingIcon)}}function es(e,i){}function ts(e,i){if(e&1&&V(0,es,0,0,"ng-template",10),e&2){let t=T(2);m("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ns(e,i){if(e&1&&(Le(0),V(1,Jr,3,2,"ng-container",2)(2,ts,1,1,null,5),Re()),e&2){let t=T();x(),m("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),x(),m("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",xe(3,Xi,t.iconClass()))}}function is(e,i){if(e&1&&P(0,"span",8),e&2){let t=T(2);H(t.icon),m("ngClass",t.iconClass()),E("data-pc-section","icon")}}function os(e,i){}function rs(e,i){if(e&1&&V(0,os,0,0,"ng-template",10),e&2){let t=T(2);m("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ss(e,i){if(e&1&&(Le(0),V(1,is,1,4,"span",11)(2,rs,1,1,null,5),Re()),e&2){let t=T();x(),m("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),x(),m("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",xe(3,Xi,t.iconClass()))}}function as(e,i){if(e&1&&(N(0,"span",12),Ye(1),R()),e&2){let t=T();E("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),x(),Ze(t.label)}}function ls(e,i){if(e&1&&P(0,"p-badge",13),e&2){let t=T();m("value",t.badge)("severity",t.badgeSeverity)}}var cs=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,us={root:({instance:e,props:i})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Me=(()=>{class e extends F{name="button";theme=cs;classes=us;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Fe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Yi=(()=>{class e extends L{_componentStyle=b(Me);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&fe("p-button-label",!0)},features:[A([Me]),y]})}return e})(),Zi=(()=>{class e extends L{_componentStyle=b(Me);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&fe("p-button-icon",!0)},features:[A([Me]),y]})}return e})(),Vu=(()=>{class e extends L{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=tn(Zi);labelSignal=tn(Yi);isIconOnly=me(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Fe);isTextButton=me(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=b(Me);ngAfterViewInit(){super.ngAfterViewInit(),Ae(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[Fe.button,Fe.component];return this.icon&&!this.label&&q(this.htmlElement.textContent)&&t.push(Fe.iconOnly),this.loading&&(t.push(Fe.disabled,Fe.loading),!this.icon&&this.label&&t.push(Fe.labelOnly),this.icon&&!this.label&&!q(this.htmlElement.textContent)&&t.push(Fe.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return q(this.fluid)?!!n:this.fluid}setStyleClass(){let t=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}createLabel(){if(!ot(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!ot(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Ae(n,o);let r=this.getIconClass();r&&Ae(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=ot(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=ot(this.htmlElement,".p-button-icon"),n=ot(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=D({type:e,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(nn(r,o.iconSignal,Zi,5),nn(r,o.labelSignal,Yi,5)),n&2&&Un(2)},hostVars:4,hostBindings:function(n,o){n&2&&fe("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",f],rounded:[2,"rounded","rounded",f],text:[2,"text","text",f],outlined:[2,"outlined","outlined",f],size:"size",plain:[2,"plain","plain",f],fluid:[2,"fluid","fluid",f],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[A([Me]),Z,y,ue]})}return e})(),ds=(()=>{class e extends L{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return q(this.fluid)?!!n:this.fluid}_componentStyle=b(Me);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:n}=t;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(X(r,zr,5),X(r,qr,5),X(r,Kr,5),X(r,ke,4)),n&2){let s;Q(s=Y())&&(o.contentTemplate=s.first),Q(s=Y())&&(o.loadingIconTemplate=s.first),Q(s=Y())&&(o.iconTemplate=s.first),Q(s=Y())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",f],loading:[2,"loading","loading",f],loadingIcon:"loadingIcon",raised:[2,"raised","raised",f],rounded:[2,"rounded","rounded",f],text:[2,"text","text",f],plain:[2,"plain","plain",f],severity:"severity",outlined:[2,"outlined","outlined",f],link:[2,"link","link",f],tabindex:[2,"tabindex","tabindex",Ee],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",f],fluid:[2,"fluid","fluid",f],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Me]),Z,y,ue],ngContentSelectors:Qr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(Be(),N(0,"button",0),te("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),He(1),V(2,Yr,1,0,"ng-container",1)(3,ns,3,5,"ng-container",2)(4,ss,3,5,"ng-container",2)(5,as,2,3,"span",3)(6,ls,1,2,"p-badge",4),R()),n&2&&(m("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),E("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),x(2),m("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),x(),m("ngIf",o.loading),x(),m("ngIf",!o.loading),x(),m("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),x(),m("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ne,Xe,Rt,Ie,zn,Xt,Ui,Ki,Gi,En,B],encapsulation:2,changeDetection:0})}return e})(),Nu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[ne,ds,B,B]})}return e})();var ps=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,hs={root:({instance:e,props:i})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":i.size==="small","p-inputtext-lg":i.size==="large","p-invalid":i.invalid,"p-variant-filled":i.variant==="filled","p-inputtext-fluid":i.fluid}]},Ji=(()=>{class e extends F{name="inputtext";theme=ps;classes=hs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Ku=(()=>{class e extends L{ngModel;variant;fluid;pSize;filled;_componentStyle=b(Ji);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return q(this.fluid)?!!n:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||e)(z(yt,8))};static \u0275dir=D({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,o){if(n&1&&te("input",function(s){return o.onInput(s)}),n&2){let r;fe("p-filled",o.filled)("p-variant-filled",((r=o.variant)!==null&&r!==void 0?r:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",f],pSize:"pSize"},features:[A([Ji]),Z,y]})}return e})(),Qu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({})}return e})();var fs=["icon"],gs=["content"],to=e=>({$implicit:e}),ms=(e,i)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":i});function bs(e,i){e&1&&Pe(0)}function ys(e,i){if(e&1&&P(0,"span",1),e&2){let t=T(3);H(t.checked?t.onIcon:t.offIcon),m("ngClass",Nt(4,ms,t.iconPos==="left",t.iconPos==="right")),E("data-pc-section","icon")}}function vs(e,i){if(e&1&&V(0,ys,1,7,"span",3),e&2){let t=T(2);Qe(t.onIcon||t.offIcon?0:-1)}}function _s(e,i){e&1&&Pe(0)}function Cs(e,i){if(e&1&&V(0,_s,1,0,"ng-container",2),e&2){let t=T(2);m("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",xe(2,to,t.checked))}}function Ss(e,i){if(e&1&&(V(0,vs,1,1)(1,Cs,1,4,"ng-container"),N(2,"span",1),Ye(3),R()),e&2){let t=T();Qe(t.iconTemplate?1:0),x(2),m("ngClass",t.cx("label")),E("data-pc-section","label"),x(),Ze(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var xs=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Es={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},eo=(()=>{class e extends F{name="togglebutton";theme=xs;classes=Es;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var ws={provide:ye,useExisting:ce(()=>Jt),multi:!0},Jt=(()=>{class e extends L{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new G;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=b(eo);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(X(r,fs,4),X(r,gs,4),X(r,ke,4)),n&2){let s;Q(s=Y())&&(o.iconTemplate=s.first),Q(s=Y())&&(o.contentTemplate=s.first),Q(s=Y())&&(o.templates=s)}},hostVars:2,hostBindings:function(n,o){n&2&&H(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",f],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ee],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",f],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[A([ws,eo]),Z,y],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(N(0,"button",0),te("click",function(s){return o.toggle(s)}),N(1,"span",1),V(2,bs,1,0,"ng-container",2)(3,Ss,4,4),R()()),n&2&&(H(o.styleClass),m("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),E("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),x(),m("ngClass",o.cx("content")),x(),m("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",xe(13,to,o.checked)),x(),Qe(o.contentTemplate?-1:3))},dependencies:[Xt,ne,Xe,Ie,B],encapsulation:2,changeDetection:0})}return e})(),hd=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[Jt,B,B]})}return e})();var Is=["item"],As=(e,i)=>({$implicit:e,index:i});function Ts(e,i){e&1&&Pe(0)}function Ds(e,i){if(e&1&&V(0,Ts,1,0,"ng-container",3),e&2){let t=T(2),n=t.$implicit,o=t.$index,r=T();m("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Nt(2,As,n,o))}}function ks(e,i){e&1&&V(0,Ds,1,5,"ng-template",null,0,Gn)}function Os(e,i){if(e&1){let t=Vt();N(0,"p-toggleButton",2),te("onChange",function(o){let r=ze(t),s=r.$implicit,a=r.$index,l=T();return qe(l.onOptionSelect(o,s,a))}),V(1,ks,2,0),R()}if(e&2){let t=i.$implicit,n=T();m("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.disabled||n.isOptionDisabled(t))("allowEmpty",n.allowEmpty)("size",n.size),x(),Qe(n.itemTemplate||n._itemTemplate?1:-1)}}var Fs=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Ms={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},no=(()=>{class e extends F{name="selectbutton";theme=Fs;classes=Ms;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var $s={provide:ye,useExisting:ce(()=>io),multi:!0},io=(()=>{class e extends L{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new G;onChange=new G;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=b(no);getOptionLabel(t){return this.optionLabel?Te(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Te(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Te(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,n,o){if(this.disabled||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!ge(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!ge(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(ge(r,o,this.dataKey)){n=!0;break}}}else n=ge(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(X(r,Is,4),X(r,ke,4)),n&2){let s;Q(s=Y())&&(o.itemTemplate=s.first),Q(s=Y())&&(o.templates=s)}},hostVars:10,hostBindings:function(n,o){n&2&&(E("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Ne(o.style),fe("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",f],tabindex:[2,"tabindex","tabindex",Ee],multiple:[2,"multiple","multiple",f],allowEmpty:[2,"allowEmpty","allowEmpty",f],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",f],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",f]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[A([$s,no]),Z,y],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&Bn(0,Os,2,9,"p-toggleButton",1,Pn),n&2&&Hn(o.options)},dependencies:[Jt,mi,hi,yt,ne,Ie,B],encapsulation:2,changeDetection:0})}return e})(),Fd=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[io,B,B]})}return e})();var oo=class e{static isArray(i,t=!0){return Array.isArray(i)&&(t||i.length!==0)}static isObject(i,t=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(t||Object.keys(i).length!==0)}static equals(i,t,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(t,n):this.equalsByValue(i,t)}static equalsByValue(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),r,s,a;if(n&&o){if(s=i.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],t[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return i.getTime()==t.getTime();var u=i instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==t.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static resolveFieldData(i,t){if(i&&t){if(this.isFunction(t))return t(i);if(t.indexOf(".")==-1)return i[t];{let n=t.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,t,n){let o;i&&t!==n&&(n>=i.length&&(n%=i.length,t%=i.length),i.splice(n,0,i.splice(t,1)[0]))}static insertIntoOrderedArray(i,t,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>t){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,t){let n=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==i){n=o;break}}return n}static contains(i,t){if(i!=null&&t&&t.length){for(let n of t)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,t,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(t);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof t=="string"?r=i.localeCompare(t,n,{numeric:!0}):r=i<t?-1:i>t?1:0,r}static sort(i,t,n=1,o,r=1){let s=e.compare(i,t,o,n),a=n;return(e.isEmpty(i)||e.isEmpty(t))&&(a=r===1?n:r),a*s}static merge(i,t){if(!(i==null&&t==null)){{if((i==null||typeof i=="object")&&(t==null||typeof t=="object"))return _(_({},i||{}),t||{});if((i==null||typeof i=="string")&&(t==null||typeof t=="string"))return[i||"",t||""].join(" ")}return t||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...t){return this.isFunction(i)?i(...t):i}static findLastIndex(i,t){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(t)}catch{n=i.lastIndexOf([...i].reverse().find(t))}return n}static findLast(i,t){let n;if(this.isNotEmpty(i))try{n=i.findLast(t)}catch{n=[...i].reverse().find(t)}return n}static deepEquals(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),r,s,a;if(n&&o){if(s=i.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],t[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return i.getTime()==t.getTime();var u=i instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==t.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,t=!0){return typeof i=="string"&&(t||i!=="")}},ro=0;function $d(e="pn_id_"){return ro++,`${e}${ro}`}function Vs(){let e=[],i=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},n=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:t}}var Vd=Vs(),Nd=e=>!!e;var Ns=["checkboxicon"],Ls=["input"],Rs=()=>({"p-checkbox-input":!0}),Ps=e=>({checked:e,class:"p-checkbox-icon"});function Bs(e,i){if(e&1&&P(0,"span",8),e&2){let t=T(3);m("ngClass",t.checkboxIcon),E("data-pc-section","icon")}}function Hs(e,i){e&1&&P(0,"CheckIcon",9),e&2&&(m("styleClass","p-checkbox-icon"),E("data-pc-section","icon"))}function Ws(e,i){if(e&1&&(Le(0),V(1,Bs,1,2,"span",7)(2,Hs,1,2,"CheckIcon",6),Re()),e&2){let t=T(2);x(),m("ngIf",t.checkboxIcon),x(),m("ngIf",!t.checkboxIcon)}}function Us(e,i){e&1&&P(0,"MinusIcon",9),e&2&&(m("styleClass","p-checkbox-icon"),E("data-pc-section","icon"))}function js(e,i){if(e&1&&(Le(0),V(1,Ws,3,2,"ng-container",4)(2,Us,1,2,"MinusIcon",6),Re()),e&2){let t=T();x(),m("ngIf",t.checked),x(),m("ngIf",t._indeterminate())}}function Gs(e,i){}function zs(e,i){e&1&&V(0,Gs,0,0,"ng-template")}var qs=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,Ks={root:({instance:e,props:i})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},so=(()=>{class e extends F{name="checkbox";theme=qs;classes=Ks;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Qs={provide:ye,useExisting:ce(()=>ao),multi:!0},ao=(()=>{class e extends L{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new G;onFocus=new G;onBlur=new G;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Oi(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=ee(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=b(so);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let n,o=this.injector.get(We,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!ge(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=O({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,r){if(n&1&&(X(r,Ns,4),X(r,ke,4)),n&2){let s;Q(s=Y())&&(o.checkboxIconTemplate=s.first),Q(s=Y())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&Wn(Ls,5),n&2){let r;Q(r=Y())&&(o.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",f],binary:[2,"binary","binary",f],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ee],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",f],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",f],required:[2,"required","required",f],autofocus:[2,"autofocus","autofocus",f],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Qs,so]),Z,y,ue],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,o){if(n&1){let r=Vt();N(0,"div",1)(1,"input",2,0),te("focus",function(a){return ze(r),qe(o.onInputFocus(a))})("blur",function(a){return ze(r),qe(o.onInputBlur(a))})("change",function(a){return ze(r),qe(o.handleChange(a))}),R(),N(3,"div",3),V(4,js,3,2,"ng-container",4)(5,zs,1,0,null,5),R()()}n&2&&(Ne(o.style),H(o.styleClass),m("ngClass",o.containerClass),E("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),x(),Ne(o.inputStyle),H(o.inputClass),m("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",jn(26,Rs)),E("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),x(3),m("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),x(),m("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",xe(27,Ps,o.checked)))},dependencies:[ne,Xe,Rt,Ie,zi,qi,B],encapsulation:2,changeDetection:0})}return e})(),ip=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=$({type:e});static \u0275inj=M({imports:[ao,B,B]})}return e})();export{vi as a,Ae as b,ba as c,Ue as d,ya as e,pn as f,lr as g,cr as h,va as i,Ci as j,hn as k,_a as l,Ca as m,Sa as n,yi as o,xa as p,Ea as q,wa as r,ur as s,ot as t,Ia as u,Aa as v,Si as w,Ta as x,gn as y,dr as z,pr as A,Da as B,ka as C,mn as D,zt as E,Oa as F,Fa as G,Ma as H,bn as I,$a as J,Va as K,fr as L,Na as M,La as N,Ra as O,Pa as P,Ba as Q,Ha as R,Wa as S,wi as T,q as U,vr as V,ki as W,w as X,Te as Y,ge as Z,_r as _,za as $,qa as aa,ae as ba,Ka as ca,Kt as da,Qa as ea,Ya as fa,oe as ga,Za as ha,vt as ia,Sr as ja,hl as ka,K as la,fl as ma,gl as na,ml as oa,bl as pa,yl as qa,vl as ra,ke as sa,B as ta,_l as ua,Cl as va,kl as wa,Or as xa,Ml as ya,$l as za,F as Aa,Sn as Ba,nc as Ca,ye as Da,oi as Ea,We as Fa,hi as Ga,yt as Ha,nr as Ia,rr as Ja,mi as Ka,L as La,Xt as Ma,hu as Na,Jt as Oa,hd as Pa,io as Qa,Fd as Ra,xn as Sa,Wi as Ta,Ui as Ua,Ec as Va,En as Wa,Gi as Xa,Oe as Ya,zi as Za,qi as _a,Ki as $a,iu as ab,Vu as bb,ds as cb,Nu as db,oo as eb,$d as fb,Vd as gb,Nd as hb,ao as ib,ip as jb,Ku as kb,Qu as lb};
