import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin)

    return (
        /*This MapView component is built so that features on the map (such as Markers, Polygons, etc.) 
            are specified as children of the MapView itself. This provides an intuitive and react-like API for declaratively
            controlling features on the map.
        Rendering a Map with an initial region
        */
        <MapView
        style={tw `flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    
    )
}

export default Map

const styles = StyleSheet.create({})
