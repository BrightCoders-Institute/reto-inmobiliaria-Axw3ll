import { StyleSheet, Text, View,Im, Image } from 'react-native'
import React from 'react'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function Card() {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image 
            style = {styles.img}
            source = {{uri:'https://assets.easybroker.com/property_images/3563089/57959475/EB-MR3089.jpg?version=1676677338'}}
            />
        </View>
      <View style={styles.Info}>
        <Text style={styles.tPropiedad}>The Willows</Text>
        <Text style={styles.tLocacion}>3517 W.Gray St.Utica</Text>
        <View style={{flexDirection:'row' }}>
          <View style={styles.tInfo}>
          <Ionicons name="bed-outline" size={24} color="black" />
          <Text style={{color:'black',paddingTop:4,paddingLeft:2,fontWeight:'bold'}}>3</Text>
        </View>
        <View style={styles.tInfo}>
          <MaterialCommunityIcons name="shower" size={24} color="black" />
          <Text style={{color:'black',paddingTop:4,paddingLeft:2,fontWeight:'bold'}}>2</Text>
        </View>
        <View style={styles.tInfo}>
          <MaterialCommunityIcons name="shower" size={24} color="black" />
          <Text style={{color:'black',paddingTop:4,paddingLeft:2,fontWeight:'bold'}}>230 ft</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginRight:'60%'}}>$440/m</Text>
        <View style={{width:40,height:40,marginBottom:20}}>
            <Ionicons name="heart-circle-sharp" size={40} color="green"/>
        </View>
        </View>

      </View>
      
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({

container:{
   width:375,
   height:125,
   backgroundColor:'#F5FDFF',
   flexDirection:'row',
   borderRadius:5
   
},
imgContainer:{
   
    width:'26%',
    height:'100%',
    marginLeft:20
},
img:{
    width:90,
    height:90,
    marginTop:15,
    borderRadius:5
},
Info:{
    width:'60%',
    height:'100%',
    marginLeft:10,
    marginTop:10
    // backgroundColor:'white'
    
},
tPropiedad:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'left'
},
tLocacion:{
    color:'#737373',
    fontSize:12,
    textAlign:'left'
},
tInfo:{
  flexDirection:'row',
  marginRight:50
  
},
})