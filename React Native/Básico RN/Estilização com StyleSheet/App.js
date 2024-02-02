import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// View equivale a uma DIV.
// Usa-se SafeAreaView para Iphone.


export default ()=> {
  return (
    <View style={styles.page}>
      <Text style={{color:'#FFF', fontSize:25}}>Olá Mundo</Text>
      <Text style={styles.texto}>Segundo Texto</Text>
      <Text style={[styles.texto, {fontSize:30}]}>Terceiro Texto</Text>
    </View>
  );
}


//Estilização:

const styles = StyleSheet.create({
  page:{
    width:200,
    height:200,
    backgroundColor:'#FF0000'
  },
  texto:{
    color:'blue',
    fontSize:20
  }
});

// Também pode colocar o estilo inline, como visto no Text "Olá Mundo".
// Pode aplicar a "classe" do elemento criado, como no Text "Segundo Texto".
// Pode aplicar a classa mas com caracteristicas específicas, como no "Terceiro Texto".