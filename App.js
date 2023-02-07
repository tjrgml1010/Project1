import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';


export default function App() {

  const [cnt, setCnt] = useState(0);



  return (
    <View style={styles.container}>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title="더하기" onPress={ () => setCnt(cnt+1) }></Button>
      <Button title="빼기" onPress={ () => setCnt(cnt-1) }></Button>
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
  cnt:{
    fontSize: 50,
    marginTop: 20,
  },
});
