# Funções

# 1° Exemplo:
def big_mac():
    print("sanduiche big mac")
    
print("Inicio")
big_mac()
print("Fim")
# 2° Exemplo:
def fazer_big_mac(nome):
    print(f"sanduiche big mac {nome}")

fazer_big_mac("Roger")
fazer_big_mac("Cris")
fazer_big_mac("Manu")

# 3° Exemplo:
def fazer_batata(tamanho):
    print(f"Batata {tamanho}")

def preparar_refrigerante(tipo, tamanho):
    print(f"Refrigerante:{tipo}, tamanho:{tamanho}")

fazer_big_mac("July")
fazer_batata("Média")
preparar_refrigerante("Coca", "Pequena")

# 4° Exemplo:
def fazer_combo_big_mac(nome,tamanho_batata,tipo_refri,tamanho_refrigerante):
    fazer_big_mac(nome)
    fazer_batata(tamanho_batata)
    preparar_refrigerante(tipo_refri, tamanho_refrigerante)

fazer_combo_big_mac("Luis","Grande","Coca","Média")

# 5° Exemplo:
def soma_num(num1, num2):
    return num1 + num2

resultado = soma_num(15,20)
print(f"O resultado é {resultado}.")

# 6° Exemplo:
def maior_num(lista_num):
    lista_num.sort()
    lista_num.reverse()
    maior_num = lista_num[0]
    return maior_num

resultado2 = maior_num([321,154,54,45,78,54,484,547,897,847])
print(f"O maior número é o {resultado2}")