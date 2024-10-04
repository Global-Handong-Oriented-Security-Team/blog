#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int val1;
int val2 = 0xdeadbeef;

int main() {
    int val3 = 0xcafebebe;
    char* val4 = (char*)malloc(sizeof(char) * 0x10);
    strcpy(val4, "ghost");

    printf("val1: %p\n", &val1);
    printf("val2: %p\n", &val2);
    printf("val3: %p\n", &val3);
    printf("val4: %p\n", val4);
    printf("val5: %p\n", "pwnable");
}