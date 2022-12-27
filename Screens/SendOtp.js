import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Button, SafeAreaView, ImageBackground, StyleSheet, Text,Modal, TextInput, TouchableOpacity, View, Pressable, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { img_url1 } from './api_url';
import Images from "../Componants/Images";

const INITIAL_COUNT = 90;
const twoDigits = (num) => String(num).padStart(2, "0");
export default function OTPScreen() {
    const navigation = useNavigation();
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
    const secondsToDisplay = secondsRemaining % 60;
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
    const minutesToDisplay = minutesRemaining % 60;
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;
    const route =useRoute();
    const handleStart = async () => {
      setStatus(STATUS.STARTED);
      setSecondsRemaining(INITIAL_COUNT);
    };
    const [otp, setOtp] = useState("");
    const [mobile, setMobile] = useState(route.params.mobileNumber);
    const onChangeOtpHandler = (otp) => {
      setOtp(otp);
    };

      const STATUS = {};
      const [status, setStatus] = useState(STATUS.STOPPED);
      useInterval(
        () => {
          if (secondsRemaining > 0) {
            setSecondsRemaining(secondsRemaining - 1);
          } else {
            setStatus(0);
          }
        },
        status === STATUS.STARTED ? 1000 : null
      );
      function useInterval(callback, delay) {
        const savedCallback = useRef();
        useEffect(() => {
           savedCallback.current = callback;
         }, [callback]);
        useEffect(() => {
          console.log("OTP",route.params.otpNumber)
          alert("OTP : "+  route.params.otpNumber)
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }
      const onFormSubmit = (e) => {
        console.log(route.params.otpNumber);
        if( otp === "" ){
          alert("Please enter valid OTP")
        }
        else{
        axios.post("http://newsserver.abhiyanta.co/api/otp_check",{
          mobile,
          otp
        })
          .then((response)=>{
    console.log("OTP Status",response.data.mobile_user.name);
    const mobile_user = response.data.mobile_user
    if(response.data.status===200 ){
      navigation.navigate("Menu", {mobile_user});  
    }
    else{
   // navigation.navigate("Menu");]
   alert("Invalid  OTP");
    }
            })
          }
          }
    return (
      
      <View style={styles.container}>
   

         <Image  source={Images.ProfileBackground}
         style={styles.head}
         />  
   
  
       
    <ScrollView>

 <View style={styles.content} >
  
       <Text style={styles.textin}>Verify OTP  </Text>
     </View>

        <View style={styles.Middle}>
        <Text  style={styles.text3}>We have sent a verification   </Text>
        </View>
        <View style={styles.Middle}>
        <Text  style={styles.text4}>code to  </Text>
        </View>
        <View style={styles.Middle}>
        <Text  style={styles.text3}>+91 _ _ _ _ _ _ _ _ _  </Text>
        </View>
        {status == STATUS.STOPPED ? (
     <View style={styles.form}>
  
          <TextInput
             value= {otp}
            style={styles.inputPassword}
            onChangeText={onChangeOtpHandler}
            placeholder="Enter OTP"
            keyboardType="numeric"
            placeholderTextColor="#929292"
          />
        
        </View>
     ) : (
        <View style={styles.Middle}>
        </View>
      )}
             <View>
       {
          status == STATUS.STARTED ? (
        <View style={styles.Middle}>
        <Text  style={styles.texttime}>
        {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
           </Text>
        </View>
       ) : (
        ""
      )
      // status
    }
   </View>
      
        <TouchableOpacity style={styles.buttonLogin} onPress={onFormSubmit}>
            <Text style={styles.buttonLoginText}>SEND OTP </Text>
          </TouchableOpacity>
 
       </ScrollView>
   </View>

   
    );
  }
  const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 30,
      marginTop:80,
      marginBottom:40
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
      fontSize: 17,
      borderWidth:1,
      width:"95%",
      marginLeft:"auto",
      marginRight:"auto",
      borderColor:"#DCDCDC",
      textAlign: "center",
      marginTop:40,
      textAlignVertical: "center",
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
      alignItems: 'center',
 
    },
    modal: {
      alignItems: 'center',
      backgroundColor: '#00ff00',
      padding: 10,
      height:390,
      width:300,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:100
      
    },
    text: {
      color: '#3f2949',
      marginTop: 10,
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
      top: 22,
      left: 22,
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
    buttonLogin: {
      height: 50,
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    head:{
      resizeMode: "cover",
      width: "100%",
      }
  });