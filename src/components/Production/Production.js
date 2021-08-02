import React from 'react'
import {View,StyleSheet,Text, Dimensions} from 'react-native'
import { Colors } from '../../constans/Colors'

const Production =({type,description}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.containerType}>
                <Text style={styles.type}>{type}</Text>
            </View>
            <View style={styles.containerDescription}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal: Dimensions.get('window').width * 0.05,
    },
    containerType:{
        flex:0.2,
    },
    containerDescription:{
        flex:0.8,
    },
    type:{
        color: Colors.white,
        fontWeight: 'bold'
    },
    description:{
        color:Colors.letter
    },
})

export default Production;