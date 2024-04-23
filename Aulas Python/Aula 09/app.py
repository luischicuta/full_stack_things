# Loops: While e For

# Exemplo 1 (While):
i = 1

while i < 10:
    print(i)
    i = i + 1 # Incrementando o i com mais 1
    

print(f"i Terminou.")

# Exemplo 2 (For):
criancas = ["Joãozinho", "Mariazinha", "Marcão"]

for item in criancas:  # Para itens na variável "criancas":
    print(item)

# Exemplo 3 (For):
canal = "Refatorando"

for letra in canal:
    print(letra) # Vai me retornar letra por letra, pois transformou a string em um array


# Exemplo 4 (For):

for index in range(10,20): # A função range fará contar do numero x até o número y "range(x, y, (Quantidade de Números que vai pular [opcional]))""
    print(index)

# Exemplo 5 (For):

for index in range(len(criancas)):
    print(f"Nome: {criancas[index]} - Indice/ID: {index}") # Vai me mostrar o nome das crianças


# Exemplo 6 (For):

for index in range(5):
    if index == 0:
        print(f"Primeira linha (0)")
    else:
        print(f"Linha: {index}")

# For dentro de For (Matriz):
# Temos listas dentro de outra lista
matriz_numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0],
]

for linha in matriz_numeros:
    # print(linha)
    print("-----")
    for coluna in linha:
        print(coluna)