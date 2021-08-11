import React from 'react'
import { StyleSheet,  View, Image} from "react-native"
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import SafeAreaView from 'react-native-safe-area-view';
import  { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin} from "../slices/navSlice";



const HomeScreen = () => {    
    /*
    Dispatch and Action: 
        Info: Dispatch is like a guy - we shoot the action into the dataLayer with the payload which has the information we want change or manipulate in the 
                dateLayer
    */
    const dispatch = useDispatch();
    return (
      
        <SafeAreaView style={tw`bg-white h-full`}>
           
            <View style={tw`p-5`}>          
                <Image
                    style={{
                        width: 100,
                        height:100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                  
                />

                <GooglePlacesAutocomplete
                    //1.this is where we create google automcomplete function - placeholder with with textInput with container
                    placeholder="Where From ?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        // console.log(data);  //use this console to test out the data and detials of it in the local console.
                        // console.log(details);
                        //the way we push data out to the redux store is - we say dispacth and then pass in the action and in this case the action is setOrigin - blw exp.
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false} //this is the highlight that states the power by google - we settting it to false to hide it
                    minLength={2}

                    //2. And here is where we create the query that provides a query prediction service for text-based geographic searches, returning suggested queries as users type.
                        //and it takes the key which is the google maps api key that was generated from google search api. it uses that API for location search from google api engine.
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",

                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                
                />
                <NavOptions />
            </View>
        </SafeAreaView>

    );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },

});






























//note: here is how export a snippet of reactNativeFunctionalExport by typing rnfes and then enter. with the s for sylesheet. 