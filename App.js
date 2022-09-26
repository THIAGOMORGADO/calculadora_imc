import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';


export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Calculadora de Imc</Text>
      </View>

      <View style={styles.main}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  header: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#7158',
    height: 90
  },
  logo:{
    marginTop: 50,
    alignItems: 'center',
    justifyContent:'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  }
});