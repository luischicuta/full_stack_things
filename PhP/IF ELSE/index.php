<?php
$nome = "Luis";
$idade = 20;

// "&&" significa "E";
// "||" significa "Ou";
// ">" significa "maior";
// "<" significa "menor";
// ">=" significa "maior igual";
// "<=" significa menor igual";
// "==" significa "igual";

if($nome == "Luis" && $idade >= 20) {
    echo "Meu nome e idade estao corretos!";
} else {
    echo "Meu nome ou idade estao incorretos!";
}
?>