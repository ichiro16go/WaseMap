import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const MapComponent: React.FC = () => {
  // 東京タワーの位置情報
  const initialRegion = {
    latitude: 35.6586,
    longitude: 139.7454,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 35.6586, longitude: 139.7454 }}
          title="Tokyo Tower"
          description="This is Tokyo Tower!"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
