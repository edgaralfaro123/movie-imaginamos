import React,{useState,useEffect} from 'react'
import {Dimensions,View,TouchableOpacity ,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useDarkMode } from 'react-native-dark-mode'
import { Colors } from '../../constans/Colors';
import { ColorsDark } from '../../constans/ColorsDark'
const BackFavorite = ({back})=> {
  const deviceTheme = useDarkMode();
  const [colores, setColores] = useState(Colors)

  useEffect(() => {
    getColors();
  }, [])

  const getColors =()=>{
    if( deviceTheme == true ){
        setColores(ColorsDark)
    }else{
        setColores(Colors)
    }
  }
  return (
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'center'}}>
          <TouchableOpacity onPress={back} style={{alignItems: 'flex-start',paddingLeft:20}}>
            <Icon name="arrow-back" size={28} color={`${colores.bgInput}`} />
          </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'flex-end',paddingRight:20}}>
            <Icon name="heart-outline" size={28} color={`${colores.bgInput}`} />
          </TouchableOpacity>
        </View> 
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    width:Dimensions.get('window').width,
    position:'absolute',
    zIndex:2,
    top:Dimensions.get('window').height * 0.05
  }
})

export default BackFavorite;