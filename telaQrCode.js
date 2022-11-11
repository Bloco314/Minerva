import {View, Text, TouchableOpacity} from 'react-native' 
import { TextInput } from 'react-native';
import { useState} from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function TelaQrCode(){

  const [txt,setTxt]=useState('www.tectoySunmi.com.br')
  const [tam,setTam]=useState('8')
  const [checked1,set1]=useState(false)
  const [checked2,set2]=useState(true)
  const [checked3,set3]=useState(false)

  function aumenta(){
    if(Number(tam)<12){
      setTam(Number(tam)+1)
    }
  }

  function diminui(){
    if(Number(tam)>1){
      setTam(Number(tam)-1)
    }
  }

  return(
    <View style={styles.V}>
      <View style={styles.v1}>
        <Text>QRCode: </Text>
        <TextInput 
          style={{backgroundColor: 'darkgrey',color:'black'}}
          defaultValue={txt}
          onChangeText={newText => setTxt(newText)} >        
        </TextInput>
      </View>

      <View style={styles.v1}>
        <Text>QR-Code tamanho:  </Text>
        <TouchableOpacity onPress={diminui}>
          <Text style={styles.texto}>-1  </Text>
        </TouchableOpacity>
        <Text style={{backgroundColor:'darkgrey'}}> {tam} </Text>
        <TouchableOpacity onPress={aumenta}>
          <Text style={styles.texto}>+1  </Text>  
        </TouchableOpacity>
      </View>

      <View style={styles.v2}>      
        <Text>Alinhamento:</Text>
        <View style={{flexDirection:'column'}}>
          <CheckBox style={{flex:1}} title='Esquerda' checked={checked1} onPress={()=>(set1(true),set2(false),set3(false))} checkedColor='blue'/>
          <CheckBox style={{flex:1}} title='Centro' checked={checked2} onPress={()=>(set1(false),set2(true),set3(false))} checkedColor='blue'/>
          <CheckBox style={{flex:1}} title='Direita' checked={checked3} onPress={()=>(set1(false),set2(false),set3(true))} checkedColor='blue'/>
        </View>
      </View>

      <View style={styles.v2}>
        <QRCode value={txt?txt:'NA'}/>
      </View>
    </View> 
  );
}


const styles = StyleSheet.create({
  texto:{
    backgroundColor:'blue',
    color:'white',
    padding:'2%',
    textAlign:'center'
  },
  v1:{ 
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      padding:'1%'
  },
  v2:{
    flex:4,
    alignItems:'center',
    marginTop:'2%',
    flexDirection:'row'
  },
  V:{  
    backgroundColor:'lightgrey',
    padding:'10%',
    flexDirection:'column',
    alignSelf:'center',
    alignItems:'center'
  }
})
