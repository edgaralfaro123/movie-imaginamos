import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
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
                </View>
                <Card item={item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:26,
        fontWeight:'bold',
        color: Colors.white
    },
    container:{
        backgroundColor:Colors.bgprimary,
        flex:1,
        flexDirection:'column'
    },
    containerHeader:{
        flex:0.25
    },
    containerCard:{
        padding:20,
        flex:0.75,
        backgroundColor:Colors.bgsecundary,
        borderTopEndRadius:40,
        borderTopLeftRadius:40
    },
    titletext:{
        color:Colors.white,
        fontWeight:'bold',
        flex:0.6   
    },
    containertittletext:{
        flexDirection:'row'
    }
})

export default Home;