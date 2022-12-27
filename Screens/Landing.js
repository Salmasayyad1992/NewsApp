import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import Images from "../Componants/Images";
import { useNavigation } from "@react-navigation/native";

 function Landing() {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <ImageBackground source={Images.Onboarding} resizeMode="cover"  style={styles.image}>
        <Text style={styles.text}>  Welcome to S NEWS </Text>
        <Image source={Images.LogoOnboarding} style={styles.logo} />
  
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")} >
            <Text  style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("SignUp")} >
          <View style={styles.viewBackground}>
            <Text style={styles.text2}>Already have account? </Text>
         <Text style={styles.signupText}> Sign Up from here </Text>
          </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      // backgroundColor: '#000000a0',
    },
    text2:{
      justifyContent:'center',
      color:"#C8C8C8",
      paddingTop:30,
      textAlign:"center",
      fontSize:16
    },
    signupText:{
      fontWeight:'bold',
      justifyContent:'center',
      color:"white",
      textAlign:"center",
      fontSize:16,
      paddingTop:8
      
    },
    
    button: {
      borderRadius: 6,
      backgroundColor:"#FFFFFF",
        height: 50,
        width: 300,
        borderRadius:24,
        marginLeft: "auto",
        marginRight: "auto",
        color:"#000000",
      justifyContent: "center",
      marginVertical: 15,
      
    },
    viewBackground:{
      justifyContent:'center',
    },
    buttonText: {
      fontWeight:"bold",
      textAlign: "center",
      fontSize: 16,
    },
    logo:{
      justifyContent: "center", 
      width:149,
      height:168,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:40,
      marginBottom:40
    },
  });

export default Landing;
