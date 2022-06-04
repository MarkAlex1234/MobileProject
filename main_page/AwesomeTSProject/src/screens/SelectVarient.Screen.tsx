import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import FlatButton from '../assests/theme/flatButton';

export default function SelectVarientScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', flex: 1}}>
      <View>
        <TouchableOpacity onPress={() => Alert.alert('WIP')}>
          <Image
            style={{
              resizeMode: 'center',
            }}
            source={require('../assests/images/variant1.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('WIP')}>
          <Image
            style={{
              resizeMode: 'center',
            }}
            source={require('../assests/images/variant2.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('WIP')}>
          <Image
            style={{
              resizeMode: 'center',
            }}
            source={require('../assests/images/variant3.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('WIP')}>
          <Image
            style={{
              resizeMode: 'center',
            }}
            source={require('../assests/images/variant4.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('WIP')}>
          <Image
            style={{
              resizeMode: 'center',
            }}
            source={require('../assests/images/variant5.jpg')}
          />
        </TouchableOpacity>
        <FlatButton
          text="Return"
          onPress={() => navigation.navigate('Main Menu')}
        />
      </View>
    </SafeAreaView>
  );
}
