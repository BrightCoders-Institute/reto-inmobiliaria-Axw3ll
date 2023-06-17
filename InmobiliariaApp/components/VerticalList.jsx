import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from '../data/Propiedades.json'
import Card from './Card'
export default function VerticalList() {
  return (
    <View>
      <SafeAreaView>
        <FlatList
        style={{width:'100%', marginHorizontal:15,marginVertical:5}}
            data={Data.Propiedades}
            renderItem={propiedad=><Card propiedad={propiedad}/>}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

})