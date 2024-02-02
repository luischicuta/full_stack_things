import React, {Component} from 'react';
import styled from 'styled-components/native';


// flex-direction pode ser row ou column;
// o inverso é column-reverse e row-reverse;
// Flex:1 indica que todos tem o mesmo tamanho;
// justify-content é por padrão flex-start;
// justify-content pode ser: flex-end;
// justify-content pode ser: center;
// justify-content pode ser: space-between;
// justify-content pode ser: space-around;
// align-items é como um justify-content que pode ser usado ao mesmo tempo;

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};
`;

const Page = styled.SafeAreaView`
  flex:1;
  flex-direction:row;
  justify-content:center;
  align-items:center;
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

//Como colocar valores de flex diferentes para cada tag:

/*
  const Quadrado = styled.View`
  flex:${props=>props.flex};
  height:50px;
  background-color:${props=>props.cor};
`;
*/

/*
export default ()=> {
  return (
    <Page>
      <Quadrado flex={1} cor="red"></Quadrado>
      <Quadrado flex={2} cor="green"></Quadrado>
      <Quadrado flex={1} cor="blue"></Quadrado>
    </Page>
  );
}
*/

