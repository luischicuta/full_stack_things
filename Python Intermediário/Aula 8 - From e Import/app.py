# Importando as informações da pasta modelos
from modelos.restaurante import Restaurante

# Criando as instâncias
restaurante_praca = Restaurante('praça', 'Gourmet')
restaurante_mexicano = Restaurante('Mexican Food', 'mexicana')
restaurante_japones = Restaurante('Japa',"Japonesa")

restaurante_mexicano.alternar_estado()

def main():
    Restaurante.listar_restaurantes()

# Definindo esse arquivo como meu index, ou seja, arquivo principal
if __name__ == '__main__':
    main()
