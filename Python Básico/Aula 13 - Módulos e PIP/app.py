# Modulos e PIP
# Modulos = Bibliotecas
import tools

print(f"{tools.PI}")
print(f"{tools.GRAVITY}")
print(f"O maior número é o: {tools.highest_number([10,5,8,7,3,2,4])}")
print(f"A extensão é: {tools.get_extension("teste.txt")}")

# PIP = Pacote de Bibliotecas, é como se fosse o npm do node.
# No console digitar "pip --version" para saber qual versão do PIP você possui
# Comando para instalar biblioteca é "pip install (Nome da Biblioteca)"
# pip install (Nome da Pasta) -t ./lib  <--- instala a biblioteca na pasta lib, dentro da sua pasta do projeto

# Principais bibliotecas:

#- TensorFlow - foi criada para lidar com auta performance numerica e calculos cientificos, muito utilizada em machine learning
#- Requests - é uma biblioteca para facilitar a utilização de requisições HTTP
#- Numpy - é uma biblioteca para calculos, tambem muito utilizada para machine learning
#- PyGaME - utilizada para desenvolvimento de games
#- BeautifulSoup - Web Scraping - para você capitular e manipular dados de Uma pagina web
#- PeeWee -ORM - facilita a vida no uso de banco de dados
#- Pillow - manipular imagens
#- MoviePy - manipular videos
#- Pytest - para testar seu codigo em python
#- Django - Framework em python para Desenvolvimento web