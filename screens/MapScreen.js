import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';



const MapScreen = () => {
    //Here is for the next screen mapscreen which takes in a two views(div in react known as) and its styled in as tailwind
    // of half of page - and that is assigned to the Map for the first half of the page 


    //this is the for the second lower screen
    const Stack = createStackNavigator();

    return (
        <View>
            <Text></Text>
            
            <View style= {tw`h-1/2`}>
                <Map/> 
            </View> 


            <View style= {tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                    }}
                    />

                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}


                    />
                </Stack.Navigator>
                
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
