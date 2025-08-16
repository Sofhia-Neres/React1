import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavBar({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
        <Text style={styles.link}>Principal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.link}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.link}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ddd',
  },
  link: {
    fontSize: 16,
    color: '#000',
  },
});
