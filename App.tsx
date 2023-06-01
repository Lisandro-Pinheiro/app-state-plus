import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function App(){

  const [fonteCarregada, setFonteCarregada] = useState(false);

  async function loadFonts(){
    await Font.loadAsync({
      ubuntu_italic: require('./assets/fonts/Ubuntu-BoldItalic.ttf'),
      ubuntu_regular: require('./assets/fonts/Ubuntu-Regular.ttf'),
      ubuntu_medium: require('./assets/fonts/Ubuntu-Medium.ttf')
    })
  }

  useEffect(()=>{
    loadFonts()
    .then(()=>{
      setFonteCarregada(true);
    })
    .catch((error)=>{
      console.log('Ocorreu um erro, error');
    })
  },[])

  return (
    <View style={styles.container}>
      {fonteCarregada ?
      <Text style={{fontFamily:'ubuntu_regular', fontSize:30}}>Lisandro</Text>
      :
      <Text>Falso</Text>
      }

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
