import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackActions.Navigator screenOptions={globalScreenOptions}>
              <stack.Screen
              name='Login'
              component={LoginScreen} />

              <stack.Screen
              name='Register'
              component={RegisterScreen} />
      </StackActions.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
