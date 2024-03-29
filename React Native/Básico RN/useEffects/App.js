import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

// Bill = Conta;
// Tip = Gorjeta;

/*
 Primeiro parametro é uma função, segundo é um array.

 [] = coloque a variavel da state aqui, no momento que ela for modificada, a função do 1° parametro será rodada.

  Exemplo:

  useEffect(()=>{
    alert('Executou!')
  }, [bill]);
  
*/

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
`;

const Input = styled.TextInput`
  height:50px;
  width:90%;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
  margin-bottom:10px;
`;

const CalcButton = styled.Button`
  margin-top:10px;
`;

const ResultArea = styled.View`
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
  width:100%;
`;

const ResultItemTitle = styled.Text`
  font-weight:bold;
  font-size:18px;
`;

const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
`;

const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;

const PctItem = styled.Button``;

export default ()=> {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = ()=>{
    let nBill = parseFloat(bill);
    
    if(nBill){
      setTip( (pct/100) * nBill );
    }
  }

  useEffect(()=>{
    calc();
  }, [pct]);

  return (
    <Page>
        <HeaderText>Calculadora de Gorjeta</HeaderText>

        <Input 
        placeholder="Qual o Valor da Conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}/>

        <PctArea>
          <PctItem title="5%" onPress={()=> setPct(5)}/>
          <PctItem title="10%" onPress={()=> setPct(10)}/>
          <PctItem title="15%" onPress={()=> setPct(15)}/>
          <PctItem title="20%" onPress={()=> setPct(20)}/>
        </PctArea>

        <CalcButton title={`Calcular ${pct}%`} onPress={calc}/>
        {tip > 0 &&

        <ResultArea>
            <ResultItemTitle>Valor da Conta</ResultItemTitle>
            <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

            <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

            <ResultItemTitle>Valor da Total</ResultItemTitle>
            <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
        }
    </Page>
  );
}
