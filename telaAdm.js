import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicial from './telaInicial';
import TelaQrCode from './telaQrCode';
import TelaBarCode from './telaBarCode';
import TelaText from './telaText';

const Stack = createNativeStackNavigator();

export default function TelaAdm (){  
  return(
    <View style={{marginTop:200,marginHorizontal:600}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={TelaInicial}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='QRcode' component={TelaQrCode}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='BarCode' component={TelaBarCode}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='Text' component={TelaText}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/> 
        </Stack.Navigator>  
      </NavigationContainer>
    </View>
  );
} 