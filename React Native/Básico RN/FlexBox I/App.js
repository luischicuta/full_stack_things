import React, {Component} from 'react';
import styled from 'styled-components/native';


// flex-direction pode ser row ou column

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};
`;

const Page = styled.SafeAreaView`
  flex:1;
  flex-direction:row;
`;

export default ()=> {
  return (
    <Page>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
    </Page>
  );
}
