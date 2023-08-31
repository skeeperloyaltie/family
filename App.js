import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useState } from 'react';


SplashScreen.preventAutoHideAsync();

const [appIsReady, setAppIsReady] = useState(false);

useEffect( () => {
  async function show_splash_screen(){
  try{
      // our api calls will be here.
      new Promise(resolve => setTimeout(resolve,5000)); // wait for 5 secs
  }catch(e){
      console.warn(e);
  }finally{
      setAppIsReady(true); // application to render.
  }
  }
  show_splash_screen();
});

const onLayoutRootView = useCallback(async () => {
  if(appIsReady){
  // hide the splash screen.
  await SplashScreen.hideAsync();
  }
  if(!appIsReady){
    return null;
  }
},[appIsReady]);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
