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

const Hello = () => {

  const [ name, setName ] = useState('Cavalcante');
  const [ backupName, setBackupName ] = useState('');

  const handleClick = ()=> {
    setBackupName(name);
  }

  return (
  <View>
    <Input value={name} onChangeText={t=>setName(t)} />

    <Button title="Salvar" onPress={handleClick}/>

  <Text>{backupName}</Text>

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

// <Button title="Trocar nome para João" onPress={handleClick} />   <-- Exemplo de botão.
/*
  const handleClick = ()=> {
  setName(`João`);
}
*/
