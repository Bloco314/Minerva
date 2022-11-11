import {View, Text} from 'react-native';
import { TextInput } from 'react-native';
import { useState} from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';

export default function TelaBarCode(){
  const [txt,setTxt] = useState('0000')
  const [altura,setAltura] = useState('')
  const [largura,setLargura] = useState('')
  const [acima,setCima]=useState(true)
  const [abaixo,setBaixo]=useState(false)

  const styles = StyleSheet.create({
    texto:{
      fontSize:20,
      backgroundColor:'blue',
      color:'white',
      padding:5,
      width:30,
      textAlign:'center'
    },
    visao1:{
      alignSelf:'center',
      alignItems:'center',
      flexDirection:'row',
      padding:2,
      flex:1
    },
    visao2:{
      alignSelf:'center',
      alignItems:'center',
      flexDirection:'row',
      padding:2,
      flex:4
    },
    textInputSt:{
      backgroundColor: 'darkgrey',
      color:'black',
      width:120
    },
    V:{
      backgroundColor:'lightgrey',
      flexDirection:'column',
      alignItems:'center',
      alignSelf:'center',
      padding:'10%'
    }
  })

  return(
    <View style={styles.V}>
      <View style={styles.visao1}>
        <Text>BarCode:       </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={txt}
          onChangeText={newText => setTxt(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao1}>
        <Text>Altura:           </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={altura}
          onChangeText={newText => setAltura(newText)}>        
        </TextInput>
      </View>

      <View style={styles.visao1}>
        <Text>Largura:        </Text>
        <TextInput 
          style={styles.textInputSt}
          defaultValue={largura}
          onChangeText={newText => setLargura(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao2}>
        <Text>HRI posição:</Text>
        <View style={{flexDirection: 'column'}}>
          <CheckBox title='Acima' checked={acima} checkedColor='darkgrey' onPress={()=>(setCima(true),setBaixo(false))}/>
          <CheckBox title='Abaixo' checked={abaixo} checkedColor='drakgrey' onPress={()=>(setBaixo(true),setCima(false))}/>
        </View>
      </View>

      <View style={styles.visao2}>
        <Barcode value={'1'}/>
      </View>
    </View>
  );
}