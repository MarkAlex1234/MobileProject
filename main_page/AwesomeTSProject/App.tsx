import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './src/screens/MainMenu.Screen';
import SettingsScreen from './src/screens/Settings.Screen';
import * as React from 'react';
import SelectVarientScreen from './src/screens/SelectVarient.Screen';
import Upgrades from './src/screens/Upgrades.Screen';
import Game from './src/screens/Game.Screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Select Varient" component={SelectVarientScreen} />
        <Stack.Screen name="Upgrades" component={Upgrades} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
