# Tratando exceção - Try...Except...Finally

# numero = int(input("Digite um numero: "))
# print(numero) # Se eu apenas escrever uma string para algo que está esperando um int, a aplicação dará erro e retornará um monte de linhas estranhas.

try: # (Try) Tentar executar o código e o except serve para se der erro, ele fará uma outra sequencia de código
    numero2 = int(input("Digite outro número: "))
    print(numero2)
    divisao = 10/0
    print(f"{divisao}")
except ZeroDivisionError: # Exceção pois é impossível dividir algo por 0
    print(f"Divisão por 0 não é possível")
except ValueError: # Exceção pois é um valor inválido
    print(f"Digite um valor válido.")
except:
    print(f"Erro inesperado.") # Caso não seja um erro que já tem objeto para ele e seja um erro desconhecido, retornará isso
finally: # O finally sempre vai executar o determinado bloco de código, independente se der erro ou não
    print(f"Sempre executa.") 


# Exceptions que sei que podem acontecer:

# ZeroDivisionError: Erro gerado quando uma operação de divisão é realizada com divisor igual a zero.
# ValueError: Erro gerado quando uma função recebe um argumento com um valor incompatível com o esperado pelo código.
# SyntaxError: Erro gerado quando o interpretador Python encontra um código que viola a sintaxe da linguagem.
# RuntimeError: Erro gerado quando ocorre uma falha durante a execução de um programa Python e não pode ser classificado sob outra categoria de erro mais específica.
# TypeError: Erro gerado quando uma operação é realizada em um objeto de tipo incompatível.
# NameError: Erro gerado quando um nome de variável ou função não é encontrado no escopo atual.
# OSError: Erro gerado quando ocorre uma falha relacionada a operações de entrada/saída (I/O) no sistema operacional, como arquivos ou conexões de rede.
# ConnectionError: Erro gerado quando uma conexão de rede não pode ser estabelecida ou é interrompida durante uma operação de comunicação.
# SystemError: Erro gerado quando o interpretador Python detecta um problema interno, indicando uma falha no próprio sistema Python.
# FileExistsError: Erro gerado quando uma tentativa de criar um arquivo ou diretório falha porque o arquivo ou diretório já existe.