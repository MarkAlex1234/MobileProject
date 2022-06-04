import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import FlatButton from '../assests/theme/flatButton';

export default function Game({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <View>
        <GameEngine
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}>
          <FlatButton
            text="Return"
            onPress={() => navigation.navigate('Main Menu')}
          />
        </GameEngine>
      </View>
    </SafeAreaView>
  );
}
