import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatButton from './src/assests/theme/styles';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <Image
        style={{
          resizeMode: 'contain',
        }}
        source={require('./src/assests/images/logo.png')}
      />
      <View style={styles.seperator1}>
        <FlatButton text="play" onPress={() => Alert.alert('WIP')} />
        <FlatButton text="select varient" onPress={() => Alert.alert('WIP')} />
        <FlatButton text="upgrades" onPress={() => Alert.alert('WIP')} />
        <FlatButton text="⚙︎ settings" onPress={() => Alert.alert('WIP')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  seperator1: {
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});

export default App;
