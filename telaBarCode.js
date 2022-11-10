import {View, Text} from 'react-native';
import { TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function TelaBarCode(){
  
  const [txt,setTxt] = useState('0000')
  const [altura,setAltura] = useState('')
  const [largura,setLargura] = useState('')
  const [acima,setCima]=useState(true)
  const [abaixo,setBaixo]=useState(false)
  const [l,setL] = useState(120)
  const [direcao,setDirecao]=useState('column')

  const [wDimension,setD] = useState(
      {width : window.innerWidth,
      height : window.innerHeight,}
  )
  const detectSize = () =>{
      setD({
        width : window.innerWidth,
        height : window.innerHeight,
      })
      if(wDimension.width<350){
        setDirecao('column')
        setL(120)
      }else{
        setDirecao('row')
        setL(200)
      }
  }
  useEffect (()=>{
        window.addEventListener('resize',detectSize)
        return () => {
          window.removeEventListener('resize',detectSize)
        }
  },[wDimension])

  const styles = StyleSheet.create({
    texto:{
      fontSize:20,
      backgroundColor:'blue',
      color:'white',
      padding:5,
      width:30,
      textAlign:'center'
    },
    visao:{
      alignSelf:'center',
      alignItems:'center',
      flexDirection:'row',
      padding:2
    },
    textInputSt:{
      backgroundColor: 'darkgrey',
      color:'black',
      width:l
    },
    V:{
      height:wDimension.height*0.85,
      width:wDimension.width,
      backgroundColor:'lightgrey',
      flexDirection:'column',
      alignItems:'center',
      alignSelf:'center'
    }
  })

  return(
    <View style={styles.V}>
      <View style={styles.visao}>
        <Text>BarCode:       </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={txt}
          onChangeText={newText => setTxt(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text>Altura:           </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={altura}
          onChangeText={newText => setAltura(newText)}>        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text>Largura:        </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={largura}
          onChangeText={newText => setLargura(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text>HRI posição:</Text>
        <View style={{flexDirection: direcao}}>
          <CheckBox title='Acima' checked={acima} checkedColor='drakgrey' onPress={()=>(setCima(true),setBaixo(false))}/>
          <CheckBox title='Abaixo' checked={abaixo} checkedColor='drakgrey' onPress={()=>(setBaixo(true),setCima(false))}/>
        </View>
      </View>
    </View>
  );
}