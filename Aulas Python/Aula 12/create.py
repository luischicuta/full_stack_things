# Manipulando Arquivos

# TIPO "X - CREATE":

arquivo = open("Aula 12/test3.txt","x") # Vai criar um test3.txt

arquivo.write("Python\n") # Vai Escrever isso no test3.txt
arquivo.write("Java\n") # Vai Escrever isso no test3.txt
arquivo.write("ECMA Script\n") # Vai Escrever isso no test3.txt
print(f"O arquivo foi criado")

arquivo.close() # Fecha o arquivo