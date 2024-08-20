import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';

import {
  chainageLayer,
  ngcpDpwhRoad,
  ngcpPROW,
  ngcpPoleWA,
  pierHeadColumnLayerLayer,
  pierNoLayer,
  rowLayer,
  stationBoxLayer,
  stationLayer,
  utilityLineLayer,
  utilityLineLayer1,
  utilityPointLayer,
  utilityPointLayer1,
  viaductLayer,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const utilityGroupLayer = new GroupLayer({
  title: 'Utility Relocation',
  visible: true,
  visibilityMode: 'independent',
  layers: [utilityLineLayer1, utilityLineLayer, utilityPointLayer1, utilityPointLayer],
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [pierHeadColumnLayerLayer, stationBoxLayer, chainageLayer, pierNoLayer, rowLayer], //stationLayer,
});

const ngcpGroupLayer = new GroupLayer({
  title: 'NGCP Layers',
  visible: true,
  visibilityMode: 'independent',
  layers: [ngcpDpwhRoad, ngcpPROW, ngcpPoleWA],
});

map.add(viaductLayer);
map.add(ngcpGroupLayer);
map.add(alignmentGroupLayer);
map.add(utilityGroupLayer);
map.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map,
  camera: {
    position: {
      x: 120.9793,
      y: 14.61,
      z: 500,
    },
    tilt: 65,
  },
  zoom: 13,
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' || item.title === 'Viaduct' || item.title === 'Pier No'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

// Compass
var compass = new Compass({
  view: view,
});
view.ui.add(compass, 'top-right');

// Search
const sources = [
  {
    layer: pierNoLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    zoomScale: 1000,
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
  {
    layer: utilityPointLayer,
    searchFields: ['Id'],
    displayField: 'Id',
    exactMatch: false,
    outFields: ['Id'],
    name: 'Unique ID (Point)',
    placeholder: 'example: MER0001-X01',
  },
  {
    layer: utilityLineLayer1,
    searchFields: ['Id'],
    displayField: 'Id',
    exactMatch: false,
    outFields: ['Id'],
    name: 'Unique ID (Line)',
    placeholder: 'example: MER0001-X01',
  },
];

var searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Chainage or Utility ID',
  includeDefaultSources: false,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
