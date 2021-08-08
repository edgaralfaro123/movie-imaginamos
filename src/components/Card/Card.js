import React from 'react'
import {View,StyleSheet, Dimensions,Image,Text,TouchableOpacity} from 'react-native'
import { Colors } from '../../constans/Colors'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Card = ({item,sendRequest})=>{
    
    return (
        <TouchableOpacity onPress={()=>sendRequest(item)} style={styles.container}>
            <Image
                resizeMode='stretch'
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
            />
            <View style={styles.containerText}>
                <Text style={styles.text} numberOfLines={2}>{item.original_title}</Text>
            </View>
            
            <View style={styles.containerStars}>
              <Stars
                    default={item.vote_average/2}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    container: {
        borderRadius: 60,
        width:Dimensions.get('window').width *0.37
    },
    image:{
        borderRadius:60,
        width: Dimensions.get('window').width *0.3,
        height:Dimensions.get('window').height *0.2
    },
    text:{
       fontSize: 12,
       color:Colors.white,
       alignContent:'center'
    },
    stair:{
        backgroundColor:Colors.bgsecundary
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
      containerStars:{
          alignItems:'flex-start'
      },
      containerText:{
        width:Dimensions.get('window').width *0.3,
        height:Dimensions.get('window').height *0.07,
        justifyContent:'center'
      }

})
export default Card;