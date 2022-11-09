import {View, Text} from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function TelaBarCode(){
  const [txt,setTxt] = useState('0000')
  const [altura,setAltura] = useState('')
  const [largura,setLargura] = useState('')
  const [sim,setS]= useState(true)
  const [nao,setN]= useState(false)
  const [acima,setCima]=useState(true)
  const [abaixo,setBaixo]=useState(false)

  return(
    <View style={{backgroundColor:'lightgrey',padding:4,flexDirection:'column',alignItems:'center'}}>
      <View style={styles.visao}>
        <Text style={{marginEnd:25}}>BarCode:</Text>
        <TextInput 
          style={{backgroundColor: 'darkgrey',color:'black',width:220}}
          defaultValue={txt}
          onChangeText={newText => setTxt(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text style={{marginEnd:40}}>Altura:</Text>
        <TextInput 
          style={{backgroundColor: 'darkgrey',color:'black',width:220}}
          defaultValue={altura}
          onChangeText={newText => setAltura(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text style={{marginEnd:30}}>Largura:</Text>
        <TextInput 
          style={{backgroundColor: 'darkgrey',color:'black',width:220}}
          defaultValue={largura}
          onChangeText={newText => setLargura(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text>HRI posição:</Text>
        <CheckBox title='Acima' checked={acima} checkedColor='drakgrey' onPress={()=>(setCima(true),setBaixo(false))}/>
        <CheckBox title='Abaixo' checked={abaixo} checkedColor='drakgrey' onPress={()=>(setBaixo(true),setCima(false))}/>
      </View>

      <View style={styles.visao}>
        <Text>Cortar papel</Text>
        <CheckBox title='Sim' checked={sim} onPress={()=>(setS(true),setN(false))}/>
        <CheckBox title='Não' checked={nao} onPress={()=>(setN(true),setS(false))}/>
      </View>
    </View>
  );
}

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
    alignSelf:'baseline',
    alignItems:'center',
    flexDirection:'row',
    padding:2
  }
})