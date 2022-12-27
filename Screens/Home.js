import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import {useEffect, useState} from "react";
import { img_url,img_url1 ,img_url2} from './api_url';
import Card from '../Componants/Card';
import {  View, Text, Image, StyleSheet,  Modal,  TouchableOpacity,  ActivityIndicator, SafeAreaView, Button, TouchableHighlight, FlatList, RefreshControl, ScrollView, TextInput, Pressable,} from 'react-native'
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Images from "../Componants/Images";
import moment from 'moment';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Home() {
  var t = new Date(1589343013000);
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var newformat = t.getHours() >= 12 ? 'PM' : 'AM';  
  
  // Find current hour in AM-PM Format 
  hours = hours % 12;  
  
  // To display "0" as "12" 
  hours = hours ? hours : 12;  
  minutes = minutes < 10 ? '0' + minutes : minutes; 
  // To display "0" as "12" 
hours = hours ? hours : 12;  
minutes = minutes < 10 ? '0' + minutes : minutes; 
var formatted = 
    (t.toString().split(' ')[0]) 
    + ', ' +('0' + t.getDate()).slice(-2) 
    + '/' + ('0' + (t.getMonth() + 1) ).slice(-2)
    + '/' + (t.getFullYear())
    + ' - ' + ('0' + t.getHours()).slice(-2)
    + ':' + ('0' + t.getMinutes()).slice(-2)
    + ' ' + newformat;
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
    const [advice, setAdvice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [sportList, setSportList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addImage, setAddImage] = useState('');
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  useEffect(() => {
    axios
    .get("http://newsserver.abhiyanta.co/api/advs_image_get")
    .then((response) => {
        setAddImage(response.data.advs_img_data.advs_image);
        // console.log("New Image",addImage);
    });
  }, []);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const checkForSubscription = setTimeout(() => {
      setIsModalVisible(() => !isModalVisible);
    }, 1500);
    return () => clearTimeout(checkForSubscription);
  }, []);


  useEffect(() => {
      axios
      .get("http://newsserver.abhiyanta.co/api/breaking_news_articles")
      .then((response) => {
          setSportList(response.data.article);
          // console.log(sportList);
      });
  }, [])
  

  useEffect(() => {
    axios
    .get("http://newsserver.abhiyanta.co/api/category_list")
    .then((response) => {
      setCategoryList(response.data);
        // console.log(categoryList);
    });
}, [])
  useEffect(() => {
    var date = moment().utcOffset('+03:00').format('YYYY-MM-DD');

    // or get time ' hh:mm:ss a'
    var min = new Date().getMinutes();
 
    setRefreshing(true);
    axios
    .get("http://newsserver.abhiyanta.co/api/latest_article")
    .then((response) => {
        setAdvice(response.data.articles);
        console.log(response.data.articles);
        var date = moment().utcOffset('+03:00').format('YYYY-MM-DD');
        setCurrentDate(date);
        setRefreshing(false);
    });
}, [])
if (refreshing) {
  return (
    <View style={styles.container}>
 
    <Image  source={Images.Loader} resizeMode="cover"  style={styles.imageloader}></Image>
     </View>
  );
} else{
  return (
    <>
    <Modal
            animationType = {"slide"}
            transparent={true}
            visible={isModalVisible}
          >
            <Image 
             source={{uri: img_url1+addImage}}
              style = { styles.imageadd }/>
               <TouchableHighlight
              style={styles.closeButton}
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
              <AntDesign name="close" size={25}></AntDesign>
            </TouchableHighlight>
          </Modal>
    
    <SafeAreaView style={styles.container}>
      <ScrollView   refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <ScrollView horizontal>
      <View style={styles.container}>
      {
        categoryList.map((item,index)=>
        <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("Sports",{"name":item.name,index})}>
        <View>
        <Image 
             source={{uri: img_url2+item.image}}
             style={styles.imagec1}/>
      <Text style={styles.headtextc1}>{item.name}</Text>
      </View>
      </TouchableHighlight>
)
}

</View>     
</ScrollView>
<Image  style={styles.addimage} source={require('../assets/imgs/add.png')}  />    
<View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={styles.trendinghead}> Breaking News</Text>
                    </View>
                </View>
                {
        sportList.map((item,index)=>
        <TouchableHighlight  underlayColor={'transparent'} onPress={()=> navigation.navigate("BreakingNewsDetails",item,index)}>
<Card>
<View style={styles.container} >
        <View  style={{ flexDirection:'column'}}>
        <Image source={{uri: img_url+ item.image}}
        style={styles.tredingimage}  />
        </View>
          <View  style={{flex:1, flexDirection:'column'}}>
          <View style={styles.container}>
            
          <Text style={styles.tredingTitle}>
        {item.title} </Text>     
      </View>
          <Text style={styles.tredingDate}>
          {currentDate}
           </Text>
        </View> 
      </View>   

</Card>
</TouchableHighlight>
)
}
    <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={styles.trendinghead}> Today’s Trending</Text>
                    </View>
                </View>
                {
        advice.map((item,index)=>
        <TouchableHighlight    underlayColor={'transparent'} onPress={()=> navigation.navigate("TredingDetails",item,index)}>
<Card>
<View style={styles.container} >
        <View  style={{ flexDirection:'column'}}>
        <Image source={{uri: img_url+ item.image}}
        style={styles.tredingimage}  />
        </View>
          <View  style={{flex:1, flexDirection:'column'}}>
          <View style={styles.container}>
            
          <Text style={styles.tredingTitle}>
        {item.title} </Text>     
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
  marginTop:10,
  marginBottom:10,
  paddingLeft:10
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