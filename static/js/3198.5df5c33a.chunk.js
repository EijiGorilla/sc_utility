"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[3198],{23198:(e,s,t)=>{t.d(s,{uploadAssets:()=>H});var o=t(76200),n=t(93169),r=t(32718),a=t(66978),i=t(38499),c=t(35995),l=t(71907),u=t(17493),p=t(10064);const d="upload-assets",m=()=>new Error;class f extends p.Z{constructor(){super("".concat(d,":unsupported"),"Layer does not support asset uploads.",m())}}class h extends p.Z{constructor(){super("".concat(d,":no-glb-support"),"Layer does not support glb.",m())}}class g extends p.Z{constructor(){super("".concat(d,":no-supported-source"),"No supported external source found",m())}}class w extends p.Z{constructor(){super("".concat(d,":not-base-64"),"Expected gltf data in base64 format after conversion.",m())}}class v extends p.Z{constructor(){super("".concat(d,":unable-to-prepare-options"),"Unable to prepare uploadAsset request options.",m())}}class y extends p.Z{constructor(e,s){super("".concat(d,":bad-response"),"Bad response. Uploaded ".concat(e," items and received ").concat(s," results."),m())}}class _ extends p.Z{constructor(e,s){var t,o;super("".concat(d,"-layer:upload-failed"),"Failed to upload mesh file ".concat(e,". Error code: ").concat(null!==(t=null===s||void 0===s?void 0:s.code)&&void 0!==t?t:"-1",". Error message: ").concat(null!==(o=null===s||void 0===s?void 0:s.messages)&&void 0!==o?o:"unknown"),m())}}class P extends p.Z{constructor(e){super("".concat(d,"-layer:unsupported-format"),"The service allowed us to upload an asset of FormatID ".concat(e,", but it does not list it in its supported formats."),m())}}class b extends p.Z{constructor(){super("".concat(d,":convert3D-failed"),"convert3D failed.")}}const T={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var k=t(25899),A=t(42537),x=t(77427);function F(e){return new Z(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class Z{constructor(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},t=arguments.length>2?arguments[2]:void 0;if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[o,n]of this._progressMap.entries())e+=n*this._weights[o];if(1===e&&(0,n.Z)("enable-feature:esri-3dofl-upload-timings")){var s;const e=Math.round(performance.now()-(null!==(s=this._startTime)&&void 0!==s?s:0))/1e3;console.log("".concat(this.taskName," done in ").concat(e," sec"));for(const[s,o]of this._timingsMap){var t;const n=Math.round(o.end-o.start)/1e3,r=Math.round(n/e*100);console.log(null!==(t=this.taskName)&&void 0!==t?t:"Task",{stepKey:s,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),(0,n.Z)("enable-feature:esri-3dofl-upload-timings")){var t;const o=performance.now();null!==(t=this._startTime)&&void 0!==t||(this._startTime=o);const n=(0,x.s1)(this._timingsMap,e,(()=>({start:o,end:0})));1===s&&(n.end=o)}this.emitProgress()}simulate(e,s){return E((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}}function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,n=1-Math.exp(-o/s);e(n)}),N);return(0,A.kB)((()=>{clearInterval(o),e(1)}))}function M(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return(0,i.up)((0,i._H)(e*I/s))}const j=10,S=10,I=8e-6,N=(0,i.HA)(50),D=(0,i.HA)(1e3),U=1e6,B=20*U,C=2e9,L=3;async function O(e,s,t){let{data:n,name:r,description:i}=e,l=null;try{const e=(0,c.v_)(s,"uploads"),u=(0,c.v_)(e,"info"),{data:p}=await(0,o.Z)(u,{query:{f:"json"},responseType:"json"});(0,a.k_)(t);const d=(0,k.M8)(s),m=p.maxUploadFileSize*U,f=d?C:m,h=d?Math.min(B,m):B;if(n.size>f)throw new Error("Data too large");const g=(0,c.v_)(e,"register"),{data:w}=await(0,o.Z)(g,{query:{f:"json",itemName:R(r),description:i},responseType:"json",method:"post"});if((0,a.k_)(t),!w.success)throw new Error("Registration failed");const{itemID:v}=w.item;l=(0,c.v_)(e,v);const y=(0,c.v_)(l,"uploadPart"),_=Math.ceil(n.size/h),P=new Array;for(let s=0;s<_;++s)P.push(n.slice(s*h,Math.min((s+1)*h,n.size)));const b=P.slice().reverse(),T=new Array,A=F(_,null===t||void 0===t?void 0:t.onProgress,"uploadItem"),x=async()=>{for(;0!==b.length;){const e=P.length-b.length,s=b.pop(),n=new FormData,r=A.simulate(e,M(s.size));try{const r=s;n.append("f","json"),n.append("file",r),n.append("partId","".concat(e));const{data:i}=await(0,o.Z)(y,{timeout:0,body:n,responseType:"json",method:"post"});if((0,a.k_)(t),!i.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let s=0;s<L&&0!==b.length;++s)T.push(x());await Promise.all(T);const Z=(0,c.v_)(l,"commit"),{data:E}=await(0,o.Z)(Z,{query:{f:"json",parts:P.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if((0,a.k_)(t),!E.success)throw new Error("Commit failed");return E.item}catch(u){if(null!=l){const e=(0,c.v_)(l,"delete");await(0,o.Z)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw u}}function R(e){return e.replaceAll("/","_").replaceAll("\\","_")}var q=t(18277);async function H(e,s,t){var o;const n=e.length;if(!n)return null!==t&&void 0!==t&&null!==(o=t.onProgress)&&void 0!==o&&o.call(t,1),[];const r=F(n,null===t||void 0===t?void 0:t.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,s,t){var o;let{layer:n,ongoingUploads:r}=s;const c=r.get(e);if(c)return c;if(!function(e){return!!e.infoFor3D&&!!e.url}(n))throw new f;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,u.JG)(e,t)))}(e,n))return null!==t&&void 0!==t&&null!==(o=t.onProgress)&&void 0!==o&&o.call(t,1),e;const p=async function(e,s,t){const{metadata:o}=e,{displaySource:n}=o,r=z(null===n||void 0===n?void 0:n.source,s),c=!!r,u=o.externalSources.length>0,p=c?async function(e,s,t){return{source:await J(e,s,t),original:!0}}(r,s,t):u?async function(e,s,t){const o=Y(s),{externalSources:n}=e.metadata,r=function(e,s){for(const t of e){const e=z(t.source,s);if(e)return e}return null}(n,s);if(!r)throw new g;const a=F(T.uploadConvertibleSource,null===t||void 0===t?void 0:t.onProgress,"uploadConvertibleSource"),c=await J(r,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:c,original:!0}]);const l=r.reduce(((e,s)=>{let{asset:t}=s;return t instanceof File?e+t.size:e}),0),u=a.simulate("serviceAssetsToGlb",function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;return(0,i.up)((0,i._H)(e*I/s))}(l));try{return{source:await Q(c,s,o)}}finally{u.remove()}}(e,s,t):async function(e,s,t){const o=F(T.uploadLocalMesh,null===t||void 0===t?void 0:t.onProgress,"uploadLocalMesh"),n=async function(e,s,t){const o=Y(s),n=await e.load(t),r=await n.toBinaryGLTF({ignoreLocalTransform:!0});(0,a.k_)(t);const i=await r.buffer();return(0,a.k_)(t),{blob:new Blob([i.data],{type:i.type}),assetName:"".concat((0,l.z)(),".glb"),assetType:o}}(e,s,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await K([n],s,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,s,t),d=await p;return(0,a.k_)(t),e.addExternalSources([d]),e}(e,n,t);r.set(e,p);try{await p}finally{r.delete(e)}return e}(e,s,{...t,onProgress:r.makeOnProgress(o)}))))}function z(e,s){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:o}}=s,n=(0,u.zE)(e),r=new Array;let a=!1;for(let i=0;i<n.length;++i){const e=G(n[i],t);if(!e)return null;o.includes(e.assetType)&&(a=!0),r.push(e)}return a?r:null}function G(e,s){const t=(0,u.vj)(e,s);return t?{asset:e,assetType:t}:null}async function J(e,s,t){return K(e.map((e=>async function(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const n=await t.toBlob(s);return(0,a.k_)(s),{blob:n,assetName:t.assetName,assetType:o}}(e,t))),s,t)}async function K(e,s,t){const o=F(T.uploadAssetBlobs,null===t||void 0===t?void 0:t.onProgress,"uploadAssetBlobs"),n=await function(e,s,t){const o=F(e.length,null===t||void 0===t?void 0:t.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,n)=>{const i=async function(e,s,t){const{blob:o,assetType:n,assetName:i}=e;let l=null;try{const e=await O({data:o,name:i},s.url,t);(0,a.k_)(t),l={assetType:n,assetUploadId:e.itemID}}catch(D){(0,a.r9)(D),r.Z.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce("Service ".concat(s.url," does not support the REST Uploads API."))}if(!l){const e=await(0,c.IR)(o);if((0,a.k_)(t),!e.isBase64)throw new w;l={assetType:n,assetData:e.data}}if(!l)throw new v;return{item:l,assetName:i}}(await e,s,{...t,onProgress:o.makeOnProgress(n)});return(0,a.k_)(t),i})))}(e,s,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.k_)(t);const i=n.map((e=>{let{item:s}=e;return s})),{uploadResults:l}=await W(i,s,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.k_)(t),e.map(((e,t)=>function(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new _(e.assetName,t)}const{assetHash:n}=s,{assetName:r,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,q.d1)(a,i);if(!c)throw new P(a);return new u.CP(r,c,[new u.LL("".concat(t.parsedUrl.path,"/assets/").concat(n),n)])}(n[t],l[t],s)))}async function W(e,s,t){const n=E(null===t||void 0===t?void 0:t.onProgress);try{const n=await(0,o.Z)((0,c.v_)(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.k_)(t),n.data.uploadResults.length!==e.length)throw new y(e.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}async function Q(e,s,t){var o;const n=e.map((e=>{let{assetName:s,parts:t}=e;return{assetName:s,assetHash:t[0].partHash}})),r=null===(o=s.capabilities)||void 0===o?void 0:o.operations.supportsAsyncConvert3D,a={f:"json",assets:JSON.stringify(n),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},i=(0,c.v_)(s.parsedUrl.path,"convert3D");let l;try{l=(await(r?X:V)(i,{query:a,responseType:"json",timeout:0})).data}catch(D){throw new b}const{supportedFormats:p}=s.infoFor3D;return l.assets.map((e=>{const s=(0,q.S0)(e.contentType,p);if(!s)throw new P(s);return new u.CP(e.assetName,e.contentType,[new u.LL(e.assetURL,e.assetHash)])}))}function V(e,s){return(0,o.Z)(e,s)}async function X(e,s){const t=(await(0,o.Z)(e,s)).data.statusUrl;for(;;){const e=(await(0,o.Z)(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.e4)($)}}function Y(e){var s;const{infoFor3D:t}=e,o=null!==(s=(0,q.S0)("model/gltf-binary",t.supportedFormats))&&void 0!==s?s:(0,q.Ow)("glb",t.supportedFormats);if(!o)throw new h;return o}const $=(0,i.HA)(1e3)}}]);
//# sourceMappingURL=3198.5df5c33a.chunk.js.map