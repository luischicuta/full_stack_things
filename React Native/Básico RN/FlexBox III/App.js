import React, {Component} from 'react';
import styled from 'styled-components/native';

// flex-warp:wrap serve para fazer os blocos pularem linha;

const Page = styled.SafeAreaView`
  flex:1;
`;

const Header = styled.View`
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  background-color:#999;
  height:200px;
  align-items:flex-start;
`;

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};
`;

export default ()=> {
  return (
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
      </Header>
    </Page>
  );
}

// Para alinhar somente o quadrado verde em uma posição:

/*
export default ()=> {
  return (
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado style={{alignSelf:'center'}} cor="green"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
      </Header>
    </Page>
  );
}
*/
