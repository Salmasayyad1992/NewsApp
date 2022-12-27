
import react from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const CustomDrawer = (props) => {
  const route =useRoute();
  // console.log("Menu", route.params.mobile_user);
  
  return (
    <View style={{ flex: 1 }}>
        <StatusBar  backgroundColor="#000000"  barStyle="light-content" />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ color:"#fff"}}>
           <View style={{ flex: 1 ,color:"#fff",height:110,backgroundColor:"#002880" , marginTop:-5 }}>
           <View style={{ flexDirection: 'row' ,height:110}}>
    <Image style={{ width: 70, height: 70 , marginTop:20, marginLeft:20, marginBottom:20}}     source={require('../assets/imgs/User.png')} ></Image>
    <View style={{justifyContent: 'center'}}>
        <Text style={{color:"#fff",paddingLeft:20 ,fontWeight:"400",fontSize:24}}>Login</Text>
        <Text style={{color:"#fff",paddingLeft:20,fontWeight:"400",fontSize:16}}>{  route.params.mobile_user.name}</Text>
   </View>
</View>
</View>
        <DrawerItemList {...props} style={{color:"#fff"}}
          label="Category"
          onPress={() => props.navigation.navigate('Category')}
          activeTintColor="red"
          inactiveTintColor="black"
          focused="true"
        >
        </DrawerItemList>
      </DrawerContentScrollView>
    
    </View>
  )
}
export default CustomDrawer;


const styles = StyleSheet.create({

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    left: 20,
    right: 20,
    top: 20,
    bottom: 20
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
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 10,
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
});