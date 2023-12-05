"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[9240],{79240:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var s=t(27366),r=t(10064),n=t(92026),l=t(94172),o=t(49861),a=(t(25243),t(63780),t(93169),t(69912)),d=t(42069),u=t(60487),c=t(79510),p=t(77098),h=t(61712),v=t(78485),y=t(67581);let g=class extends((0,d.A)(y.Z)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new c.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise((0,h.E)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles((0,l.gx)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.ready}),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,n.SC)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var e,i,t,s;const r=super.getSuspendInfo();return r.outsideScaleRange=null!==(e=null===(i=this.processor)||void 0===i?void 0:i.scaleVisibilitySuspended)&&void 0!==e&&e,r.outsideOfView=null!==(t=null===(s=this.processor)||void 0===s?void 0:s.frustumVisibilitySuspended)&&void 0!==t&&t,r}async fetchPopupFeatures(e,i){var t;return null!==(t=null===i||void 0===i?void 0:i.clientGraphics)&&void 0!==t?t:[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,i){return this.processor.whenGraphicBounds(e,i)}computeAttachmentOrigin(e,i){var t;return null===(t=this.processor)||void 0===t?void 0:t.computeAttachmentOrigin(e,i)}getSymbolLayerSize(e,i){return this.processor.getSymbolLayerSize(e,i)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,i){const{processor:t}=this;if(null==(null===t||void 0===t?void 0:t.graphics3DGraphics))throw new r.Z("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:s}=t;return(0,u.W)(this.view,this.layer,(e=>"number"==typeof e?s.get(e):void 0),e,i)}async queryForSymbologySnapping(e,i){return(0,p.c)(this.processor,e,i)}get updatePolicy(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||v.j.SYNC}canResume(){var e;return super.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}isUpdating(){var e,i;return this.view&&this.layer&&!((null===(e=this.processor)||void 0===e||!e.updating)&&(this.layer.internal||null!==(i=this.view.basemapTerrain)&&void 0!==i&&i.ready))}get performanceInfo(){var e,i,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:null!==(e=null===(i=this.processor)||void 0===i?void 0:i.elevationAlignment.updating)&&void 0!==e&&e,visibilityFrustum:!(null!==(t=this.processor)&&void 0!==t&&t.frustumVisibilitySuspended)}}get usedMemory(){var e,i;return null!==(e=null===(i=this.processor)||void 0===i||null===(i=i.graphicsCore)||void 0===i?void 0:i.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e;return null===(e=this.processor)||void 0===e||null===(e=e.graphicsCore)||void 0===e?void 0:e.unprocessedMemoryEstimate}};(0,s._)([(0,o.Cb)()],g.prototype,"loadedGraphics",null),(0,s._)([(0,o.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,s._)([(0,o.Cb)()],g.prototype,"layer",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],g.prototype,"processor",void 0),(0,s._)([(0,o.Cb)()],g.prototype,"_slicePlaneEnabled",void 0),(0,s._)([(0,o.Cb)({type:Boolean})],g.prototype,"slicePlaneEnabled",null),g=(0,s._)([(0,a.j)("esri.views.3d.layers.GraphicsLayerView3D")],g);const f=g},42069:(e,i,t)=>{t.d(i,{A:()=>u});var s=t(27366),r=t(42537),n=t(66978),l=t(94172),o=t(49861),a=(t(25243),t(63780),t(93169),t(69912)),d=t(5354);const u=e=>{let i=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,i=e.signal;this.addHandles((0,r.kB)((()=>e.abort()))),await(0,l.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i),(0,n.k_)(i);const t=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(t)throw t}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return i&&i.minScale&&i.maxScale&&i.minScale<i.maxScale&&(e.outsideScaleRange=!0),e}};return(0,s._)([(0,o.Cb)()],i.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],i.prototype,"slicePlaneEnabled",void 0),i=(0,s._)([(0,a.j)("esri.views.3d.layers.LayerView3D")],i),i}},60487:(e,i,t)=>{t.d(i,{W:()=>c});t(59486);var s=t(66978),r=t(4043),n=t(55946),l=t(74509),o=t(69691),a=t(78935),d=t(8821),u=t(78952);async function c(e,i,t,n,a){var c;const{elevationProvider:g,renderCoordsHelper:f}=e,{elevationInfo:b}=i,{pointsInFeatures:m,spatialReference:S}=n,w=u.Z.fromJSON(S),_=(0,d.WI)(b,!0),C=await(0,d.kr)(_,w,a);(0,s.k_)(a);const I=[],R=new Set,P=new Set;h.spatialReference=w;const E=null!==(c=e.elevationProvider.spatialReference)&&void 0!==c?c:e.spatialReference;for(const{objectId:s,points:d}of m){const e=t(s);if(null==e){for(const e of d){var O;I.push(null!==(O=e.z)&&void 0!==O?O:0)}R.add(s);continue}e.isDraped&&P.add(s);const n=e.graphic.geometry;p.setFromElevationInfo((0,l.Jn)(n,b)),p.updateFeatureExpressionInfoContext(C,e.graphic,i);for(const{x:i,y:t,z:s}of d)h.x=i,h.y=t,h.z=null!==s&&void 0!==s?s:0,await(0,r.t)(h,y,E,0,{signal:a}),(0,o.qZ)(y,g,p,f,v),I.push(v.z)}return{elevations:I,drapedObjectIds:P,failedObjectIds:R}}const p=new a.o,h=(0,n.T)(0,0,0,u.Z.WGS84),v=new o.Lm,y=[0,0,0]},77098:(e,i,t)=>{t.d(i,{c:()=>n});var s=t(66978),r=t(819);async function n(e,i,t){var n;if(null==e||0===i.candidates.length)return l;const o=null!==(n=e.graphics3DGraphicsByObjectID)&&void 0!==n?n:e.graphics3DGraphics,a=[],d=[],{renderer:u}=e,c=null!=u&&"arcadeRequired"in u&&u.arcadeRequired?(0,r.LC)():null,p=async(i,s)=>{let{graphic:r,graphics3DSymbol:n}=s;const l=await c,o=await e.getRenderingInfoAsync(r,u,l,{signal:t});return null==o?[]:n.queryForSnapping(i,v,o,t)},{candidates:h,spatialReference:v}=i;for(let s=0;s<h.length;++s){const e=h[s],{objectId:i}=e,t="number"==typeof i?null===o||void 0===o?void 0:o.get(i):void 0;if(null==t)continue;const{graphics3DSymbol:r}=t;r.symbologySnappingSupported&&(a.push(p(e,t)),d.push(s))}if(0===a.length)return l;const y=await Promise.all(a);(0,s.k_)(t);const g=[],f=[];for(let s=0;s<y.length;++s){const e=y[s],i=d[s];for(const t of e)g.push(t),f.push(i)}return{candidates:g,sourceCandidateIndices:f}}const l={candidates:[],sourceCandidateIndices:[]}},61712:(e,i,t)=>{t.d(i,{E:()=>n});var s=t(81753),r=t(67387);function n(e){const i=e.view.spatialReference,t=e.layer.fullExtent,n=null!=t&&t.spatialReference;if(null==t||!n)return Promise.resolve(null);if(n.equals(i))return Promise.resolve(t.clone());const l=(0,s.iV)(t,i);return null!=l?Promise.resolve(l):e.view.state.isLocal?(0,r.projectGeometry)(t,i,e.layer.portalItem).then((i=>!e.destroyed&&i?i:null)).catch((()=>null)):Promise.resolve(null)}},67581:(e,i,t)=>{t.d(i,{Z:()=>v});var s=t(27366),r=t(7138),n=t(91505),l=t(79056),o=t(32718),a=t(92026),d=t(67426),u=t(49861),c=(t(25243),t(63780),t(93169),t(69912)),p=t(46634);let h=class extends((0,l.IG)((0,d.v)(n.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var i;const t=this.layer&&this.layer.id||"no id",s=(null===(i=this.layer)||void 0===i?void 0:i.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(t,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.SC)(this._updatingHandles)}get fullOpacity(){var e,i,t,s;return(null!==(e=null===(i=this.layer)||void 0===i?void 0:i.opacity)&&void 0!==e?e:1)*(null!==(t=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==t?t:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,i,t;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(i=this.parent)&&void 0!==i&&i.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)||!1}getSuspendInfo(){var e,i;const t=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(i=this.view)&&void 0!==i&&i.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,u.Cb)()],h.prototype,"fullOpacity",null),(0,s._)([(0,u.Cb)()],h.prototype,"layer",void 0),(0,s._)([(0,u.Cb)()],h.prototype,"parent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,s._)([(0,u.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,s._)([(0,u.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,s._)([(0,u.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s._)([(0,u.Cb)()],h.prototype,"visible",null),(0,s._)([(0,u.Cb)()],h.prototype,"view",void 0),h=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],h);const v=h}}]);
//# sourceMappingURL=9240.a666973c.chunk.js.map