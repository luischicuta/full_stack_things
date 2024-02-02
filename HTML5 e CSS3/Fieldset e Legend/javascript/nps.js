/*
PARA CALCULAR MULTA NECESSÁRIO TER EM MENTE:
{
    VALOR TOTAL INICIAL = 420R$;
    VALOR QUE REDUZ POR MES = 35R$;

    DATA FINAL DO CONTRATO;
    DATA DO CANCELAMENTO = HOJE;

    SE HOJE FOR ANTES DO "FINAL DO CONTRATO", TEM MULTA.
    QUAL O VALOR? --> CONTAR MESES FALTANTES PARA TERMINAR FIDELIDADE.
    MESES FALTANTES * 35 = VALOR DA MULTA.
}
*/

/*
var data = new Date();
var dia = String(data.getDate()).padStart(2, "0");
var mes = String(data.getMonth() + 1).padStart(2, "0");
var ano = data.getFullYear();
let dataAtual = mes + "/" + ano;
*/

let calc =(dataAtual,dataFinal)=>{
    let diferenca = (mes - mes2);
    let valorMulta = (diferenca * 35);
    console.log(`Valor da multa do cliente é de ${valorMulta}`);
}

