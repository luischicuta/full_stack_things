function digitou() {
    console.log("você soltou a tecla!");
}


function digitou2() {
    console.log("você está segurando a tecla!");
}


/* function digitou4(e) {   //função para ver no console qual tecla o usuario teclou.
    console.log(e);
} */

function digitou4(e) {   //função para mostrar oq foi digitado quando o usuario apertar ENTER (13).
    if(e.keyCode == 13) {
        let texto = document.getElementById("campo2").value;

        console.log(texto);
    }
}





//onkeyup = não fará nada enquanto o botão não for solto.
//onkeydown = enquanto estiver apertando, vai acontecer algo.