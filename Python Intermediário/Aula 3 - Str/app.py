class Restaurante:
    def __init__(self, nome, categoria):
        self.nome = nome
        self.categoria = categoria
        self.ativo = False

# __str__ vai definir como o programa deve mostrar o objeto em formato de string:
# Se que quiser mostrar em texto, deverá ser chamado em um return
    def __str__(self):
        return f'{self.nome} | {self.categoria}'


restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_pizza = Restaurante('Pizza Express', "Italiana")

print(restaurante_praca)
print(restaurante_pizza)