[![Netlify Status](https://api.netlify.com/api/v1/badges/ee15c580-c883-47bd-965d-a00321b64685/deploy-status)](https://app.netlify.com/sites/hgu-ghost/deploys)

# hgu-ghost.netlify.app

https://hgu-ghost.netlify.app

# 블로그 수정법  

- mkdocs-material 로 만들어진 블로그입니다. https://squidfunk.github.io/mkdocs-material/reference/ 참고하여 블로그 수정할 수 있습니다.
- mkdocs-material 은 mkdocs 기반으로 만들어졌기 때문에 https://www.mkdocs.org/ 참고 하시면 됩니다.
- https://www.netlify.com/ 에서 고스트 공식 구글 계정으로 호스팅하고 있습니다. https://docs.netlify.com/ 참고하셔서 netlify 서버 호스팅 관리하시면 됩니다.


- 설치

    - mkdocs 설치 https://www.mkdocs.org/user-guide/installation/
    - mkdocs-material 설치 https://squidfunk.github.io/mkdocs-material/getting-started/
    - 파이썬 패키지 설치 : `pip install -r requirements.txt`

- markdown 파일 수정

    - 기본적으로 https://squidfunk.github.io/mkdocs-material/ 참조
    - markdown 파일을 추가하고 mkdocs.yml 의 `nav:` 에 경로를 추가하면 블로그 목차에서 추가됩니다.
    - markdown 파일을 삭제하면 마찬가지로 mkdocs.yml 의 `nav:` 에 경로를 삭제해줘야 블로그 목차에서 삭제됩니다.

- 블로그 미리보기 

    - `mkdocs serve -a 0.0.0.0:8000` : 로컬에 8000 포트에 블로그 미리보기 서버 열기
    - `mkdocs serve --dirtyreload -a 0.0.0.0:8000` : `--dirtyreload` 옵션은 파일을 수정했을 때 전체 파일을 빌드하는 것이 아니라 수정된 파일만 빌드해서 서버를 새로고침하도록 합니다.

- 파일 설명

    - `mkdocs.yml`: 전반적인 블로그 설정 및 관리([mkdocs-mateiral 문서](https://squidfunk.github.io/mkdocs-material/) 참조)
    - `runtime.txt`: netlify 호스팅 서버에서 실행될 파이썬 버전
    - `requirements.txt`: 서버에 설치할 파이썬 패키지. 
    - `config.py`: `python config.py -c` 로 실행하여 문서들에 원하는 설정을 전처리하기 위한 프로그램. 
    - `netlify.toml`: netlify 호스팅 서버에서 실행될 빌드 명령어(`command`), 호스팅할 HTML 파일들 디렉토리 명시(`publish`)
    - `docs\stylesheets\config.css`: 블로그 스타일 설정(폰트, 색상, 로고, 크기 등등)

- 암호화 및 문서 비밀번호 지정법

    - `netlify.toml` 의 `[build]` 섹션에서 `command =` 여기에다가 `npx staticrypt site/* -r -d site --short --template password_template.html` 명령어를 추가하시면 됩니다.
    - 비빌번호는 netlify 사이트 설정에서 환경변수에서 설정.
    - https://github.com/robinmoisson/staticrypt, https://robinmoisson.github.io/staticrypt/ 참고해서 사이트 전체 암호화 설정 할 수 있고, 별개 페이지만 암호화 할 수 있습니다.