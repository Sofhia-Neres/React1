import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function SobreScreen({ navigation }) {
  return (
    <View>
      <NavBar navigation={navigation} />
      <Text style={styles.titulo}>Sobre Mega Gardevoir</Text>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png', // Outra imagem do Gardevoir
          }}
        />
        <Text style={styles.texto}>
          Gardevoir é um Pokémon do tipo Psíquico/Fada
          Ele evolui de Ralts, passando por Kirlia, até atingir sua forma plena. 
          Gardevoir consegue prever o futuro e distorcer o espaço para proteger seu treinador.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 20, textAlign: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  image: { width: 150, height: 200 },
  texto: { flex: 1, fontSize: 14, marginLeft: 10, lineHeight: 22 },
});
