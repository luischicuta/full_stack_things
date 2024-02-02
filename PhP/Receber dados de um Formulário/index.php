<?php
if(isset($_POST['email']) && empty($_POST['email'] == false)) {
    if(isset($_POST['senha']) && empty($_POST['senha']) == false) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        echo "Meu e-mail eh: ".$email." e minha senha eh ".$senha;
    }
}
?>
<hr>
<form method="POST">
    E-mail:</br>
    <input type="text" name="email" autocomplete="off" placeholder="E-Mail"/><br/><br/>
    Senha:<br/>
    <input type="password" name="senha" autocomplete="off" placeholder="Senha"/><br/><br/>

    <input type="submit" value="Enviar"/>
</form>