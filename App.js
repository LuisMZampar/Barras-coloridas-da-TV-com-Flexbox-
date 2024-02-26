import React from 'react';
import { View } from 'react-native';

function App() {
  const CoresBarras = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan"];
  const CoresQuadrados = ["brown", "gray", "lightblue", "gold", "indigo", "coral", "lightpink", "aquamarine"];

  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      <View style={{ flex: 6, flexDirection: "row", justifyContent: "center", alignItems: "stretch" }}>
        {CoresBarras.map((CoresBarras, index) => (
          <ColoredBox key={index} CoresBarras={CoresBarras} />
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        {CoresBarras.map((CoresBarras, index) => (
          <ColoredBox key={index} CoresBarras={CoresBarras} />
        ))}
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        {CoresQuadrados.map((CoresBarras, index) => (
          <LargeColoredBox key={index} CoresBarras={CoresBarras} />
        ))}
      </View>
    </View>
  );
}

const ColoredBox = ({ CoresBarras }) => (
  <View style={{ flex: 1, backgroundColor: CoresBarras }} />
);

const LargeColoredBox = ({ CoresBarras }) => (
  <View style={{ width: 260, height: 260, backgroundColor: CoresBarras }} />
);

export default App;