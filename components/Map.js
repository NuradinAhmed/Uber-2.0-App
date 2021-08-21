import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, selectDestination } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useRef } from "react";




const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null);
    

    useEffect(() => {
      //If there is no origin or destination then dont run this code! exit this block here
      if( !origin || !destination ) return;

      //zoom and fit to markers 
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50},
      });
    }, [origin, destination]);
  
     

    return (
        /*This MapView component is built so that features on the map (such as Markers, Polygons, etc.) 
            are specified as children of the MapView itself. This provides an intuitive and react-like API for declaratively
            controlling features on the map.
        Rendering a Map with an initial region
        */
       //we have attach the ref as mapRef to the mapView below 
      <MapView
          ref={mapRef}
          style={tw `flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >

        {origin && destination && (
            <MapViewDirections 
              lineDashPattern={[0]}
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="black"
            />  
        )}


        {origin?.location && (
            <Marker 

              coordinate= {{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"

            />
          )}

          {destination?.location && (
            <Marker

              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title="Destination"
              description={destination.description}
              identifier="destination"
            />

          )}
      </MapView>
    
    )
}

export default Map

const styles = StyleSheet.create({})
