# 여름방학
![sv_main (1)](https://github.com/cjy00n/summer-vacation-FE/assets/33516975/75032685-94b2-4c1c-b120-221d4ff27dbb)
AI가 그려주는 간편한 그림일기 서비스 

## 프로젝트 기간
2024.02 ~ 2024.05

## 배포주소 (서비스 종료)
https://summer-vacation.site

## 백엔드 Repo
https://github.com/mj-song00/potenday


## 프로젝트 소개
그림일기에 진심이던 <b>여름방학</b>을 떠올리며, <br/>
오늘의 일상을 작성하면, 내용에 맞는 그림을 AI가 그려주어 그림일기를 완성합니다. <br/>
나의 일기는 다른 사람에게 보여줄 수 있고, 서로의 일기를 구경하고, 반응을 남길 수 있습니다.

## 개발환경
- 프론트엔드 ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Recoil](https://img.shields.io/badge/-Recoil-4d4d4d?style=flat-square&logo=Recoil&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=Tailwind-CSS&logoColor=white)
![React Query](https://img.shields.io/badge/-React_Query-ff4154?style=flat-square&logo=React-Query&logoColor=white)

- 백엔드 ![Nest.js](https://img.shields.io/badge/-Nest.js-E0234E?style=flat-square&logo=NestJS&logoColor=white) ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)

- 협업  ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)
![Notion](https://img.shields.io/badge/-Notion-000000?style=flat-square&logo=Notion&logoColor=white)
![Slack](https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=Slack&logoColor=white)
![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white)


## 팀원구성 및 역할
| 이름   |주요 역할     |
|------------------------|----------|
| [최정윤](https://github.com/cjy00n)  | 프론트엔드 개발|
| [송민지](https://github.com/mj-song00) | 백엔드 개발  |
| 박에영| 기획  |
| 김세진| 디자인       |

## 주요 기능 
- <b>카카오 로그인/회원가입</b>
  - 번거로운 회원가입 절차 없이, 간단하게 기존 카카오 계정으로 로그인/회원가입을 합니다.
  - 로그인 시 엑세스 토큰과 리프레시 토큰이 로컬스토리지에 저장됩니다.
  - 엑세스 토큰 만료 시, 리프레시 토큰으로 엑세스 토큰을 리프레시합니다.
  - 리프레시 토큰의 만료 기간은 7일이며, 리프레시 토큰이 만료되면 재로그인을 요청합니다.
  - 새로 가입한 유저일 경우, 성별, 생년, 닉네임을 입력받습니다.
- <b>AI 그림일기 생성</b>
  - 일기의 내용을 입력하면, 내용에 맞는 그림을 AI가 그려주어 그림일기를 완성합니다.
  - 하루에 하나의 일기만 작성이 가능하며, 최근 7일 이내의 일기를 작성할 수 있습니다.
  - 일기의 제목과 내용을 입력하고, 오늘의 기분과 날씨를 선택할 수 있습니다.
  - 나만보기를 선택할 경우, 다른 사람에게 일기가 노출되지 않으며, 작성자만 일기를 열람할 수 있습니다. 
  - 완성된 그림이 마음에 들지 않을 경우, 그림을 다시 요청할 수 있습니다. 
- <b>피드 탐색</b>
  - 다른 사람들의 일기를 구경할 수 있습니다. 
- <b>일기 상세</b>
  - 작성된 일기의 완성본을 확인할 수 있습니다.
  - 내가 작성한 일기일 경우, 공유하기(카카오톡, 링크복사), 일기 수정, 일기 삭제가 가능합니다.
  - 다른 사람이 작성한 일기일 경우, 공유하기(카카오톡, 링크복사), 북마크 저장, 반응 남기기가 가능합니다. 
- <b>캘린더</b>
  - 내가 작성한 날을 한눈에 알아볼 수 있는 캘린더를 제공합니다.
  - 날짜를 작성한 날이면 해당 날짜의 타일이 주황색으로 칠해지며, 해당 날짜의 기분을 미리 볼 수 있습니다.
  - 캘린더에 선택된 날짜에 일기를 작성했을 경우, 작성된 일기의 상세페이지로 이동할 수 있습니다.
  - 캘린더에 선택된 날짜에 일기를 작성하지 않은 경우, 해당 날짜에 일기를 작성하는 페이지로 이동할 수 있습니다. 
- <b>내 프로필</b>
  - 내가 쓴 일기를 한 눈에 확인할 수 있습니다.
  - 다른 사람의 일기 중 북마크에 저장한 일기를 확인할 수 있습니다.
  - 사용자 프로필 사진을 변경할 수 있으며, 1MB 이하의 이미지만 등록 가능합니다.
  - 사용자 닉네임을 수정할 수 있으며, 2자 이상이어야 하며, 중복이 불가하고, 한글/영어/숫자/일부 특수기호만 포함 가능합니다. 

 
