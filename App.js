import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import LoginScreen from './Screens/Login';
import OTPScreen from './Screens/SendOtp';
import Menu from './Screens/Menu';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <StatusBar color="#ffffff" barStyle="light-content" />
    <Stack.Navigator>
    <Stack.Screen name="Landing" options={{headerShown:false}}   component={Landing} />  
     <Stack.Screen name="Login" options={{headerShown:false}}   component={LoginScreen} />  
    <Stack.Screen name="SendOTP" options={{headerShown:false}}   component={OTPScreen} />  
    <Stack.Screen name="SignUp" options={{headerShown:false}}   component={SignUp} />  
   <Stack.Screen name="Menu"   options={{headerShown:false}}  component={Menu} />     
</Stack.Navigator>
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
