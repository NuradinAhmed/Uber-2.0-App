import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';


const NavigateCard = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();  //this is my navigation to get me the payload for to direction 



    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Nuradin</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                })
                            );
                            
                            navigation.navigate("RideOptionsCard"); //This action navigate has a payload from the RideOptionsCard screen 

                        }}
                        enablePoweredByContainer={false}
                        //this allows to provide googleAutomComplete search - the query function
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",  //languag supported for now is amharic - ethiopian 
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },

    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
