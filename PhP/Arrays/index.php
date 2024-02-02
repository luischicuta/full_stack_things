
===================================================================================

<?php
//Tipo de Array n° 1:

$variavel = array(
    "nome" => "Luis",
    "sobrenome" => "Cavalcante",
    "idade" => 20,
    "sexo" => "Masculino"
);

echo $variavel["nome"];
?>

===================================================================================

<?php
//Tipo de Array n° 2:

$variavel = array("Luis", "Cavalcante");

echo $variavel[1];
?>

===================================================================================

<?php
//mostrar todo o array:

$variavel = array(
    "nome" => "Luis",
    "sobrenome" => "Cavalcante",
    "idade" => 20,
    "sexo" => "Masculino"
);

print_r($variavel);
?>

===================================================================================

<?php
//alterar valor do array:

$variavel = array(
    "nome" => "Luis",
    "sobrenome" => "Cavalcante",
    "idade" => 20,
    "sexo" => "Masculino"
);

$variavel["nome"] = "Rosbife";

echo $variavel["nome"];
?>

===================================================================================
