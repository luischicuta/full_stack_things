# Manipulando Arquivos

# TIPO "W - WRITE":

arquivo = open("Aula 12/test2.txt","w")

arquivo.write("SQL\n") # Vai Escrever isso no test2.txt
arquivo.write("C++\n") # Vai Escrever isso no test2.txt
arquivo.write("Terraform\n") # Vai Escrever isso no test2.txt
print(f"O arquivo foi modificado!")

arquivo.close() # Fecha o arquivo