// import { View, Text, StyleSheet } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { MapView } from 'react-native-maps'
// import React from 'react'

// const Map = () => {
//   return (
//     <SafeAreaView className="bg-primary h-full">
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Map

import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  <Button className='items-center justify-center' title='Get location' onPress={userLocation}/>
  const [mapRegion, setMapRegion] = useState({
    latitude: 25.3439385,
    longitude: 81.9103755,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to acces location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  }
  useEffect(() => {
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker'/>
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});