import React, {useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Hello = () => {

  const [ name, setName ] = useState('Cavalcante');

  return (
  <Text>Nome: {name}</Text>
  );
}

export default ()=> {
  return (
    <Page>
        <Hello/>
    </Page>
  );
}

// Uso de Props:

/*
const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Hello = (props) => {
  return (
  <Text>{props.frase}</Text>
  );
}

export default ()=> {
  return (
    <Page>
        <Hello frase="Seja Bem-Vindo (a)!" />
        <Hello frase="Amiguinho(a)" />
    </Page>
  );
}
*/