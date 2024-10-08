??? toc "Contents"

    [TOC]

# 과제 

1. `bomb` 의 노란선을 해제하고 write-up 을 쓰세요.

    - 먼저 다음의 명령어를 참고해서 리버싱 문제를 내려받자.

      ```console
      wget https://lira.epac.to/DOCS-TECH/Hacking/security.cs.rpi.edu/courses/binexp-spring2015/lectures/3/bombs.zip
      unzip bombs.zip
      cd bombs
      ls
      ```

    - 그러면 `bomb` 이라는 프로그램이 보인다. 프로그램을 실행하고 `1` 을 입력하면 노란선을 해제하기 위한 비밀번호를 입력해야 한다. 비밀번호가 틀리면 핵폭탄이 폭발한다. 폭탄 내부를 살펴보면서 비밀번호를 어떻게 입력해야 하는지 조사한 후 노란선만 해제해보자.

    - 노란선을 해제한 후 초록선, 파란선, 빨간선을 다 해제하면 핵폭탄이 완전히 해제된다. 하지만 초록선은 지금까지 배웠던 지식으로는 해결할 수 없을 것이다. BOF(Buffer Overflow) 를 해야 하기 때문. 필수로 풀어와야 하는 건 노란선 해제임. 

    - 풀다가 너무 어렵고 스트레스를 받게 되면 [힌트](hint.md)를 클릭해서 해결을 하시고 주말을 즐기세요. 단, write-up 을 쓸 때 어느 부분에서 힌트를 참조 했고 막힌 문제를 해결했는지 설명해야 함. 