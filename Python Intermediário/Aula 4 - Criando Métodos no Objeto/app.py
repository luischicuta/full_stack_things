class Restaurante:
    # Método:
    restaurantes = []

    def __init__(self, nome, categoria):
        self.nome = nome
        self.categoria = categoria
        self.ativo = False
        # Fazendo isso com o array (método) de restaurantes, eu obrigatóriamente colocarei cada restaurante criado, na lista "restaurantes":
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self.nome} | {self.categoria}'

    def listar_restaurantes():
        # Para cada restaurante na lista de restaurantes, farei ele pegar o nome da lista e salvar:
        for restaurante in Restaurante.restaurantes:
            print(f'{restaurante.nome} | {restaurante.categoria} | {restaurante.ativo}')

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_pizza = Restaurante('Pizza Express', "Italiana")

Restaurante.listar_restaurantes()