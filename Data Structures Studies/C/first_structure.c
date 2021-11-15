#include <stdio.h>

#define MAX_HEIGHT 215

typedef struct
{
  int peso;
  int altura;
} PesoAltura;

int main()
{
  PesoAltura pessoa1;
  pessoa1.peso = 67;
  pessoa1.altura = 175;

  printf("Peso: %i, Altura: %i\n", pessoa1.peso, pessoa1.altura);

  if (pessoa1.altura > MAX_HEIGHT)
  {
    printf("Pessoa acima da altura máxima\n");
  }

  return 0;
}