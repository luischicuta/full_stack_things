# Collection / Métodos de Array
# Arrays podem ser modificados

familia = ["Chicuta","José","Maurinho","Fulaninho","Ciclano"]
print(familia[0]) # Estou printando na tela apenas o item 0 do array
print(familia[-1]) # Pegar o primeiro de tras para frente
print(familia[2:]) # Pegar todos a partir do indice 2
print(familia[2:4]) # Pegar todos somente do indice 2 até o 4
print(familia)
familia[3] = "Luis" # Alterei o indice 3 (Fulaninho) para Luis
print(familia)

# Funções

familia.extend(["Fulano","Fulanaldo"]) # Adiciona uma nova lista ao array
print(familia)
familia.append("Flash") # Adiciona apenas um novo item na lista do array
print(familia)
familia.insert(1, "Apolo") # Adiciona um item no meio do array estou colocando o Apolo no indice 1
print(familia)

familia.pop() # Remove o último item do array
print(familia)
familia.remove("Maurinho") # Exclui somente o que foi passado no parâmetro
print(familia)

# familia.clear() # Remove todos os indices do array
# print(familia)

print(familia.index("Luis")) # Vai me mostrar em qual posição está a palavra
print(familia.count("Luis")) # Vai mostrar quantas vezes o nome se repete

idade_familia = [24, 16, 10, 9, 11]
print(idade_familia)
idade_familia.sort() # Ordenar do menor para o maior // Também funciona para ordem alfabética
print(idade_familia)
idade_familia.reverse() # Vai inverter a lista
print(idade_familia)
familia = ["Chicuta","José","Maurinho","Fulaninho","Ciclano"]
print(familia)

# Copiar Array

familia2 = familia.copy()
print(familia2)

#Tuples são imutáveis
#Tuples são usadas por exemplo, com coordenadas
coordenadas = (-49, -36)
print(coordenadas)