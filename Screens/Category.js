import { Image, SafeAreaView,RefreshControl, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as React from "react";
import Images from "../Componants/Images";

import {useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import Card from '../Componants/Card';
import axios from 'axios';
import { img_url,img_url1 ,img_url2} from './api_url';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Category() {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [categoryList, setCategoryList] = useState([]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  useEffect(() => {
    setRefreshing(true);
    axios
    .get("http://newsserver.abhiyanta.co/api/category_list")
    .then((response) => {
      setRefreshing(false);
      setCategoryList(response.data);
    });
}, [])
    if (refreshing) {
      return (
          <View style={styles.container}>
         <Image  source={Images.Loader} resizeMode="cover"  style={styles.imageloader}></Image>
          </View>
     );
    } 
    else {
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
      <View style={styles.container}>

                     <View style={{flex:1}}>
                        <Text style={styles.trendinghead}> Categories</Text>
                    </View>
    </View>
    <View
  style={{
    marginBottom:20,
    borderBottomColor: '#787878',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
    <View style={styles.containerTop}>
      <View style={styles.container}>

      {/* <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("BreakingNews")}>

        <View  style={{flex:1, flexDirection:'column' ,marginRight:30}}>
        <Image  style={styles.image} source={require('../assets/imgs/braking.png')}  />
        <Text style={styles.headtext}>Breaking News</Text>
          </View>
          </TouchableHighlight> */}
           <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("Fashion")}>

<View  style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
{
        categoryList.map((item,index)=>
        <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("CategoryList",{"name":item.name,index})}>
        <View>
        <Image 
             source={{uri: img_url2+item.image}}
             style={styles.image}/>
      <Text style={styles.headtext}>{item.name}</Text>
      </View>
      </TouchableHighlight>
)
      }
{/* <Image  style={styles.image} source={require('../assets/imgs/fasion.png')}  />
<Text style={styles.headtext}>Fashion</Text> */}
  </View>
  </TouchableHighlight>
          
</View> 

    </View>

</ScrollView>
</SafeAreaView>
);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width:"100%",
    height:"100%",
  },
  containerTop: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width:"100%",
    marginTop:-21,
    marginLeft:"auto",
    marginRight:"auto"
  },
  container1: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width:"100%",
    marginTop:10,
    marginLeft:"auto",
    marginRight:"auto"
  },
  container2: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width:"100%",
    marginTop:10,
    marginLeft:"auto",
    marginRight:"auto"
  },
  headt:{
    color:"#ffffff",
  backgroundColor:"#002880",
  fontSize:20,
  fontWeight:"400",
  paddingTop:10,
  paddingBottom:10,
  marginTop:10,
  marginBottom:10,
  paddingLeft:10
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
  image:{
    width:150,
    height:150,
    marginTop:28,
    marginRight:15,
    marginLeft:15,
    borderRadius:100,
    textAlign:"center"
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
  headtext:{
    fontSize:16,
    textAlign:"center"
  },
});
