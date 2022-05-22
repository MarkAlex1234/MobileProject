import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FlatButton from '../assests/theme/flatButton';
import styles from '../assests/theme/styles';

const MainMenu = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <Image
        style={{
          resizeMode: 'contain',
        }}
        source={require('../assests/images/logo.png')}
      />
      <View style={styles.seperator1}>
        <FlatButton text="play" onPress={() => navigation.navigate('Game')} />
        <FlatButton
          text="select varient"
          onPress={() => navigation.navigate('Select Varient')}
        />
        <FlatButton
          text="upgrades"
          onPress={() => navigation.navigate('Upgrades')}
        />
        <FlatButton
          text="⚙︎ settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainMenu;
