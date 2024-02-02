import React, { Component } from 'react';
import {Text} from 'react-native';

// Mesma forma de escrever o mesmo elemento:

/*
const textoInicial = () => {
  return <Text>Texto 1</Text>;
};
*/

//=========================================

/*
function textoInicial() {
  return <Text>Texto 2</Text>;
}
*/

//=========================================

//const textoInicial = () => <Text>Texto 4</Text>;

//=========================================

class textoInicial extends Component {
  render() {
    return <Text>Texto 3</Text>;
  }
}

//Class era mais usado em versões anteriores do React, recomenda-se usar funções agora, mas ainda pode-se usar!

export default textoInicial;
