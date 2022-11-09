import {View,Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';

export default function TelaInicial({navigation}){
    return(
      <View style={{
        padding:10, backgroundColor:'black'
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
      marginTop: 2,
      marginBottom: 2,
      borderRadius: 2,
      paddingVertical: 15,
      paddingHorizontal: 12
    }
});
  