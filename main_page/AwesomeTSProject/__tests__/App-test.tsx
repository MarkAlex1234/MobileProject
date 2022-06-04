import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Game from '../src/screens/Game.Screen';
import MainMenu from '../src/screens/MainMenu.Screen';
import SettingsScreen from '../src/screens/Settings.Screen';
import SelectVarientScreen from '../src/screens/SelectVarient.Screen';
import Upgrades from '../src/screens/Upgrades.Screen';

test('Game Screen is called when clicked', () => {
  expect(Game).toBeCalled;
});

test('Main Menu Screen is called when clicked', () => {
  expect(MainMenu).toBeCalled;
});

test('Settings Screen is called when clicked', () => {
  expect(SettingsScreen).toBeCalled;
});

test('Select Varient Screen is called when clicked', () => {
  expect(SelectVarientScreen).toBeCalled;
});

test('Upgrades Screen is called when clicked', () => {
  expect(Upgrades).toBeCalled;
});
