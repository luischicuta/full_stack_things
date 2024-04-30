# Manipulando Arquivos

# TIPO "A - APPEND":

arquivo = open("Aula 12/test.txt","a")

arquivo.write("SQL\n") # Vai adicionar isso no test.txt
arquivo.write("C++\n") # Vai adicionar isso no test.txt
arquivo.write("Terraform\n") # Vai adicionar isso no test.txt
print(f"O arquivo foi modificado!")

arquivo.close() # Fecha o arquivo