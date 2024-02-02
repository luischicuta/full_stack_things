<?php

//O metodo $_GET aparece na URL e o outro $_POST não aparece (indicado para senhas).
//Mude na url [coloque "?v=(defina um nome)"]

$video = $_GET["v"];

echo "o video que vc esta acessando eh: ".$video;
?>