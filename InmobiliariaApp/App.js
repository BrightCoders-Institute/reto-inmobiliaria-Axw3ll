import { StatusBar } from 'expo-status-bar';
import { FlatList,StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import data from './data/Propiedades.json'
import VerticalList from './components/VerticalList';
export default function App() {
  return (
    <View style={styles.container}>
      <VerticalList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
