import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';



/* two pieces of information -
  a data array which has two pieces of information : each has a unique id and each list should always have a unique id to differentiate.
  and each of the below data consist of unique screens that will take you mapscreen and eastscreen when applied with reactnative.
    Note: Whenever you have list of items that you want to render out in reactnative - to render out optimally you use something called a flat list. 
        flat list: flat list is one component. it takes some data - in this case an array of data and then we have something called render item so it will go through that list
        and for every single time it sees an item on there it will go ahead and it will render out whatever you tell it to render it out. 

*/
const data = [
    {
        id:"123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",

    },

    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen", //change in future...
    },
];



const NavOptions = () => {
    const navigation = useNavigation();  //1A: i will use this navigation props to navigate when i swipe the touchableOpacity to different screen

    return (
        <FlatList 
            data={data}
            horizontal //it removes from veritical position of the images 
            KeyExtractor={(item) => item.id}

            /* background bg and margin for separating it - cool tailwind sytel*/
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    //1A: Above for navigate screen using onPress rather than click on react: onPress: Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
                    onPress={() => navigation.navigate(item.screen)}
                    
                    >     
                    <View>
                    
                        {/* will create an image consisting of source that has an argument passed into it and that argument is an uri to the data.item 
                            also will have text and icon from react native elemetns*/}
                        <Image
                            style = {{width: 120, height: 120, resizeMode:"contain"}}
                            source = {{uri: item.image}} 
                        />
                            {/* here is where am sytling up the text image for size and font size */}
                        <Text style={tw`mt-2 text-lg font-semibold`}>  
                            {item.title}
                        </Text>

                        <Icon
                        //here is where navigation for the get ride and order arrow design exit as an icon a type of antdesign from reactnativeNavigation which will take you as swipe to the next page
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"

                        />
                    </View>
                </TouchableOpacity>
            )}

        />
    );
};

export default NavOptions;

