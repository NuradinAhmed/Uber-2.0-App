import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';


const MapScreen = () => {
    //Here is for the next screen mapscreen which takes in a two views(div in react known as) and its styled in as tailwind
    // of half of page - and that is assigned to the Map for the first half of the page 
    return (
        <View>
            <Text></Text>
            
            <View style= {tw`h-2/3`}>
                <Map/> 
            </View> 

            <View style= {tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
