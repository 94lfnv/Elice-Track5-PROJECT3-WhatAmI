# 나는뭐개🐶
AI를 이용해 견종을 분석하고 랜선 견주들의 커뮤니티 형성을 돕는 서비스
<br>
<br>

## GitLab 링크

https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project
<br> 서비스 링크 (추후 추가 예정)
<br>
<br>

## 서비스 소개

AI 분석을 통해 강아지 종을 알아 봅니다.
<br>
<br>

- 기획 의도
<br>동물권에 대한 인식이 높아지고 관심이 커짐에 따라 유기 동물 입양을 
고려하는 사람이 많아졌습니다. (관련 기사: [반려동물 사지말고 입양하자!](http://www.newstnt.com/news/articleView.html?idxno=238264))
<br>누구나 알다시피 유기견은 다양한 모습과 제각기 고유한 개성을 지니고 있습니다. 
<br>그런 유기견과 함께 사는 견주들은 늘 궁금해 합니다. '저 아이는 어디서 왔을까?', '무슨 종이 섞인 걸까?' 
<br> 견주들의 궁금증을 풀고 재미까지 쌓을 수 있는 서비스를 제공합니다.  

- 제공되는 서비스
<br> AI로 견종을 분석한 후 분석 결과를 유저들과 공유할 수 있습니다. 
<br> 유저들이 직접 커뮤니티를 형성하여 소통할 수 있는 공간을 제공합니다.

<br>

## 기술스택

### 프론트엔드

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=black"/> <img src="https://img.shields.io/badge/vite-646CFF?style=flat&logo=Vite&logoColor=black"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=black"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/> <br>
<br>

### 백엔드

<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=black"/> <img src="https://img.shields.io/badge/Express-c2c2c2?style=flat&logo=Express&logoColor=black"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=Amazon S3&logoColor=black"/>
<br>
Node.js & Express 코드의 양을 줄여 주고, 추후에 유지 보수에 용이
<br>Sequelize, MySQL 관계형 데이터베이스로 데이터 간 관계를 파악하기 좋고, 빠르게 처리할 수 있음
<br>AWS S3 로컬에 저장할 필요 없이 많은 데이터를 보관할 수 있음
<br>


### AI

<img src="https://img.shields.io/badge/Flask-FDA061?style=flat&logo=Flask&logoColor=black"/> <img src="https://img.shields.io/badge/Pytorch-EE4C2C?style=flat&logo=Pytorch&logoColor=black"/>
<br>

### etc
<img src="https://img.shields.io/badge/prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Whimsical-F24E1E?style=flat&logo=Whimsical&logoColor=white"/> <img src="https://img.shields.io/badge/Gitlab-FC6D26?style=flat&logo=Gitlab&logoColor=white"/>
<br>

## 프로젝트 구성

[플로우 차트 (윔지컬)](https://whimsical.com/3-CFWtfKhQm5ordE5wtXu8VS)
<br>
[와이어 프레임 (피그마)](https://www.figma.com/file/pDiUJYWrYapvzgJUHNf6QC/Untitled?node-id=0%3A1)

<br>

## 기능 소개

<br>
시연영상(클릭)<br>

[![Watch the video](https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team08/team08-project/uploads/b3b2369cfe9153272141b8441a272a49/%EA%B7%B8%EB%A6%BC1.png)](https://youtu.be/UsKXQdNAMw8)

<br>
<br>

#

AI 종 분석
<br>
![image](https://user-images.githubusercontent.com/99853367/220651212-7c384fb3-4e6d-490c-a3f1-94d38e75d759.png)
<br>

회원가입 및 회원정보 수정
<br>
![image](https://user-images.githubusercontent.com/99853367/220651292-8b240f29-10b3-468a-8675-7c10be273e5c.png)
<br>

AI 종 분석 후기 작성 
<br>
![image](https://user-images.githubusercontent.com/99853367/220651389-b722d75c-63ff-485e-9f0d-1dfdc946551b.png)
<br>

커뮤니티 검색 및 좋아요 
<br>
![image](https://user-images.githubusercontent.com/99853367/220651500-f2b387a4-23b0-43a3-92bc-ff6afef0fceb.png)
<br>

커뮤니티 내 게시물 작성 및 댓글 기능
<br>
![image](https://user-images.githubusercontent.com/99853367/220651547-ffba62ad-623f-4ac3-a4e5-83037f17c995.png)
<br>

좋아요를 누른 커뮤니티 및 내가 만든 커뮤니티 보기, 작성한 글을 모아보기
<br>
![image](https://user-images.githubusercontent.com/99853367/220651608-803734f0-75c9-44e4-810f-ef6f56e0019b.png)
<br>

#

### 메인 페이지

- 견종 분석을 할 수 있는 페이지로 갈 수 있도록 함

### 로그인 페이지

- 이메일, 닉네임, 비밀번호를 받아서 회원 가입 진행
- 이메일 아이디 및 비밀번호 유효성 검사

### 견종 분석 후 결과 공유 페이지

- 강아지 사진을 첨부하여 견종을 분석하고 해당 사진과 결과를 다른 유저와 공유할 수 있음
- 후기 글에 댓글을 달며 소통할 수 있음

### 커뮤니티

- 유저가 누구나 원하는 커뮤니티를 만들 수 있음
- 좋아요 개수를 기준으로 1~3순위 커뮤니티를 사용자에게 보여줌
- 좋아요를 누른 커뮤니티는 별도로 마이페이지에서 모아 볼 수 있음
- 같은 커뮤니티 내에서 유저끼리 게시물과 댓글로 소통할 수 있음
- 커뮤니티 내 게시물 작성 시 최대 5장의 사진까지 첨부 가능

### 마이 페이지

- 나의 정보 수정
- 내 강아지 견종 분석 결과 모아보기
- 내가 찜한 커뮤니티 모아 보기
  <br>

#

<br>

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

<br>

## 팀 구성원

| 이름   | 역할       | 담당 부분                                                                                                                                                                                        |
| ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 임동민 | 프론트엔드 | 와이어프레임 제작 <br> AI 견종 분석 페이지 API 연결 <br> 로그인, 나의 정보 페이지 및 내 정보 수정 <br> 내가 찜한 커뮤니티, ai결과 모아보기 <br> ai결과 공유 게시판 통신 <br> 최종 발표 |
| 이다솜 | 프론트엔드 | 와이어프레임 제작 <br> 이미지, 색상, 글꼴 등 전체 페이지 디자인 설계 및 적용 <br> 후기/AI 종 분석 결과/커뮤니티 게시판, 커뮤니티 내 페이지 모든 HTTP Method 연결 <br> Formdata를 통한 이미지 업로드 구현 <br> Carousel 기능을 이용해 다수 이미지 업로드 구현 <br> 페이지네이션 hook 구현 <br> 무한 스크롤 구현 <br> README 작성 |
| 김선희 | 백엔드     | 데이터 테이블 구상 <br> 회원가입 및 로그인 API 작성 <br> 커뮤니티 API 작성 <br> 커뮤니티 및 후기게시판 검색기능 <br> 커뮤니티 좋아요 <br>AWS S3 및 사진기능 구현 <br>ai API연결         |
| 안수진 | 백엔드     | 데이터 테이블 구상 <br> 견종분석 API 작성 <br> 후기게시판 좋아요 <br> 커뮤니티 모임 및 댓글기능<br>커뮤니티, 리뷰 게시판 페이지네이션 <br> 배포 및 발표 자료준비                                 |
