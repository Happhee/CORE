# 🖥 CORE
> Coding Online Realtime Education의 약자로 
원활한 피드백 시스템을 제공하는 코딩 교육 플랫폼이다.

# 🖥 프로젝트 개요
> 본격적인 4차 산업혁명과 코로나로 인한 비대면의 비율이 높아지는 현재 CS(computer science) 분야에 많은 사람들이 상당한 관심을 가지고 있다. 
하지만 많은 사람들의 상당한 관심에도 불구하고 시도해보고 싶지만 첫 발걸음이 두려워 혹은 어려워서 적지 않은 사람들이 시도하지 못하는 사람들이 많다는 것이 문제 상황이다.
따라서 코딩 교육에 있어서 더 많은 접근성을 높이기 위해 코드 에디터와 OJ 시스템을 혼합한 새로운 코딩 교육 프로그램을 만들고자 하였다.
이미 완료된 환경설정으로 학생들의 어려움을 완화시켜주고 그만큼 높아진 접근성을 통해 선생님에게 더 많은 학생들을 가르칠 수 있는 교육툴을 통해, 
많은 사람들이 코딩이 무엇인가를 깨달을 수 있기를 바라며 ‘CORE’라는 프로젝트를 진행하였다.

# 📍 개발 환경 구성도
![image](https://user-images.githubusercontent.com/79238676/146731461-039a5aec-86dd-46b9-9f65-46e29fbef057.png)

### ✅ 공통 사항
- 개발 툴: Visual Studio Code, Git
- 빌드, 배포 툴 및 서비스: Paas-ta, AWS EC2
 
### ✅  서버 환경
- OS: Windows 10, MAC OS, LINUX
- DBMS: MongoDB
- 개발 플랫폼: Node.js
- 라이브러리 및 프레임워크: Express.js
 
### ✅ 클라이언트 환경
- 라이브러리 : React.js
- 개발 언어: Javascript


# 📍 선생님 기능 
- 1)간편한 학생 관리 및 카카오 링크를 통한 학생 초대 기능
- 2)한번의 문제 등록 후 다양한 클래스에 문제 등록 기능
- 3)간편한 질의응답 및 피드백 등록 기능



# 🖥 선생님 UI
![이미지-10](https://user-images.githubusercontent.com/79238676/146730329-a3513260-00ea-4004-988a-503d345c429c.jpg)

회원가입 -> ID, PW, 이름, 전화번호, 소속, 선생님/학생 으로 진행
선생님 로그인 -> 강의실 추가 / Student, WorkBook, FeedBack / WorkBank 카테고리로 분류됨

### Student
> 학생 목록 조회 및 초대기능

![이미지-11](https://user-images.githubusercontent.com/79238676/146730848-723bc525-2c75-4bab-b402-cc34e021e427.jpg)

### WorkBook
> 해당 강의실 단원 및 단원별 상세 문항 조회/추가 

![이미지-12](https://user-images.githubusercontent.com/79238676/146730970-784967f3-ff83-4fad-bb8a-50521a60c689.jpg)

### FeedBack
> 학생별 제출 문항 확인 

### WorkBank
> 모든 강의실에 등록된 문항들 조회 

# 📍  학생 기능 
- 1)즉각적으로 결과 확인이 가능한 컴파일러 기능
- 2)간단하고 빠르게 남길 수 있는 질의응답 기능
- 3)받은 피드백을 한눈에 확인 가능

# 🖥 학생 UI
![이미지-13](https://user-images.githubusercontent.com/79238676/146731129-b38a1589-3135-4f13-9b4a-5e7208ec010a.jpg)

학생 로그인 -> 강의실 조회 / WorkBook / FeedBank 카테고리로 분류
### WorkBook
> 선택 강의실 단원 / 단원별 상세 문항 조회 및 코드 제출 


