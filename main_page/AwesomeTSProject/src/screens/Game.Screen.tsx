import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import FlatButton from '../assests/theme/flatButton';
import Variant from '../Variant';

export default function Game({navigation}) {
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
