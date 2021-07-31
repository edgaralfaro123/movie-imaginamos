import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity, Dimensions} from 'react-native'
import Card from '../../components/Card'
import { Colors } from '../../constans/Colors'
const Home = () =>{

    const item = {
        title:'Aquaman',
        image:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/03/Aquaman%20cartel%20b_2.jpg?itok=Ai7Sb2c9'
    }
    return(
        <View style={styles.container}>  
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Hello, what do you want to watch ?</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={styles.containertittletext}>
                    <Text style={styles.titletext}>RECOMMENDED FOR YOU</Text>
                    <TouchableOpacity style={styles.containertitletextT}>
                        <Text style={styles.titletextT}>See all</Text>
                    </TouchableOpacity>
                </View>
                <Card item={item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:29,
        fontWeight:'bold',
        color: Colors.white,
        paddingHorizontal: Dimensions.get('window').width * 0.1,
        lineHeight: 40
    },
    container:{
        backgroundColor:Colors.bgprimary,
        flex:1,
        flexDirection:'column'
    },
    containerHeader:{
        flex:0.25,
        justifyContent:'center'
    },
    containerCard:{
        padding:20,
        flex:0.75,
        backgroundColor:Colors.bgsecundary,
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        marginTop:10
    },
    titletext:{
        color:Colors.white,
        fontWeight:'bold',
        flex:0.6
    },
    containertittletext:{
        flexDirection:'row',
        marginVertical:20
    },
    titletextT:{
        color:Colors.white,
        textAlign:'right',
    },
    containertitletextT:{
        flex:0.4,
        justifyContent:'flex-end'
    }
})

export default Home;