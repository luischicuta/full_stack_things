<?php
if(isset($_POST['nome']) && !empty($_POST['nome'])) {

    $nome = $_POST['nome'];

    file_put_contents("teste.txt", $nome, FILE_APPEND); //file_put_contents cria o arquivo pra onde vão os nomes e FILE_APPEND faz com que os proximos nomes sejam adicionados no mesmo aquivo.

    header("Location: index.php");
}
?>

<form method="POST">
    Nome:<br/>
    <input type="text" name="nome" autofocus autocomplete="off" placeholder="Nome Completo">

    <input type="submit" value="Enviar">
</form>