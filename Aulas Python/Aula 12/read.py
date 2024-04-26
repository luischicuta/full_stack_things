# Manipulando Arquivos
# Função para abrir o arquivo:

# open(caminho_do_arquivo,forma_de_abrir_o_arquivo)

# Formas de abrir o arquivo:

# r - Leitura
# a = Append (Incrementar)
# w = Escrita
# x = Criar Arquivo
# r+ = Leitura + Escrita


# TIPO "R - LEITURA":

arquivo = open("Aula 12/test.txt","r")

print(arquivo.readable()) # Boolean, retorna true se o arquivo pode ser lido ou false caso não possa ser lido
print(f"======")
# print(arquivo.read()) # Lê o Arquivo
# print(arquivo.readline()) # Lê a primeira linha do arquivo
# print(arquivo.readline()) # Lê a segunda linha do arquivo
# print(arquivo.readline()) # Lê a terceira linha do arquivo
# print(arquivo.readline()) # Lê a quarta linha do arquivo

list = arquivo.readlines() # Vai pegar as linhas do arquivo e transformar em um array
print(f"{list}") # "/n" é a quebra de linha
print(f"{list[2]}") # Pegar somente um indice da lista de linhas do arquivo

arquivo.close() # Fecha o arquivo