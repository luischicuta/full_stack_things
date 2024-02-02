import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

// KeyboardAvoidingView faz ficar certo para Iphone e Android.

// Behavior = Comportamento.

// Platform.OS para ver se é IOS ou Android

/* useEffect(()=>{
    alert("OS:"+Platform.OS);
  }, []);
*/

// behavior={Platform.OS=='ios'?'padding':null}>  == Se for IOS coloque padding, se não, deixe o behavior null.

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  border:1px solid black;
`;

const Logo = styled.View`
  width:100px;
  height:100px;
  background-color:black;
  margin-bottom:20px;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  flex:1;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:${Platform.OS=='ios'?'blue':'green'};
`;

export default ()=> {

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS=='ios'?'padding':null}>
          <Logo></Logo>
          <Input/>
      </KeyboardArea>
    </Page>
  );
}
