import React,{useState,useEffect} from 'react'
import {View,Image,StyleSheet, StatusBar, Dimensions,Text,Linking, TouchableOpacity,ScrollView, FlatList} from 'react-native'
import BackFavorite from '../BackFavorite'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Colors } from '../../constans/Colors';
import { ColorsDark } from '../../constans/ColorsDark'
import ListActor from '../ListActor';
import Production from '../Production';
import { apiKey,uriApi } from '../../constans/api';
import { useDarkMode } from 'react-native-dark-mode'
import { favoriteAction } from '../../store/actions/favoriteActions';
import {useDispatch } from 'react-redux'

import Stars from 'react-native-stars';
const Detail =(props)=> {
    const dispatch = useDispatch()
    const valores= props.route.params
    console.log('valores',valores)
    console.log('props',props)
    const {itemDetail} = props.route.params
    
    console.log(itemDetail)
    const [items, setItems] = useState([])
    const [companies, setCompanies] = useState('')
    const [genres, setGenres] = useState('')
    const [year, setYear] = useState('')
    const deviceTheme = useDarkMode();
    const [colores, setColores] = useState(Colors)

    const back = ()=>{
        props.navigation.goBack()
    }

    const addFavorite =(movie)=>{

        dispatch(favoriteAction({movie}))
    }

    const sendRequest = async()=>{
        const query = await fetch(`${uriApi}${itemDetail.id}/credits?api_key=${apiKey}&language=en-US`)
        .then((data) => data.json())
        .then((dataJSON) => {
            console.log('dataJSON',dataJSON);
            let arrayCompanies = [];
            let arrayGenres = [];
            itemDetail.production_companies.forEach(element => {
                arrayCompanies.push(element.name)
            });
            itemDetail.genres.forEach(element => {
                arrayGenres.push(element.name)
            });
            if(itemDetail.release_date!= undefined){
               setYear(itemDetail.release_date.split('-')[0])
            }
            
            setGenres(arrayGenres.join(', '))
            setCompanies(arrayCompanies.join(', '))
            setItems(dataJSON.cast)

        })
    }

    useEffect(() => {
        getColors();
        sendRequest();
       
    }, [])

    const getColors =()=>{
        console.log('deviceTheme',deviceTheme)
        if( deviceTheme == true ){
            setColores(ColorsDark)
        }else{
            setColores(Colors)
        }
    }


    
    return (
        <View style={[styles.container,{backgroundColor: colores.bgsecundary}]}>
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
                <ScrollView>
                    <View style={styles.containerTitle}>
                        <View style={styles.containerTitleView}>
                            <Text style={styles.title}>{itemDetail.original_title}</Text>
                        </View>
                        <View style={styles.containerFourk}> 
                            <Icon name="video-4k-box" size={25} color={`${colores.letter}`} />
                        </View>
                    </View>

                    <View style={styles.containerWatch}>
                        <View style={styles.containerWatchNow}>
                            <TouchableOpacity onPress={() =>
                                    Linking.openURL(itemDetail.homepage)
                                } style={[styles.watchNow,{backgroundColor: colores.bgButton,}]}>
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
                        <Production type='Studio' description={companies}/>
                        <Production type='Genre' description={genres}/>
                        <Production type='Release' description={year}/>
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
        marginTop:Dimensions.get('window').height * 0.03,
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
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        marginTop:Dimensions.get('window').height * 0.01
    },
    containerWatchNow:{
        flex:0.4
    },
    watchNow:{
        
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
        marginTop: Dimensions.get('window').height * 0.01
        //backgroundColor:'red'


    },
    containerResumen:{
        flex:0.2,
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