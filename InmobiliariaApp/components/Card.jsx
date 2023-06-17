import { StyleSheet, Text, View,Im, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons,FontAwesome,EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

export default function Card({propiedad}) {
  const [like,setLike]=useState('false')
  return (
    <>
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image 
            style = {styles.img}
            source = {{uri:'https://assets.easybroker.com/property_images/3563089/57959475/EB-MR3089.jpg?version=1676677338'}}
            />

            <View style={styles.startContainer}>
              <AntDesign name="star" size={12} color="#EEBA00" testID="star-icon"/>
              <Text style={{color:'#7A6229',fontSize:12,fontWeight:'bold'}}>{propiedad.item.star}</Text>
            </View>
        </View>
      <View style={styles.Info}>
        <Text style={styles.tPropiedad}>{propiedad.item.Nombre}</Text>
        <View style={{flexDirection:'row'}}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.tLocacion}>{propiedad.item.Info[0].Ubicacion}</Text>
        </View>
        <View style={{flexDirection:'row' }}>
          <View style={styles.tInfo}>
            <Ionicons name="bed-outline" size={24} color="black" />
            <Text style={styles.textoInfo}>{propiedad.item.Info[0].Recamara}</Text>
          </View>
          <View style={styles.tInfo}>
            <MaterialCommunityIcons name="shower" size={24} color="black" />
            <Text style={styles.textoInfo}>{propiedad.item.Info[0].Banios}</Text>
          </View>
        <View style={styles.tInfo}>
          <AntDesign name="codepen" size={24} color="black" />
          <Text style={styles.textoInfo}>{propiedad.item.Info[0].Espacio}</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
          <Text style={styles.precio}>{propiedad.item.Info[0].Precio}</Text>
        <TouchableOpacity 
          style={styles.btnLike}
          onPress={()=>setLike(!like)}
          testID="like-button">
           <FontAwesome name={like?'heart-o':'heart'} size={20} color={'white'} margin={'17%'}/>
        </TouchableOpacity>
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
   borderRadius:5,
   marginBottom:10,
   shadowColor:'black',
  shadowRadius:4  ,
  shadowOffset:{width:40,height:40},
  shadowOpacity:5,
  elevation: 5, // Solo para Android
},
imgContainer:{
    width:'26%',
    height:'100%',
    marginLeft:12
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
    marginTop:10,
    // backgroundColor:'white'
    borderRadius:10
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
    textAlign:'left',
    paddingTop:4
},
tInfo:{
  flexDirection:'row',
  marginRight:50
  
},
startContainer:{
  backgroundColor:'#FBEDB7',
  flexDirection:'row',
  width:'50%',
  paddingHorizontal:6,
  borderRadius:10,
  position:'relative',
  left:'15%',bottom:'27%',
  justifyContent:'space-around',
  alignItems:'center',
  paddingVertical:3,
  shadowColor:'black',
  shadowRadius:4  ,
  shadowOffset:{width:40,height:40},
  shadowOpacity:5,
  elevation: 5, // Solo para Android
},
textoInfo:{
  color:'black',
  paddingTop:4,
  paddingLeft:2,
  fontWeight:'bold'
},
precio:{
  color:'black',
  fontSize:18,
  fontWeight:'bold',
  marginRight:'60%'
},
btnLike:{
  width:30,
  height:30,
  backgroundColor:'green',
  borderRadius:25,
  alignItems:'center'
}
})