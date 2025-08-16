import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function ContatoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <Text style={styles.titulo}>Contato</Text>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', // Exemplo de imagem
          }}
        />
        <Text style={styles.texto}>
          Para entrar em contato, envie um e-mail para: contato@pokemon.com.br
          {'\n\n'}
          Ou ligue para: (11) 99999-9999{'\n\n'}
          Estamos disponíveis de segunda a sexta, das 9h às 18h.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: { width: 150, height: 150 },
  texto: { flex: 1, fontSize: 16, marginLeft: 10, lineHeight: 22 },
});
