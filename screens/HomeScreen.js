import React from 'react'
import { StyleSheet,  View, Image} from "react-native"
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import SafeAreaView from 'react-native-safe-area-view';


const HomeScreen = () => {    

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