id_cliente = input("Digite o ID do cliente: ")
tipo_de_roteiro = input("Digite o Motivo do Cancelamento: ")

if id_cliente:
    if tipo_de_roteiro == "troca de provedor" or tipo_de_roteiro == "Troca de Provedor" or tipo_de_roteiro == "Troca de provedor" or tipo_de_roteiro == "troca de Provedor":
                  motivo_troca = input(f"Descreva o motivo da Troca de Provedor: ")
                  nome_provedor = input(f"Digite o nome do novo provedor: ")
                  oferta = input(f"Digite o que foi ofertado para o cliente: ")
                  nome_completo = "Deve trazer automáticamente"
                  client_cpf = "Deve trazer automáticamente"
                  client_tel = input(f"Digite o telefone do Cliente: ")
                  valores_pendentes = "Deve trazer automáticamente"
                  equipamentos = "Deve trazer automáticamente"
                  data_retirada = "Deve trazer automáticamente"
                  arquivo = open("autoBot/ScriptAutomatico.txt","a")
                  arquivo.write(f"======================\n MIGROU PARA {nome_provedor}\n Nome do contato: {nome_completo}\n CPF: {client_cpf}\n Tel.: {client_tel}\n Motivo do cancelamento:\n Cliente trocou de provedor para a {nome_provedor}, pois {motivo_troca}.\n Ofertado: Informei os benefícios da N-MultiFibra, incluindo atendimento 24h, atendimento via WhatsApp, avaliações no Google com nota maior que 4,8 estrelas, etc.\n Informei que cada provedor tem seus pontos positivos e negativos, nenhum provedor é totalmente ruim, se não ele não iria se sustentar por muito tempo,\n mas que nós queremos ajudar e prezamos pela qualidade excelente de internet e atendimento para cada um de nossos clientes,\n pois acima de uma provedora, somos uma grande família em que cada cliente faz parte e nos sentiríamos frustrados em deixar o cliente partir para outra provedora sem que a gente ao menos tente ajudar.\n foi ofertado também {oferta}.\n Valores Pendentes ou Multa?:{valores_pendentes}\n Equipamento(os) e Porta CTOP: {equipamentos}\n Data para Retirar o Equipamento: {data_retirada}\n======================\n")
                  arquivo.close()
                  print(f"Script Gerado, atualize o arquivo.\n")
    else:
        print(f"Motivo do cancelamento não especificado, reinicie o processo.")