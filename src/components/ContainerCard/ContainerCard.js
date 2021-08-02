import React from 'react'
import {View,Text,TouchableOpacity,FlatList,StyleSheet, Dimensions,StatusBar} from 'react-native'
import Card from '../Card'
import { Colors } from '../../constans/Colors'
const ContainerCard = ({items,title,sendRequest})=> {
    return (
        <View style={styles.containerRecommended}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.containertittletext}>
                <Text style={styles.titletext}>{title}</Text>
                <TouchableOpacity style={styles.containertitletextT}>
                    <Text style={styles.titletextT}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={items}
                renderItem={({item})=> (
                    <Card item={item} sendRequest={sendRequest}/>
                )}
                keyExtractor={(_,i) => i}
            />
                    
        </View>
    )
}
const styles = StyleSheet.create({
    titletext:{
        color:Colors.white,
        fontWeight:'bold',
        flex:0.6,
        fontSize:13
    },
    containertittletext:{
        flexDirection:'row',
        paddingBottom:15
    },
    titletextT:{
        color:Colors.letter,
        textAlign:'right',
    },
    containertitletextT:{
        flex:0.4,
        justifyContent:'flex-end',
        right:30
    },
    containerRecommended:{
        marginBottom: Dimensions.get('window').height * 0.03
    }
})

export default ContainerCard;