import { useRoute } from '@react-navigation/native';
import * as React from "react";
import  {useState} from 'react';
import { View, Share, Text, Image, StyleSheet, SafeAreaView, Button, TouchableHighlight, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { img_url } from './api_url';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TechDetails() {
  const route =useRoute();
  const [estado, setEstado] = useState(false);

  const supportedURL = "http://newsserver.abhiyanta.co/";
  const saveArticle = async () => {
    setEstado(!estado);

    axios.post("http://newsserver.abhiyanta.co/api/article_save_store",{ "slug":route.params.slug })
    .then((responce) => {
      // toast.success("Inserted successfully",{position:"top-right"});
     
      if(responce.data.msg === "Saved"){
        alert("Saved Sucessfully");
      }
      else{
        alert("Removed Saved");
      }
      console.log("Inserted",responce.data.msg);
      console.log(estado);
    })
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        supportedURL
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
        <View>
       <Icon name="home" size={25}  color= "#ffffff"  />
     </View>
     <Image source={{uri: img_url+ route.params.image}}
        style={styles.addimage} />
        </View>
        <View style={styles.container}>
          <View style={styles.square} >
          <Pressable onPress={() => saveArticle()}>
          <MaterialCommunityIcons style={styles.image1}  name={estado ? 'bookmark' : 'bookmark-outline'}  size={19}/>

            </Pressable>
          </View>
          <View style={styles.square1} >
          <TouchableOpacity onPress={onShare}>
          <MaterialCommunityIcons style={styles.image1}  name="share-variant-outline"  size={19}/>
        </TouchableOpacity>
          </View>
        
        </View>
        <View leftFlex style={styles.viewHead}>
          {/* <Text style={styles.leftFlex}> */}
        <Text style={styles.buttonDesign} >Technologies </Text>
          {/* </Text> */}
          <Text style={styles.rightFlex} >7.29 am</Text>
        </View>
        <View >
          <Text style={styles.headerTitle}>
          {route.params.title}
          </Text>
          </View>
          <View >
          <Text style={styles.headerDetails}>
          {route.params.descripation}
                    </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50, backgroundColor: "#000080", paddingTop: 15, paddingBottom: 15
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "100%",

  },
  rightFlex: {
    flex: 1,
    fontSize: 12,
    lineHeight: 30,
    color: '#F5F5F5',
    textAlign: 'right',
    fontWeight: "400",
    marginRight: 15
  },
  leftFlex: {
    flex: 1,
    fontSize: 12,
    lineHeight: 30,
    color: '#AAA9A9',
    fontWeight: "400",
    marginLeft: 15
  },
  container1: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width: "100%",
    marginTop: 100
  },

  container2: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width: "100%",
    marginTop: 300,
    backgroundColor: "red"
  },

  textStyle: {
    fontSize: 25,
    color: 'white',
    flex: 1
  },
  webheader: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  headtext: {
    fontSize: 12,
    textAlign: "center"
  },
  tredingimage: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  tredingTitle: {
    fontSize: 12,
    textAlign: "justify",
    paddingLeft: 10
  },
  tredingDate: {
    fontSize: 12,
    textAlign: "justify",
    paddingLeft: 10,
    paddingTop: 11,
    color: "#979797"
  },

  trendinghead: {
    color: "#040289",
    fontSize: 20,
    fontWeight: "400",
    paddingTop: 20,
    paddingLeft: 10

  },
  addimage: {
    width: 400,
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  image1: {
    width: 19,
    height: 19,
    marginTop: 10,
    textAlign: "right",
    marginLeft: -10,
    color:"#002880"

  },
  image: {
    width: 60,
    marginLeft: 10,
    height: 60,
    marginTop: -28,
    borderRadius: 50,
    textAlign: "right",
  },
  brakingImage: {
    width: 300,
    height: 200,
    marginTop: 20
  },
  square: {
    textAlign: "center",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -20,
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 255,
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  square1: {
    textAlign: "center",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -20,
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 10,
    // marginLeft:80,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  breakingNewsHead: {
    color: "#cd330f",
    fontWeight: "bold",
    fontSize: 17,
    justifyContent: 'space-between',
    flex: 1
  },
  breakingNewsView: {
    color: "#cd330f",
    textAlign: 'justify',
    justifyContent: 'space-between',
    textDecorationLine: 'underline',
    flex: 1

  },
  viewHead:{
    flexDirection: 'row',
    backgroundColor:"#002880",
    paddingTop:5,
    paddingBottom:5,
    marginBottom:20
  },
  brakingNews: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 336,
    height: 200,
    margin: 5,
    marginRight: 10,
    marginLeft: 10,
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
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 336,
    height: 200,
    margin: 5,
    marginRight: 10,
    marginTop: 240,
    marginLeft: 10,
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
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: 336,
    height: 200,
    margin: 5,
    marginRight: 10,
    marginTop: 240,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonDesign:{
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    borderColor:"#1410CC",
  color:"#ffffff",
  justifyContent: 'center',
  marginLeft:20,
  textAlign:'center',
  borderRadius:10
  },
  headerTitle:{
    fontWeight:"bold",
    paddingLeft:20,
    paddingRight:20,
    textAlign:"justify",
  },
  headerDetails:{
    fontWeight:"400",
    paddingLeft:25,
    lineHeight:20,
    paddingRight:25,
    paddingTop:22,
    textAlign:"justify",
  }
});