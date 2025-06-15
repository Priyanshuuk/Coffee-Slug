import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage() {
  return (
    <LinearGradient
    colors={['#4B2E1E', '#7B3F00', '#C69C6D', '#4B2E1E']}

      style={styles.container}
    >
        <Image
        source={require('assets/images/header.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to COFFEE-SLUG</Text>
      <Text style={styles.texts}>Discover cozy coffee spots near you — one slug at a time.</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft :5,
  },
  image:{
    height: 290,
    width : 170,
  },
  texts: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
