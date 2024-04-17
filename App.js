import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const App = () => {
  const width=useSharedValue(100)

  const handlePress=()=>{
    width.value=withSpring(width.value+50)
  }
  return (
    <>
    <Animated.View style={{width:width,height:width,backgroundColor:"red"}}>
    </Animated.View>

    <Button onPress={handlePress} title='Press ME'/>

 
    </>
  )
}

export default App

const styles = StyleSheet.create({})
