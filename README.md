## 1. GitLab 링크

https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project

<br>

## 메인 기능

AI 견종 분석 서비스를 통해서 나의 반려견에 대한 정보를 파악할수 있게 합니다.
<br> 사용자들이 커뮤니티를 형성하여 소통할 수 있는 공간을 제공합니다.
<br>
<br>

## 기술스택

<br>

### 프론트엔드

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=black"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=black"/><br>
React
컴포넌트 기반이므로 UI 재사용성이 높고, 공통적으로 익숙한 기술 스택이면서 커뮤니티가 활성화되어 있기 때문에 러닝 커브가 적었음

Typescript
타입을 명시해주어 코드의 의도를 명확히 할 수 있으므로, 잠재적인 오류를 방지할 수 있고 협업에 용이함
<br><br><br><br>

### 백엔드

<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=black"/> <img src="https://img.shields.io/badge/Express-c2c2c2?style=flat&logo=Express&logoColor=black"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=Amazon S3&logoColor=black"/>
<br>
Node.js & Express 코드의 양을 줄여 주고, 추후에 유지 보수에 용이

Sequelize, MySQL 관계형 데이터베이스로 데이터 간 관계를 파악하기 좋고, 빠르게 처리할 수 있음

AWS S3
로컬에 저장할 필요 없이 많은 데이터를 보관할 수 있음

<br><br>

### AI

<img src="https://img.shields.io/badge/Flask-FDA061?style=flat&logo=Flask&logoColor=black"/> <img src="https://img.shields.io/badge/%F0%9F%A4%97-Huggingface-yellow"/> <img src="https://img.shields.io/badge/Pytorch-EE4C2C?style=flat&logo=Pytorch&logoColor=black"/> <img src="https://img.shields.io/badge/-TextRank-green">
<br>
<br>

## 와이어프레임

[와이어프레임]https://www.erdcloud.com/d/PeTYQmfQNitEZeTta

<br><br>

## 기능 소개

[![Watch the video](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project/uploads/b3b2369cfe9153272141b8441a272a49/%EA%B7%B8%EB%A6%BC1.png)](https://youtu.be/UsKXQdNAMw8)

<br>

회원가입 및 회원정보 수정
![image](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project/uploads/14f75f9d0c6ef5000737c5085e601c18/KakaoTalk_20221215_153249555_01.gif)

<br>

나정보에서 내가 속한 커뮤니티 및 나의 글을 모아볼 수 있음
![image](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project/uploads/3a6dc6f4af33ac4f8b529c4b3a4050c8/KakaoTalk_20221215_153249555_02.gif)

<br>

커뮤니티 검색 및 좋아요 기능
![image](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project/uploads/9d09e32637108eb9eb9b7aec2d795c27/KakaoTalk_20221215_153249555.gif)

<br>

<br>

#

### 메인 페이지

- 회원가입 없이 강아지의 견종을 분석해보는 서비스를 이용할 수 있음

### 로그인 페이지

- 이메일, 닉네임, 비밀번호를 받아서 회원 가입 진행
- 이메일 아이디 및 비밀번호 유효성 검사
- JWT(Access Token, Refresh Token) 이용

### 견종 분석 후 결과 공유 페이지

- 견종을 분석하여 해당 사진과 결과를 사람들과 함께 공유할 수 있음
- 결과에 댓글을 달고 소통할 수 있음

### 견주 커뮤니티

- 원하는 커뮤니티를 만들어 다른 이용자들과 소통하고 공유를 할수 있는 서비스
- 강아지 사진 공유
- 같은 커뮤니티 이용자들끼리 소통하고 댓글을 달수 있음
- 사진으로 소통
- 좋아하는 커뮤니티를 찜 할수 있음

### 마이 페이지

- 나의 정보 수정
- 내 강아지 견종 분석 결과 모아보기
- 내가 찜한 커뮤니티 모아 보기

## 실행방법

```
<Frontend>
  npm install
  npm run dev
```

```
<Backend>
  npm install
  npm start
```

## 팀 구성원

| 이름   | 역할                     | 담당 부분                                                                  |
| ------ | ------------------------ | -------------------------------------------------------------------------- |
| 임동민 | 팀장<br>프론트엔드<br>AI | 와이어프레임 제작 <br> AI견종 분석                                         |
| 이다솜 | 프론트엔드               | 와이어프레임 제작 <br> 메인 <br> 로그인 및 회원가입                        |
| 김선희 | 백엔드                   | 데이터 테이블 구상 <br> 회원가입 및 로그인 API 작성 <br> 커뮤니티 API 작성 |
| 안수진 | 백엔드                   | 데이터 테이블 구상 <br> 견종분석 API 작성                                  |
