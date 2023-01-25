import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

let arvottu;
let lkm;

export default function App() {

  const [input, setInput] =useState ('');
  const [teksti, setTeksti] = useState('');

  
  const init = () => {
    setTeksti('Guess a number between 1-100');
    lkm= 0;
    arvottu = Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    init();
  }, [])

  const makeGuess = () => {
    const arvaus = Number(input);
    lkm++;
    if (arvaus > arvottu) {
      setTeksti('Your guess ' + arvaus + ' is too high')
    } 
    else if (arvaus < arvottu){
      setTeksti('Your guess ' + arvaus + ' is too low')
    }
    else {
      Alert.alert('You guessed the number in ' + lkm + ' guesses');
      init();
    }
    setInput('');
  }    
    
  

  return (
    <View style={styles.container}>
      <Text>{teksti} </Text>
      <TextInput style= {styles.input} keyboardType='number-pad' onChangeText={text => setInput(text)} value={input} />
      <Button onPress={makeGuess} title='Make guess'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
  },
});
