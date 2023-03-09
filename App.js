import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

// Componente react
function TextButton(props) {
  return(
    <Text>{props.title}</Text>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.teste}>Hello, world!</Text>
      <View style={styles.containerTeste}>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
      </View>
      <StatusBar style="auto" />
      <TextButton title="Titulo maneiro"/>
      <TextButton title="Outro titulo maneiro"/>
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
  teste: {
    color: 'green',
    backgroundColor: 'black'
  },
  containerTeste: {
    display: 'flex',
    flexDirection: 'row'
  }
});
