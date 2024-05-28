class Restaurante:
    # O __init__() foi colocado para definir que todos os Restaurantes precisam ter obrigatoriamente NOME, CATEGORIA E ATIVO.
    # Self é como o "this" do JavaScript, se referência ao mesmo objeto
    def __init__(self, nome, categoria):
        self.nome = nome # O nome do objeto será o nome que ele receber como parametro no próprio objeto
        self.categoria = categoria # A categoria do objeto será a categoria que ele receber como parametro no próprio objeto
        self.ativo = False

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_pizza = Restaurante('Pizza Express', "Italiana")

print(vars(restaurante_praca))
print(vars(restaurante_pizza))

