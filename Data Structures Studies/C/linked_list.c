#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
  int data;
  struct Node *next;
} Node;

int main(void)
{
  Node *head = NULL;
  Node *second = NULL;
  Node *third = NULL;

  head = (Node *)malloc(sizeof(struct Node));
  second = (Node *)malloc(sizeof(struct Node));
  third = (Node *)malloc(sizeof(struct Node));

  head->data = 1;
  head->next = second;

  second->data = 2;
  second->next = third;

  third->data = 3;
  third->next = NULL;

  printf("First: %i\n", head->data);
  printf("Second: %i\n", second->data);
  printf("Third: %i\n", third->data);

  return 0;
}
