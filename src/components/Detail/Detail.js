import React,{useState,useEffect} from 'react'
import {View,Image,StyleSheet, StatusBar, Dimensions,Text,Linking, TouchableOpacity,ScrollView, FlatList} from 'react-native'
import BackFavorite from '../BackFavorite'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Colors } from '../../constans/Colors';
import ListActor from '../ListActor';
import Production from '../Production';
import { apiKey,uriApi } from '../../constans/api';
import Stars from 'react-native-stars';
const Detail =({itemDetail,back})=> {
    console.log(itemDetail)
    const [items, setItems] = useState([])

    const sendRequest = async()=>{
        const query = await fetch(`${uriApi}${itemDetail.id}/credits?api_key=${apiKey}&language=en-US`)
        .then((data) => data.json())
        .then((dataJSON) => {
            setItems(dataJSON.cast)
          
        })
    }

    useEffect(() => {
        sendRequest();
    }, [])


    
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
           <BackFavorite back={back}/>
           <View style={styles.containerHeader}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/w500${itemDetail.belongs_to_collection == null ?  itemDetail.backdrop_path : itemDetail.belongs_to_collection.backdrop_path == null ? itemDetail.belongs_to_collection.poster_path : itemDetail.belongs_to_collection.backdrop_path}`}}
                />                
            </View>
            <View style={styles.containerDetail}>
            <ScrollView >
                <View style={styles.containerTitle}>
                    <View style={styles.containerTitleView}>
                        <Text style={styles.title}>{itemDetail.original_title}</Text>
                    </View>
                    <View style={styles.containerFourk}>
                        <Icon name="video-4k-box" size={25} color={`${Colors.letter}`} />
                    </View>
                </View>

                <View style={styles.containerWatch}>
                    <View style={styles.containerWatchNow}>
                        <TouchableOpacity onPress={() =>
                                Linking.openURL(itemDetail.homepage)
                            } style={styles.watchNow}>
                            <Text style={styles.textWatchNow}>WATCH NOW</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerStairs}>
                        <View style={styles.containerStair}>
                            <Stars
                                default={itemDetail.vote_average/2}
                                count={5}
                                half={true}
                                starSize={50}
                                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                            />
                        </View>
                    </View>
                </View>
                
                <View style={styles.containerDescription}>
                    <View style={{paddingVertical:20,paddingHorizontal: Dimensions.get('window').width * 0.05}}>
                       
                            <Text style={{color:Colors.letter,fontSize:Dimensions.get('window').width *0.035,lineHeight: 25}}>{itemDetail.overview}</Text>
                       
                    </View>
                </View>
                <View style={styles.containerCars}>

                    
                    <FlatList
                        horizontal
                        data={items}
                        renderItem={({item})=> (
                            <ListActor item={item}/>
                        )}
                        keyExtractor={(_,i) => i}
                    />
                </View>
                <View style={styles.containerResumen}>
                    <Production type='Studio' description='Warner Bros.'/>
                    <Production type='Genre' description='Action, Adventure, Fantasy'/>
                    <Production type='Release' description='2018'/>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1
    },
    image:{
        flex:1,
        borderRadius:30
    },
    containerHeader:{
        flex:0.4,
    },
    containerDetail:{
        flex:0.6
    },
    containerTitle:{
        flexDirection:'row',
        flex:0.1,
        //backgroundColor:'blue',
        width: Dimensions.get('window').width,
        paddingHorizontal: Dimensions.get('window').width * 0.05
    },
    containerFourk:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    containerTitleView:{
        flex:0.9,
        //backgroundColor:'blue',
        justifyContent:'center'
    },
    title:{
        color: Colors.white,
        fontWeight:'bold',
        fontSize:25
    },
    containerWatch:{
        flexDirection:'row',
        flex:0.12,
        width: Dimensions.get('window').width,
        paddingHorizontal: Dimensions.get('window').width * 0.05
    },
    containerWatchNow:{
        flex:0.4
    },
    watchNow:{
        backgroundColor: Colors.bgButton,
        justifyContent:'center',
        flex:1,
        borderRadius:30,
        marginVertical:10,
        paddingVertical:10
    },
    textWatchNow:{
        color: Colors.white,
        fontWeight:'bold',
        textAlign:'center'
    },
    containerStair:{
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end'
    },
    containerStairs:{
        flex:0.6
    },
    containerDescription:{
        flex:0.4
    },
    containerCars:{
        flex:0.2,
        //backgroundColor:'red'


    },
    containerResumen:{
        flex:0.2,
        backgroundColor: Colors.bgsecundary,
        justifyContent:'center',
        paddingBottom:20
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
})

export default Detail;