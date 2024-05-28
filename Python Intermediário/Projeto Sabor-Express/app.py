import os

# Array de restaurantes com dictionary (que usa "{}"):
restaurantes = [
    {'nome': 'Praça', 'categoria':'Japonesa', 'ativo':False},
    {'nome':'Pizza Suprema', 'categoria':"Pizza", 'ativo':True},
    {'nome':'Cantina', 'categoria':"Italiano", 'ativo':False}
]

''' Função para mostrar o nome do menu: '''
def exibir_nome_do_programa():
    print("""
    ░██████╗░█████╗░██████╗░░█████╗░██████╗░  ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
    ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
    ╚█████╗░███████║██████╦╝██║░░██║██████╔╝  █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
    ░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗  ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
    ██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║  ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
    ╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░
      """)

# Função para exibir as opções do menu:
def exibir_opcoes():
    print(f'1. Cadastrar Restaurante')
    print(f'2. Listar Restaurante')
    print(f'3. Alternar status do Restaurante')
    print(f'4. Sair\n')

# Função para limpar o console e finalizar o programa:
def finalizar_app():
    exibir_subtitulo('Finalizando o App.')

# Função para voltar ao menu principal:
def voltar_ao_menu_principal():
    input('\nAperte qualquer tecla para voltar ao menu principal')
    main() # Reinicia o programa

# Função se usuário digitar algo inesperado:
def opcao_invalida():
    print(f'Opção Inválida!')
    voltar_ao_menu_principal()

# Função para limpar o console:
def exibir_subtitulo(texto):
    os.system('cls')
    linha = '*' * (len(texto) + 4) # Vai exibir "*" de acordo com a qntd. de letras do texto
    print(linha)
    print(texto)
    print(linha)
    print() # Espacinho

# Função para cadastrar restaurante:
def cadastrar_novo_restaurante():
    exibir_subtitulo('Cadastro de novos restaurantes')

    nome_do_restaurante = input('Digite o nome do restaurante que desejo cadastrar: ')

    categoria = input (f'Digite o nome da categoria do restaurante {nome_do_restaurante}: ')

    dados_do_restaurante = {'nome':nome_do_restaurante,
    'categoria':categoria, 'ativo':False}

    restaurantes.append(dados_do_restaurante) # Adicionar o nome do restaurante no array "restaurantes"
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!')
    voltar_ao_menu_principal()

# Função para listar os restaurantes e exibir na tela
def listar_restaurantes():
    exibir_subtitulo('Listando os restaurantes')

    print(f'{'Nome do Restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | {'Status'}')
    # Laça de repetição "for":
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome'] # Pegando para exibir o nome do restaurante
        categoria = restaurante['categoria'] # Pegando para exibir a categoria do restaurante
        ativo = 'ativado' if restaurante['ativo'] else 'desativado' # Pegando para exibir se o restaurante está ou não ativo
        print(f'- {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | {ativo}') # Exibir as informações na tela

    voltar_ao_menu_principal()

# Função para ativar ou desativar o restaurante:
def alternar_estado_restaurante():
    exibir_subtitulo('Alterando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if restaurante['nome'] == nome_restaurante:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
            break

    if not restaurante_encontrado:
        print(f'O restaurante {nome_restaurante} não foi encontrado.')

    voltar_ao_menu_principal()




# Função com try, para tentar executar, se não conseguir, vai rodar a função de opção inválida que reinicia o processo:
def escolher_opcao():
    try:
        opcao_escolhida = int(input('Escolha uma opção: ')) #Definindo como número inteiro ao invés de String
        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()

# Função principal que inicia o programa:
def main():
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()

# Chamando a função Main que inicia o programa
main()