/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { DropDownData } from './customClass';
import { utilityLineLayer, utilityPointLayer } from './layers';
import { dateUpdate } from './Query';
import { DropdownDataProvider } from './components/DropdownContext';
import Header from './components/Header';
import ActionPanel from './components/ActionPanel';
import MapDisplay from './components/MapDisplay';
import UndergroundSwitch from './components/UndergroundSwitch';

function App() {
  const [utilityPointLayerLoaded, setUtilityPointLayerLoaded] = useState<any>();
  useEffect(() => {
    utilityPointLayer.load().then(() => {
      setUtilityPointLayerLoaded(utilityPointLayer.loadStatus);
    });
  });

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '25vw' }}>
          <DropdownDataProvider>
            {utilityPointLayerLoaded === 'loaded' && <Chart />}
          </DropdownDataProvider>
        </CalciteTabs>

        {/* Header Display */}
        <Header />

        {/* Action Panel */}
        <ActionPanel />

        {/* Map Display */}
        <MapDisplay />

        {/* Underground Switch */}
        <UndergroundSwitch />
      </CalciteShell>
    </>
  );
}

export default App;
