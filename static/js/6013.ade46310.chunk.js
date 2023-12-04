"use strict";(self.webpackChunksc_utility=self.webpackChunksc_utility||[]).push([[6013],{21734:(e,t,i)=>{i.d(t,{C:()=>_,b:()=>m});var s,r,n=i(30168),o=i(15226),a=i(116),l=i(41012),h=i(82999),d=i(95276),c=i(98634),u=i(64201),p=i(25920),g=i(4760);function m(e){const t=new u.kG,{vertex:i,fragment:m}=t;return(0,l.Sv)(i,e),t.attributes.add(g.T.POSITION,"vec3"),t.attributes.add(g.T.UV0,"vec2"),t.varyings.add("vUV","vec2"),e.multipassEnabled&&t.varyings.add("depth","float"),i.code.add((0,c.H)(s||(s=(0,n.Z)(["\n    void main(void) {\n      vUV = uv0;\n      ","\n      gl_Position = proj * view * vec4(position, 1.0);\n    }\n  "])),e.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":"")),t.include(o.l,e),m.uniforms.add(new h.A("size",(e=>e.size))),m.uniforms.add(new d.N("color1",(e=>e.color1))),m.uniforms.add(new d.N("color2",(e=>e.color2))),m.include(a.Y),m.code.add((0,c.H)(r||(r=(0,n.Z)(["\n    void main() {\n      ","\n      vec2 uvScaled = vUV / (2.0 * size);\n\n      vec2 uv = fract(uvScaled - 0.25);\n      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);\n      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));\n      float t = mix(abs(ab.x + ab.y), 0.5, fade);\n\n      fragColor = mix(color2, color1, t);\n      ","\n    }\n  "])),e.multipassEnabled?"terrainDepthTest(depth);":"",e.transparencyPassType===p.A.Color?"fragColor = premultiplyAlpha(fragColor);":"")),t}const _=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},66013:(e,t,i)=>{i.r(t),i.d(t,{default:()=>rt});var s=i(27366),r=i(7138),n=i(92026),o=i(49861),a=(i(25243),i(63780),i(93169),i(69912)),l=i(77671),h=i(98074),d=i(51817),c=i(94172),u=i(79803),p=i(29691),g=i(16889),m=i(47898),_=i(88396),y=i(6394),f=i(11186),v=i(71353),C=i(67077),L=i(83448),w=i(78952),S=i(5986);function b(e,t,i,s,r){(0,f.c)(P,e),(0,f.g)(A,e,t),(0,S.S)(P,i,P,r),(0,S.S)(A,i,A,r),(0,f.f)(s,A,P),(0,f.n)(s,s)}const P=(0,v.c)(),A=(0,v.c)();var M=i(68859),V=i(67751),G=i(14320),D=i(39406),x=i(66504),R=i(74702),z=i(2170),T=i(80885),O=i(94393),E=i(15559),I=i(80064);function j(e,t,i){const s=new E._q;return(0,E.cA)(s,[e[0],e[1]],[t[0],t[1]],i),s.distance}function W(e,t,i,s){const r=F;return(0,O.k)(e,s,U)&&(0,O.k)(t,s,k)&&(0,O.k)(i,s,H)?(r.setPoint(0,0,U),r.setPoint(0,1,k),r.setPoint(0,2,H),Math.abs((0,z.geodesicArea)(r,"square-meters"))):0}const U=(0,v.c)(),k=(0,v.c)(),H=(0,v.c)(),F=new T.Z({rings:[[U,k,H]],spatialReference:w.Z.WGS84}),q=(0,v.c)();var N=i(26243),B=i(77648),Z=i(68860),K=i(79347);i(55652),i(25003);(0,v.c)(),(0,v.c)();function Y(e){return(0,K.e)(function(e){const t=new Float64Array(2*e.length);for(let i=0;i<e.length;++i){const s=e[i],r=2*i;t[r]=s[0],t[r+1]=s[1]}return t}(e),[],2)}class X{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e,t){this.validMeasurement=!1,this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=(0,v.c)(),this.areaCentroidRenderCoords=(0,v.c)(),this.geodesicAreaCentroidRenderCoords=(0,v.c)(),this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=(0,v.c)(),this._planeWorldCoords=(0,C.c)(),this._worldUp=(0,v.c)(),this._worldTangent=(0,v.c)(),this._frame=[(0,v.c)(),(0,v.c)(),(0,v.c)()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=(0,v.c)(),this._tempV=(0,v.c)(),this._tempVec3=(0,v.c)(),this._tempSphere={center:(0,v.c)(),radius:0},this._sceneView=e,this.unitNormalizer=t}update(e,t,i,s,r,n){const o=null!=t,a=this._pathVersion===e.version,l=this._hasCursorPoint===o,h=this._mode===r;return!(a&&!n&&l&&h&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=o,this._updateCursorSegmentLength(e,t),this._update(e,t,i,s,r),!0)}_update(e,t,i,s,r){const n=this.unitNormalizer,o=this._sceneView.renderSpatialReference,a=this.unitNormalizer.spatialReference;let l=e.numVertices;const h=!(null==t||t.equals(e.lastPoint)||l>2&&t.equals(e.firstPoint));h&&(l+=1);const d=!e.polygonIsClosed&&l>2,c=e.polygonIsClosed||d;this._resize(l);const g=(0,p.rS)(i.spatialReference),_=(0,u.canProjectWithoutEngine)(i.spatialReference,g)&&(0,u.canProjectToWGS84ComparableLonLat)(i.spatialReference),{positionsGeographic:y,positionsWorldCoords:v,positionsRenderCoords:C,positionsSpherical:L}=this,w=(e,t)=>{(function(e,t){var i;t.hasZ||(t.z=null!==(i=(0,B.KO)(e,t,"ground"))&&void 0!==i?i:0)})(i.elevationProvider,e),(0,M.K)(e,v[t],a),(0,M.K)(e,C[t],o),_&&((0,V.U)(e,y[t]),(0,M.K)(e,L[t],g),(0,f.n)(L[t],L[t]))};e.forEachVertexPosition(((e,t)=>w(e,t))),h&&w(t,l-1);const S=this._updatePathLengths(c);if(this.pathLength=this._length>1?(0,m.yG)(n.normalizeDistance(S),"meters"):null,_){const e=this._updateGeodesicPathLengths(c,a);this.geodesicPathLength=this._length>1?(0,m.yG)(e,"meters"):null}else this.geodesicPathLength=null;if(this._updateMode(r),!c)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(i,n,o,a,s),_&&this._updateGeodesicArea(i),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push((0,v.c)()),this.positionsRenderCoords.push((0,v.c)()),this.positionsProjectedWorldCoords.push((0,y.a)()),this.positionsFittedRenderCoords.push((0,v.c)()),this.positionsGeographic.push((0,v.c)()),this.positionsSpherical.push((0,v.c)()),this.positionsStereographic.push((0,y.a)()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const t=this.positionsWorldCoords,i=this.pathSegmentLengths;let s=0;for(let r=0;r<this._length;++r){const n=i[r]=(0,f.o)(t[r],t[(r+1)%this._length]);(r<this._length-1||e)&&(s+=n)}return s}_updateGeodesicPathLengths(e,t){const i=this.positionsGeographic,s=this.geodesicPathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const o=s[n]=j(i[n],i[(n+1)%this._length],null!==t&&void 0!==t?t:void 0);(n<this._length-1||e)&&(r+=o)}return r}_updateAreaAndPerimeterLength(e,t,i,s,r){const n=e.renderCoordsHelper,o=this.positionsWorldCoords,a=this.positionsRenderCoords,l=this.positionsProjectedWorldCoords,h=this.positionsFittedRenderCoords,d=this._planeWorldCoords,c=this._centroidRenderCoords;(0,N.H)(a,c),n.worldUpAtPosition(c,this._worldUp),n.worldBasisAtPosition(c,G.R.X,this._worldTangent),b(c,this._worldUp,i,this._worldUp,s),b(c,this._worldTangent,i,this._worldTangent,s),o.length>2&&function(e,t){if(e.length<3)throw new Error("need at least 3 points to fit a plane");(0,I.pG)(e[0],e[1],e[2],t)}(o,d),this.fittingMode=this._selectFittingMode(d,o,this._worldUp,r);let u=0;if("horizontal"===this.fittingMode){let e=-1/0;a.forEach(((t,i)=>{const s=n.getAltitude(a[i]);s>e&&(e=s,u=i)}))}const p=o[u];let g=d,y=this._worldTangent;"horizontal"===this.fittingMode?g=this._worldUp:"vertical"===this.fittingMode&&(g=this._tempVec3,y=this._worldUp,(0,I.T)(d,this._worldUp,g)),(0,f.c)(this._frame[2],g),(0,I.T)(y,g,this._frame[0]),(0,f.b)(this._frame[1],this._frame[0],this._frame[2]),(0,f.E)(this._frame[1],this._frame[1]);const v=this._tempVec3,C=this._tempU,L=this._tempV;for(let m=0;m<this._length;++m){const e=l[m],t=h[m];(0,f.f)(v,o[m],p),(0,_.s)(e,(0,f.j)(this._frame[0],v),(0,f.j)(this._frame[1],v)),(0,f.i)(C,this._frame[0],e[0]),(0,f.i)(L,this._frame[1],e[1]),(0,f.g)(v,C,L),(0,f.g)(v,v,p),(0,S.S)(v,s,t,i)}this.perimeterLength=this._length>0?(0,m.yG)(t.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,(0,N.H)(h,this.areaCentroidRenderCoords),(0,S.S)(this.areaCentroidRenderCoords,i,this.areaCentroidWorldCoords,s),this._updateIntersectingSegments(),this.area=0===this.intersectingSegments.size?(0,m.ne)(t.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:t,spatialReference:i}=e,{positionsSpherical:s,positionsStereographic:r}=this,n=this._tempVec3,o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const s=(e,t)=>{if(0===t[0]&&0===t[1]&&0===t[2])return!1;for(let i=0;i<e.length;++i)if((0,f.j)(t,e[i])<-1e-6)return!1;return!0};if(0===e.length)return!1;if(1===e.length)return t&&(0,f.c)(t,e[0]),!0;(0,f.s)(q,0,0,0);for(let r=0;r<e.length;++r)(0,f.g)(q,q,e[r]);if((0,f.n)(q,q),s(e,q))return t&&(0,f.c)(t,q),!0;if(!i)return!1;for(let r=0;r<e.length;++r)for(let i=0;i<e.length;++i)if(r!==i&&((0,f.b)(q,e[r],e[i]),(0,f.n)(q,q),s(e,q)))return t&&(0,f.c)(t,q),!0;return!1}(s,n);if(!o)return void(this.geodesicArea=null);const a=this._tempU,l=this._tempV;(0,I._F)(n,a,l);for(let h=0;h<this._length;++h){const e=(0,f.j)(s[h],a),t=(0,f.j)(s[h],l),i=(0,f.j)(s[h],n);(0,_.s)(r[h],e/i,t/i)}(0,f.i)(n,n,(0,L.Iu)(i).radius),t.toRenderCoords(n,(0,p.rS)(i),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=o&&0===this.geodesicIntersectingSegments.size?(0,m.ne)(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,t=this.perimeterSegmentLengths;let i=0;for(let s=0;s<this._length;++s)i+=t[s]=(0,_.d)(e[s],e[(s+1)%this._length]);return i}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,t=this.intersectingSegments;t.clear();for(let i=0;i<this._length;++i)for(let s=i+2;s<this._length;++s){if((s+1)%this._length===i)continue;const r=e[i],n=e[(i+1)%this._length],o=e[s],a=e[(s+1)%this._length];(0,x.UT)(r,n,o,a)&&(t.add(i),t.add(s))}}_computeArea(){const e=this.positionsProjectedWorldCoords,t=this.triangleIndices=(0,D.mi)(Y(e));let i=0;for(let s=0;s<t.length;s+=3)i+=(0,R.wu)(e[t[s]],e[t[s+1]],e[t[s+2]]);return i}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,t=this.geodesicIntersectingSegments;t.clear();for(let i=0;i<this._length;++i)for(let s=i+2;s<this._length;++s){if((s+1)%this._length===i)continue;const r=e[i],n=e[(i+1)%this._length],o=e[s],a=e[(s+1)%this._length];(0,x.UT)(r,n,o,a)&&(t.add(i),t.add(s))}}_computeGeodesicArea(){const e=this.positionsGeographic,t=this.positionsStereographic,i=this.geodesicTriangleIndices=(0,D.mi)(Y(t));let s=0;for(let r=0;r<i.length;r+=3)s+=W(e[i[r]],e[i[r+1]],e[i[r+2]],w.Z.WGS84);return s}_selectFittingMode(e,t,i,s){const r=t.map((t=>Math.abs(function(e,t){return(0,f.j)(e,t)+e[3]}(e,t)))).reduce(((e,t)=>Math.max(e,t)),0);!function(e,t){const i=t.center;(0,f.s)(i,0,0,0);for(let r=0;r<e.length;++r)(0,f.g)(i,i,e[r]);(0,f.i)(i,i,1/e.length);let s=0;for(let r=0;r<e.length;++r)s=Math.max(s,(0,f.a)(i,e[r]));t.radius=Math.sqrt(s)}(t,this._tempSphere);const n=r/(2*this._tempSphere.radius),o=n<s.maxRelativeErrorCoplanar,a=n<s.maxRelativeErrorAlmostCoplanar;let l="horizontal";return o?l="oblique":a&&(l=Math.abs((0,f.j)(i,e))>Math.cos((0,g.Vl)(s.verticalAngleThreshold))?"horizontal":"vertical"),l}_updateCursorSegmentLength(e,t){const i=e.lastPoint;e.isValidPolygon||null==i||null==t?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=(0,m.yG)(function(e,t){if(!(0,V.U)(e,U)||!(0,V.U)(t,k))return 0;const i=new E._q;return(0,E.cA)(i,[U[0],U[1]],[k[0],k[1]]),i.distance}(i,t),"meters"),this.stagedSegmentLength=(0,m.yG)(this.unitNormalizer.normalizeDistance(function(e,t,i){return(0,M.K)(e,U,i)&&(0,M.K)(t,k,i)?(0,f.o)(U,k):0}(i,t,this.unitNormalizer.spatialReference)),"meters"))}_updateMode(e){if(e===d.e.Auto){this.actualMeasurementMode="euclidean";let e=0;null!=this.geodesicPathLength&&(e+=this.geodesicPathLength.value),e>Q&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===d.e.Euclidean?"euclidean":"geodesic";null==this.geodesicPathLength&&(this.actualMeasurementMode="euclidean"),this._mode=e}}const Q=1e5;var J=i(39409);let $=class extends r.Z{constructor(e){super(e)}initialize(){const e=this.view.spatialReference,t=(0,p.rS)(e),i=t===p.GG?p.wY:t,s=!e||(0,u.canProjectWithoutEngine)(e,i)?i:e,r=new J.D(s);this._measurementDataManager=new X(this.view,r),this.addHandles([this.analysisViewData.path.on("change",(()=>this._update())),(0,c.YP)((()=>this.analysisViewData.stagedPoint),(()=>this._update()),c.Z_),(0,c.YP)((()=>this.analysisViewData.mode),(()=>this._update()),c.Z_)]),this._update()}_update(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{analysisViewData:t,view:i}=this;this._measurementDataManager.update(t.path,t.stagedPoint,i,{maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80},t.mode,e)&&(t.measurementData=this._measurementDataManager.getData())}};(0,s._)([(0,o.Cb)({constructOnly:!0})],$.prototype,"view",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],$.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],$.prototype,"analysisViewData",void 0),$=(0,s._)([(0,a.j)("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],$);var ee=i(91505),te=i(32718),ie=i(585),se=i(65156),re=i(33906),ne=i(14813),oe=i(84954),ae=i(95172);const le="esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper",he=te.Z.getLogger(le);let de=class extends ee.Z.EventedAccessor{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),this._version=0,this._internalGeometryChange=!1,this._extent=(0,se.cS)()}set areaMeasurement(e){this._set("areaMeasurement",e),null!=e&&null!=this.view&&this._initialize(e,this.view)}set view(e){this._set("view",e),null!=e&&null!=this.areaMeasurement&&this._initialize(this.areaMeasurement,e)}get constructed(){return null!=this.areaMeasurement&&null!=this.view}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||0===this._editGeometry.components.length}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const e=(0,se.cS)(this._extent);return this.forEachVertex((t=>{(0,se.Ho)(e,t.pos)})),e}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(e,t){this.removeAllHandles(),this.addHandles((0,c.YP)((()=>e.geometry),(()=>{this._updateEditGeometryFromModelGeometry(e,t)}),c.tX)),this._makeDirty(!0)}_makeDirty(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),e&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(e,t){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let i=e.geometry;if(null!=i){const s=(0,u.tryProjectWithZConversion)(i,t.spatialReference);null==s&&(0,re.e)(e,i.spatialReference,he),i=s}this._editGeometryOperations=null!=i?ae.c.fromGeometry(i,t.state.viewingMode):new ae.c(new oe.XE("polygon",(0,ne.Y6)(!0,!1,t.spatialReference))),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",(t=>{this._makeDirty(null!=t.addedVertices||null!=t.removedVertices),this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1})),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const e=[];return this.forEachVertex((t=>{e.push(t)})),e}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getFirstVertex();if(null!=e)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(null!=e)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}getVertex(e){if(!this.constructed||0===this._editGeometry.components.length||0===this._editGeometry.components[0].vertices.length)return null;const t=this._editGeometry.components[0].vertices[0];let i=t;do{if(i.index===e)return i;i=i.rightEdge.rightVertex}while(i!==t&&null!=i);return null}getVertexPositionAsPoint(e){return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}getVertexPositionAsPointFromIndex(e){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e).pos)}forEachVertex(e){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)}forEachVertexPosition(e){const t=this._editGeometry.coordinateHelper;this.forEachVertex(((i,s)=>{t.vectorToPoint(i.pos,ce),e(ce,s)}))}clear(){null!=this.areaMeasurement&&(this.areaMeasurement.geometry=null)}add(e){if(!this.constructed)return null;if(0===this._editGeometry.components.length){const e=this.view;this._editGeometry.components.push(new oe.wA(e.spatialReference,e.state.viewingMode))}const t=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),t}close(){if(!this.constructed||0===this._editGeometry.components.length)return null;const e=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),e}ensureContains(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=!1;if(this._editGeometry.components.forEach((t=>{t.iterateVertices((t=>{t===e&&(i=!0)}))})),!i)throw new Error("vertex doesnt exist ".concat(t));return i}setVertexPosition(e,t){if(!this.constructed)return null;const i=this._editGeometryOperations.setVertexPosition(e,this._editGeometry.coordinateHelper.pointToVector(t));return this.emit("change"),i}equals(e){if(this.numVertices!==e.numVertices)return!1;let t=!0;return this.forEachVertexPosition(((i,s)=>{const r=e.getVertexPositionAsPointFromIndex(s);i.equals(r)||(t=!1)})),!!t}};(0,s._)([(0,o.Cb)({value:null})],de.prototype,"areaMeasurement",null),(0,s._)([(0,o.Cb)({value:null})],de.prototype,"view",null),(0,s._)([(0,o.Cb)()],de.prototype,"isEmptyPolygon",null),(0,s._)([(0,o.Cb)()],de.prototype,"isValidPolygon",null),(0,s._)([(0,o.Cb)()],de.prototype,"extent",null),(0,s._)([(0,o.Cb)()],de.prototype,"spatialReference",null),(0,s._)([(0,o.Cb)()],de.prototype,"numVertices",null),(0,s._)([(0,o.Cb)()],de.prototype,"polygonIsClosed",null),de=(0,s._)([(0,a.j)(le)],de);const ce=new ie.Z;i(59166);var ue=i(86950),pe=i(58935),ge=i(14226),me=i(81949),_e=i(61201),ye=i(33837),fe=i(90045),ve=i(52168),Ce=i(91526),Le=i(40779),we=i(56529),Se=i(4760),be=i(37081),Pe=i(23620),Ae=i(93822),Me=i(12594),Ve=i(64642),Ge=i(11983),De=i(82144),xe=i(31132),Re=i(7566),ze=i(78041),Te=i(27627),Oe=i(25920),Ee=i(21734),Ie=i(8548),je=i(36207);class We extends xe.A{initializeProgram(e){return new Te.$(e.rctx,We.shader.get().build(this.configuration),Re.i)}_setPipelineState(e){const t=this.configuration,i=e===Oe.A.NONE,s=e===Oe.A.FrontFace;return(0,je.sm)({blending:t.transparent?i?ke:(0,ze.j7)(e):null,depthTest:{func:(0,ze.Bh)(e)},depthWrite:i?t.writeDepth?je.LZ:null:(0,ze.K5)(e),colorWrite:je.BK,polygonOffset:i||s?t.polygonOffset?Ue:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}We.shader=new De.J(Ee.C,(()=>i.e(427).then(i.bind(i,50427))));const Ue={factor:0,units:-25},ke=(0,je.wK)(Ie.zi.SRC_ALPHA,Ie.zi.ONE,Ie.zi.ONE_MINUS_SRC_ALPHA,Ie.zi.ONE_MINUS_SRC_ALPHA);var He=i(33559),Fe=i(8883);class qe extends Fe.W{constructor(){super(...arguments),this.transparencyPassType=Oe.A.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}(0,s._)([(0,He.o)({count:Oe.A.COUNT})],qe.prototype,"transparencyPassType",void 0),(0,s._)([(0,He.o)()],qe.prototype,"transparent",void 0),(0,s._)([(0,He.o)()],qe.prototype,"writeDepth",void 0),(0,s._)([(0,He.o)()],qe.prototype,"polygonOffset",void 0),(0,s._)([(0,He.o)()],qe.prototype,"multipassEnabled",void 0),(0,s._)([(0,He.o)()],qe.prototype,"cullAboveGround",void 0),(0,s._)([(0,He.o)({constValue:!1})],qe.prototype,"occlusionPass",void 0);class Ne extends Ge.c{constructor(e){super(e,new Ze),this._configuration=new qe}getConfiguration(e,t){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}produces(e,t){return(t===be.H.Color||t===be.H.Alpha)&&(e===(this.parameters.transparent?this.parameters.writeDepth?Ae.r.TRANSPARENT_MATERIAL:Ae.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ae.r.OPAQUE_MATERIAL)||e===Ae.r.DRAPED_MATERIAL)}createGLMaterial(e){return new Be(e)}createBufferWriter(){return new Me.G(Ve.W1)}}class Be extends Pe.Z{beginSlot(e){return this.ensureTechnique(We,e)}}class Ze extends we.Mt{constructor(){super(...arguments),this.size=(0,y.f)(1,1),this.color1=(0,C.f)(.75,.75,.75,1),this.color2=(0,C.f)(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}}class Ke extends ve._{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=we.yD.OccludeAndTransparent,this._geometry=null,this._size=(0,y.f)(1,1),this._color1=(0,C.f)(1,.5,0,.5),this._color2=(0,C.f)(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){(0,_.j)(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){(0,fe.h)(e,this._color1)||((0,fe.c)(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){(0,fe.h)(e,this._color2)||((0,fe.c)(this._color2,e),this._updateMaterial())}_updateMaterial(){null!=this._checkerBoardMaterial&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new Ne({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){null!=this._checkerBoardMaterial&&e(this._checkerBoardMaterial)}createGeometries(e){if(null==this._geometry||null==this._checkerBoardMaterial)return;const t=Ye;(0,ge.B)(t,this.transform);const i=this._geometry,s=[],r=(0,v.c)();i.position.forEach((e=>{(0,f.f)(r,e,t),s.push(r[0],r[1],r[2])}));const n=[];i.uv.forEach((e=>{n.push(e[0],e[1])}));const o=new Le.Z(this._checkerBoardMaterial,[[Se.T.POSITION,new Ce.a(s,i.triangleIndices,3,!0)],[Se.T.UV0,new Ce.a(n,i.triangleIndices,2,!0)]]);e.addGeometry(o)}}const Ye=(0,v.c)();var Xe=i(9052),Qe=i(86700),Je=i(36257),$e=i(41201);let et=class extends r.Z{get _parameters(){const{accentColor:e,textColor:t}=this.view.effectiveTheme,i=(0,ue.O)(e),s=(0,ue.Ch)(e,.5),r=(0,ue.Ch)((0,ue.mj)(e),.5),n=(0,ue.mj)(t,ue.K6.Low);return{accentColor:i,transparentAccentColor:s,transparentContrastColor:r,intersectingLineColor:[1,.2,0,1],textColor:t,textBackgroundColor:(0,ue.G)(n,.6),textCalloutColor:(0,ue.G)(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,perimeterLength:this._perimeterLengthLabel}}}constructor(e){super(e),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=(0,v.c)(),this._originTransform=(0,me.a)(),this.messages=null,this.viewData=it,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:e,_parameters:t,view:i}=this;this._path=new ye.r({view:i,attached:!0,width:t.pathLineWidth,polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new ye.r({view:i,attached:!0,width:t.pathLineWidth,polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new ye.r({view:i,attached:!0,width:t.perimeterLineWidth,polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new ye.r({view:i,attached:!0,width:t.perimeterLineWidth,color:t.intersectingLineColor,polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new ye.r({view:i,attached:!0,width:t.projectionLineWidth,stipplePattern:(0,Qe.z5)(t.projectionLineStippleSize),polygonOffset:!0,renderOccluded:we.yD.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new Ke({view:i,attached:!0,isDecoration:!0});const s={attached:!0,view:i,isDecoration:!0};this._areaLabel=new _e.Kc({...s,fontSize:tt.Large}),this._perimeterLengthLabel=new _e.Kc({...s,fontSize:tt.Small}),this.addHandles([(0,c.YP)((()=>[e.mode,this.visible,e.unit,e.measurementData,e.stagedPoint]),(()=>this._update()),c.tX),(0,c.YP)((()=>{var e;return null===(e=i.state)||void 0===e?void 0:e.camera}),(()=>this._updateLabels()),c.tX),(0,Je.qe)((()=>this._updateMessageBundle())),(0,c.YP)((()=>this._parameters),(e=>{let{accentColor:t,transparentAccentColor:i,transparentContrastColor:s,textColor:r,textBackgroundColor:n,textCalloutColor:o}=e;const{_path:a,_intersectedPath:l,_perimeter:h,_projectionLines:d,_measurementArea:c,_areaLabel:u,_perimeterLengthLabel:p}=this;a.color=t,l.color=t,h.color=t,d.color=t,c.color1=i,c.color2=s,u.textColor=r,u.backgroundColor=n,u.calloutColor=o,p.textColor=r,p.backgroundColor=n,p.calloutColor=o}),c.nn)]),this._updateMessageBundle()}destroy(){this._measurementArea=(0,n.SC)(this._measurementArea),this._path=(0,n.SC)(this._path),this._intersectedPath=(0,n.SC)(this._intersectedPath),this._perimeter=(0,n.SC)(this._perimeter),this._intersectedPerimeter=(0,n.SC)(this._intersectedPerimeter),this._areaLabel=(0,n.SC)(this._areaLabel),this._perimeterLengthLabel=(0,n.SC)(this._perimeterLengthLabel),this._projectionLines=(0,n.SC)(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:e},analysisViewData:t}=this;null!=e&&(this._updateViewData(e,t.path,t.stagedPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(e,t,i){const s=e.validMeasurement,r="geodesic"===e.actualMeasurementMode,n=r?e.geodesicArea:e.area;let o=1;if(n){const t=this._toPreferredAreaUnit(n,this.analysisViewData.unit);o=(0,g.sk)(Math.sqrt(t.value)/Math.sqrt(300)),o*=Math.sqrt((0,Z.En)(1,t.unit,"square-meters")),o/=e.unitNormalizer.normalizeDistance(1)}const a={validMeasurement:s,numVertices:e.numVertices,hasStagedVertex:e.hasStagedVertex,path:t,pathVersion:t.version,stagedPoint:i,measurementData:e,mode:e.actualMeasurementMode,positionsGeographic:e.positionsGeographic,positionsRenderCoords:e.positionsRenderCoords,positionsProjected:e.positionsProjectedWorldCoords,positionsFittedRenderCoords:e.positionsFittedRenderCoords,intersectingSegments:r?e.geodesicIntersectingSegments:e.intersectingSegments,triangleIndices:r?e.geodesicTriangleIndices:e.triangleIndices,fittingMode:e.fittingMode,areaCentroid:r?e.geodesicAreaCentroidRenderCoords:e.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:s?0:t.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:o};this._set("viewData",a)}_updateOrigin(){const e=this.viewData;(0,N.H)(e.positionsRenderCoords,this._origin),(0,ge.d)(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(e){const t=this.viewData,i=this.view.renderCoordsHelper.spatialReference,s=t.mode,r=[],n=[],o=[],a=t.numVertices,l=t.validMeasurement?a:a-1;for(let d=0;d<l;++d){const l=t[e][d],h=t[e][(d+1)%a];let c=null;switch(s){case"euclidean":c=new Xe.y(l,h);break;case"geodesic":c=new Xe.u(l,h,i)}t.intersectingSegments.has(d)?o.push(c):n.push(c),r.push(c)}let h=null;return t.validMeasurement&&t.hasStagedVertex&&l>=2?h=r[r.length-2]:t.hasStagedVertex&&l>=1&&(h=r[r.length-1]),{all:r,nonIntersecting:n,intersecting:o,stagedSegment:h}}_updatePathSegments(){const{visible:e}=this,t=this._createSegments("positionsRenderCoords");this._path.setGeometryFromSegments(t.nonIntersecting,this._origin),this._path.visible=e,this._intersectedPath.setGeometryFromSegments(t.intersecting,this._origin),this._intersectedPath.visible=e,this._pathSegments=t.all}_updatePerimeterSegments(){const e=this.visible&&"euclidean"===this.viewData.mode,t=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(t.nonIntersecting,this._origin),this._perimeter.visible=e,this._intersectedPerimeter.setGeometryFromSegments(t.intersecting,this._origin),this._intersectedPerimeter.visible=e,this._perimeterSegments=t.all}_updateArea(){const e=this.viewData;switch(e.mode){case"euclidean":this._updateAreaEuclidean(e);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(e){const t=this.visible;e.validMeasurement&&0===e.intersectingSegments.size&&e.triangleIndices?(this._measurementArea.geometry={uv:e.positionsProjected,position:e.positionsFittedRenderCoords,triangleIndices:e.triangleIndices},this._measurementArea.size=[e.checkerSize,e.checkerSize],this._measurementArea.visible=t):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const e=this.viewData,t=this.visible,i=e.mode,s=e.numVertices;if(s>0&&e.validMeasurement&&"euclidean"===i){const i=[];for(let t=0;t<s;++t){const s=(0,v.c)();(0,f.f)(s,e.positionsRenderCoords[t],this._origin);const r=(0,v.c)();(0,f.f)(r,e.positionsFittedRenderCoords[t],this._origin),i.push([s,r])}this._projectionLines.geometry=i,this._projectionLines.visible=t}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:e}=this,{measurementData:t,mode:i,path:s}=e;if(!s)return;const r=this.visible,n=this._formatAreaLabel(this.messages,"geodesic"===i?t.geodesicArea:t.area,this.analysisViewData.unit);if(null!=n?(this._areaLabel.geometry={type:"point",point:e.areaCentroid},this._areaLabel.text=n,this._areaLabel.visible=e.validMeasurement&&0===e.intersectingSegments.size&&r):this._areaLabel.visible=!1,this._set("areaLabel",n),e.validMeasurement&&0===e.intersectingSegments.size){const i="geodesic"===e.mode,s=i?t.geodesicPathLength:t.validMeasurement?t.perimeterLength:t.pathLength,n=this._formatLengthLabel(this.messages,s,this.analysisViewData.unit);this._set("perimeterLengthLabel",n),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=n,this._perimeterLengthLabel.visible=!0;let o=!0;for(let r=0;r<e.numVertices;++r){const s=(e.perimeterLengthLabelSegmentIndex+r)%e.numVertices,n=i||!t.validMeasurement?this._pathSegments[s]:this._perimeterSegments[s];if(o=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;o=!1}this._perimeterLengthLabel.visible=o&&r}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(e,t){return(0,m.nn)(e,this._preferredAreaUnit(e,t))}_preferredAreaUnit(e,t){switch(t){case"metric":return(0,Z.ZI)(e.value,e.unit);case"imperial":return(0,Z.LV)(e.value,e.unit);default:return t}}_preferredLengthUnit(e,t){const i=this._deriveLengthUnitFromAreaUnit(t);switch(i){case"metric":return(0,Z.Y8)(e.value,e.unit);case"imperial":return(0,Z.Q7)(e.value,e.unit);default:return i}}_deriveLengthUnitFromAreaUnit(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(e,t,i){return e&&t&&(0,pe.VG)(e,t,this._preferredAreaUnit(t,i))}_formatLengthLabel(e,t,i){return e&&t&&(0,pe.VG)(e,t,this._preferredLengthUnit(t,i))}_updateMessageBundle(){this.loadingMessages=!0,(0,$e.ME)("esri/core/t9n/Units").then((e=>{this.messages=e,this.view&&this._update()})).finally((()=>{this.loadingMessages=!1}))}};var tt;(0,s._)([(0,o.Cb)()],et.prototype,"_parameters",null),(0,s._)([(0,o.Cb)()],et.prototype,"view",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"messages",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"viewData",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"analysisViewData",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],et.prototype,"areaLabel",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],et.prototype,"perimeterLengthLabel",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"loadingMessages",void 0),(0,s._)([(0,o.Cb)()],et.prototype,"visible",null),et=(0,s._)([(0,a.j)("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],et),function(e){e[e.Small=12]="Small",e[e.Large=16]="Large"}(tt||(tt={}));const it={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,pathVersion:-1,stagedPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null};let st=class extends((0,h.p)(r.Z)){constructor(e){super(e),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=d.e.Auto}initialize(){const{analysis:e,view:t}=this;this.path=new de({view:t,areaMeasurement:e}),this.analysisVisualization=new et({view:t,analysis:e,analysisViewData:this}),this.analysisController=new $({view:t,analysis:e,analysisViewData:this})}destroy(){this.analysisController=(0,n.SC)(this.analysisController),this.analysisVisualization=(0,n.SC)(this.analysisVisualization),this.path.destroy()}get updating(){var e;return!(null===(e=this.analysisVisualization)||void 0===e||!e.loadingMessages)}get result(){const{measurementData:e}=this;return null==e?{area:null,mode:null,perimeter:null}:"euclidean"===e.actualMeasurementMode?{area:e.area,perimeter:e.perimeterLength,mode:"euclidean"}:{area:e.geodesicArea,perimeter:e.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){var e;return null!==(e=this.analysis.unit)&&void 0!==e?e:this._defaultUnit}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};(0,s._)([(0,o.Cb)({readOnly:!0})],st.prototype,"type",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0,nonNullable:!0})],st.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"updating",null),(0,s._)([(0,o.Cb)()],st.prototype,"analysisVisualization",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"analysisController",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"result",null),(0,s._)([(0,o.Cb)()],st.prototype,"measurementData",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"viewData",null),(0,s._)([(0,o.Cb)()],st.prototype,"validMeasurement",null),(0,s._)([(0,o.Cb)()],st.prototype,"path",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"lastDraggedVertex",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"stagedPoint",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"mode",void 0),(0,s._)([(0,o.Cb)()],st.prototype,"unit",null),(0,s._)([(0,o.Cb)(l.Y)],st.prototype,"_defaultUnit",void 0),st=(0,s._)([(0,a.j)("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],st);const rt=st}}]);
//# sourceMappingURL=6013.ade46310.chunk.js.map