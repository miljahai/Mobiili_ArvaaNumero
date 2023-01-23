import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const arvottu = Math.floor(Math.random() * 100) + 1;
  var lkm =1;

  const [arvaus, setArvaus] =useState ('');

  const [teksti, setTeksti] = useState('Guess a number between 1-100');

  const buttonPressed = () => {
    if (arvaus > arvottu) {
      setTeksti('Your guess ' + arvaus + ' is too high')
      lkm = lkm + 1;
    } 
    else if (arvaus < arvottu){
      setTeksti('Your guess ' + arvaus + ' is too low')
      lkm = lkm + 1;
    }
    else {
      Alert.alert('You guessed the number in ' + lkm + ' guesses')
    }
  }

  return (
    <View style={styles.container}>
      <Text>{teksti} </Text>
      <TextInput style= {styles.input} keyboardType='number-pad' onChangeText={arvaus => setArvaus(arvaus)} value={arvaus} />
      <Button onPress={buttonPressed} title='Make guess'/>
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
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
});
