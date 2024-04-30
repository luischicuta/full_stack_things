import os

if(os.path.exists("Aula 12/nova_pasta")):
    print(f"Arquivo já existe.")
else:
    os.mkdir("Aula 12/nova_pasta")
    print(f"Arquivo criado")