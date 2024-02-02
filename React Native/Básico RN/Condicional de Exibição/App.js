import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:2px solid black;
  font-size:16px;
  color:black;
`;

const Quadrado = styled.View`
  width:200px;
  height:200px;
  justify-content:center;
  align-items:center;
  border:3px dashed #000;
  margin-top:30px;
`;

const Hello = () => {

  const [ name, setName ] = useState('Cavalcante');
  const [ mostrar, setMostrar ] = useState(false);

  const handleClick = ()=> {
    if(mostrar == true){
      setMostrar(false);
    } else
    setMostrar(true);
  }

  return (
  <View>
    <Input value={name} onChangeText={t=>setName(t)} />

    <Button title={mostrar == true ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick}/>

    {mostrar == true &&
      <Quadrado>
        <Text>Seu nome é:</Text>
        <Text>{name}</Text>
      </Quadrado>
    }

  </View>
  );
}

export default ()=> {
  return (
    <Page>
        <Hello/>
    </Page>
  );
}
