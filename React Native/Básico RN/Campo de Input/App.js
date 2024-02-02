import React, {useState} from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid black;
  font-size:16px;
  color:black;
`;

//Tag Hello:

const Hello = () => {

  const [ name, setName ] = useState('Cavalcante');

  const mudarTexto = (texto)=>{
    setName(texto);
  }

  return (
  <View>
    <Input value={name} onChangeText={mudarTexto} />
    <Text>Olá {name}</Text>
  </View>
  );
}

//////////////////////////////////////////////

export default ()=> {
  return (
    <Page>
        <Hello/>
    </Page>
  );
}