"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[150],{60150:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var i=r(27366),n=r(11582),o=r(80987),s=r(10064),l=r(93002),a=r(97642),d=r(66978),u=r(94172),p=r(76672),y=r(35995),c=r(49861),h=(r(25243),r(63780),r(93169),r(38511)),b=r(69912),v=r(25265),f=r(30651),g=r(27961),m=r(11936),w=r(6693),C=r(46671),_=r(56601),S=r(7436),F=r(6061),I=r(29598),O=r(71684),E=r(56811),j=r(99063),T=r(25899),A=r(45948),x=r(62594),L=r(25610),Z=r(37270),P=r(44055),G=r(94931),R=(r(78451),r(98689),r(57823),r(32066),r(49018)),V=r(34999),q=r(28189),D=(r(9014),r(32718)),k=r(79056),N=r(84652),M=r(54472),U=r(18202),Q=r(31201),H=r(47492),J=r(57594),B=r(12224),Y=r(77748),z=r(85116),K=r(21149),X=r(81085),W=r(61574);const $=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],ee={key:"type",base:R.Z,errorContext:"renderer",typeMap:{simple:V.Z,"unique-value":q.Z,"class-breaks":G.Z}},te=(0,L.v)(),re=(0,H.d)({types:ee});let ie=0;function ne(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function oe(e){switch(e){case"point":case"multipoint":return W.xA.clone();case"polyline":return W.CJ.clone();case"polygon":case"multipatch":return W.z3.clone();default:return null}}function se(e,t){var r;return null==e?null:null===(r=t.subtypes)||void 0===r?void 0:r.find((t=>t.code===e))}function le(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},n=se(e,t);if(null!=n){const{defaultValues:e}=n;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new B.Z({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const ae="esri.layers.support.SubtypeSublayer";let de=class extends((0,a.R)((0,n.J)((0,k.IG)(M.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id="".concat(Date.now().toString(16),"-subtype-sublayer-").concat(ie++),this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.capabilities}get effectiveCapabilities(){var e;return null===(e=this.parent)||void 0===e?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){var i;const{fields:n,parent:o}=this;let s;if(n){s=[];let e=0;n.forEach((t=>{var r;let{name:i,alias:n,editable:l,visible:a}=t;if(!a)return;const d=null===o||void 0===o||null===(r=o.fields)||void 0===r?void 0:r.find((e=>e.name===i));if(!d)return;const u={name:i};let p=!1;n!==d.alias&&(u.alias=n,p=!0),l!==d.editable&&(u.editable=l,p=!0),s.push(u),p&&e++})),0===e&&s.length===n.length&&(s=null)}else s=(0,N.d9)(e);(null===(i=s)||void 0===i?void 0:i.length)&&(0,U.RB)(r,s,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=null===e||void 0===e?void 0:e.fields;if(!e||null===i||void 0===i||!i.length)return null;const{subtypes:n,subtypeField:o}=e,s=null===n||void 0===n?void 0:n.find((e=>e.code===r)),l=null===s||void 0===s?void 0:s.defaultValues,a=null===s||void 0===s?void 0:s.domains,d=[];for(const y of i){var u,p;const e=y.clone(),{name:i}=e,n=null===t||void 0===t?void 0:t.find((e=>e.name===i));if(e.visible=!t||!!n,n){const{alias:t,editable:r}=n;t&&(e.alias=t),!1===r&&(e.editable=!1)}const s=null!==(u=null===l||void 0===l?void 0:l[i])&&void 0!==u?u:null;e.defaultValue=i===o?r:s;const c=null!==(p=null===a||void 0===a?void 0:a[i])&&void 0!==p?p:null;e.domain=i===o?null:c?"inherited"===c.type?e.domain:c.clone():null,d.push(e)}return d}get floorInfo(){var e;return null===(e=this.parent)||void 0===e?void 0:e.floorInfo}get geometryType(){var e;return null===(e=this.parent)||void 0===e?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||D.Z.getLogger(ae).error(pe("objectIdField")),null===(e=this.parent)||void 0===e?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,Z.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new V.Z({symbol:oe(e)})}(e.geometryType):null}readRendererFromService(e,t,r){var i,n;if("Table"===t.type)return null;const o=null===(i=t.drawingInfo)||void 0===i?void 0:i.renderer,s=re(o,t,r);let l;const{subtypeCode:a}=this;if(null!=a&&function(e,t){return!!t&&"unique-value"===(null===e||void 0===e?void 0:e.type)&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}(s,t.subtypeField)){var d;const e=null===(d=s.uniqueValueInfos)||void 0===d?void 0:d.find((e=>{let{value:t}=e;return(t="number"==typeof t?String(t):t)===String(a)}));e&&(l=new V.Z({symbol:e.symbol}))}else"simple"!==(null===s||void 0===s?void 0:s.type)||(null===(n=s.visualVariables)||void 0===n?void 0:n.length)||(l=s);return l}readRenderer(e,t,r){var i,n;const o=null===t||void 0===t||null===(i=t.layerDefinition)||void 0===i||null===(i=i.drawingInfo)||void 0===i?void 0:i.renderer;if(!o)return;const s=null===(n=o.visualVariables)||void 0===n?void 0:n.some((e=>"rotationInfo"!==e.type));return s?void 0:re(o,t,r)||void 0}get spatialReference(){var e;return null===(e=this.parent)||void 0===e?void 0:e.spatialReference}readTemplatesFromService(e,t){return[le(this.subtypeCode,t)]}readTitleFromService(e,t){const r=se(this.subtypeCode,t);return null!=r?r.name:null}get url(){var e;return null===(e=this.parent)||void 0===e?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!(null===(e=this.parent)||void 0===e||!e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw pe("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw pe("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw pe("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s.Z("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw pe("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:n}=this;if(r){const{displayField:e,editFieldsInfo:o,objectIdField:s}=r;t={displayField:e,editFieldsInfo:o,fields:i,objectIdField:s,title:n}}return(0,X.eZ)(t,e)}createQuery(){if(!this.parent)throw pe("createQuery");const e=(0,x.rP)(this.parent),t="".concat(this.parent.subtypeField,"=").concat(this.subtypeCode);return e.where=(0,p._)(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return $.some((e=>this.originIdOf(e)===v.s3.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw pe("queryAttachments");const i=e.clone();return i.where=ue(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){var r;const i=await this.load();if(!i.parent)throw pe("queryFeatures");const n=null!==(r=K.Z.from(e))&&void 0!==r?r:i.createQuery();return null!=e&&(n.where=ue(n.where,i.parent.subtypeField,i.subtypeCode)),i.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"capabilities",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"effectiveCapabilities",null),(0,i._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],de.prototype,"charts",void 0),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],de.prototype,"editingEnabled",void 0),(0,i._)([(0,c.Cb)({type:Boolean,readOnly:!0})],de.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"elevationInfo",null),(0,i._)([(0,c.Cb)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],de.prototype,"fieldOverrides",void 0),(0,i._)([(0,Q.c)("fieldOverrides")],de.prototype,"writeFieldOverrides",null),(0,i._)([(0,c.Cb)({...te.fields,readOnly:!0,json:{read:!1}})],de.prototype,"fields",null),(0,i._)([(0,c.Cb)(te.fieldsIndex)],de.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"floorInfo",null),(0,i._)([(0,c.Cb)({type:J.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],de.prototype,"formTemplate",void 0),(0,i._)([(0,c.Cb)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],de.prototype,"id",void 0),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"geometryType",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"type",void 0),(0,i._)([(0,c.Cb)(ne((0,N.d9)(A.iR)))],de.prototype,"labelsVisible",void 0),(0,i._)([(0,c.Cb)({type:[Y.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:z.r},write:{ignoreOrigin:!0}}})],de.prototype,"labelingInfo",void 0),(0,i._)([(0,c.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],de.prototype,"layerType",void 0),(0,i._)([(0,c.Cb)(ne((0,N.d9)(A.rn)))],de.prototype,"legendEnabled",void 0),(0,i._)([(0,c.Cb)({type:["show","hide"]})],de.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)((()=>{const e=(0,N.d9)(A.rO);return e.json.origins.service.read=!1,ne(e)})())],de.prototype,"minScale",void 0),(0,i._)([(0,c.Cb)((()=>{const e=(0,N.d9)(A.u1);return e.json.origins.service.read=!1,ne(e)})())],de.prototype,"maxScale",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],de.prototype,"effectiveScaleRange",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"objectIdField",null),(0,i._)([(0,c.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],de.prototype,"opacity",void 0),(0,i._)([(0,c.Cb)({clonable:!1})],de.prototype,"parent",void 0),(0,i._)([(0,c.Cb)(ne((0,N.d9)(A.C_)))],de.prototype,"popupEnabled",void 0),(0,i._)([(0,c.Cb)({type:P.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],de.prototype,"popupTemplate",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],de.prototype,"defaultPopupTemplate",null),(0,i._)([(0,c.Cb)({types:ee,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],de.prototype,"renderer",null),(0,i._)([(0,h.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],de.prototype,"readRendererFromService",null),(0,i._)([(0,h.r)("renderer",["layerDefinition.drawingInfo.renderer"])],de.prototype,"readRenderer",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"spatialReference",null),(0,i._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],de.prototype,"subtypeCode",void 0),(0,i._)([(0,c.Cb)({type:[B.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],de.prototype,"templates",void 0),(0,i._)([(0,h.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],de.prototype,"readTemplatesFromService",null),(0,i._)([(0,c.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],de.prototype,"title",void 0),(0,i._)([(0,h.r)("service","title",["subtypes"])],de.prototype,"readTitleFromService",null),(0,i._)([(0,c.Cb)({readOnly:!0,json:{read:!1}})],de.prototype,"url",null),(0,i._)([(0,c.Cb)({readOnly:!0})],de.prototype,"userHasUpdateItemPrivileges",null),(0,i._)([(0,c.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],de.prototype,"visible",void 0),de=(0,i._)([(0,b.j)(ae)],de);const ue=(e,t,r)=>{const i=new RegExp("".concat(t,"\\s*=\\s*\\d+")),n="".concat(t,"=").concat(r),o=null!==e&&void 0!==e?e:"";return i.test(o)?o.replace(i,n):(0,p._)(n,o)},pe=e=>new s.Z("This sublayer must have a parent SubtypeGroupLayer in order to use ".concat(e)),ye=de;var ce=r(57370),he=r(26704),be=r(84933);const ve="SubtypeGroupLayer";function fe(e,t){return new s.Z("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}const ge=(0,L.v)();let me=class extends((0,S.B)((0,_.o1)((0,w.h)((0,j.n)((0,E.M)((0,O.Q)((0,m.Y)((0,F.q)((0,I.I)((0,a.R)((0,C.N)((0,g.V)((0,n.J)(f.Z)))))))))))))){constructor(){super(...arguments),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(o.Z.ofType(ye)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,d.Ds)((async(e,t,i)=>{const{save:n,saveAs:o}=await r.e(2224).then(r.bind(r,2224));switch(e){case be.x.SAVE:return n(this,t);case be.x.SAVE_AS:return o(this,i,t)}})),this.addHandles((0,u.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),u.Z_))}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.r9).then((async()=>{if(!this.url)throw new s.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,x.nU)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,x.sX)(this)}get parsedUrl(){const e=(0,y.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,y.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,t){let{name:r}=t;return this.url?(0,T.a7)(this.url,r):r}async addAttachment(e,t){return(0,x.JD)(this,e,t,ve)}async updateAttachment(e,t,r){return(0,x.Y5)(this,e,t,r,ve)}async applyEdits(e,t){return(0,x.Jj)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,d.Hl)(Promise.all([r.e(7607),r.e(9623),r.e(1323)]).then(r.bind(r,81323)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,x.rP)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,p._)("".concat(this.subtypeField," IN (").concat(t.join(","),")"),this.definitionExpression),e}async deleteAttachments(e,t){return(0,x.FV)(this,e,t,ve)}async fetchRecomputedExtents(e){return(0,x.Ci)(this,e,ve)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,l.G)(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return(0,x.SU)(this,e,t,ve)}async queryFeatures(e,t){var r,i;const n=await this.load(),o=null!==(r=K.Z.from(e))&&void 0!==r?r:n.createQuery(),s=null!==(i=o.outFields)&&void 0!==i?i:[];s.includes(this.subtypeField)||(s.push(this.subtypeField),o.outFields=s);const l=await n.source.queryFeatures(o,t);if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return l}async queryObjectIds(e,t){return(0,x.tD)(this,e,t,ve)}async queryFeatureCount(e,t){return(0,x.VG)(this,e,t,ve)}async queryExtent(e,t){return(0,x.KE)(this,e,t,ve)}async queryRelatedFeatures(e,t){return(0,x.kp)(this,e,t,ve)}async queryRelatedFeaturesCount(e,t){return(0,x.C9)(this,e,t,ve)}async save(e){return this._debouncedSaveOperations(be.x.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(be.x.SAVE_AS,t,e)}write(e,t){var r;const{origin:i,layerContainerType:n,messages:o}=t;if(this.isTable){if("web-scene"===i||"web-map"===i&&"tables"!==n)return null!==o&&void 0!==o&&o.push(fe(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===i&&"tables"===n)return null!==o&&void 0!==o&&o.push(fe(this,"using a non-table source cannot be written to tables in web maps")),null;return null!==(r=this.sublayers)&&void 0!==r&&r.length?super.write(e,t):(null!==o&&void 0!==o&&o.push(new s.Z("web-document-write:invalid-property","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer"),{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,he.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var t;this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(null===(t=this.subtypes)||void 0===t||!t.length)throw new s.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,Z.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,x.gG)(this)}_verifyFields(){var e,t,r;const i=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+i+")"),this.isTable||-1!==i.search(/\/FeatureServer\//i)||(null===(r=this.fields)||void 0===r?void 0:r.some((e=>"geometry"===e.type)))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+i+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,this._sublayerLookup.set(t.subtypeCode,t)})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,this._sublayerLookup.delete(t.subtypeCode)})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,i._)([(0,c.Cb)({readOnly:!0})],me.prototype,"createQueryVersion",null),(0,i._)([(0,c.Cb)({readOnly:!0})],me.prototype,"editingEnabled",null),(0,i._)([(0,c.Cb)({readOnly:!0})],me.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,c.Cb)({...ge.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],me.prototype,"fields",void 0),(0,i._)([(0,c.Cb)(ge.fieldsIndex)],me.prototype,"fieldsIndex",void 0),(0,i._)([(0,c.Cb)(A.id)],me.prototype,"id",void 0),(0,i._)([(0,c.Cb)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],me.prototype,"listMode",void 0),(0,i._)([(0,c.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],me.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.Cb)(ge.outFields)],me.prototype,"outFields",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],me.prototype,"parsedUrl",null),(0,i._)([(0,c.Cb)({clonable:!1})],me.prototype,"source",null),(0,i._)([(0,c.Cb)({type:o.Z.ofType(ye),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((e=>{let{code:i}=e;const n=new ye({subtypeCode:i});return n.read(t,r),n}));return new(o.Z.ofType(ye))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),n=v.s3.PORTAL_ITEM;let o=!0;if((0,v.M9)(i)===n&&(0,v.M9)(r.origin)>n){const t=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||t}return{enabled:o,ignoreOrigin:!0}}}}})],me.prototype,"sublayers",void 0),(0,i._)([(0,c.Cb)({type:ce.Z})],me.prototype,"timeInfo",void 0),(0,i._)([(0,c.Cb)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],me.prototype,"title",void 0),(0,i._)([(0,h.r)("service","title",["name"])],me.prototype,"readTitleFromService",null),(0,i._)([(0,c.Cb)({json:{read:!1}})],me.prototype,"type",void 0),me=(0,i._)([(0,b.j)("esri.layers.SubtypeGroupLayer")],me);const we=me}}]);
//# sourceMappingURL=150.691c6175.chunk.js.map