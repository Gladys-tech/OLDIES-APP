import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style= {styles.container}>
      <Text>Oldies</Text>
      <StatusBar style="auto"/>
      <Link href="/home" style={{color:'blue'}}>Go to Home</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
})