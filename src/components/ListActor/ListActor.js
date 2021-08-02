import React from 'react'
import {View,Image,Text,StyleSheet,Dimensions} from 'react-native'
import { Colors } from '../../constans/Colors'
const ListActor = ({item})=> {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`}}
            />
            <Text style={styles.text}>{item.character}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        width: Dimensions.get('window').width *0.24,
    },
    image:{
        width: Dimensions.get('window').width *0.15,
        height:Dimensions.get('window').height *0.07,
        borderRadius:30,
        alignSelf:'center'
    },
    text:{
        color: Colors.letter,
        fontSize: 15,
        textAlign:'center',
        paddingHorizontal:5
    }
})
export default ListActor;