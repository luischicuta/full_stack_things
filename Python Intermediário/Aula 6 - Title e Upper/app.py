class Restaurante:
    restaurantes = []
    # Importante manter todos os atributos como variavies privadas usando " _ "
    def __init__(self, nome, categoria):
        # A função title() faz com que a letra de cada palavra comece com letra maiscula
        self._nome = nome.title()
        # A função upper() faz com que a letra de cada palavra fique maiuscula
        self._categoria = categoria.upper()
        self._ativo = False
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self._nome} | {self._categoria}'

    def listar_restaurantes():
        print(f'{'Nome do restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Status'}')
        for restaurante in Restaurante.restaurantes:
            print(f'{restaurante.nome.ljust(25)} | {restaurante.categoria.ljust(25)} | {restaurante.ativo}')

    @property
    def ativo(self):
        return '☒' if self._ativo else '☐'

restaurante_praca = Restaurante('praça', 'Gourmet')
restaurante_pizza = Restaurante('pizza express', "Italiana")

Restaurante.listar_restaurantes()