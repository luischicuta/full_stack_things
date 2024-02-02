#include <stdio.h>

int main()
{
    int idade;
    printf("Digite sua idade:");
    scanf("%d", &idade);
    if (idade>=18){
    	printf("Voce pode doar sangue!\n");
	}else {
		printf("Voce nao pode doar sangue!\n");
	}
	return 0;
}

/* Execute em um compilador da Web */