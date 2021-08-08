import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";


// 1) Set up redux

export default function App() {
  return (
    //wrap around the whole app with the Provider from Redux - Makes the Redux store available to the connect() calls in the component hierarchy below
        // Store: (JSX attribute) store: Store<any, AnyAction> : The single Redux store in your application

        //now am going to import my store 
    <Provider store ={store}>  
      <HomeScreen />
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
