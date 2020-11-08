import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Home />
);

export default Routes;