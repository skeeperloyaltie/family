import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.col}>Hello World</Text>
    //   <StatusBar style="light" />
    // </View>
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'assets/splash.png',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>
             React Native Background Image Example
          </Text>
          <View style={styles.contentCenter}>
            <Image
              source={{
                uri:
                  'https://nintyzeros.com/media/9oHZQ2gEez8ti/giphy.gif',
              }}
              style={{
                width: 60,
                height: 60,
                marginTop: 100
              }}
            />
            <Text style={styles.textStyle}>
              The Big Bang Theory
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    color: "white",
  }
});
