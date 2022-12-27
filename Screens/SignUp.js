import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, SafeAreaView, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function SignUp() {
    const navigation = useNavigation();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const onChangeNameHandler = (name) => {
      setName(name);
    };
    const onChangeEmailHandler = (email) => {
      setEmail(email);
    };
    const onChangemobileHandler = (mobile) => {
      setMobile(mobile);
    };
    const onChangeaddressHandler = (address) => {
      setAddress(address);
    };
  
    const onFormSubmit = (e) => {
      if(name==="" && mobile==="" && address==="" ){
        alert("Some fields are missing please check once")
      }
      else{
      axios.post("http://newsserver.abhiyanta.co/api/be_a_reporter",{
        name,
        email,
        mobile,
        address,
      })
      .then((responce) => {
        // toast.success("Inserted successfully",{position:"top-right"});
        alert("Added Successsfully")
        navigation.navigate("Login");
        console.log("Inserted",responce);
      })
    }
    }
    return (
      <View style={styles.container}>
      <Image source={require('../assets/imgs/header.png')} 
      style={styles.head}
      />  
    
<ScrollView>
     <View style={styles.content} >
       <Text style={styles.textin}>Sign Up Now </Text>
     </View>
     <View style={styles.form}>
          <FontAwesome5 name="user-secret" style={styles.iconLock} />
          <TextInput
            style={styles.inputPassword}
            value={name}
              onChangeText={onChangeNameHandler}
            placeholder="User"
            placeholderTextColor="#929292"
          />
        </View>
        <View style={styles.form}>
          <FontAwesome5 name="phone-alt" style={styles.iconLock} />
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            // secureTextEntry={true}
            value={mobile}
            onChangeText={onChangemobileHandler}
            placeholder="Mobile Number"
            placeholderTextColor="#929292"
          />
        </View>
       
        <View style={styles.form}>
          <MaterialCommunityIcons name="email" style={styles.iconLock} />
          <TextInput
            style={styles.inputPassword}
            // secureTextEntry={true}
            value={email}
            onChangeText={onChangeEmailHandler}
            placeholder="Email Id (Optional)"
            placeholderTextColor="#929292"
          />
        </View>
        <View style={styles.form}>
          <MaterialIcons name="add-location" style={styles.iconLock} />
          <TextInput
            style={styles.inputPassword}
            // secureTextEntry={true}
            value={address}
            onChangeText={onChangeaddressHandler}
            placeholder="Address"
            placeholderTextColor="#929292"
          />
        </View>
        <TouchableOpacity style={styles.buttonLogin} onPress={onFormSubmit}>
            <Text style={styles.buttonLoginText}>Continue</Text>
          </TouchableOpacity>
    
       <View style={styles.viewBackground}>
         <Text style={styles.text2}>Already have account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Sign In from here </Text></TouchableOpacity>
       </View>
       </ScrollView>
   </View>

   
    );
  }
  const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 30,
      marginTop:30,
      marginBottom:40,
    },
    iconLogin:{
      marginLeft:20,
      marginTop:20,
     },
    input: {
      color: "#333333",
      fontSize: 16,
      height: 44,
      paddingHorizontal: 15,
    },
    inputPassword: {
      height: 55,
      borderRadius: 30,
      paddingHorizontal: 30,
      fontSize: 15,
      borderWidth:1,
      width:"95%",
      marginLeft:"auto",
      marginRight:"auto",
      borderColor:"#DCDCDC",
      textAlignVertical: "center",
      paddingLeft:60
    },
    passwordContainer: {
        flexDirection: 'row',
      justifyContent:"center",
      marginLeft:"auto",
      marginRight:"auto",
      borderColor: "#cdcdcf",
      borderBottomWidth: 1,
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    
    viewBackground:{
      justifyContent:'center',
    },
    form: {
      marginBottom: 30,
   
    },
    iconLock: {
      color: "#929292",
      position: "absolute",
      fontSize: 16,
      top: 18,
      left: 40,
      zIndex: 10,
    },
    text2:{
      justifyContent:'center',
      color:"#979797",
      paddingTop:30,
      textAlign:"center",
      fontSize:16
    },
    signupText:{
      fontWeight:'bold',
      justifyContent:'center',
      color:"#274696",
      textAlign:"center",
      fontSize:16,
      paddingTop:8
      
    },
    login:{
      justifyContent: 'center', //Centered horizontally
      flex:1,
      textAlignVertical: 'center',
      marginTop:80,
    },
    registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    LoginText: {
      marginTop: 100,
      fontSize: 30,
      fontWeight: 'bold',
    },
    Middle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textin: {
      textAlign:"center",
      flexDirection: 'row',
      color: "000000",
      fontSize:36,
      fontWeight: "500",
      paddingLeft: 30
    },
  
    emailField: {
      marginTop: 30,
      marginLeft: 15,
  
    },
    emailInput: {
      paddingTop:4,
      marginTop:35,
      marginRight: 5,
      borderWidth: 1,
      borderColor:"#FFFFFF",
      borderRadius:50,
      color: "#F89A44",
      height:55,
    },
    mobileInput: {
      paddingTop:4,
      marginTop:30,
      marginBottom: 30,
      marginRight: 5,
      borderWidth: 1,
      borderColor:"#FFFFFF",
      borderRadius:50,
      color: "#F89A44",
      height:55,
    },
    iconLogin:{
     marginLeft:20
    },
    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 50,
      width: 200,
      marginLeft:"auto",
      marginRight:"auto"
    },
  
  
    lineStyle: {
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
      alignItems: 'center'
    },
    image: {
      width: 289,
      height: 242,
      marginTop: 46
    },
    imageStyle: {
      width: 80,
      height: 80,
      marginLeft: 20,
    },
    boxStyle: {
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'space-around'
    },
    buttonStyle:{
      marginTop:20,
      marginLeft:15,
      marginRight:15,
      
    },
    buttonStyleX:{
      marginTop:12,
      marginLeft:15,
      marginRight:15
    },
    buttonDesign:{
      backgroundColor:'#274696', 
      borderRadius:50,
    paddingTop:20,
    paddingBottom:20,
    width:"90%"
  
    },
    head:{
      resizeMode: "cover",
      width: "100%",
      },
    buttonLogin: {
      height: 40,
      borderRadius: 25,
      backgroundColor: "#274696",
      justifyContent: "center",
      marginTop: 15,
      width:"90%",
      marginLeft:"auto",
      marginRight:"auto"
    },
    buttonLoginText: {
      color:"white",
      textAlign:"center"
    },
  });