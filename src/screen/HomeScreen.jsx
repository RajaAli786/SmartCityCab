import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './utils/colors'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../screen/assets/user.jpg")} style={styles.homeImg} />
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.subtitle}>This is a subtitle for react native</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper, {backgroundColor : colors.primary}]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: colors.white,
        alignItems : "center",
    },
    homeImg : {
        width : 250,
        height : 231,
        marginVertical : 50
    },
    title :{
        fontSize : 36
    },
    subtitle : {
      fontSize : 20,
      marginVertical : 20
    },

    buttonContainer : {
      flexDirection : "row",
      borderWidth : 2,
      borderColor : colors.primary,
      width : "80%",
      height : 50,
      borderRadius : 90
    },
    loginButtonWrapper : {
      justifyContent : "center",
      alignItems : "center",
      width : "50%",
      borderRadius : 98,
    },
    loginButtonText : {
      fontSize : 18,
      color : colors.white
    },
    signupButtonText : {
      fontSize : 18
    }

})