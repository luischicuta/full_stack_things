#If, Else, statements, Operadores Lógicos e Comparação

# Exemplo 1:
tenho_sede = True
if tenho_sede:
    print(f"Eu estou com sede.")
else:
    print("Não estou com sede, vida que segue.")


# Exemplo 2:
esta_frio = True
if esta_frio:
    print(f"Coloque o casaco.")
else:
    print(f"Tire o casaco.")


# Operador lógico "ou"
tenho_dor = False
tenho_fome = True
if tenho_fome or tenho_dor:
    print(f"Vou para a cozinha!")
else:
    print(f"Fico de boa!")

# Operador lógico "e"
tenho_asma = True
tenho_tosse = False
if tenho_asma and tenho_tosse:
    print(f"Corre que é COVID!!!!")
else:
    print(f"Ta de boa, não é COVID.")

#uso do elif (else if) e not
tenho_play5 = False
tenho_controle = True

if tenho_play5 and tenho_controle:
    print(f"Pode jogar no Play 5!")
elif tenho_play5 and not tenho_controle:
    print(f"Você não tem controle para jogar, que pena...")
elif not tenho_play5 and tenho_controle:
    print(f"Você tem o controle mas falta o mais importante, o console!")
else:
    print(f"Você não tem nem console nem controle, que pena.")

# Operadores de Comparação

num1 = 5
num2 = 32

# == (igual)
# > (Maior)
# < (Menor)
# >= (Maior igual)
# <= (Menor igual)
# != (Diferente)

# Exemplo:
if num1 == num2:
    print(f"Os números são iguais")
else:
    print(f"Os números são diferentes.")

