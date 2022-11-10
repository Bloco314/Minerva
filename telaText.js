import { View,Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function TelaText(){
  const [tam,setTam]=useState(18)
  const [bold,setBold]=useState(false)
  const [underline,setunder]=useState(false)

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
    <View style={{backgroundColor:'lightgrey',padding:4,flexDirection:'column',alignItems:'baseline',alignSelf:'center'}}>
        <View style={styles.visao}>
          <Text style={{marginEnd:20}}>tamanho:</Text>
          <TouchableOpacity onPress={diminui}>
            <Text style={styles.texto}>-</Text></TouchableOpacity>
          <Text style={{fontSize:20,backgroundColor:'darkgrey',height:36}}> {tam} </Text>
          <TouchableOpacity onPress={aumenta}>
            <Text style={styles.texto}>+</Text>  
          </TouchableOpacity>
      </View>

        <View style={styles.visao}>
          <CheckBox title='Negrito' checkedColor="blue" checked={bold} onPress={()=>setBold(!bold)}/>
          <CheckBox title='Sublinhado' checkedColor="orange" checked={underline} onPress={()=>setunder(!underline)}/>  
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
    alignSelf:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:2
  }
})