# Só vai deletar a pasta se ela estiver vazia

import os

if(os.path.exists("Aula 12/nova_pasta")):
    os.rmdir("Aula 12/nova_pasta")
    print(f"Pasta foi removida")
else:
    print(f"Essa pasta não existe.")