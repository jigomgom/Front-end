# 🐳 밥먹언?

# 🍇 프로젝트 목표

---

<aside>
💡 제주도 맛집 리스트를 정리하며 Back-end와 Front-ene간의 소통을 중요시 하였습니다.

</aside>

지난 주차 프로젝트를 진행하며 쌓아왔던 기술들을 적용해보기 위해 프로젝트를 구성하였습니다.

회원 가입 및 로그인, CRUD 의 기본 기능 구현에 충실하며, 진행 상황에 따라 기능들을 구현하였습니다.

# 🍉 밥먹언? 팀 소개

---

| 주특기 | 팀원 | 연락처 | Email |
| --- | --- | --- | --- |
| React | 권지은님 | 01053071417 | stacykwon86@gmail.com |
| Spring | 김이안님 | 01024971512 | eank0108@gmail.com |
| Spring | 박민수님 | 01096000151 | bbodd2013@naver.com |
| Spring | 정현욱님 | 01094759512 | jeonghyeonuk98@gamil.com |
| React | 한지용님 | 01057385019 | hjy583@naver.com |

# 🥭 BE, FB Git 주소

---

- [Back-end Git](https://github.com/jigomgom/Back-end.git) 으로 바로 가기
- [Front-end Git](https://github.com/jigomgom/Front-end.git) 으로 바로 가기

# 🍊 밥먹언? 주요 기능

---

- **기능** **1: CRUD**
    - 로그인, 로그아웃 상태를 구별하여 Post, Edit, Delete, Like 접근 권한 설정
    - Redux toolkit으로 전역상태관리
    - Axios로 서버와 API 통신
    - Header에 Swiper를 사용하여 Carousel 구현
    
- **기능** **2: 로그인**
    - 로그인, 로그아웃 상태를 구별하여 Post, Edit, Delete, Like 접근 권한 설정
    
- **기능** **3: 회원 가입**
    - 아이디 중복 확인
    - 비밀번호 중복 확인
    - 유저 아이콘 설정

- **기능** **4:  카카오 지도 표시**
    - 상세 페이지에 카카오 지도 API를 활용하여 지도 위에 위치 표시
    
       
    
- **기능** **5: 이미지 여러 장 올리기**
    - S3 bucket에서 이미지 관리
    - 사진 여러 장 한번에 업로드
    
- **기능 6: 좋아요 기능**
    - 좋아요 버튼 클릭 시, 좋아요 수 카운팅
    - 로그아웃 시, 좋아요 버튼 비활성화
    - 로그인하면 내가 좋아요 누른 피드에 좋아요 표시
    
- **기능** **7:  무한스크롤 기능**
    - React intersection observer로 무한스크롤 구현

- **기능 8:  Carousel로 이미지 오토 디스플레이**

- **기능 8:  별점 표시 기능**

# 🥭사용 기술

---

- Back-end
    - 
- Front-end
    - JavaScript
    - JSX
    - React
    - react-redux
    - react-toolkit
    - aws-s3
    - react-router-dom
    - react-simple-star-rating
    - styled-component
    - swiper
    - react-intersection-observer
    - axios

# 🍅 주간 스케쥴

---

09:00 ~ 10:00 아침 팀 회의

11:00 ~ 12:00 CS 스터디

12:00 ~ 13:00 점심식사

17:00 ~ 18:00 오후 팀 회의

- 06월 10일 - 금
    - 진행 상황 공유 : 20:00 ~
- 06/11 (토)
    - **공통**
        - 업무 공유
        - 이슈 공유
        - 주특기 별 기능 구현
- 06/13 (월)
    - **공통**
        - 업무 공유
        - 이슈 공유
        - 주특기 별 기능 구현
- 06/14 (화)
    - **공통**
        - 업무 공유
        - 이슈 공유
        - 주특기 별 기능 구현
- 06/15 (수)
    - **공통**
        - 업무 공유
        - 이슈 공유
        - 주특기 별 기능 구현
- 06/16 (목)
    - **공통**
        - 업무 공유
        - 이슈 공유
        - 주특기 별 기능 구현

# 🍒 와이어프래임

---

### Main view

- 로그인 Navbar 및 전체 Main view
- 포스트를 작성한 사용자만 수정 및 삭제 허용
- 로그인 시 포스트를 작성할 수 있도록 허용
    
    [](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45aa9a12-109c-46aa-bd62-07a4a4caf272/Main_view.png)
    

- 로그아웃 Navbaer

![Group 17.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/873cb8b7-33f4-4957-98ee-43f198c68f5f/Group_17.jpg)

### 회원가입

[](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/03a8d821-489e-405a-a382-91f78c8bf2ba/Sing_up_page.png)

### 로그인

[](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6fccec0-edd9-4f83-89a2-fc3dce58139f/Login_page.png)

### 맛집 게시글 작성하기

[](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23d0a804-2178-4054-85d0-085f82964da1/Upload_page.png)

### 맛집 게시글 수정하기
[](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/252fc8ff-e026-4d1d-9266-89c9b57e5340/Edit_page.png)

# 🍊 API

---

[최종 API](https://www.notion.so/a720cff38f7249d392bdf2c5dc957498)

# 🍎 팀 내 하고 싶은 말씀들

---

- 한 주간 잘 부탁드립니다.

# 🥭[구글 대시 보드](https://docs.google.com/spreadsheets/d/1OCmYlh12oT2aN8fBhAJzl1Qdd_kL_rN8Gcpu1skV7tE/edit#gid=933892082)로 바로 가기

---
