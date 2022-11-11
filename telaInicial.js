import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function TelaInicial({navigation}){
  return(
      <View style={{
        backgroundColor:'black',
        alignSelf:'center',
        padding:'8%'
       }}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('QRcode')}>
          <Text>QRCode print</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('BarCode')}>
          <Text>BarCode print</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('Text')}>
          <Text>Text print</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    button : {
      backgroundColor: 'darkgrey',
      margin:'3%',
      borderRadius: 2,
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width:200,
      height:120
    }
});
  