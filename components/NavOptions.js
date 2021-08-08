import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';



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
    return (
        <FlatList 
            data={data}
            horizontal //it removes from veritical position of the images 
            KeyExtractor={(item) => item.id}

            /* background bg and margin for separating it - cool tailwind sytel*/
            renderItem={({ item }) => (
                <TouchableOpacity style = {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>     
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
                    </View>
                </TouchableOpacity>
            )}

        />
    );
};

export default NavOptions;

