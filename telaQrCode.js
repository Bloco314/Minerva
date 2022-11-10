import {View, Text, TouchableOpacity} from 'react-native' 
import QRCode from './QRcodeCanvas';
import { TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React from 'react';

export default function TelaQrCode(){

  const [txt,setTxt]=useState('www.tectoySunmi.com.br')
  const [tam,setTam]=useState('8')
  const [checked1,set1]=useState(false)
  const [checked2,set2]=useState(true)
  const [checked3,set3]=useState(false)
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
      if(wDimension.width>540){
        setDirecao('row')
      }else{  
        setDirecao('column')
      }
  }
  useEffect (()=>{
        window.addEventListener('resize',detectSize)
        return () => {
          window.removeEventListener('resize',detectSize)
        }
  },[wDimension])

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
      flex:4,
      flexDirection:'row'
    },
    V:{  
      height:wDimension.height*0.85,
      width:wDimension.width,
      backgroundColor:'lightgrey',
      padding:'2%',
      flexDirection:'column',
      alignSelf:'center',
      alignItems:'center'
    }
  })

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
        <View style={{flexDirection:direcao}}>
          <CheckBox style={{flex:1}} title='Esquerda' checked={checked1} onPress={()=>(set1(true),set2(false),set3(false))} checkedColor='blue'/>
          <CheckBox style={{flex:1}} title='Centro' checked={checked2} onPress={()=>(set1(false),set2(true),set3(false))} checkedColor='blue'/>
          <CheckBox style={{flex:1}} title='Direita' checked={checked3} onPress={()=>(set1(false),set2(false),set3(true))} checkedColor='blue'/>
        </View>
      </View>

      <View style={styles.v2}>
        <QRCode text={txt}></QRCode>
      </View>
    </View>
  );
}