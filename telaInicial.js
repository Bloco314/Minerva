import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useState,useEffect } from 'react';

export default function TelaInicial({navigation}){
  const [wDimension,setD] = useState(
    {width : window.innerWidth,
    height : window.innerHeight,}
  )
  const detectSize = () =>{
    setD({
    width : window.innerWidth,
    height : window.innerHeight,
    })
  }
  useEffect (()=>{
    window.addEventListener('resize',detectSize)
    return () => {
        window.removeEventListener('resize',detectSize)
    }
  },[wDimension])

  return(
      <View style={{
        height:wDimension.height*0.5,
        width:wDimension.width*0.5,
        backgroundColor:'black',
        alignSelf:'center'
      }}>
        <TouchableOpacity
          style={(wDimension.width>300)?styles.button2:styles.button}
          onPress={()=> navigation.navigate('QRcode')}>
          <Text>QRCode print</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(wDimension.width>300)?styles.button2:styles.button}
          onPress={()=> navigation.navigate('BarCode')}>
          <Text>BarCode print</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={(wDimension.width>300)?styles.button2:styles.button}
          onPress={()=> navigation.navigate('Text')}>
          <Text>Text print</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    button2 : {
      backgroundColor: 'darkgrey',
      margin:'2%',
      borderRadius: 2,
      paddingVertical: '5%',
      paddingHorizontal: '2%',
      flex:1
    },
    button : {
      backgroundColor: 'darkgrey',
      margin:'3%',
      borderRadius: 2,
      paddingVertical: '4%',
      paddingHorizontal: '2%',
      flex:1
    }
});
  