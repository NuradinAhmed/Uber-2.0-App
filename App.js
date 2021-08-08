import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// 1) Set up redux

export default function App() {
  return (
    //wrap around the whole app with the Provider from Redux - Makes the Redux store available to the connect() calls in the component hierarchy below
        // Store: (JSX attribute) store: Store<any, AnyAction> : The single Redux store in your application

        //now am going to import my store 
    <Provider store ={store}>  
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    
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
