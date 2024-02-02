<?php
if(isset($_POST['nome']) && !empty($_POST['nome'])) {
    $nome = $_POST['nome'];
    echo "Seu nome eh ".$nome;
}
?>