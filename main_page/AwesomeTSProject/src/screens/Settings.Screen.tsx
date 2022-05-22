import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FlatButton from '../assests/theme/flatButton';
import styles from '../assests/theme/styles';

export default function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <View>
        <FlatButton
          text="Return"
          onPress={() => navigation.navigate('Main Menu')}
        />
        <FlatButton
          text="Apply"
          onPress={() => navigation.navigate('Main Menu')}
        />
      </View>
    </SafeAreaView>
  );
}
