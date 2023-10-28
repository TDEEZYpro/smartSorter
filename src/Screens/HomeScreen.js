import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
const HomeScreen = () => {
  return (
    <View style={styles.HomeContainer}>
        <Text style={styles.description}>You have uploaded a picture {"\n"}of a plasic bottle</Text>
        <Text style={styles.ImageBox}>Picure captured</Text>
        <Text style={styles.button}>Upload Picure</Text>
        <Text style={styles.button}>Take a picture</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    HomeContainer:{
        alignItems: 'center',
        width: "100%",
    },
    description:{
        fontSize:20,
        color: '#fff',
        padding: 30,
        borderRadius: 15,
        backgroundColor: "hsl(89.71 100% 58.82%)"
    },
    ImageBox:{
        margin: 60,
        backgroundColor: "#c1c1c1",
        padding: 50
    },
    button:{
        backgroundColor: "hsl(89.71 100% 58.82%)",
        padding: 17,
        marginHorizontal: 0,
        marginTop: 20,
        borderRadius: 18,
        alignItems: "center"
    }
})

export default HomeScreen