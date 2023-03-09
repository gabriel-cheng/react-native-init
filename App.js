import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function TextButton() {
  return(
    <Text>Pindamonhangaba</Text>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <StatusBar style="auto" />
      <TextButton />
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
    display: 'flex',
  }
});
