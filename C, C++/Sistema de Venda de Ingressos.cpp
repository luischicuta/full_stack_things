#include <stdlib.h>

#include <locale.h>

#include <time.h>

#include <conio.h>

#include <unistd.h>

int main(int argc, char *argv[])
{
  setlocale(LC_ALL, "portuguese");

  int cod_menu, cod_peca, cod_dia, num_polt, soma_ent, volta, total_ent, total_val, confirm, sair;
  int i, j, k;
  // variaveis dos for
  int valor50 = 50;
  int valor55 = 55;
  int peca1_disp = 30, peca2_disp = 30, peca3_disp = 30, peca4_disp = 30, peca5_disp = 30, peca6_disp = 30;

  int total_int = 0, total_meia = 0, total_gra = 0, total_pub = 0, pretotali = 0, pretotalm = 0, pretotalg = 0, pretotalp = 0;

  //Declaracao de vetores e seus valores

  char vetorx[30];
  char vetora[30];
  char vetorb[30];
  char vetorc[30];
  char vetord[30];
  char vetore[30];
  char vetorf[30];
  for (i = 0; i < 30; i++)
  {
    vetorx[i] = ('\-');
    vetora[i] = ('\-');
    vetorb[i] = ('\-');
    vetorc[i] = ('\-');
    vetord[i] = ('\-');
    vetore[i] = ('\-');
    vetorf[i] = ('\-');
  }

voltar:
  setlocale(LC_ALL, "Portuguese");

  printf("\n           *TEATRO LUIS PAULICHIELI*         \n");
  printf("  ==============================================\n\n");
  printf(" |----------------------------------------------|\n");
  printf(" |     SELECIONE UMA OPCAO DO MENU              |\n");
  printf(" |----------------------------------------------|\n");
  printf(" | 1 - TABELA DE PECAS E PRECOS                 |\n");
  printf(" |----------------------------------------------|\n");
  printf(" | 2 - FECHAMENTO DE CAIXA                      |\n");
  printf(" |----------------------------------------------|\n");
  printf(" | 0 - SAIR                                     |\n");
  printf(" |----------------------------------------------|\n\n");

  scanf("%d", &cod_menu);
  system("cls");

  //Variaveis inicializadas com um valor padrao

  int pecax_disp = 0, soma_disp = 0, entrada_int = 0, entrada_meia = 0, entrada_gra = 0, entrada_pub = 0, valorx = 0, meiax = 0, pre_compra = 0;

  int ticket_polt[30][2];

  if (cod_menu == 1)
  {
    printf("\n\n");
    printf("\t1-SEG 2-TER 3-QUA 4-QUI 5-SEX 6-SAB 7-DOM \n\n");

    printf("\n\tINFORME O DIA DA SEMANA: ");
    scanf("%d", &cod_dia);
    system("cls");

  peca:

    printf("|--------------------------------------------------------------|\n");

    printf("|                   *TABELA DE PECAS      *                    |\n");
    printf("|--------------------------------------------------------------|\n");
    printf("|                         POLTRONAS                            |\n");
    printf("|  No NOME                 SALA    PRECO     HORARIO      DISP.|\n");
    printf("|--------------------------------------------------------------|\n");
    printf("|  1 'INFANTIL - PATATI'    1      R$%d,00   13:00        %0.2d   |\n", valor50, peca1_disp);
    printf("|--------------------------------------------------------------|\n");
    printf("|  2 'SHAKESPEARE'          1      R$%d,00   16:30        %0.2d   |\n", valor50, peca2_disp);
    printf("|--------------------------------------------------------------|\n");
    printf("|  3 'O INICIO'             2      R$%d,00   11:30        %0.2d   |\n", valor55, peca3_disp);
    printf("|--------------------------------------------------------------|\n");
    printf("|  4 'A ORIGEM'             2      R$%d,00   15:30        %0.2d   |\n", valor55, peca4_disp);
    printf("|--------------------------------------------------------------|\n");
    if (cod_dia == 2)
    {
      printf("\n  GRATUIDADES P/ REDE PUBLICA DE ENSINO AS TERCAS FEIRAS     \n");
      printf("|--------------------------------------------------------------|\n");
      printf("|  5 'INFANTIL - PATATI'    3      GRATIS    12:30        %0.2d   |\n", peca5_disp);
      printf("|--------------------------------------------------------------|\n");
      printf("|  6 'O INICIO'             3      GRATIS    15:00        %0.2d   |\n", peca6_disp);
      printf("|--------------------------------------------------------------|\n");
    }
    printf("ESCOLHA O CODIGO DO ESPETACULO DESEJADO :");
    scanf("%d", &cod_peca);
    system("cls");
    // Passa os valores dos vetores de cada peca para o vetor generico
    switch (cod_peca)
    {

    case 1:
      valorx = valor50;
      meiax = valorx / 2;
      pecax_disp = peca1_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetora[j];
      }

      break;
    case 2:
      valorx = valor50;
      meiax = valorx / 2;
      pecax_disp = peca2_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetorb[j];
      }
      break;
    case 3:
      valorx = valor55;
      meiax = valorx / 2;
      pecax_disp = peca3_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetorc[j];
      }
      break;
    case 4:
      valorx = valor55;
      meiax = valorx / 2;
      pecax_disp = peca4_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetord[j];
      }
      break;

    case 5:
      pecax_disp = peca5_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetore[j];
      }
      break;
    case 6:
      pecax_disp = peca6_disp;
      for (j = 0; j < 30; j++)
      {
        vetorx[j] = vetorf[j];
      }
      break;
    }
    if ((cod_peca > 4) && (cod_dia != 2))
    {
      printf("\n         |-----------------------------------------------|\n");
      printf("          | CODIGO NAO ENCONTRADO NA LISTA DE PECAS        |\n");
      printf("          |----------------------------------------------- |\n");
      sleep(2000);
      system("cls");
      goto peca;
    }

    if (pecax_disp == 0)
    {
      system("cls");
      printf("\n          |----------------------------|\n");
      printf("            |     INGRESSOS ESGOTADOS    |\n");
      printf("            |    SELECIONE OUTRA PECA    |\n");
      printf("            |----------------------------|\n");
      sleep(20000);
      system("cls");
      goto peca;
    }
  // A quantidade dos ingressos
  ingresso:
    if (cod_peca <= 4)
    {
      printf(" |----------------------------------------------------------------------------");
      printf("\n|  INFORME QUANTAS ENTRADAS SERAO INTEIRAS: ");
      scanf("%d", &entrada_int);
      printf("|-----------------------------------------------------------------------------");
      printf("\n|  INFORME QUANTAS ENTRADAS SERAO MEIAS \n");
      printf("| CASO FOR ESTUDANTE / PROFESSOR DA REDE PUBLICA / CRIANCAS *03 A 12 ANOS: ");
      scanf("%d", &entrada_meia);
      printf("|-----------------------------------------------------------------------------");
      printf("\n|  INFORME QUANTAS ENTRADAS SERAO ISENTAS \n");
      printf("| CASO FOR IDOSO/APOSENTADO: ");
      scanf("%d", &entrada_gra);
      printf("|-----------------------------------------------------------------------------");
    }
    else if ((cod_peca <= 6) && (cod_dia == 2))
    {
      printf(" |----------------------------------------------------------------------------");
      printf("\n |  INFORME QUANTAS ENTRADAS SERAO GRATIS \n");
      printf(" | CASO FOR CRIANCA CARENTE DA REDE PUBLICA: ");
      scanf("%d", &entrada_pub);
    }

    // soma todos os ingressos comparando com a quantidade de ingressos da peca
    soma_disp = entrada_int + entrada_meia + entrada_gra + entrada_pub;
    if (soma_disp > pecax_disp)
    {
      system("cls");
      printf("\n          |-------------------------------------------|\n");
      printf("            | SESSAO POSSUI APENAS: %0.2d LUGARES VAGOS |\n", pecax_disp);
      printf("            |-------------------------------------------|\n");
      sleep(3000);
      system("cls");
      goto ingresso;
    }
    // tipos de entrada 1 inteira, 2 meia, 3 idoso, 4 publica
    soma_ent = entrada_int;
    for (k = 0; k < soma_ent; k++)
    {
      ticket_polt[k][1] = 1;
    }
    soma_ent = entrada_int + entrada_meia;
    for (k; k < soma_ent; k++)
    {
      ticket_polt[k][1] = 2;
    }
    soma_ent = entrada_int + entrada_meia + entrada_gra;
    for (k; k < soma_ent; k++)
    {
      ticket_polt[k][1] = 3;
    }
    soma_ent = entrada_int + entrada_meia + entrada_gra + entrada_pub;
    for (k; k < soma_ent; k++)
    {
      ticket_polt[k][1] = 4;
    }
    system("cls");

    // for baseado na quantidade de ingressos

    for (k = 0; k < soma_ent; k++)
    {
    poltrona:
      printf("                              * POLTRONAS * \n\n");
      printf("|---------------------------------------------------------------------|\n");
      printf("| 01%c | 02%c | 03%c | 04%c | 05%c | 06%c | 07%c | 08%c | 09%c | 10%c |\n", vetorx[0], vetorx[1], vetorx[2], vetorx[3], vetorx[4], vetorx[5], vetorx[6], vetorx[7], vetorx[8], vetorx[9]);
      printf("|---------------------------------------------------------------------|\n");
      printf("| 11%c | 12%c | 13%c | 14%c | 15%c | 16%c | 17%c | 18%c | 19%c | 20%c |\n", vetorx[10], vetorx[11], vetorx[12], vetorx[13], vetorx[14], vetorx[15], vetorx[16], vetorx[17], vetorx[18], vetorx[19]);
      printf("|---------------------------------------------------------------------|\n");
      printf("| 21%c | 22%c | 23%c | 24%c | 25%c | 26%c | 27%c | 28%c | 29%c | 30%c |\n", vetorx[20], vetorx[21], vetorx[22], vetorx[23], vetorx[24], vetorx[25], vetorx[26], vetorx[27], vetorx[28], vetorx[29]);
      printf("|---------------------------------------------------------------------|\n");
      printf("|                              (TELA)                                 |\n");
      printf("|---------------------------------------------------------------------|\n");
      printf("| * OCUPADO | - VAGO | + SELECIONADO                                  |\n");
      printf("|---------------------------------------------------------------------|\n");
      printf("ESCOLHA O NUMERO DA POLTRONA DESEJADA: ");
      scanf("%d", &num_polt);
      if ((num_polt > 30) || (num_polt < 1))
      {
        system("cls");
        printf("\n          |-----------------------------------------|\n");
        printf("            |ESCOLHA UM NUMERO DE POLTRONA EXISTENTE  |\n");
        printf("            |-----------------------------------------|\n");
        sleep(1000);
        system("cls");
        goto poltrona;
      }
      // adiciona o numero da poltrona a uma matriz para mostrar no ticket
      ticket_polt[k][0] = num_polt;
      num_polt = num_polt - 1;

      // caso o lugar escolhido ja esteja com o *
      if (vetorx[num_polt] == ('\*'))
      {
        system("cls");
        printf("\n          |---------------|\n");
        printf("            | LUGAR OCUPADO |\n");
        printf("            |---------------|\n");
        sleep(1500);
        system("cls");
        goto poltrona;
      }
      // caso o lugar escolhido ja esteja com o +
      if (vetorx[num_polt] == ('\+'))
      {
        system("cls");
        printf("            |----------------------|\n");
        printf("            | LUGAR JA SELECIONADO |\n");
        printf("            |----------------------|\n");
        sleep(1500);
        system("cls");
        goto poltrona;
      }
      vetorx[num_polt] = ('\+');
      system("cls");
    }
    // confirmacao da compra
    pre_compra = entrada_int * valorx + entrada_meia * meiax;
    printf(" |----------------------------------------------------|\n");
    printf(" |DESEJA CONCLUIR A COMPRA? (1 PARA SIM | 0 PARA NAO) | \n");
    printf(" |TOTAL DA COMPRA: R$%d,00  \n", pre_compra);
    printf(" |----------------------------------------------------|\n\n");
    scanf("%d", &confirm);
    if (confirm == 0)
    {
      system("cls");
      printf("            |------------------|\n");
      printf("            | COMPRA CANCELADA |\n");
      printf("            |------------------|\n");
      sleep(1500);
      system("cls");
      goto voltar;
    }
    system("cls");
    // impressao dos tickets baseado na soma dos ingressos
    for (k = 0; k < soma_ent; k++)
    {
      // parte fixa do ticket
      printf(" |--------------------------------------------------------------|\n");
      printf(" | TEATRO LUIS PAULICHIELI  DATA :%s  Hora:%s  |\n", __DATE__, __TIME__);
      printf(" |--------------------------------------------------------------|\n");
      printf(" |                            TICKET                            |\n ");
      // codigo alterado com base na peca
      switch (cod_peca)
      {
      case 1:
        printf(" |PECA: 'INFANTIL - PATATI'                          SALA: 1   |\n");
        printf(" |SESSAO: 13:00                                  POLTRONA: %0.2d   |\n", ticket_polt[k][0]);
        break;
      case 2:
        printf(" |PECA: 'SHAKESPEARE'                                 SALA: 1  |\n");
        printf(" |SESSAO: 16:30                                   POLTRONA: %0.2d  |\n", ticket_polt[k][0]);
        break;
      case 3:
        printf(" |PECA: 'O INICIO'                                    SALA: 2  |\n");
        printf(" |SESSAO: 11:30                                   POLTRONA: %0.2d  |\n", ticket_polt[k][0]);
        break;
      case 4:
        printf(" |PECA: 'A ORIGEM'                                     SALA: 2 |\n");
        printf(" |SESSAO: 15:30                                   POLTRONA: %0.2d  |\n", ticket_polt[k][0]);
        break;
      case 5:
        printf(" |PECA: 'INFANTIL - PATATI'                             SALA: 3  |\n");
        printf(" |SESSAO: 12:30                                   POLTRONA: %0.2d  |\n", ticket_polt[k][0]);
        break;
      case 6:
        printf(" |PECA: 'O INICIO'                                      SALA: 3  |\n");
        printf(" |SESSAO: 12:30                                   POLTRONA: %0.2d  |\n", ticket_polt[k][0]);
        break;
      }
      // codigo alterado pelo tipo do ingresso
      switch (ticket_polt[k][1])
      {
      case 1:
        printf(" |PRECO: R$%0.2d,00                                        INTEIRA |\n", valorx);
        printf(" |--------------------------------------------------------------|\n");
        break;
      case 2:
        printf(" |PRECO: R$%0.2d,00                                     MEIA ENTRADA |\n", meiax);
        printf(" |-------------------------------------------------------------|\n\n\n");
        break;
      case 3:
        printf(" |PRECO: ISENTO                                            ISENTO |\n");
        printf(" |-------------------------------------------------------------|\n\n\n");
        break;
      case 4:
        printf(" |PRECO: GRATIS                                                GRATIS |\n");
        printf(" |-------------------------------------------------------------|\n\n\n");
        break;
      }
    }
    // transforma os lugares escolhidos em ocupados
    for (j = 0; j < 30; j++)
    {
      if (vetorx[j] == ('\+'))
      {
        vetorx[j] = ('\*');
      }
    }
    // ingressos disponiveis
    pecax_disp = pecax_disp - soma_disp;
    // passa os valores do vetor generico para o vetor de cada peca
    switch (cod_peca)
    {
    case 1:
      peca1_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetora[j] = vetorx[j];
      }

      break;
    case 2:
      peca2_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetorb[j] = vetorx[j];
      }
      break;

    case 3:
      peca3_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetorc[j] = vetorx[j];
      }
      break;

    case 4:
      peca4_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetord[j] = vetorx[j];
      }
      break;
    case 5:
      peca5_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetore[j] = vetorx[j];
      }
      break;
    case 6:
      peca6_disp = pecax_disp;
      for (j = 0; j < 30; j++)
      {
        vetorf[j] = vetorx[j];
      }
      break;
    }
    // todas as somas de ingressos
    pretotali = pretotali + entrada_int * valorx;
    pretotalm = pretotalm + entrada_meia * meiax;
    pretotalg = pretotalg + entrada_gra * 0;
    pretotalp = pretotalp + entrada_pub * 0;
    total_int = entrada_int + total_int;
    total_meia = entrada_meia + total_meia;
    total_gra = entrada_gra + total_gra;
    total_pub = entrada_pub + total_pub;
    total_ent = total_int + total_meia + total_gra + total_pub;

    total_val = pretotali + pretotalm + pretotalg + pretotalp;
    printf("DIGITE 0 PARA VOLTAR AO MENU PRINCIPAL: ");
    scanf("%d", &volta);
    system("cls");
    goto voltar;
  }
  else if (cod_menu == 2)
  {
    //atualiza os numeros a cada compra
    printf("|-------------------------------------------------------------------------|\n");
    printf("|                            FECHAMENTO DE CAIXA                          |\n");
    printf("|-------------------------------------------------------------------------|\n");
    printf("| INGRESSOS                                              |    VALORES     |\n");
    printf("|-------------------------------------------------------------------------|\n");
    printf("|INGRESSOS VENDIDOS COMO INTEIRAS................: %0.4d  |    R$%0.4d,00    |\n", total_int, pretotali);
    printf("|INGRESSOS VENDIDOS COMO MEIAS...................: %0.4d  |    R$%0.4d,00    |\n", total_meia, pretotalm);
    printf("|INGRESSOS ISENTOS(IDOSO /APOSENTADO)............: %0.4d  |    R$%0.4d,00    |\n", total_gra, pretotalg);
    printf("|INGRESSOS GRATIS(CRIANCAS CARENTES).............: %0.4d  |    R$%0.4d,00    |\n", total_pub, pretotalp);
    printf("|-------------------------------------------------------------------------|\n");
    printf("|                                           TOTAL: %0.4d  |    R$%0.4d,00    |\n", total_ent, total_val);
    printf("|-------------------------------------------------------------------------|\n\n\n");
    printf("DIGITE 0 PARA VOLTAR AO MENU PRINCIPAL:");

    scanf("%d", &volta);
    system("cls");
    goto voltar;
  }
  else if (cod_menu == 0)
  {
    printf("\n           |------------------------------------------------------|\n");
    printf("           | DESEJA MESMO SAIR DO  PROGRAMA?  (1 - SIM / 0 - NAO) |\n");
    printf("           |------------------------------------------------------|\n");
    scanf("%d", &sair);
    if (sair == 1)
    {
      exit(0);
    }
    else
    {
      system("cls");
      goto voltar;
    }
  }
  else
  {
    printf("\n         |-----------------------------|\n");
    printf("           | SELECIONE UMA OPCAO DO MENU |\n");
    printf("           |-----------------------------|\n");
    sleep(1500);
    system("cls");
    goto voltar;
  }
  getch();
  return 0;
}
