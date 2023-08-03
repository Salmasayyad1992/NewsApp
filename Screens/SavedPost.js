import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Image, SafeAreaView, ScrollView, RefreshControl,StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import { img_url } from './api_url';
import Card from '../Componants/Card';
import { FontAwesome5 } from '@expo/vector-icons';
import Images from "../Componants/Images";
import { useNavigation } from '@react-navigation/native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function SavedPost() {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [sportList, setSportList] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    setRefreshing(true);
    axios
    .get("http://newsserver.abhiyanta.co/api/save_articles")
    .then((response) => {
      setRefreshing(false);
        setSportList(response.data.article);
        console.log(sportList);
    });
}, [])
if (refreshing) {
  return (
      <View style={styles.container}>
     <Image  source={Images.Loader} resizeMode="cover"  style={styles.imageloader}></Image>
      </View>
 );
} 
else{


  return (
    <SafeAreaView style={styles.container}>
     <ScrollView   refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
    <StatusBar style="auto" />
    {/* <View style={styles.container}>
      <Text style={styles.headt}>Categories</Text>
        </View> */}
              <View style={styles.containerh}>
      <StatusBar style="auto" />
                    <View style={{flex:1}}>
                        <Text style={styles.trendinghead}>  Saved Posts</Text>
                    </View>
                </View>
                
     
    <View
  style={{
    marginBottom:20,
    borderBottomColor: '#787878',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
                    {
            sportList.map((item,index)=>
            <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("SavePostDetails",item,index)}>
    <Card>

    <View style={styles.container} >
            <View  style={{ flexDirection:'column'}}>
            {/* <Image style={{width: 50, height: 50}}source={{uri: 'http://news.abhiyanta.co/images/Articles/sadasdasd.jpg'}}/> */}
            <Image source={{uri: img_url+ item.image}}
            style={styles.tredingimage}  />
            {/* <Image    style={styles.tredingimage}  source={require(img_url)} /> */}
            </View>
              <View  style={{flex:1, flexDirection:'column'}}>
              <View style={styles.container}>
                       <View style={styles.container}>
                       <Text style={styles.tredingTitle}>
            {item.title} </Text>  
       <View>
     <FontAwesome5 style={styles.imageicon} name="bookmark" size={25}/>
               
                

      </View>   
      </View>
             
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

  );
}
  
}

const styles = StyleSheet.create({
  header:{
    marginTop:50 , backgroundColor:"#000080", paddingTop:15,paddingBottom:15
  },
  lottie: {
    width: 100,
    height: 100,
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
    fontSize:15,
    width: 80,
    textAlign:"center",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:5
  },
  headtextc1:{
    fontSize:15,
    width: 80,
    textAlign:"center",
    marginLeft:10,
    marginTop:5
  
  },
  tredingimage:{
    width:100,
    height:100,

  },
  tredingTitle:{
    fontSize:12,
     textAlign:"justify",
     width:"80%",
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
  imageadd:{
    marginTop: 160,
    marginBottom: 10,
    width: '90%',
    marginLeft:"auto",
    marginRight:"auto",
    height: 350,
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
    marginBottom:15,
    marginRight:"auto",
    textAlign:"center"
  },
  image:{
    width:100,
    height:100,
    marginTop:28,
    marginRight:15,
    marginLeft:10,
    borderRadius:50,
    textAlign:"center"
  },
  imagec1:{
    width:100,
    height:100,
    marginTop:28,
    marginRight:15,
    borderRadius:50,
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


  closeButton: {
    width:50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFf',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
    marginTop:-350,
    marginLeft:290
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  }
});
