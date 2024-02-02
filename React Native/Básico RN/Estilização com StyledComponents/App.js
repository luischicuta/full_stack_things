import React, {Component} from 'react';
import styled from 'styled-components/native';


// Cria uma tag!
// Ela precisa ter a letra inicial maiscula;

const Texto = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
`;

const Page = styled.SafeAreaView`
  background-color:blue;
  flex:1;
`;

export default ()=> {
  return (
    <Page>
      <Texto cor="red">Texto de Exemplo</Texto>
      <Texto cor="yellow">Outro Texto</Texto>
    </Page>
  );
}
