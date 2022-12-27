import * as React from "react";
import {useEffect, useState} from "react";
import { Image,RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View,ImageBackground} from 'react-native';
import Card from '../Componants/Card';
import axios from "axios";
import { img_url } from './api_url';
import { useNavigation, useRoute } from '@react-navigation/native';
import Images from "../Componants/Images";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Sports() {
  const navigation = useNavigation();
    const [sportList, setSportList] = useState([]);
    const [error, setError] = useState(null);
    const route =useRoute();
    // const cat = route.params.name;
    console.log("new item",route.params.name);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(()=>{
      setRefreshing(true);
          setTimeout(() => {
            const baseURL = "http://newsserver.abhiyanta.co/api/categorywise_articles/"
            axios.get(baseURL+route.params.name)
            .then((response) => {
            setRefreshing(false);
            setSportList(response.data.articles);
            console.log("new item useEffect",route.params.name);
            console.log("Response data",response.data);
                  
      });
          }, 0);
  
    },[route.params.name]); 
    if (refreshing) {
      return (
          <View style={styles.container}>
 
         <Image  source={Images.Loader} resizeMode="cover"  style={styles.imageloader}></Image>
          </View>
      );
    } else{
    return (
        <>
        <SafeAreaView style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
                        <View>
                            <Text style={styles.trendinghead}> {route.params.name} Categories</Text>
                        </View>
                        
                    {
            sportList.map((item)=>
            <TouchableHighlight underlayColor={'transparent'} onPress={()=> navigation.navigate("SportsDetails",item)}>
    <Card>
    <View style={styles.container} >
            <View  style={{ flexDirection:'column'}}>
            <Image source={{uri: img_url+ item.image}}
            style={styles.tredingimage}  />
            </View>
              <View  style={{flex:1, flexDirection:'column'}}>
              <View style={styles.container}>
                
              <Text style={styles.tredingTitle}>
            {item.category} </Text>     
          </View>
              <Text style={styles.tredingDate}>
              Tech.15 min ago         
               </Text>
            </View> 
          </View>   
    
    </Card>
    </TouchableHighlight>
    )
    }
          </ScrollView>
        </SafeAreaView>
      </>
          
          
      );
    }
  }
    const styles = StyleSheet.create({

      arrow:{
        color:"gray",
        marginTop:10,
        marginLeft:10
      },
      backimg:{
       height:20,
       width:5,
       marginLeft:10,
       marginTop:10
      },
        header:{
          marginTop:50 , backgroundColor:"#000080", paddingTop:15,paddingBottom:15
        },
        container: {
          flex: 1,
          justifyContent: "center", // ignore this - we'll come back to it
          flexDirection: "row",
          width:"100%",
          backgroundColor:"#fff"
        },
        container1: {
          flex: 1,
          justifyContent: "center", // ignore this - we'll come back to it
          flexDirection: "row",
          width:"100%",
          marginTop:100
        },
      
        container2: {
          flex: 1,
          justifyContent: "center", // ignore this - we'll come back to it
          flexDirection: "row",
          width:"100%",
          marginTop:300,
          backgroundColor:"red"
        },
      
        textStyle:{
          fontSize: 25,
          color:'white', 
          flex:1
        },
        webheader:{
          width:25,
          height:25,
          marginRight:15
        },
        headtext:{
          fontSize:12,
          textAlign:"center"
        },
        tredingimage:{
          width:100,
          height:115,
          borderBottomLeftRadius:20,
          borderTopLeftRadius:20,
        },
        tredingTitle:{
          fontSize:12,
           textAlign:"justify",
           paddingLeft:10,
           paddingRight:10,
           paddingTop:5
        },
        tredingDate:{
          fontSize:12,
           textAlign:"justify",
           paddingLeft:10,
           paddingTop:11,
           color:"#979797"
        },
        trendinghead:{
          color:"#ffffff",
          backgroundColor:"#002880",
          fontSize:20,
          fontWeight:"400",
          paddingTop:10,
          paddingBottom:10,
          marginBottom:10,
          textAlign:"center"
          },
        addimage:{
          width:330,
          height:150,
          marginLeft:"auto",
          marginTop:20,
          marginRight:"auto",
          textAlign:"center"
        },
        image:{
          width:60,
          height:60,
          marginTop:28,
          borderRadius:50,
          marginRight:10,
          textAlign:"center"
        },
        brakingImage:{
          width:300,
          height:200,
          marginTop:20
        },
        square: {
          textAlign:"center",
          backgroundColor: "#fff",
          paddingLeft:20,
          paddingRight:20,
          marginTop:40,
          paddingBottom:20,
          borderRadius:50,
          width: 50,
          height: 50,
          marginRight:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,  
        },
        breakingNewsHead:{
         color:"#cd330f",
         fontWeight:"bold",
         fontSize:17,
         justifyContent: 'space-between',
      flex:1
        },
        breakingNewsView:{
          color:"#cd330f",
          textAlign: 'justify',
          justifyContent: 'space-between',
          textDecorationLine: 'underline',
          flex:1
          
         },
        brakingNews: {
          backgroundColor: "#fff",
          flexDirection:'row',
          paddingLeft:20,
          paddingRight:20,
          paddingTop:20,
          paddingBottom:20,
          width: 336,
          height: 200,
          margin: 5,
          marginRight:10,
          marginLeft:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,  
        },
        brakingNews1: {
          backgroundColor: "#fff",
          flexDirection:'row',
          paddingLeft:20,
          paddingRight:20,
          paddingTop:20,
          paddingBottom:20,
          width: 336,
          height: 200,
          margin: 5,
          marginRight:10,
          marginTop:240,
          marginLeft:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,  
        },
        brakingNews2: {
          backgroundColor: "#fff",
          flexDirection:'row',
          paddingLeft:20,
          paddingRight:20,
          paddingTop:20,
          paddingBottom:20,
          width: 336,
          height: 200,
          margin: 5,
          marginRight:10,
          marginTop:240,
          marginLeft:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,  
        },
        imageloader:{
          width:"100%",
          height:"30%",
          margin: 0,
          position: "absolute",
          top: "30%",
        },
      });