/*! For license information please see 6302.ee827c5f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[6302],{86302:(e,i,t)=>{t.r(i),t.d(i,{CalciteSheet:()=>g,defineCustomElement:()=>w});var n=t(51554),a=t(92358),s=t(16435),o=t(47242),l=t(72021),c=t(27871),h=t(91438),r=t(69874);const d="scrim",p="container",m="container--open",b="content",v="container--slotted-in-shell",x=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSheetBeforeClose=(0,n.yM)(this,"calciteSheetBeforeClose",6),this.calciteSheetClose=(0,n.yM)(this,"calciteSheetClose",6),this.calciteSheetBeforeOpen=(0,n.yM)(this,"calciteSheetBeforeOpen",6),this.calciteSheetOpen=(0,n.yM)(this,"calciteSheetOpen",6),this.openTransitionProp="opacity",this.ignoreOpenChange=!1,this.mutationObserver=(0,l.c)("mutation",(()=>this.handleMutationObserver())),this.setTransitionEl=e=>{this.transitionEl=e,this.contentId=(0,a.m)(e)},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteSheetOpen",this.openEnd)},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeSheet=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}this.opened=!1,this.removeOverflowHiddenClass()},this.beforeClose=void 0,this.displayMode="overlay",this.escapeDisabled=!1,this.heightScale="m",this.focusTrapDisabled=!1,this.label=void 0,this.open=!1,this.opened=!1,this.outsideCloseDisabled=!1,this.position="inline-start",this.slottedInShell=void 0,this.widthScale="m"}handleFocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}toggleSheet(e){this.ignoreOpenChange||(e?this.openSheet():this.closeSheet())}handleOpenedChange(){(0,c.o)(this)}async componentWillLoad(){(0,o.a)(this),this.open&&requestAnimationFrame((()=>this.openSheet()))}componentDidLoad(){(0,o.s)(this)}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),(0,s.c)(this)}disconnectedCallback(){var e;this.removeOverflowHiddenClass(),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,s.d)(this),this.slottedInShell=!1}render(){const e=(0,a.b)(this.el);return(0,n.h)(n.AA,{"aria-describedby":this.contentId,"aria-label":this.label,"aria-modal":"true",role:"dialog"},(0,n.h)("div",{class:{[p]:!0,[m]:this.opened,[v]:this.slottedInShell,[a.C.rtl]:"rtl"===e}},(0,n.h)("calcite-scrim",{class:d,onClick:this.handleOutsideClose}),(0,n.h)("div",{class:{[b]:!0},ref:this.setTransitionEl},(0,n.h)("slot",null))))}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,o.c)(this),(0,a.f)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}onBeforeOpen(){this.calciteSheetBeforeOpen.emit()}onOpen(){this.calciteSheetOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.calciteSheetBeforeClose.emit()}onClose(){this.calciteSheetClose.emit(),(0,s.d)(this)}openSheet(){this.el.addEventListener("calciteSheetOpen",this.openEnd),this.opened=!0,this.slottedInShell||(this.initialOverflowCSS=document.documentElement.style.overflow,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}handleMutationObserver(){this.updateFocusTrapElements()}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],open:["toggleSheet"],opened:["handleOpenedChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-app-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-app-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-ui-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--slotted-in-shell{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-sheet",{beforeClose:[16],displayMode:[513,"display-mode"],escapeDisabled:[516,"escape-disabled"],heightScale:[513,"height-scale"],focusTrapDisabled:[516,"focus-trap-disabled"],label:[1],open:[1540],opened:[1540],outsideCloseDisabled:[516,"outside-close-disabled"],position:[513],slottedInShell:[4,"slotted-in-shell"],widthScale:[513,"width-scale"],setFocus:[64],updateFocusTrapElements:[64]},[[8,"keydown","handleEscape"]]]);function u(){if("undefined"===typeof customElements)return;["calcite-sheet","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-sheet":customElements.get(e)||customElements.define(e,x);break;case"calcite-loader":customElements.get(e)||(0,h.d)();break;case"calcite-scrim":customElements.get(e)||(0,r.d)()}}))}u();const g=x,w=u}}]);
//# sourceMappingURL=6302.ee827c5f.chunk.js.map