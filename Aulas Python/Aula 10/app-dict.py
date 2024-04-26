# Dictionary
meses = {
    "Jan" : "Janeiro",
    "Fev" : "Fevereiro",
    "Mar" : "Março",
    "Apr" : "Abril",
    "May" : "Maio",
    "Jun" : "Junho",
    "Jul" : "Julho",
    "Aug" : "Agosto",
    "Sep" : "Setembro",
    "Oct" : "Outubro",
    "Nov" : "Novembro",
    "Dec" : "Dezembro"
}

# Não possui indice, mas possui chaves, que vem antes do :

print(meses["Jan"]) # Trás o valor da chave e se não houver valor, dará erro.
print(meses.get("abc")) # Com get, ele não vai retornar um erro, mas sim o valor "none"
print(meses.get("abc","alfabeto")) # Adiciona uma chave e valor da chave, no Dictionary

# Dictionary não pode ter valores duplicados, ele sempre vai contar como um só.