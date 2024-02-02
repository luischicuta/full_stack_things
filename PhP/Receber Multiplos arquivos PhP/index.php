<?php
require "recebedor.php";  //pode ser include tbm ou colocar no <form> o atributo action="recebedor.php".
?>
<form method="POST">
    Nome:<br/>
    <input type="text" name="nome" autofocus autocomplete="off" placeholder="Nome Completo"/><br/><br/>

    <input type="submit" value="Enviar">
</form>