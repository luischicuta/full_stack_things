import React, { useEffect } from 'react';
import { Dimensions, Alert } from 'react-native';
import styled from 'styled-components/native';

// Site das APIs: https://reactnative.dev/docs/alert

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export default ()=> {

  /*
  //API Dimensions:

  useEffect(()=>{
    let largura = Dimensions.get('window').width;
    let altura = Dimensions.get('window').height;
    //ou pode ser: let largura = Dimensions.get('window').width;
    //ou pode ser: let {height:altura, width:largura} = Dimensions.get('window');
    alert(`Altura: ${altura} Largura: ${largura}`);
  }, []);
   */




  //API Alert
  /*
  useEffect(()=>{
    Alert.alert(
      'TITULO',
      'MENSAGEM',
      [
        {text:'Concordo', onPress:()=>console.log('Concordou')},
        {text:'Pergunte-me mais Tarde', onPress:()=>console.log('Verá mais tarde')},
        {text:'Não concordo', onPress:()=>console.log('Não Concordou'), style:'cancel'}
      ]
    );

  }, [])
   */

  return (
    <Page>
      
    </Page>
  );
}
