import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

interface Location {
  id: string;
  title: string;
  description: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  isVisited: boolean;
}

const MapPage = () => {
  const [locations, setLocations] = useState<Location[]>([
    {
      id: '1',
      title: 'スポット 1',
      description: '東京タワー',
      coordinate: {
        latitude: 35.6586,
        longitude: 139.7454,
      },
      isVisited: true,
    },
    {
      id: '2',
      title: 'スポット 2',
      description: '渋谷スクランブル交差点',
      coordinate: {
        latitude: 35.6595,
        longitude: 139.7004,
      },
      isVisited: false,
    },
    {
      id: '3',
      title: 'スポット 3',
      description: '浅草寺',
      coordinate: {
        latitude: 35.7147,
        longitude: 139.7966,
      },
      isVisited: false,
    },
  ]);

  const [region, setRegion] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  });

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleMarkerPress = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleVisitLocation = (id: string) => {
    setLocations(
      locations.map((loc) =>
        loc.id === id ? { ...loc, isVisited: true } : loc
      )
    );
    setSelectedLocation(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={location.coordinate}
            title={location.title}
            description={location.description}
            pinColor={location.isVisited ? 'green' : 'red'}
            onPress={() => handleMarkerPress(location)}
          />
        ))}
      </MapView>

      {selectedLocation && (
        <View style={styles.locationInfo}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationTitle}>{selectedLocation.title}</Text>
            <TouchableOpacity onPress={() => setSelectedLocation(null)}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <Text style={styles.locationDescription}>{selectedLocation.description}</Text>
          {!selectedLocation.isVisited && (
            <TouchableOpacity
              style={styles.visitButton}
              onPress={() => handleVisitLocation(selectedLocation.id)}
            >
              <Text style={styles.visitButtonText}>スタンプを獲得</Text>
            </TouchableOpacity>
          )}
          {selectedLocation.isVisited && (
            <View style={styles.visitedBadge}>
              <Ionicons name="checkmark-circle" size={20} color="white" />
              <Text style={styles.visitedText}>訪問済み</Text>
            </View>
          )}
        </View>
      )}
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
  locationInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  visitButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  visitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  visitedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  visitedText: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default MapPage;
