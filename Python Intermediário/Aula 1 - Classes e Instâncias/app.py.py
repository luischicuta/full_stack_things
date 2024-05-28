# Classe:
class Restaurante:
    nome = ''
    categoria = ''
    ativo = False

# Instânciando a classe Restaurante:
restaurante_praca = Restaurante()
restaurante_praca.nome = 'Praça'
restaurante_praca.categoria = 'Gourmet'

restaurantes = [restaurante_praca]

# dir() retorna todos os atributos de um objeto
print(dir(restaurante_praca))
# vars() retorna os atributos em formato de dictionary
print(vars((restaurante_praca)))