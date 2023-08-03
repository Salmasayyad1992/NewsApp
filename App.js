import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState ,useRef ,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';
import Login from './Screens/Login';
import LoginScreen from './Screens/Login';
import OTPScreen from './Screens/SendOtp';
import Menu from './Screens/Menu';
import * as Notifications from 'expo-notifications';
import SignUp from './Screens/SignUp';
import axios from 'axios';

const Stack = createStackNavigator();
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [addImage, setAddImage] = useState([]);
  // useEffect(() => {
  //   axios
  //   .get("http://newsserver.abhiyanta.co/api/breaking_news_articles")
  //   .then((response) => {
  //       setAddImage(response.data.article[0]);
  //       console.log("Title data",response.data.article[0].title);
  //   });
  //     }, []);
  // Notifications.scheduleNotificationAsync({

  //   content: {
  //     title: addImage.title,
  //     body: addImage.descripation,
  //     data: { data: 'Menu' },
  //   },
  //   trigger: {
  //     seconds: 60,
  //     repeats: true,
  //   },
  // });
 

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);
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
// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
