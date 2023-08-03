import { createDrawerNavigator } from '@react-navigation/drawer';
import {  Image, StyleSheet, View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Category from './Category';
import BreakingNewsDetails from './BreakingNewsDetails';
import TredingDetails from './TredingDetails';
import CategoryDetails from './Category_Details';
import Create_Post from './Create_Post';
import LoginScreen from './Login';
import SavedPost from './SavedPost';
import SavePostDetails from './SavePost_Details';
import CategoryList from './Category_List';

const CustomIconHome = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
      
      <Icon name="home" size={25} color={focused ? "#288df9" : "#777"} />
  </View>
}


const CustomIconCategory = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
           <Image   style={styles.imagecategory}  source={require('../assets/imgs/application.png')} color={focused ? "#288df9" : "#777"}  />

      {/* <Icon name="home" size={25} color={focused ? "#288df9" : "#777"} /> */}
  </View>
}
const CustomIconReporter = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
          <Image   source={require('../assets/imgs/create_Post.png')} color={focused ? "#288df9" : "#777"}  />
      {/* <Icon name="user" size={25}  color={focused ? "#288df9" : "#777"}/> */}
  </View>
}
const CustomIconLiked = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
      <Icon name="heart" size={25} color={focused ? "#288df9" : "#777"} />
  </View>
}
const CustomIconSaved = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
       <Image   style={styles.image}  source={require('../assets/imgs/saved.png')} color={focused ? "#288df9" : "#777"}  />
      {/* <Icon name="save" size={25} color={focused ? "#288df9" : "#777"} /> */}
  </View>
}
const CustomSignOut = ({focused, name}) => {
  return <View style={{marginRight: -25}}>
       {/* <Image   style={styles.image}  source={require('../assets/saved.png')} color={focused ? "#288df9" : "#777"}  /> */}
      <Icon name="power-off" size={25} color={focused ? "#288df9" : "#777"} />
  </View>
}
const Drawer = createDrawerNavigator();
export default function Menu() {
  const dimensions = useWindowDimensions();

  return (
    
    <Drawer.Navigator
    // drawerContentOptions={{
    //   activeTintColor: 'red',
    //   activeBackgroundColor: 'grey',
    //   inactiveTintColor: 'blue',
    //   inactiveBackgroundColor: 'white',
    //   labelStyle:{
    //     marginLeft:5
    //   }
    // }}
     drawerContent={props => <CustomDrawer {... props}/>}
     drawerStyle={{
      backgroundColor: "green",
      alignItems: "center",
        paddingTop: 100
    }}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        headerStyle: {
          backgroundColor: '#F89A44',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <View style={{flexDirection:"row"}}>
            
       <Icon color="#000000"   name="bell" style={{marginRight:10}}  size={22} />        
       <Image style={styles.webheader}  source={require('../assets/imgs/world-wide-web.png')} tintColor="#000000"  />

         </View>

       
        ),
      
      }}
    >
      {/* Screens */}
      <Drawer.Screen name="Home"
        options={{
          headerStyle: {
            shadowOpacity: 0.86,
            elevation: 8,
            backgroundColor: 'white',
            shadowColor: 'black',

          },
          drawerIcon: (({focused}) => <CustomIconHome focused={focused} />)  ,
          headerTintColor: '#000000',
        }}
      component={Home}/>
             <Drawer.Screen name="Report a news"
        options={{
          headerStyle: {
            shadowOpacity: 0.86,
            elevation: 8,
            backgroundColor: 'white',
            shadowColor: 'black',
          },
          drawerIcon: (({focused}) => <CustomIconReporter focused={focused} />)  ,
          headerTintColor: '#000000',
        }}
      component={Create_Post}/>

      <Drawer.Screen name="Categories"
        options={{
          headerStyle: {
            shadowOpacity: 0.86,
            elevation: 8,
            backgroundColor: 'white',
            shadowColor: 'black',

          },
          drawerIcon: (({focused}) => <CustomIconCategory focused={focused} />)  ,
          headerTintColor: '#000000',
        }}
      component={Category}/>   
             <Drawer.Screen name="Saved Post"
        options={{
          headerStyle: {
            shadowOpacity: 0.86,
            elevation: 8,
            backgroundColor: 'white',
            shadowColor: 'black',
          },
          drawerIcon: (({focused}) => <CustomIconSaved focused={focused} />)  ,
          headerTintColor: '#000000',
        }}
      component={SavedPost}/>
      <Drawer.Screen name="BreakingNewsDetails"  
          options={{
            drawerLabel: () => null,
            title: "Breaking News",
            drawerIcon: () => null,
            drawerItemStyle: { height: 0 ,display:'none' },
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            headerTintColor: '#000000',
          }}
        component={BreakingNewsDetails} /> 
  
        
             <Drawer.Screen name="SavePostDetails"  
          options={{
            drawerLabel: () => null,
            title: "Saved Post",
            drawerIcon: () => null,
            drawerItemStyle: { height: 0 ,display:'none' },
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            headerTintColor: '#000000',
          }}
        component={SavePostDetails} />
                  <Drawer.Screen name="CategoryList"  
          options={{
            drawerLabel: () => null,
            title: "Categories",
            drawerIcon: () => null,
            drawerItemStyle: { height: 0 ,display:'none' },
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            headerTintColor: '#000000',
          }}
        component={CategoryList} />
             <Drawer.Screen name="CategoryDetails"  
          options={{
            drawerLabel: () => null,
            title: "Categories news",
            drawerIcon: () => null,
            drawerItemStyle: { height: 0 ,display:'none' },
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            headerTintColor: '#000000',
          }}
        component={CategoryDetails} />
          
               <Drawer.Screen name="TredingDetails"  
          options={{
            drawerLabel: () => null,
            title: "Treding News",
            drawerIcon: () => null,
            drawerItemStyle: { height: 0 ,display:'none' },
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            headerTintColor: '#000000',
          }}
        component={TredingDetails} />
          <Drawer.Screen name="Sign Out"  
          options={{
            headerShown:false,
            headerStyle: {
              shadowOpacity: 0.86,
              elevation: 8,
              backgroundColor: 'white',
              shadowColor: 'black',
  
            },
            drawerIcon: (({focused}) => <CustomSignOut focused={focused} />)  ,
            headerTintColor: '#000000',
          }}
        component={LoginScreen} />  
        
    </Drawer.Navigator>
    
    
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop:50 ,
     backgroundColor:"##002880", 
     paddingTop:15,
     paddingBottom:15
  },
  container: {
    flex: 1,
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    width:"100%"
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
    width:20,
    height:20,
    marginTop:2,
    marginRight:15
  },
  image:{
    width:18,
    height:24,
  },
  imagecategory:{
    width:18,
    height:18,
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
    paddingTop:20,
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
});