function adicionarIngrediente() {
    let ing = document.getElementById("ingrediente").value;
    let listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = listahtml;
}