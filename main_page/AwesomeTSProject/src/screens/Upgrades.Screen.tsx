import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FlatButton from '../assests/theme/flatButton';

export default function Upgrades({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <View>
        <FlatButton
          text="Return"
          onPress={() => navigation.navigate('Main Menu')}
        />
      </View>
    </SafeAreaView>
  );
}
