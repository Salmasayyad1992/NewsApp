import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState,useRef,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import Images from "../Componants/Images";
import * as React from "react";
import { useForm } from 'react-hook-form'

export default function Create_Post() {
  const [title, setTitle] =useState('');
  const [refreshing, setRefreshing] = useState(false);
  const todoInput = useRef();
  const [descripation, setdescripation] =useState('');
  const [image, setImage] = useState('');
  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const clearInput = React.useCallback(()=> onChangeText(''), []); 
  const onChangeTitleHandler = (title) => {
    setTitle(title,'');
  };
  const onChangedescripationHandler = (descripation) => {
    setdescripation(descripation,'');
  };
  const onChangeImageandler = (image) => {
    setImage(image[0],'');
    
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions._image,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });    
    console.log("Add Image",_image);
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  const anotherFunc = (val) =>{
    setTitle('');
    setdescripation('');
    setImage('');

}
  let uploadImage = async (e) => {
    setRefreshing(true);
    e.preventDefault();
    let body = new FormData();
    body.append('title', title);
    body.append('descripation', descripation);
    body.append('image', {uri: image,name: 'photo.png',filename :'imageName.png',type: 'image/png'});
    body.append('Content-Type', 'image/png');
    fetch('http://newsserver.abhiyanta.co/api/cn_store',{ method: 'POST',headers:{  
         "Content-Type": "multipart/form-data",
         "otherHeader": "foo",
         } , body :body} )
      .then((res) => { 
 
        alert("Added Successfully");
  
        anotherFunc();
        setRefreshing(false);
        body="";
        console.log("response" +JSON.stringify(res));
      
      })
      .catch((e) => console.log(e))
};
const submitForm=(data)=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let body = new FormData();
      body.append('title', title);
      body.append('descripation', descripation);
      body.append('image', {uri: image,name: 'photo.png',filename :'imageName.png',type: 'image/png'});
      body.append('Content-Type', 'image/png');
      fetch('http://newsserver.abhiyanta.co/api/cn_store',{ method: 'POST',headers:{  
           "Content-Type": "multipart/form-data",
           "otherHeader": "foo",
           } , body :body} )
        .then((res) => { 
          alert("Added Successfully");
          body="";
          console.log("response" +JSON.stringify(res));
          todoInput.current.clear();
        })
        .catch((e) => console.log(e))
      resolve()
    }, 4000)
  })
}
 // This function is triggered when the   q"Select an image" button pressed
 const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      
      });
    // Explore the result
    console.log(result);

  
  }

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  if (refreshing) {
    return (
      <View style={styles.container}>
    <Image  source={Images.submitLoader}   style={styles.imageloader}></Image>
     </View>
    );
  } else{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerh}>
          <View style={{flex:1}}>
                        <Text style={styles.trendinghead}> Create News</Text>
                    </View>
        </View>


        <View style={styles.containerh}>
          <View>
            <Image style={styles.tredingimage} source={require('../assets/imgs/news.png')} />
          </View>

        </View>

      

          <View style={styles.containerhead}>
          <Text style={styles.containerText}>
        HeadLine
       </Text>
           
                <TextInput multiline={true}
             
                   value={title}
                   onChangeText={onChangeTitleHandler}
                style={styles.textHeadline} 
                
                clearButtonMode='always'
                textAlignVertical="top" />
          </View>

          <View style={styles.containerhead}>    
          <Text style={styles.containerText}>
          descripation
       </Text>      
       <TextInput multiline={true}
       value={descripation}
       onChangeText={onChangedescripationHandler}
       style={styles.textDesc} textAlignVertical="top"
       clearButtonMode="always"

       />

            
          </View>
          <Text style={imageUploaderStyles.containerText}>
          Upload Image
       </Text>
          <View style={imageUploaderStyles.container}>
      
                {
                    image  && <Image source={{ uri: image }} style={{ width: 350, height: 200 }} />
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity 
                             value={image}
                             onChangeText={onChangeImageandler}
                        onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>  {image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
        
          <TouchableOpacity style={styles.buttonLogin} 
           onPress = {uploadImage}>
            <Text style={styles.buttonLoginText}>Submit </Text>
          </TouchableOpacity>
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
  containerhead:{
    flex: 1,
    marginTop: 20
  },
  containerText:{
    color: "#737373",
    marginLeft:11,
    marginBottom:5,
    fontWeight:"400",
    fontSize:16

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
    marginLeft:"auto",
    marginRight:"auto",
  },
  tredingTitle:{
    fontSize:12,
     textAlign:"justify",
     paddingLeft:10,
     paddingRight:10,
     paddingTop:5
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
   textHeadline:{
    height: 90,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 20,
    width:330,
    marginLeft:15
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
  textDesc:{
    height: 120,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 20,
    width:330,
    marginLeft:15
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
const imageUploaderStyles=StyleSheet.create({
  container:{
    borderColor: "gray",
    borderWidth: 1,
      height:200,
      width:330,
      backgroundColor:'White',
      position:'relative',
      overflow:'hidden',
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:20,
      marginBottom:20
  },
  uploadBtnContainer:{
      opacity:0.7,
      position:'absolute',
      right:0,
      bottom:0,
      backgroundColor:'lightgrey',
      width:'100%',
      height:'25%',
  },
  uploadBtn:{
      display:'flex',
      alignItems:"center",
      justifyContent:'center'
  },

  containerText:{
    color: "#737373",
    marginLeft:11,
    marginTop:11,
    marginBottom:-13,
    fontWeight:"400",
    fontSize:16

  }
})