??? toc "Contents"

    [TOC]

# vim

## 텍스트 편집에서 단축키 개수와 입력 횟수의 관계

텍스트 편집이란 **커서 이동** 과 **텍스트 수정** 입니다. 

### 일반 텍스트 에디터의 단축키 개수와 입력 회수

!!! note "단어 수와 표현법의 상관관계"

    ![](https://user-images.githubusercontent.com/16812446/93671505-8c321e80-fade-11ea-80e6-fa7f30f3cabf.jpg)

    표현할 수 있는 단어가 많으면 표현법이 간단해진다. 

기존의 일반 텍스트 에디터로는 단순히 <kbd>&larr;</kbd>, <kbd>&rarr;</kbd>, <kbd>&uarr;</kbd>, <kbd>&darr;</kbd> 와 마우스 스크롤로 **커서 이동** 을 했었고, 단순한 텍스트 입력과 <kbd>Backspace</kbd> 나 <kbd>Delete</kbd> 로 **텍스트 수정** 을 했었습니다. 이 몇 안되는 단축키로써 모든 상황에서의 **커서 이동** 과 **텍스트 수정** 을 할 수 있었지만, 몇 안되는 단축키를 모든 상황에 적용하려다 보니까 조합이 복잡해지고 키보드 입력을 많이 해야만 했습니다. 

이 방식의 장점은 외워야 하는 단축키가 <kbd>&larr;</kbd>, <kbd>&rarr;</kbd>, <kbd>&uarr;</kbd>, <kbd>&darr;</kbd>, <kbd>Backspace</kbd>, <kbd>Delete</kbd> 등으로 매우 적다는 것입니다. 하지만 단점은 단축키가 적으니까 다양한 상황에서의 텍스트 편집(**커서 이동** , **텍스트 수정** ) 에 적용되는 조합이 매우 복잡해진다는 것입니다.

### `vim` 의 단축키 개수와 입력 회수

하지만 `vim` 은 단축키가 **매우 많아서** 다양한 상황에 적용되는 단축키의 조합이 단순해집니다.

| | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
|단축키 개수 | 적음 | 많음 | 
|입력 회수 | 많음 | 적음 | 

그래서 `vim` 을 사용하면 코딩할 때 키보드를 치는 횟수가 압도적으로 줄어듭니다. 다음 그래프와 같이 단축키 개수가 많으면 익혀야 할 단축키가 많은 대신 입력 회수가 줄어들고, 단축키 개수가 적으면 입력 회수가 많아집니다!

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/81026898-b16b1b00-8eb6-11ea-89fa-3503770b57d4.png" width="50%" height="auto">
</div>

하지만 단축키는 한번 습득이 되기만하면 그 다음부터는 전혀 문제가 안됩니다. 이것은 단조로운 단어를 쓰면 문장의 길이가 길어지고 다양한 단어를 쓰면 문장이 짧아지는 것과 같은 이치입니다. 

!!! note ""

    게다가 `vim` 에 익숙해지면 텍스트 편집을 할 때 마우스를 사용해야 하는 횟수가 `0` 에 수렴합니다. 키보드와 마우스의 거리는 생각보다 멀기 때문에 이로써 발생하는 시간절약 효과도 상당합니다. 

    개인적으로 개발자로 살아간다면 `vim` 텍스트 에디터 사용법을 익혀서 불필요한 타자 횟수를 최대한 절약함으로써 시간낭비를 줄이고, 손목건강도 챙기는 것이 합리적이라고 생각합니다. 불필요한 시간이 절약된다면 남는 시간이 많아집니다. 

    개인적으로 한동대 학생들 중에서 `vim` 을 사용하는 학생들이 많아지길 바라고 있네요. 

## `vim` 으로 일반 텍스트 에디터 대체하기

> 참고/출처 : https://github.com/vim/vim/blob/master/runtime/tutor/tutor.ko.utf-8

이제부터 `vim` 을 사용하면 타수가 얼마나 줄어드는지 보여드림으로써 `vim` 을 사용하면 좋다는 것을 설득해드리겠습니다. 설득 안되면 어쩔 수 없지만..

보여드리는 방식은 기존 일반 에디터의 **적은 단축키가 얼마나 많은 타수를 야기하는지**, 그리고 그것이 **`vim` 에서 어떻게 효율적으로 대체될 수 있는지** 비교하는 것으로 하겠습니다. 

!!! note ""

    또한 모든 키보드에 <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd> 가 있지 않기 때문에 일관성을 위하여 이 키들은 상정하지 않겠습니다.

그리고 문자와 문자 사이의 커서 이동 횟수가 **1번** 이기 때문에 

|이동 거리|퉁 치는 횟수(typing complexity)|
|:---|:---|
|(문자가 모여있는) 단어를 이동하는 횟수 | **n 번** |
|(단어가 모여있는) 문장을 이동하는 횟수 | **n<sup>2</sup> 번**| 
|(문장이 모여있는) 전체파일을 이동하는 횟수 | **n<sup>3</sup> 번**|

이라고 하겠습니다.

!!! note ""

    typing complexity 라는 개념은 어디에도 없는 개념입니다. 왜냐면 제가 일반 에디터와 VIM 의 입력 횟수를 가늠하기 위하여 방금 만들어낸 개념이기 때문이죠. 그러니 어디가서 typing complexity 라고 언급하시면 아무도 모를거에요..

    또한 앞으로 알게 되겠지만 일반 에디터의 typing complexity 는 $O(n)$ 또는 $O(n ^{2})$ 가 되지만, VIM 의 typing complexity 는 항상 $O(1)$ 이 되는 것을 알 수 있을 겁니다. 그러니까 VIM 이 얼마나 빠른지 알 수 있겠죠. 

그러면 먼저 우분투 도커 컨테이너에 접속하고 다음 명령어를 입력하세요.

**<div align="center"> ⬇ EXECUTE! ⬇ </div>**  

```console
$ git clone https://github.com/jaseg/lolcat
$ cd lolcat
$ make
```

`lolcat` 은 `cat` 명령어의 출력에 무지개 색깔을 입힙니다. 다음 명령어를 실행해보세요.

**<div align="center"> ⬇ EXECUTE! ⬇ </div>**

```console
$ cat /etc/passwd     # 텍스트 파일이 밋밋한 색깔로 출력된다. 
$ ./lolcat /etc/passwd 
```

실행결과는 다음 그림과 비슷할 겁니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/81272615-a7007b00-9088-11ea-9e2b-bb8ce711ad6b.png" width="70%" height="auto">
</div>

이제 `lolcat` 의 소스코드 `lolcat.c` 를 `vim` 으로 열어봅시다.

**<div align="center"> ⬇ EXECUTE! ⬇ </div>**

```console
$ vim lolcat.c
```

그러면 `vim` 텍스트 에디터로 파일이 열리는데 일단 `100gg` 를 눌러보세요. 그러면 파일의 `100` 번째 행으로 이동하게 되고 성공적으로 이동하셨다면 

```c
...
int main(int argc, char** argv)
{
    char* default_argv[] = { "-" };
    int cc = -1, i, l = 0;
    wint_t c;
    int colors    = isatty(STDOUT_FILENO);
    int force_locale = 1;
    int random = 0;
    double freq_h = 0.23, freq_v = 0.1;

    struct timeval tv;
    gettimeofday(&tv, NULL);
    double offx = (tv.tv_sec % 300) / 300.0;

    for (i = 1; i < argc; i++) {
...
```

위와 같은 코드가 보일 것입니다. 이제 특별한 언급이 없는 한 이 `100` 번째 줄에서 실습을 진행하겠습니다. 커서가 `100` 행에서 이탈되었다면 다시 `100gg` 를 누르면 `100` 번째 행으로 이동할 수 있습니다. 

### 기본 커서 이동

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 왼쪽 이동 | <kbd>&larr;</kbd> | `h` | 
| 오른쪽 이동 | <kbd>&rarr;</kbd> | `l` | 
| 위쪽 이동 | <kbd>&uarr;</kbd>| `k` | 
| 아래쪽 이동 | <kbd>&darr;</kbd>| `j` | 

- 실습 

    위 단축키로 커서를 이동해보세요. 

    `15k` 를 눌러 `15` 줄 위에 있는 행으로 이동하세요. 

    다시 `15j` 를 눌러 되돌아올 수 있습니다. 

    이렇게 `<N>k` 를 누르면 `<N>` 번 위로 갑니다. 다른 커서 이동 키도 마찬가지!

### 기능 반복 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 이전에 실행한 편집 기능 반복하기 |  | `.` | 

`.` 를 누르면 이전에 실행한 편집 기능이 반복됩니다. 

### 입력모드로 들어가기 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 입력하기 | | `i` | 
| 다음 글자에 입력하기 | <kbd>&rarr;</kbd> | `a` | 
| 다음 행에 입력하기 | <kbd>&rarr;</kbd> × **n<sup>2</sup>** + <kbd>Enter</kbd> | `o` | 
| 이전 행에 입력하기 | <kbd>&uarr;</kbd> + <kbd>&rarr;</kbd> × **n<sup>2</sup>** + <kbd>Enter</kbd> | `O` | 
| 문장 마지막에 입력하기 | <kbd>&rarr;</kbd> × **n<sup>2</sup>** | `A` | 
| 문장 처음에 입력하기 | <kbd>&larr;</kbd> × **n<sup>2</sup>** | `I` | 

일반 텍스트 에디터가 **입력 모드** 만 있는 반면 `vim` 은 **입력 모드** 와 **명령 모드** 가 있습니다. `vim` 을 처음 켰을 때는 항상 **명령 모드** 이고 위 표의 입력 단축키 `i`, `a`, `o`, `O`, `A`, `I` 를 입력하면 **입력 모드** 가 됩니다. 

!!! tip

    에디터의 하단에 **`-- INSERT --`** 라는 상태표시가 보이면 지금이 **입력 모드** 인 것입니다. 

**입력 모드** 에서는 모든 키보드 입력이 단축키가 아닌 입력으로 취급되기 때문에 **명령 모드** 로 되돌아가려면 <kbd>Esc</kbd> 를 누르면 됩니다.

- 실습 

    `i` 를 눌러서 **입력 모드** 로 들어간 다음

    ```c
    int test_int = 200;
    ```

    이라는 코드를 입력하고 <kbd>Esc</kbd> 를 눌러 **명령 모드** 로 되돌아오세요. 

    입력모드로 들어갈 수 있는 단축키 `i`, `a`, `o`, `O`, `A`, `I` 들을 실행하고 결과가 어떤지 보세요. 

- 실습 

    ![render1589352202436](https://user-images.githubusercontent.com/16812446/81779941-a0fb1600-9530-11ea-8f28-2076013b2b49.gif)

    위와 같이 `94` 행으로 이동하고 `I` 로 입력모드에 들어간 후 주석처리 `//` 를 입력해보세요.
    
    그리고 밑으로 이동해서 기능반복키 `.` 를 누르며 입력을 반복해보세요.

### 에디터 종료

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 저장 | <kbd>Ctrl</kbd> + <kbd>s</kbd> | `:w` | 
| 종료 | <kbd>Alt</kbd> + <kbd>F4</kbd> | `:q` | 
| 저장 후 종료 | <kbd>Ctrl</kbd> + <kbd>s</kbd> 🠲 <kbd>Alt</kbd> + <kbd>F4</kbd>| `:wq` 또는 `ZZ` |<kbd>Alt</kbd> + <kbd>F4</kbd> 
| 강제 종료 |  | `:q!` | 
| 다른 이름(`<NAME>`)으로 저장 |  | `:w <NAME>` | 

`vim` 에서 저장과 종료 단축키입니다. 강제 종료는 저장하지 않은 내용을 사라지게 합니다.

- 실습 

    단축키들을 실행해서 에디터를 종료해보고 다시 `vim lolcat.c` 로 켜서 `100gg` 를 눌러 `100` 번째 행으로 되돌아오세요. 

### 지우기 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 지우기 | <kbd>Backspace</kbd> 또는 <kbd>Delete</kbd> | `x` | 
| 단어 지우기 | <kbd>Backspace</kbd> × **n** | `dw` | 
| 문장 지우기 | <kbd>Backspace</kbd> × **n<sup>2</sup>** | `dd` | 
| 커서로부터 문장 끝까지 지우기 | <kbd>Delete</kbd> × **n<sup>2</sup>** | `D` | 

- 실습 

    커서를 `102` 번째 행인

    ```c
    struct timeval tv;
    ```

    로 옮기세요. 이제 `x` 를 눌러서 문자들을 지워보세요.

    이때 `2x` 와 `3x` 를 누르면 각각 `2` 글자, `3` 글자가 지워진다는 것을 확인하세요.

    `<N>x` 를 누르면 `<N>` 개의 문자가 한번에 지워집니다. 

- 실습

    단어를 한번에 지우기 위해서 `dw` 를 눌러도 됩니다. 이것도 `struct` 나 `timeval` 같은 변수 위로 커서를 두고 실행해보세요. `4dw` 를 누르면 `4` 개의 단어가 `3` 회의 입력만에 한번에 지워집니다. 

    !!! info
    
        일반 텍스트 에디터에서 `4` 개의 단어를 지우려면 `3` 회보다 훨씬 많은 키보드 입력이 필요합니다.

    `4dw` 를 누르고 `.` 을 누르면 `4` 개의 단어가 지워지는 기능이 반복됩니다. `3` 회만 누르면 그 다음부터는 `.` 만 누르면 되니까 `1` 회만 누르면 됩니다.

- 실습

    `dd` 와 `D` 도 실행보세요. `5dd` 를 누르면 `5` 개의 문장이 `3` 회의 입력만에 한번에 지워집니다. 

    !!! info
    
        일반 텍스트 에디터에서 `5` 개의 문장을 지우려면 `3` 회보다 훨씬 많은 키보드 입력이 필요합니다!

- 실습

    다음과 같이 `10dd` 누르고 `.` 를 누르면 `10` 개 문장이 지워지는 기능이 반복됩니다. `4` 회 입력 이후에 `1` 회 입력만 하면 되는 것이죠. 

    ![render1589352378933](https://user-images.githubusercontent.com/16812446/81780148-fd5e3580-9530-11ea-919d-e8c473d4482a.gif)

### 지우고 편집하기

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 한 글자 지우고 편집하기 | <kbd>Backspace</kbd> | `r` | 
| 단어 지우고 편집하기 | <kbd>Backspace</kbd> × **n** | `cw` | 
| 커서로부터 문장 끝까지 지우고 편집하기 | <kbd>Delete</kbd> × **n<sup>2</sup>** | `C` | 
| 문장에서 `<OLD>` 를 `<NEW>` 로 치환하기 |  | `:s/<OLD>/<NEW>/g` | 
| 전체 파일에서 `<OLD>` 를 `<NEW>` 로 치환하기 |  | `:%s/<OLD>/<NEW>/g` | 
| 전체 파일에서 하나씩 확인하면서 `<OLD>` 를 `<NEW>` 로 치환하기 |  | `:%s/<OLD>/<NEW>/gc` | 

- 실습 

    커서를 `98` 번째 행인 

    ```c
    int force_locale = 1;
    ```

    의 `1` 로 옮겨서 `r` 을 누르고 `0` 을 눌러보세요. 그러면 `1` 이 `0` 으로 바뀝니다. 

- 실습 

    커서를 다른 코드로 옮겨서 `cw` 와 `C` 를 실행해보세요. 그러면 단어가 지워지고 **입력 모드** 로 곧장 들어갑니다. **명령 모드** 로 되돌아오기 위하여 <kbd>Esc</kbd> 를 눌러야 합니다. 

- 실습 

    `:%s/int/long long/g` 을 실행해보세요. 파일 전체의 `int` 가 `long long` 으로 바뀝니다. 

### 화면 내의 커서 이동 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 원하는 문자로 이동 | <kbd>&rarr;</kbd> × **n<sup>2</sup>** | `f<C>` | 
| 오른쪽 단어로 이동 | <kbd>Ctrl</kbd> + <kbd>&rarr;</kbd> | `e` | 
| 왼쪽 단어로 이동 | <kbd>Ctrl</kbd> + <kbd>&larr;</kbd> | `b` | 
| 문장의 처음으로 이동 | <kbd>Ctrl</kbd> + <kbd>&larr;</kbd> × **n**  | `0` | 
| 문장의 마지막으로 이동 | <kbd>Ctrl</kbd> + <kbd>&rarr;</kbd> × **n**  | `$` | 
| 화면의 처음으로 이동 | <kbd>&uarr;</kbd> × **n<sup>3</sup>**  | `H` | 
| 화면의 가운데로 이동 |  | `M` | 
| 화면의 마지막으로 이동 | <kbd>&darr;</kbd> × **n<sup>3</sup>**  | `L` | 

커서 이동이 `h`, `j`, `k`, `l` 밖에 없다면 커서를 이동해야 하는 다양한 상황에서 이것들을 똑같이 다양하게 조합해야하기 때문에 일반 텍스트 에디터의 <kbd>&larr;</kbd>, <kbd>&rarr;</kbd>, <kbd>&uarr;</kbd>, <kbd>&darr;</kbd> 를 많이 입력해야 하는 것과 다를 것이 없을 겁니다.

하지만 위 표에서처럼 다양한 커서 이동이 하나의 단축키로 가능합니다. 

- 실습 

    `104` 행으로 이동하면 

    ```c
    double offx = (tv.tv_sec % 300) / 300.0;
    ```

    라는 코드가 있는데 `300` 이라는 숫자를 조작하고 싶다면 `f3` 를 누르면 `3` 이라는 문자로 커서가 바로 이동됩니다. 

    마찬가지로 `f%` 를 누르면 `%` 라는 문자로 커서가 바로 이동됩니다.

- 실습 

    다음과 같이 커서 이동 단축키를 눌러보면서 실습해보세요.

    ![render1589352482808](https://user-images.githubusercontent.com/16812446/81780345-575efb00-9531-11ea-9a4b-58237fe1e8ea.gif)

    !!! tip
    
        일반 방향키를 엄청 많이 눌러야 갈 수 있는 곳을 `vim` 에서는 단축키 하나만 누르면 갈 수 있습니다. 

### 취소

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 취소 | <kbd>Ctrl</kbd> + <kbd>z</kbd> | `u` | 
| 취소한 것을 취소 |  | <kbd>Ctrl</kbd> + <kbd>R</kbd> | 
| 문장을 원래대로 복원 | | `U` | 

- 실습 

    `50dd` 를 눌러서 문장 `50` 개를 `4` 회의 입력만에 삭제해보세요. 

    !!! note ""
    
        일반 텍스트 에디어테서 문장 `50` 개를 삭제하기 위해서 얼마나 많은 시간이 걸리는지 상상이 안되네요. 

    그리고 `u` 를 눌러서 삭제했던 것을 복구해보세요. 

    그리고 다시 <kbd>Ctrl</kbd>+<kbd>R</kbd> 을 눌러서 삭제해보세요. 

    `u` 와 <kbd>Ctrl</kbd>+<kbd>R</kbd> 를 번갈아서 계속 눌러보세요. 

### 드래그 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 드래그 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n** | `v` | 

- 실습 

    `gg` 를 누르면 첫행으로 이동합니다. 바로 밑에 있는 `3` 번째 행으로 커서를 이동하면 

    ```console
    * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    ```

    이라는 라이센스가 보입니다. 이 소스코드를 갖고 하고싶은 게 뭐든간에 다 하라는 의미군요. `e` 또는 `b` 를 몇번 눌러서 `FUCK` 의 `F` 로 커서를 이동하세요.

    `v` 를 누르고 `l` 을 몇번 누르면 `FUCK` 이 드래그됩니다. 잘 드래그 되고 있다면 `vim` 의 하단부에 `-- VISUAL --` 이라는 상태줄이 뜹니다.

    그러면 `r` 을 누르고 `x` 를 누르세요. 그러면 다음과 같이 `FUCK` 이 `xxxx` 로 바뀝니다. 

    ![render1589352581824](https://user-images.githubusercontent.com/16812446/81780433-7d849b00-9531-11ea-8c57-9af1900dcf37.gif)

    이렇게 드래그를 잘 활용하면 여러 문자와 문장에 대하여 기능을 한번에 실행할 수 있습니다. 

- 실습 

    다시 `FUCK` 이 있는 곳으로 커서를 옮겨서 `v` 를 누르고 이번에는 `e` 를 한번만 누르세요. 그러면 `FUCK` 이 단지 `2` 회의 입력만에 드래그됩니다. 

    `v` 를 누르고 `e` 를 계속 누르거나 `j` 를 눌러서 밑에 문장까지 드래그하고 `x` 를 눌러서 삭제해보세요. 

    !!! note ""
    
        드래그를 하기 위해서 일반 텍스트 에디터에서는 <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n** 를 얼마나 많이 눌러야 하는지 모르겠네요. 

### 복사하기

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 단어 복사하기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n** 🠲 <kbd>Ctrl</kbd> + <kbd>c</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `yw` 🠲  `p` | 
| 문장 복사하기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n<sup>2</sup>** 🠲 <kbd>Ctrl</kbd> + <kbd>c</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `yy` 🠲  `p` | 
| 드래그해서 복사하기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n<sup>2</sup>** 🠲 <kbd>Ctrl</kbd> + <kbd>c</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `v` 🠲 `y` 🠲 `p` | 

- 실습 

    `33gg` 를 눌러서 `33` 행으로 가면 

    ```c
    ...
    static char helpstr[] = "\n"
                            "Usage: lolcat [-h horizontal_speed] [-v vertical_speed] [--] [FILES...]\n"
                            "\n"
    ...
    ```

    가 보이는데 `yy` 를 누르고 `5p` 를 누르세요. 그러면 복사된 문장이 `5` 번 붙혀넣어집니다. 

- 실습 

    `55` 번째 행으로 이동하고 맨 마지막 "`, 33`" 을 `v` 로 드래그하고 `y` 를 눌러보세요. 그 다음 `33` 오른쪽으로 커서를 옮겨서 `p` 를 몇번 눌러보고 `10p` 를 누르세요. 

    그러면 다음과 같이 복사된 것이 단번에 `10` 번 붙혀넣어집니다. 

    ![render1589352834937](https://user-images.githubusercontent.com/16812446/81780727-fa177980-9531-11ea-88bf-13f08234787d.gif)

    !!! note ""
    
        이 일을 일반 텍스트 에디터로 하려면 `vim` 보다 훨씬 많은 키보드 입력을 해야 합니다. 

### 잘라내기

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 한 글자 잘라내기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>x</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `x` 🠲  `p` | 
| 단어 잘라내기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n** 🠲 <kbd>Ctrl</kbd> + <kbd>x</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `dw` 🠲  `p` | 
| 문장 잘라내기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n<sup>2</sup>** 🠲 <kbd>Ctrl</kbd> + <kbd>x</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `dd` 🠲  `p` | 
| 특정 영역 잘라내기 | <kbd>Shift</kbd> + <kbd>&rarr;</kbd> × **n<sup>2</sup>** 🠲 <kbd>Ctrl</kbd> + <kbd>x</kbd> 🠲 <kbd>Ctrl</kbd> + <kbd>v</kbd> | `v` 🠲 `x` 🠲 `p` | 

- 실습 

    다음과 같이 `75` 행으로 이동하고 `zt` 로 화면을 올리고나서 `6dd` 를 로 함수 코드 전체를 잘라내고 `10j` 로 커서 이동을 한 후 `p` 를 눌러 붙혀넣으세요. 

    !!! info
    
        `zt` 가 뭔지는 계속되는 내용에서 알아봅니다. 

    ![render1589352948485](https://user-images.githubusercontent.com/16812446/81780912-406cd880-9532-11ea-9328-3efe5ba485ee.gif)
    
    !!! note ""
    
        이 작업을 키보드 입력 `10` 번으로 끝냈습니다. 

### 화면 밖으로의 커서 이동 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 파일의 맨 마지막으로 이동 | <kbd>&darr;</kbd> × **n<sup>3</sup>** | `G` | 
| 파일의 맨 처음으로 이동 | <kbd>&uarr;</kbd> × **n<sup>3</sup>** | `gg` | 
| `<N>` 번째 행으로 이동 | <kbd>&uarr;</kbd> × **n<sup>3</sup>** 또는 <kbd>&darr;</kbd> × **n<sup>3</sup>** | `<N>gg` | 

- 실습 

    `G` 와 `gg` 로 커서를 이동해보세요. 그리고 `100gg` 로 `100` 번째 행으로 이동해보세요. 

### 찾기

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 아랫방향으로 찾기 | <kbd>Ctrl</kbd> + <kbd>f</kbd> | `/` | 
| 윗방향으로 찾기 |  | `?` | 
| 커서가 위치한 단어 아랫방향으로 찾기 |  | `*` | 
| 커서가 위치한 단어 윗방향으로 찾기 |  | `#` | 
| 찾고나서 같은방향으로 단어 찾기 | <kbd>Enter</kbd> | `N` | 
| 찾고나서 반대방향으로 단어 찾기 | <kbd>Shift</kbd> + <kbd>Enter</kbd> | `n` | 
| 괄호의 짝 찾기 |  | `%` | 

- 실습 

    다음과 같이 `/static` 으로 `static` 키워드를 찾고 `n` 을 누르며 다음 것을 찾아보세요. 

    ![render1589353002311](https://user-images.githubusercontent.com/16812446/81781027-75792b00-9532-11ea-9cad-dab0a5f905f4.gif)

- 실습 

    매우 긴 문장에서 `f` 로 원하는 문자 커서로 이동하기.

    (GIF)

    그리고 이것은 보통의 코드에서도 매우 자주 유용하게 사용될 수 있음. 

### 화면 이동

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 화면을 한 행만큼 아래로 이동 | <kbd>&darr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `e` | 
| 화면을 한 행만큼 위로 이동 | <kbd>&uarr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `y` | 
| 화면을 반 페이지만큼 아래로 이동 | <kbd>&darr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `d` | 
| 화면을 반 페이지만큼 위로 이동 | <kbd>&uarr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `u` | 
| 화면을 한 페이지만큼 아래로 이동 | <kbd>&darr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `f` | 
| 화면을 한 페이지만큼 위로 이동 | <kbd>&uarr;</kbd> × **n<sup>2</sup>** | <kbd>Ctrl</kbd> + `b` | 

- 실습 

    위 단축키로 화면을 편하게 이동해보세요. 

### 커서를 기준으로 화면 이동

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 커서를 기준으로 화면을 최대한 아래로 이동 |  | `zt` | 
| 커서를 기준으로 화면을 최대한 위로 이동 |  | `zb` | 
| 커서를 기준으로 화면을 정중앙으로 이동 |  | `zz` | 

- 실습 

    다음과 같이 `zt` 와 `L` 을 반복해서 눌러서 커서를 아래로 이동하다가 원하는 코드를 찾으면 `zz` 로 화면을 포커싱 해보세요. 

    ![render1589353180616](https://user-images.githubusercontent.com/16812446/81781253-d0128700-9532-11ea-9c6f-03454fd457a6.gif)

- 실습 

    반대로 `zb` 와 `H` 을 반복해서 눌러서 커서를 위로 이동하다가 원하는 코드를 찾으면 `zz` 로 화면을 포커싱 해보세요. 

    물론 화면을 위 아래로 이동하기 위하여 <kbd>Ctrl</kbd>+<kbd>d</kbd> 또는 <kbd>Ctrl</kbd>+<kbd>u</kbd> 가 더 편할 수도 있습니다. 

### 명령 실행 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 파일 위치에서 `<CMD>` 명령 실행 |  | `:!` + `<CMD>` | 
| 파일 위치에서 쉘 실행 |  | `:shell` | 

- 실습 

    `vim` 에디터에서 `:!pwd` 를 입력해보세요. 

- 실습 

    `:shell` 을 입력해서 `vim` 의 서브 프로세스로써 쉘을 실행시켜보세요. `vim` 으로 되돌아오기 위해 `exit` 명령어로 쉘을 종료하면 됩니다. 
    
    `vim` 밑에서 쉘을 실행했다는 것을 잊어버리고 그 쉘에서 계속 작업을 하면 안되요! 현재 쉘이 `vim` 의 서브 프로세스인지 확인하는 방법은 `ps` 명령어를 입력하는 것입니다.
    
    현재 쉘이 `vim` 의  서브 프로세스도 아니라면 `ps` 명령 결과는 다음과 같습니다. 

    **<div align="center"> ⬇ EXECUTE! ⬇ </div>**

    ```console
    $ ps
        PID TTY          TIME CMD
        1 pts/0    00:00:00 bash
        960 pts/0    00:00:00 ps
    ```

    먄약 현재 쉘이 `vim` 의 서브 프로세스라면 `ps` 명령어 결과가 다음과 같이 출력됩니다. 

    ```console
    $ ps
        PID TTY          TIME CMD
        1 pts/0    00:00:00 bash
        961 pts/0    00:00:00 vim
        962 pts/0    00:00:00 sh
        963 pts/0    00:00:00 ps
    ```

### 대문자, 소문자 변경

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 대문자로 변경 |  | `v` 🠲 `U` | 
| 소문자로 변경 |  | `v` 🠲 `u` | 

- 실습 

    다음과 같이 `6` 행으로 이동해서 `v$` 으로 문장 전체를 드래그하고 `j` 로 밑의 문장까지 드래그한 다음 `U` 를 눌러서 대문자로 바꿔보세요. 

    ![render1589353271791](https://user-images.githubusercontent.com/16812446/81781394-fd5f3500-9532-11ea-8e8c-fa943c63266f.gif)

### 다중 입력

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 블록 드래그 |  | <kbd>Ctrl</kbd> + `v` | 
| 드래그 상태에서 다중 입력 |  | <kbd>Shift</kbd> + `i` | 

블록 드래그는 드래그와 달리 네모 모양으로 드래그를 할 수 있습니다. 이때 다중입력도 가능합니다. 

- 실습 

    코딩을 하다보니 `#define` 문을 여러번 사용했는데 실수로 `#` 을 붙히는 걸 까먹었네요. 하지만 괜찮습니다.
    
    다음과 같이 `0` 으로 문장 앞으로 이동하고 블록 드래그 <kbd>Ctrl</kbd>+`v` 를 한 다음 `10j` 로 커서를 내립니다. 그리고 <kbd>Shfit</kbd>+`i` 로 다중입력을 하고 `#` 을 입력한 후 <kbd>Esc</kbd> 를 눌러보세요. 

    ![render1589353343893](https://user-images.githubusercontent.com/16812446/81781545-3c8d8600-9533-11ea-8665-5cf48fe40c60.gif)

### 문장 붙히기 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 문장 붙히기 | <kbd>&rarr;</kbd> × **n<sup>2</sup>** + <kbd>Delete</kbd> | `J` | 

- 실습 

    `J` 를 누르면 다음과 같이 문장이 연결됩니다. `.` 를 누르면 기능이 반복됩니다. 

    ![render1589353396465](https://user-images.githubusercontent.com/16812446/81781611-6050cc00-9533-11ea-9e46-d655c5a3a3d3.gif)

### 화면 분할 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 수평으로 화면분할|  | `:sp <FILE>` | 
| 수직으로 화면분할|  | `:vsp <FILE>` | 
| 다음 화면으로 이동 |  | <kbd>Ctrl</kbd>+ <kbd>w</kbd> + <kbd>w</kbd> | 
| 왼쪽 화면으로 이동 |  | <kbd>Ctrl</kbd>+ <kbd>w</kbd> + <kbd>h</kbd> | 
| 오른쪽 화면으로 이동 |  | <kbd>Ctrl</kbd>+ <kbd>w</kbd> + <kbd>l</kbd> | 
| 아래쪽 화면으로 이동 |  | <kbd>Ctrl</kbd>+ <kbd>w</kbd> + <kbd>j</kbd> | 
| 위쪽 화면으로 이동 |  | <kbd>Ctrl</kbd>+ <kbd>w</kbd> + <kbd>k</kbd> | 

코딩을 하다보면 다른 파일을 봐야할 때도 있습니다. 그럴 때 이 화면 분할 기능을 이용할 수 있습니다. 

- `vim` 으로 `lolcat.c` 를 연상태에서 `:vsp README.md` 로 파일을 열어보세요. 그리고 `:sp censor.c` 로 또 파일을 열어보세요. 

    그리고 다음과 같이 화면을 이리저리 이동해보세요. 화면을 끄려면 `:q` 를 입력하면 되고 모든 화면을 종료하려면 `:qa` 를 입력하면 됩니다. 

    ![render1589354268596](https://user-images.githubusercontent.com/16812446/81782929-88412f00-9535-11ea-988e-c4f90b29d205.gif)

### 코드 포맷팅 

| 기능 | 일반 텍스트 에디터 | `vim` |
|:---:|:---:|:---:|
| 코드 포맷팅 |  | `=G` | 

# 더 빨라진 vim

`vim` 은 수많은 명령어를 제공하고 그 명령어로 사용자가 함수도 제작할 수 있기 때문에 `vim` 에는 사용자들이 만든 수많은 플러그인들이 존재합니다. 다음의 링크에서 가장 인기있는 커스터마이징 `vim` 을 찾아볼 수 있습니다. 

- https://vimawesome.com/

- https://github.com/vim-awesome/vim-awesome

- https://github.com/amix/vimrc

여기에서는 간단하게 제가 `vim` 을 커스터마이징 한 내용을 살펴보겠습니다. 물론 여러분도 여러분에게 더 편한 커스텀 `vim` 을 만들 수 있습니다. 

## 더 빨라진 alias

먼저 `vim` 명령어를 매번 치는 것은 너무 비효율적입니다. 무려 `3` 번이나 키보드를 쳐야하기 때문이죠. 그래서 `~/.zsh_aliases` 에 

```console
alias v=vim
```

를 추가하여 `v` 만 눌러도 `vim` 가 켜지도록 합니다. 

!!! danger "Speed up!!"

    입력 타수 최소화!

- 실습 

    다음과 같이 도커 컨테이너에서 `vim` 를 켜보세요. 

    **<div align="center"> ⬇ EXECUTE! ⬇ </div>**

    ```console
    $ v
    ```

## vim-plug

[`vim-plug`](https://github.com/junegunn/vim-plug) 는 [junegunn](https://github.com/junegunn) 님께서 만드신 `vim` 플러그인을 관리할 수 있는 플러그인입니다. 여러 좋은 기능이 있지만 제가 가장 좋아하는 기능은 플러그인들을 설치할 때 병렬로 설치한다는 것입니다. 이로써 플러그인 설치 시간이 매우 짧아집니다. 다른 플러그인 관리 플러그인들은 플러그인을 설치할 때 직렬로 설치해서 설치 시간이 약간 오래걸립니다.

저의 `dotfiles` 를 설치할 때 다음과 같은 화면을 보셨을텐데요.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82145156-d468d800-9883-11ea-804f-77728db33733.gif" width="70%" height="auto">
</div>

!!! danger "Speed up!!"

    병렬 설치로 성능 극대화.

마지막 부분에서 나타나는 `vim` 화면이 `vim` 의 플러그인들을 `vim-plug` 가 병렬로 매우 빠르게 설치하는 장면입니다. 너무 빠르죠? 

!!! note ""

    
    `12` 개의 플러그인을 설치했는데 다른 "플러그인 관리" 플러그인으로 `12` 개를 설치하면 인터넷이 안좋은 곳에서는 2분에서 3분까지 걸렸던 걸로 기억합니다. 

여기에서는 이렇게 설치된 플러그인들 중에서 핵심적인 플러그인들을 살펴보겠습니다. 

## vimrc

하지만 그전에 `vim` 을 훨씬 더 빠르고 편하게 사용할 수 있도록 제가 개인적으로 설정한 단축키들을 알아보겠습니다. 나중에 여러분이 개인적으로 더 편한 단축키가 있다면 그것으로 바꿀 수 있습니다. 

`vim` 은 에디터를 시작하기 전에 반드시 `~/.vimrc` 파일을 읽고 그곳에 정의된 설정들을 적용하고나서 시작됩니다. 그래서 개인 설정을 하고 싶을 때 이곳에 `vim` 의 설정 방법을 **Google** 에 검색하여 알아본 후 설정을 하면 됩니다. 

현재 도커 컨테이너에 설치된 저의 `~/.vimrc` 의 주요 설정을 추려보면 다음과 같습니다. 

```vim
colors onedark
map <silent> <C-s> :w<CR>
map <silent> <C-q> :q<CR>
nmap <silent> <C-p> :NERDTreeToggle<CR>
nmap <silent> <Up> :resize -5<CR>
nmap <silent> <Down> :resize +5<CR>
nmap <silent> <Left> :vertical resize -5<CR>
nmap <silent> <Right> :vertical resize +5<CR>
nmap <silent> <C-k> :wincmd k<CR>
nmap <silent> <C-j> :wincmd j<CR>
nmap <silent> <C-h> :wincmd h<CR>
nmap <silent> <C-l> :wincmd l<CR>
nmap <silent> <Space> :nohlsearch<Bar>:echo<CR>
```

몇 가지 `vim` 을 매우 빠르고 편하게 사용할 수 있도록 단축키를 설정했습니다. 위에서 볼 수 있듯 `map` 과 `nmap` 이 단축키를 설정하는 `vim` 의 명령어인데 `<silent>` 는 명령 실행을 상태바에 출력하지 말라는 뜻이니 신경쓸 것 없습니다. 실질적으로 단축키가 설정된 중요한 부분은 `<silent>` 오른쪽 부분입니다. 

!!! note ""

    직관적으로 알 수 있듯이 `<C-s>` 는 <kbd>Ctrl</kbd>+<kbd>s</kbd> 를 뜻하고 `<Up>` 은 <kbd>&uarr;</kbd> 를 뜻합니다.

### 더 이뻐진 테마 

현재 설정된 `vim` 의 컬러테마는 다음과 같은 `onedark` 입니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82150729-ec485800-9893-11ea-828e-7c9b54496fd1.png" width="70%" height="auto">
</div>

!!! tip

    하지만 [이곳에서](https://www.slant.co/topics/480/~best-vim-color-schemes) `vim` 의 여러가지 테마를 살펴볼 수 있고 **Google** 에 검색해서 더 많은 `vim` 테마도 찾을 수 있습니다. 그리고 여러분이 가장 마음이 드는 테마를 설치할 수도 있습니다.

### 더 빨라진 `vim` 종료/저장

| 기능 | 기존 단축키 | 새로운 단축키 |
|:---:|:---:|:---:|
| 저장 | `:w` | <kbd>Ctrl</kbd>+<kbd>s</kbd>|
| 종료 | `:q` | <kbd>Ctrl</kbd>+<kbd>q</kbd>|

가장 먼저 더 빨라진 명령어는 저장과 종료 명령인 `:w` 와 `:q` 입니다. 이것은 약간 치기 어렵고 윈도우의 저장 명령어 <kbd>Ctrl</kbd>+<kbd>s</kbd> 를 그대로 사용하고 싶기도 합니다. 

- 실습 

    다음과 같이 `v test.txt` 로 텍스트 파일을 열고 아무 문장이나 쓴 다음에 <kbd>Ctrl</kbd>+<kbd>s</kbd> 로 저장하고 <kbd>Ctrl</kbd>+<kbd>q</kbd> 로 종료해보세요. 

    ![render1589720657002](https://user-images.githubusercontent.com/16812446/82147434-6f64b080-988a-11ea-995a-f6d2b1c92a9c.gif)

    !!! danger "Speed up!!"

        너무 빠르고 편하게 저장되고 종료됩니다. 

    !!! info
    
        리눅스 터미널에서 <kbd>Ctrl</kbd>+<kbd>s</kbd> 와 <kbd>Ctrl</kbd>+<kbd>q</kbd> 를 사용하기 위해서는 반드시 `stty -ixon` 명령어를 실행해두어야 합니다. 하지만 `~/.zshrc` 파일에서 이미 자동으로 실행되고 있으니 걱정하지 마세요. 왜 `stty -ixon` 을 실행해야만 <kbd>Ctrl</kbd>+<kbd>s</kbd> 와 <kbd>Ctrl</kbd>+<kbd>q</kbd> 를 사용할 수 있는지는 상세히 설명하지 않겠습니다. 궁금하신 분들은 **Google** 에 검색해보세요. 

## NERDTree 

[NERDTree](https://github.com/preservim/nerdtree) 는 `vim` 에서 디렉토리와 파일을 너무나도 편하게 다룰 수 있게 해주는 플러그인입니다. NERDTree 는 수많은 좋은 기능들을 갖고 있지만 핵심적인 기능과 단축키는 다음과 같습니다. 

| 기능 | 단축키 | 
|:---:|:---:|
| NERDTree 실행 | `:NERDTreeToggle` |
| 파일 열기 | <kbd>Enter</kbd> |
| 파일을 수직으로 분할하여 열기 | `s` |
| 파일을 수평으로 분할하여 열기 | `i` |

여기에서는 이 플러그인과 화면 이동을 더 빠르게 할 수 있는 단축키를 함께 알아보겠습니다. 

### 더 빨라진 화면 이동 

| 기능 | 기존 단축키 | 새로운 단축키 |
|:---:|:---:|:---:|
| NERDTree 실행 | `:NERDTreeToggle` | <kbd>Ctrl</kbd>+<kbd>p</kbd>|
| 위쪽 화면으로 이동 | <kbd>Ctrl</kbd>+<kbd>w</kbd>+<kbd>k</kbd> | <kbd>Ctrl</kbd>+<kbd>k</kbd>|
| 아래쪽 화면으로 이동 | <kbd>Ctrl</kbd>+<kbd>w</kbd>+<kbd>j</kbd> | <kbd>Ctrl</kbd>+<kbd>j</kbd>|
| 왼쪽 화면으로 이동 | <kbd>Ctrl</kbd>+<kbd>w</kbd>+<kbd>h</kbd> | <kbd>Ctrl</kbd>+<kbd>h</kbd>|
| 오른쪽 화면으로 이동 | <kbd>Ctrl</kbd>+<kbd>w</kbd>+<kbd>l</kbd> | <kbd>Ctrl</kbd>+<kbd>l</kbd>|

말로 설명하는 것보다 눈으로 보고 직접 실습하면서 익혀보도록 하겠습니다. 

- 실습 

    먼저 다음 명령어를 통해 어떤 `python` 프로젝트를 클론하고 `vim` 으로 열어봅시다.

    **<div align="center"> ⬇ EXECUTE! ⬇ </div>**

    ```console
    $ g cl https://github.com/ccss17/nonogram
    $ cd nonogram
    $ v
    ```

    그리고 다음과 같이 <kbd>Ctrl</kbd>+<kbd>p</kbd> 로 NERDTree 를 열어서 `j` 로 커서를 내려서 `nonogram.py` 에 커서를 두고 <kbd>Enter</kbd> 를 칩니다.
    
    그리고 다시 <kbd>Ctrl</kbd>+<kbd>h</kbd> 로 NERDTree 로 이동하여 `patterns.py` 에 커서를 두고 `s` 를 눌러 에디터를 수직으로 분할하여 엽니다. 이제 <kbd>Ctrl</kbd>+<kbd>p</kbd> 로 NERDTree 를 닫습니다. 
    
    그리고 <kbd>Ctrl</kbd> 를 누른채 <kbd>h</kbd> 와 <kbd>l</kbd> 를 눌러서 왼쪽/오른쪽 에디터로 편하게 이동해보세요. 그리고 <kbd>Ctrl</kbd> 을 누를 채로 <kbd>q</kbd> 를 `2` 번 눌러서 `vim` 을 종료하세요.

    ![render1589730688182](https://user-images.githubusercontent.com/16812446/82153390-1bfe5c80-98a2-11ea-893b-30ed633cd92d.gif)

### 더 빨라진 `vim` 화면크기조정

| 기능 | 기존 단축키 | 새로운 단축키 |
|:---:|:---:|:---:|
| 위쪽으로 화면 조절 | `:resize -5` | <kbd>&uarr;</kbd>|
| 아래쪽으로 화면 조절 | `:resize +5` | <kbd>&darr;</kbd>|
| 오른쪽으로 화면 조절 | `:vertical resize -5` | <kbd>&rarr;</kbd>|
| 왼쪽으로 화면 조절 | `:vertical resize +5` | <kbd>&larr;</kbd>|

`vim` 에서 여러 에디터를 열어두었을 때 크기조정을 할 수 있었습니다. 하지만 그 명령어가 너무 복잡하고 외우기 힘들기 때문에 제가 소개해드리지 않았습니다. 하지만 화면크기조정을 매우 직관적으로 할 수 있도록 위와 같이 단축키를 설정해놓았습니다. 

- 실습 

    다음과 같이 `nonogram` 레포지토리에서 `vim` 을 켜고 NERDTree 로 파일 하나를 열고 또 하나의 파일을 수직으로 열고 또 하나의 파일을 수평으로 엽니다. 

    그리고 방향키 <kbd>&larr;</kbd>, <kbd>&rarr;</kbd>, <kbd>&uarr;</kbd>, <kbd>&darr;</kbd> 를 눌러서 에디터의 사이즈를 조절해보세요. 그리고 <kbd>Ctrl</kbd>+<kbd>h</kbd>, <kbd>Ctrl</kbd>+<kbd>j</kbd>, <kbd>Ctrl</kbd>+<kbd>k</kbd>, <kbd>Ctrl</kbd>+<kbd>l</kbd> 로 화면을 이동해서 그곳에서도 화면 크기를 조절해보세요. 

    그리고 마지막으로 <kbd>Ctrl</kbd> 를 누른채로 <kbd>q</kbd> 를 `3` 번 눌러서 `vim` 을 종료해보세요. 

    ![render1589725541150](https://user-images.githubusercontent.com/16812446/82151411-90330300-9896-11ea-8204-7a831f8d86db.gif)

## NERDCommentor

| 기능 | 기존 단축키 | 새로운 단축키 |
|:---:|:---:|:---:|
| 주석 |  | `\cc`|
| 주석 해체 |  | `\cu`|

[NERDCommentor](https://github.com/preservim/nerdcommenter) 는 주석을 쉽게 할 수 있도록 도와주는 플러그인입니다. 이 플러그인을 사용하고 나면 수작업으로 주석을 입력하고 있는 사람들에게 이 플러그인을 알려주고 싶을 마음이 들 정도로 편리함을 느낄 수 있습니다. 

- 실습 

    다음과 같이 `main.py` 을 `vim` 으로 열고 `/def test(` 로 `test` 함수를 찾으세요. 그런 다음 `zt` 를 눌러 `test` 함수 코드가 한 눈에 들어올 수 있도록 화면을 올리고, `9\cc` 를 눌러 코드 `9` 줄을 한번에 주석처리하고 <kbd>Ctrl</kbd>+<kbd>s</kbd> 를 눌러 저장하세요.
    
    그러고 나서 `9\cu` 를 눌러서 다시 주석을 해제하고 <kbd>Ctrl</kbd>+<kbd>s</kbd> 를 눌러 저장한 다음 <kbd>Ctrl</kbd>+<kbd>q</kbd> 로 에디터를 종료하세요. 

    ![render1589726356315](https://user-images.githubusercontent.com/16812446/82151687-b2795080-9897-11ea-8b56-1458ee019c94.gif)

## vim-multiple-cursors

[vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors) 는 `vim` 에서 커서를 여러개로 늘려서 똑같은 문자들을 한번에 편집할 수 있게 해주는 플러그인입니다. 

| 기능 | 기존 단축키 | 새로운 단축키 |
|:---:|:---:|:---:|
| 멀티 커서 늘리기 |  | <kbd>Ctrl</kbd>+<kbd>n</kbd>|

말로 설명하는 것보다 직접 보고 따라하면서 배워보겠습니다. 

- 실습 

    이번에는 `lolcat` 레포지토리로 이동하여 `vim` 으로 `lolcat.c` 를 여세요. 

    **<div align="center"> ⬇ EXECUTE! ⬇ </div>**

    ```console
    $ z lol
    $ v lolcat.c
    ```

    그리고 다음과 같이 `/main(` 으로 메인함수로 이동하고 `zt` 를 눌러 화면을 올리고 `95` 행의 `cc` 라는 변수가 정의되어 있는 곳에 커서를 둡니다. 

    ![render1589727290032](https://user-images.githubusercontent.com/16812446/82152075-eeadb080-9899-11ea-970c-d109d97d43fa.gif)

    개발을 하다 보니 `cc` 라는 변수 이름이 마음에 들지 않아서 바꾸고 싶습니다. 하지만 이 변수가 `main` 함수에서 몇번이나 반복되었는지 알 수 없습니다. 
    
    그래서 `cc` 변수 위에 커서를 두고 <kbd>Ctrl</kbd> 을 누른채로 <kbd>n</kbd> 을 연타하여 상태표시줄에 **No more matches** 라고 뜰 때까지 혹은 더 단순하게 다음 단어로 커서가 이동되지 않을 때까지 변수 `cc` 들을 포커싱합니다. 

    그러고 나서 **지우고 편집** 하기 기능인 `c` 를 눌러서 `my_var` 를 입력하고 <kbd>Esc</kbd> 를 연타하여 눌러 입력 모드를 빠져나옵니다. 여러개의 커서들이 다시 없어져야 하기 때문에 <kbd>Esc</kbd> 를 연타해야 합니다. 
    
    그리고 <kbd>Ctrl</kbd>+<kbd>s</kbd> 를 눌러서 저장하고 <kbd>Ctrl</kbd>+<kbd>q</kbd> 를 눌러서 에디터를 종료하세요. 

- 실습 

    다음과 같이 `include` 에 커서를 두고 <kbd>Ctrl</kbd> 를 누른채 `n` 을 연타하여 모든 `include` 를 포커싱한 다음 **삭제하기** 기능인 `x` 를 누르면 모두 다 삭제됩니다. 

    ![render1589727634891](https://user-images.githubusercontent.com/16812446/82152210-ae026700-989a-11ea-877e-cb592dca5a46.gif)

    그러고나서 <kbd>Esc</kbd> 를 연타하여 멀티 커서를 다 없애고 <kbd>Ctrl</kbd>+<kbd>s</kbd>, <kbd>Ctrl</kbd>+<kbd>q</kbd> 로 저장 후 종료합니다. 

# VSCode Vim

[**VSCodeVim**](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) 은 **VSCode** 에서 `vim` 키맵을 사용할 수 있도록 해줍니다. 그래서 기존의 CLI 에서의 `vim` 에서는 사용할 수 없었던 **VSCode** 의 모든 풍부한 디버깅 기능, 확장, **VCS** 등을 `vim` 과 함께 사용할 수 있게 됩니다. 어차피 나중에라도 **VSCodeVim** 을 비활성화 시킬 수 있기 때문에 한번 설치해보세요. 

## 단축키

### 주석 처리 

그에 앞서 **VSCode** 에서의 주석 처리 단축키를 알아보겠습니다.

| 기능 | `vim` 단축키 | **VSCode** 단축키 |
|:---:|:---:|:---:|
| 주석 | `\cc`  | `gcc`|

**VSCodeVim** 확장이 적용된 **VSCode** 에서 주석처리는 단순히 `gcc` 를 누르면 됩니다. `5gcc` 를 누르면 `5` 줄이 주석처리되는 식입니다.

### 단축키 설정

**VSCodeVim** 확장의 키맵이 **VSCode** 의 강력한 기능을 덮어버리는 경우도 있었기 때문에 개인적으로 다음의 설정을 통해 **VSCodeVim** 확장의 일부 기능을 비활성화시켰습니다. `...` 에는 또 다른 확장들의 설정이 있는 것입니다. 

```json
{
  ...
  "editor.lineNumbers": "relative",
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.hlsearch": true,
  "vim.handleKeys": {
      "<C-a>": false,
      "<C-d>": false,
      "<C-f>": false,
      "<C-n>": false,
      "<C-o>": false,
      "<C-w>": false,
      "<C-k>": false,
  },
  ...
}
```

!!! tip

    이렇게 개인적으로 개발환경 설정을 할 수 있는데 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> 로 명령 팔레트를 열어서 **setting json** 만 검색하면 다음과 같이 **Preferences: Open Settings (JSON)** 이 나옵니다. 이것을 실행하여 설정창이 뜨면 단순히 위의 설정을 복사해서 붙혀넣으면 됩니다. 

    <img src="https://user-images.githubusercontent.com/16812446/82322033-cbf1d800-9a10-11ea-9726-10ef40cff6c5.PNG" width="50%" height="auto">

이런 설정을 통해 **VSCodeVim** 확장 단축키를 비활성화시켜서 원래 **VSCode** 단축키로 기능하게 한 단축키는 다음과 같습니다.

| 단축키 | **VSCodeVim** 확장 | **VSCode** 원래 기능 | 
|:---:|:---:|:---:|
| <kbd>Ctrl</kbd>+<kbd>d</kbd> | 화면 내리기 | 멀티 커서 |
| <kbd>Ctrl</kbd>+<kbd>n</kbd> | | 새 파일 만들기 |
| <kbd>Ctrl</kbd>+<kbd>w</kbd> | | 파일 닫기 |
| <kbd>Ctrl</kbd>+<kbd>f</kbd> | | 찾기 |
| <kbd>Ctrl</kbd>+<kbd>o</kbd> | | 파일 열기 |
| <kbd>Ctrl</kbd>+<kbd>a</kbd> | | 전체 선택 |

<kbd>Ctrl</kbd>+<kbd>d</kbd> 는 기본 **VSCode** 에서 멀티 커서 기능인데 **VSCodeVim** 확장을 설치하면 <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 덮어버려서 비활성화시켰고, <kbd>Ctrl</kbd>+<kbd>n</kbd> 은 기본 **VSCode** 에서 새 파일을 만드는 단축키인데 마찬가지로 **VSCodeVim** 확장이 이 단축키를 덮어버렸기 때문에 비활성화시켰습니다. 비슷한 이유로 <kbd>Ctrl</kbd>+<kbd>f</kbd>, <kbd>Ctrl</kbd>+<kbd>o</kbd>, <kbd>Ctrl</kbd>+<kbd>k</kbd>, <kbd>Ctrl</kbd>+<kbd>w</kbd> 등도 기본 **VSCode** 기능을 하도록 **VSCodeVim** 확장을 비활성화시켰습니다. 

### 그외의 단축키 

그 외의 단축키는 `vim` 과 동일합니다.

여기에서는 이 설정이 적용된 **VSCode** 에서 `vim` 을 사용하여 어떻게 코드를 효율적으로 편집하는지 몇개의 예시를 보여드리겠습니다. **Python** 으로 예시를 들었지만 **모든 언어에 적용될 수 있는 상황들** 입니다.

# VSCode Vim 예시

여기에서는 **VSCode** 에서 **VSCodeVim** 확장으로 어떻게 코드 편집을 편하게 편하게 할 수 있는지 보여드리겠습니다. **VSCodeVim** 을 사용하고 싶지 않은 분들이라도 한번 따라해보면서 코드 편집을 얼마나 더 효율적으로 할 수 있는지 꼭 체험해보세요. 

## Python - List to Dictionary

**Python** 코딩을 하다가 `lst = ['all', 'all2', 'all3', 'all4', 'all5']` 라는 리스트를 만들게 되었습니다. 그런데 이 자료구조가 딕셔너리로 사용되면 더 효율적이라는 것을 깨닫고 이 리스트를 딕셔너리로 고치려는 상황입니다. 

1. 먼저 다음과 같이 `,` 에 커서를 두고 `v` 로 드래그 모드로 들어가서 `'` 앞까지 드래그합니다. 

2. 그리고 **VSCode** 의 멀티커서 기능인 <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 꾹 누르고 있으면 매칭되는 모든 코드가 멀티 커서로 포커싱됩니다.

3. 그리고 **삭제하고 편집하기** 기능인 `c` 를 눌러 <kbd>Enter</kbd> 를 칩니다.

4. 그러면 멀티커서가 모든 `, ` 를 삭제하고 개행을 합니다. 그런다음 아직 개행되지 않은 `'all'` 을 개행시키고 <kbd>Ctrl</kbd>+<kbd>v</kbd> 로 블록 드래그 모드로 들어가서 `'all5'` 까지 커서를 내립니다.

5. 그리고 <kbd>Shift</kbd>+<kbd>i</kbd> 를 눌러 입력모드로 들어간다음 키값을 써주고 <kbd>Esc</kbd> 를 눌러 명령모드로 돌아옵니다.

6. 그리고 `r2`, `r3`, `r4`, `r5` 를 눌러 키값을 적절히 바꾸고 `5>>` 를 눌러 자동으로 탭 인덴트를 해줍니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82322465-8550ad80-9a11-11ea-9682-a1f291bb6883.gif" width="70%" height="auto">
</div>

!!! note ""

    `0` 으로 문장 앞으로 커서를 옮기는 것이나 `f'` 로 `'` 로 커서를 옮기는 것 등의 설명까지 하면 너무 장황해져서 생략했습니다. 

## Python - copy & paste

다음의 상황은 코딩을 하다보니 `sub_section('math')` 라는 함수를 여러번 사용해야 하는 상황입니다.

1. `yy4p` 로 코드를 `4` 번 복사하여 붙혀넣습니다. 

2. 그리고 `'` 에 커서를 두고 <kbd>Ctrl</kbd>+<kbd>v</kbd> 로 블록드래그를 한 다음 맨 아래 코드까지 내려서 <kbd>Shift</kbd>+<kbd>i</kbd> 로 입력모드에 들어가서 `1` 을 입력합니다. 

3. `r2jr3jr4jr5` 를 입력해 파라미터를 수정합니다. 

4. 그런데 코딩하다보니 `for` 문으로 고치는게 더 적절하다는 것을 깨닫고 `for` 문으로 대체하려 합니다. 그래서 `for` 문을 하나 만들고 `sub_sectoin('math')` 코드를 `yy` 로 복사하여 가져와서 `p` 로 붙혀넣습니다. 

5. 그러고나서 `>>` 를 눌러 인덴트를 조정합니다. 

6. 마지막으로 `7k` 를 눌러 `sub_section('math1')` 코드로 가서 `5dd` 를 눌러 필요없어진 코드를 삭제합니다.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82323380-ef1d8700-9a12-11ea-97b1-d364f38941c0.gif" width="70%" height="auto">
</div>

## Python - multi cursor

다음의 상황은 코딩을 하면서 `sub_section` 이라는 함수를 만들었는데 갑자기 이 함수의 이름이 마음에 들지 않아서 바꾸고 싶은 상황입니다.

1. `sub_section` 함수 이름이 사용된 아무 곳에서나 커서를 두고 <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 꾹 눌러서 모든 `sub_section` 들이 멀티 커서로 포커싱되게 합니다.

2. **삭제하고 편집하기** 기능인 `c` 를 누르고 고치고 싶은 이름을 입력하면 모든 곳이 자동으로 편집됩니다. 

3. <kbd>Esc</kbd> 를 연타하여 생성된 멀티커서를 소멸해줍니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82324002-dc578200-9a13-11ea-987d-bb5282dc8e22.gif" width="70%" height="auto">
</div>

하지만 단번에 매칭되는 모든 단어에 멀티커서를 두고 싶다면 다음과 같이 하면 됩니다.

1. `subsection` 함수 이름에 커서를 둔다. 

2. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> 을 누른다.

3. `b` 를 눌러 커서를 단어의 처음으로 옮기고 `cw` 로 삭제하고 편집하기를 눌러 함수 이름을 마음대로 변경한다. 

4. <kbd>Esc</kbd> 를 눌러 빠져나온다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82770651-3a50f300-9e74-11ea-8ee7-ca2981cdc3a9.gif" width="70%" height="auto">
</div>

## Python - rename argument

다음의 상황은 함수와 인자를 정의했는데, 인자의 이름을 바꾸어야 하는 상황입니다. 그런데 인자가 여러군데에서 사용되서 일일이 바꾸기 너무 귀찮을 것 같습니다. 하지만 괜찮습니다.

1. `test` 위에 커서를 올려두고 <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 `3` 번 눌러 `test` 를 멀티커서로 포커싱합니다. 

    - **위에서 보았듯 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> 을 누르면 <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 `3` 번 누를 필요 없이 단번에 멀티 커서가 생성됩니다.**

2. `c` 를 눌러 모든 `test` 를 지우고 입력하고 싶은 문자열을 입력합니다.

3. <kbd>Esc</kbd> 를 연타하여 멀티 커서를 소멸시킵니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82324486-aff03580-9a14-11ea-991e-fac98ec93be5.gif" width="70%" height="auto">
</div>

## C 언어 - 변수 한 줄로 선언하기

다음의 상황은 **C 언어** 를 코딩하고 있던 중 `pthread_t tid` 변수들이 여러 줄로 선언되어 있는 것을 한 줄로 만들고 싶은 상황입니다. 

1. 가장 처음 선언된 `pthread_t tid1` 변수에 커서를 두고 `J` 를 눌러 두번째 문장과 이어붙힙니다.

2. 그리고 `.` 을 연타하여 `pthread_t tid6` 이 선언된 문장까지 이어붙힙니다.

3. 그리고 `0f;` 를 눌러서 `;` 에 커서를 두고 `v` 로 드래그 모드로 들어가서 `e` 를 눌러서 `; pthread_t` 를 드래그합니다. 

4. <kbd>Ctrl</kbd>+<kbd>d</kbd> 를 연타하여 모든 `; pthread_t` 를 멀티 커서로 포커싱합니다. 

5. `c` 를 누르고 `,` 를 입력하고 <kbd>Esc</kbd> 를 연타하여 멀티 커서를 소멸시킵니다.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82325194-c480fd80-9a15-11ea-8552-9c11c996c0ac.gif" width="70%" height="auto">
</div>

## Markdown - example 1

다음의 상황은 **Markdown** 파일을 작성중 맨 밑에 있는 문장을 맨 위로 올리고 나머지 문장들을 그 문장의 하위 문장이 되게 하고 싶은 상황입니다. 

1. `gg` 로 커서를 맨 위로 올리고 `13dd` 를 눌러 나머지 문장을 잘라냅니다. 

2. `p` 를 눌러 문장을 붙혀넣고 `O` 로 간편하게 개행을 한 다음 <kbd>Esc</kbd> 로 다시 명령모드로 돌아옵니다. 

3. `13>>` 를 눌러 간편하게 탭 인텐트를 조정합니다. 그런데 탭 사이즈가 `4` 로 설정되어 있어서 너무 많이 뛰어진 것 같아서 탭 사이즈를 `2` 로 줄이고 싶습니다. 

4. <kbd>Ctrl</kbd>+<kbd>v</kbd> 를 눌러 블록 드래그 모드로 들어가고 `G` 를 눌러 커서를 맨 밑으로 내리고 `k` 를 한번 눌러 커서를 한 줄 위로 올립니다. 

5. 그리고 `l` 를 누르고 `x` 를 눌러 공백 `2` 개를 삭제합니다.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82324933-681dde00-9a15-11ea-9899-b8edb9638b6c.gif" width="70%" height="auto">
</div>

## Markdown - example 2

다음은 **Markdown** 파일을 작성하던 중 문장들을 아이템으로 분리하고 싶은 상황입니다. 

1. `0f.` 를 눌러 첫번째 문장이 끝나는 지점에 커서를 둡니다. 

2. `a` 를 누르고 <kbd>Enter</kbd> 를 쳐서 개행을 시킵니다.

3. 이 작업을 다음 문장에도 반복합니다.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82325719-a798fa00-9a16-11ea-898d-760c5898a288.gif" width="70%" height="auto">
</div>

## Python - multicursor

다음은 파이썬에서 딕셔너리를 만들었는데 값들의 이름이 마음에 안들어서 고치려는 상황입니다.

하지만 지금까지의 설명을 통하여 어떻게 멀티 커서를 사용하여 한번에 편집할 수 있는지 다 이해하셨을 거라고 믿습니다.

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82326020-268e3280-9a17-11ea-92cd-c5261c39047e.gif" width="70%" height="auto">
</div>

## Markdown - example 3

다음은 **Markdown** 파일을 작성하다가 특정 문장을 헤더로 입력하고 싶은 상황입니다.

1. `f(vf)` 로 `(` 부터 `)` 까지 드래그하고 `y` 를 눌러 복사합니다.

2. 그리고 `gg` 로 맨 위로 커서를 옮기고 헤더를 입력한 다음 `p` 로 붙혀넣습니다. 

3. 하지만 헤더의 `(`, `)` 을 없애고 싶습니다. 그래서 `f(xf)x` 로 삭제합니다. 

4. 그런데 오타가 있다는 것을 발견하고 `toin` 을 드래그하고 멀티커서 <kbd>Ctrl</kbd>+<kbd>d</kbd> 로 그것과 똑같은 오타를 포커싱하여 `tion` 으로 고칩니다. 

<div align="center">
<img src="https://user-images.githubusercontent.com/16812446/82326130-563d3a80-9a17-11ea-857f-a6fb7d8db4c8.gif" width="70%" height="auto">
</div>
