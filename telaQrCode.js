import {View, Text, TouchableOpacity} from 'react-native' 
import QRCode from './QRcodeCanvas';
import { TextInput } from 'react-native';
import { useState } from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default function TelaQrCode(){
  const [txt,setTxt]=useState('www.tectoySunmi.com.br')
  const [tam,setTam]=useState('8')
  const [sim,setS]=useState(true)
  const [nao,setN]=useState(false)
  const [checked1,set1]=useState(false)
  const [checked2,set2]=useState(true)
  const [checked3,set3]=useState(false)
  
  function aumenta(){
    if(Number(tam)<30){
      setTam(Number(tam)+2)
    }
  }

  function diminui(){
    if(Number(tam)>2){
      setTam(Number(tam)-2)
    }
  }

  return(
    <View style={{backgroundColor:'lightgrey',padding:4,flexDirection:'column',alignItems:'center'}}>
      <View style={styles.visao}>
        <Text>QRCode: </Text>
        <View style={{width:20}}></View>
        <TextInput 
          style={{backgroundColor: 'darkgrey',color:'black',width:220}}
          defaultValue={txt}
          onChangeText={newText => setTxt(newText)} >        
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text style={{marginEnd:20}}>QR-Code tamanho:</Text>
        <TouchableOpacity onPress={diminui}>
          <Text style={styles.texto}>-</Text></TouchableOpacity>
        <Text style={{fontSize:20,backgroundColor:'darkgrey',height:36}}> {tam} </Text>
        <TouchableOpacity onPress={aumenta}>
          <Text style={styles.texto}>+</Text>  
        </TouchableOpacity>
      </View>

      <View style={styles.visao}>      
        <Text>Alinhamento:</Text>
        <CheckBox title='Esquerda' checked={checked1} onPress={()=>(set1(true),set2(false),set3(false))} checkedColor='blue'/>
        <CheckBox title='Centro' checked={checked2} onPress={()=>(set1(false),set2(true),set3(false))} checkedColor='blue'/>
        <CheckBox title='Direita' checked={checked3} onPress={()=>(set1(false),set2(false),set3(true))} checkedColor='blue'/> 
      </View>

      <View style={styles.visao}>
        <Text>Cortar papel</Text>
        <CheckBox title='Sim' checked={sim} onPress={()=>(setS(true),setN(false))}/>
        <CheckBox title='Não' checked={nao} onPress={()=>(setN(true),setS(false))}/>
      </View>

      <QRCode text={txt}></QRCode>
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