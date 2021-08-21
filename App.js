import React from 'react';
import { StyleSheet, LogBox} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from './screens/MapScreen';

// 1) Set up redux

export default function App() {
 // LogBox.ignoreLogs(['Remote debugger']); //this helps us remove the unessary remote logging notification
  const Stack = createStackNavigator();

  return (
    //wrap around the whole app with the Provider from Redux - Makes the Redux store available to the connect() calls in the component hierarchy below
        // Store: (JSX attribute) store: Store<any, AnyAction> : The single Redux store in your application

    <Provider store ={store}>  
      <NavigationContainer>
        <SafeAreaProvider>
            <Stack.Navigator>
                <Stack.Screen 
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,   //here we have hid the home screen at the header. To show it set it. 
                  }}
                />
                          
                <Stack.Screen   //Screen: Is a Component used for specifying route configuration.
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                  
                
                />
            </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
