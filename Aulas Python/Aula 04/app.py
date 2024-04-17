# Métodos de String

minha_string = "Qualquer texto" # variável de string
print(minha_string.upper()) # Método para deixar toda a string em MAIUSCULO
print(minha_string.lower()) # Método para deixar toda a string em minusculo
print(minha_string.capitalize()) # Deixará a primeira letra sempre maiúscula
print(minha_string.isupper()) # Retorna true ou false para identificar se é com letra maiuscula ou se tem alguma minuscula, boolean
print(minha_string.strip()) # Remove espaços desnecessários na string
print(minha_string.replace("Qualquer", "Meu")) # substitui uma palavra por outra palavra
print(minha_string.replace("u", "U", 1)) # Substitui a primeira letra "u" encontrada na string, se colocar 2, vai substituir as duas primeiras e assim por diante
print(len(minha_string)) # Vai retorna um int de quantas letras tem na string
print(minha_string[2]) # Vai retornar só a terceira letra da string, visto que começa do 0, nesse caso retornará a letra "a"
print(minha_string[2:5]) # Vai retornar a string do caracter 2 até o caracter 5
print(minha_string[-2 : -5]) # Vai retornar a string do caracter 2 até o 5 (de trás para frente)
print(minha_string.index("texto")) # Vai procurar se tem a letra ou palavra passada no parametro se se tiver, retorna true ou false

x = "texto" in minha_string # Verificando se tem a palavra "texto" na variavel "minha_string", vai retornar true ou false

# Escrever string com multiplas linhas:

texto = """linha 1,
linha 2,
linha 3,
"""

print(f"{texto}")

# Outra forma de escrever string com multiplas linhas:

texto2 = "linha 1,\nlinha 2,\nlinha 3."
print(f"{texto2}")

# Adicionar aspas no texto:

texto3 = "Este é um \"texto\" legal demais."
print(f"{texto3}")