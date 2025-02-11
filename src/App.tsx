import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteShell, CalciteTabs } from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { utilityPointLayer } from './layers';
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
