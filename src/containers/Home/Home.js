import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View, Dimensions, ScrollView,Image, StatusBar} from 'react-native'
import { Colors } from '../../constans/Colors'
import { ColorsDark } from '../../constans/ColorsDark'
import ContainerCard from '../../components/ContainerCard'
import Search from '../../components/Search';
import Detail from '../../components/Detail'
import { uriApi,apiKey } from '../../constans/api'
import { useDarkMode } from 'react-native-dark-mode'
import { useSelector } from 'react-redux'
import {useFocusEffect} from '@react-navigation/native';
const Home = (props) =>{
    const isSelected = useSelector(state => state.favoriteReducer.data)
    console.log('isSelected',isSelected)
    const [colores, setColores] = useState(Colors)
    const deviceTheme = useDarkMode()
    const [showView, setShowView] = useState(false)
    const [itemTopRated, setItemTopRated] = useState([])
    const [itemRecommended, setItemRecommended] = useState([])
    const [itemDetail, setItemDetail] = useState({})
    const getTopRated = async ()=>{
        const query = await fetch(`${uriApi}top_rated?api_key=${apiKey}&language=en-US&page=2`)
        .then((data) => data.json())
        .then((dataJSON) => {
          console.log(dataJSON)
          setItemTopRated(dataJSON.results)
        })
    }

    const getRecommended= async ()=>{
        const query = await fetch(`${uriApi}popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((data) => data.json())
        .then((dataJSON) => {
          console.log('recommen',dataJSON)
          setItemRecommended(dataJSON.results)
        })
    }

    const sendRequest = async (item)=>{
        
        console.log('item',item)
        const query = await fetch(`${uriApi}${item.id}?api_key=${apiKey}&language=en-US`)
        .then((data) => data.json())
        .then((dataJSON) => {
            props.navigation.navigate('Detail',{itemDetail:dataJSON})
            //setItemDetail(dataJSON)
            //setShowView(true)
        })
    }

    const back= ()=>{
        setShowView(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            getColors();
        },[])
      )
   /*  useEffect(() => {
        getColors();
    }, []) */

    const getColors =()=>{
        if( deviceTheme == true ){
            setColores(ColorsDark)
        }else{
            setColores(Colors)
        }
        getRecommended(); 
        getTopRated();
    }

    return(
        
        !showView ? (
            <View style={[styles.container,{ backgroundColor:colores.bgprimary}]}>  
                 <View style={styles.containerHeader}>
                    <Text style={[styles.title,{color: colores?.white}]}>Hello, what do you want to watch ?</Text>
                    <Search></Search>
                </View>
    
                <View style={[styles.containerCard,{backgroundColor: colores?.bgsecundary}]}>
                    <ScrollView>
                        {isSelected.length>0 && ( <ContainerCard title='FAVORITES' sendRequest={sendRequest} items={isSelected}/>)}
                        <ContainerCard title='RECOMMENDED FOR YOU' sendRequest={sendRequest} items={itemRecommended}/>
                        <ContainerCard title='TOP RATED' sendRequest={sendRequest} items={itemTopRated}/>
                    </ScrollView>
               </View>
            </View>)
            :  (<View style={styles.containerDetail}>
                    <Detail itemDetail={itemDetail} back={back}/>
                </View> )
    ) 
        
}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'bold',
        paddingHorizontal: Dimensions.get('window').width * 0.1,
        lineHeight: 40
    },
    container:{
        flex:1,
        flexDirection:'column'
    },
    containerHeader:{
        flex:0.35,
        justifyContent:'center'
    },
    containerCard:{
        flex:0.8,
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        paddingTop:30,
        paddingLeft: Dimensions.get('window').width * 0.07,
    },
    titletext:{
        color:Colors.white,
        fontWeight:'bold',
        flex:0.6
    },
    containertittletext:{
        flexDirection:'row',
        marginHorizontal:40,
        marginTop:35
    },
    titletextT:{
        color:Colors.white,
        textAlign:'right',
    },
    containertitletextT:{
        flex:0.4,
        justifyContent:'flex-end'
    },
    containerTopRated:{
        flex:0.75,
        backgroundColor:Colors.bgsecundary,
        paddingLeft: Dimensions.get('window').width * 0.07
    },
    containerRecommended:{
        flex:1,
    },
    containerC:{
        flex:1
    },




    containerDetail:{
        backgroundColor: Colors.bgsecundary,
        flex:1,
        flexDirection:'column'
    }
})

export default Home;