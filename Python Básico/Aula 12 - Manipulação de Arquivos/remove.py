# Manipulando Arquivos
# Deletando arquivos

import os
if(os.path.exists("Aula 12/test3.txt")):
    os.remove("Aula 12/test3.txt") # Vai deletar o arquivo test3.txt
    print(f"O arquivo foi deletado.")
else:
    print(f"O arquivo não foi encontrado.") # Se o arquivo já foi deletado, ele vai avisar.