import React from 'react'
import {View,StyleSheet, Dimensions,Image,Text} from 'react-native'
import { Colors } from '../../constans/Colors'
const Card = ({item})=>{
    console.log('dsadsadsa',item.image)
    return (
        <View style={styles.container}>

            <Image
                resizeMode='cover'
                style={styles.image}
                source={{uri: `${item.image}`}}
            />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        borderRadius: 30
    },
    image:{
        borderRadius:30,
        width: Dimensions.get('window').width *0.35,
        height:Dimensions.get('window').height *0.25
    },
    text:{
       fontSize: 16,
       color:Colors.white
    }
})
export default Card;