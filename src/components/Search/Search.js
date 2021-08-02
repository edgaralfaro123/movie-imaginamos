import React from 'react'
import {TextInput,View,Dimensions,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Colors } from '../../constans/Colors';
const Search = () => {
    return (
        <View style={{justifyContent:'center',borderRadius:25,margin:10,backgroundColor:'white',opacity: 0.4,
            marginHorizontal: Dimensions.get('window').width *0.1,paddingHorizontal:10,flexDirection:'row'}}>
            <View style={styles.containerSearch}>
                <View style={styles.contianerSe}>
                    <Icon name="md-search-outline" size={28} color={`${Colors.white}`} />
                </View>
                <View style={styles.contianerSearchText}>
                    <TextInput placeholderTextColor={`${Colors.white}`} color={`${Colors.white}`} placeholder='Search'></TextInput> 
                </View>  
                   
            </View>
           
        </View>
    )
}

const styles= StyleSheet.create({
    containerSearch:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center'
    },
    contianerSe:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    contianerSearchText:{
        flex:0.9,
        justifyContent:'center'
    }
})
export default Search;