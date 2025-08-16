import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <Text style={styles.titulo}>Pokémon: Mega Gardevoir</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn3.pokemoncarte.com/1646-large_default/carte-mega-gardevoir-ex-pv-210-rc31-rc32-generations-20-ans.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 500,
    marginTop: -62,
  },
});
