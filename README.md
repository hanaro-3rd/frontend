
# 키로그 KeyLog<img src="https://github.com/hanaro-3rd/frontend/assets/76608338/ce32212b-27ea-47fe-b9db-9ce186761605" align=left width=100>

> 은행 기반 여행 모바일 어플리케이션 • <b>프론트엔드</b> repository

<br/><br/>

## 1. 서비스 소개

<img width="100%" alt="readme" src="https://github.com/hanaro-3rd/frontend/assets/76608338/efd16bc9-684d-4ae8-b04b-8b1ab3287d12">

- motif <b>하나카드 트래블로그</b> 서비스
  <br/>
> 카드 결제 내역을 여행 기록으로 보여주고 여행 관광지에 있는 포인트를 줍는 등 <br/> 여행 중 다양한 이벤트와 여행 기록 확인 가능


<b>안드로이드</b>에서 실행할 수 있는 앱으로 구현

개발 기간 : 2023.07 ~ 2023.08

<br>

<br/><br/>

## 2. 사용 스택

<div align="left">
<div>
<img src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Recoil-121212?style=flat&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Android Studio-3DDC84?style=flat&logo=Android Studio&logoColor=white" />
</div>
</div>

<br/>

## 3. 작동방식 및 아키텍처 구조
- 작동방식
![작동방식](https://github.com/hanaro-3rd/frontend/assets/76608338/880a77f6-8be8-433a-b949-acf92262a9c4)

<br/>

- 아키텍처 구조
![아키텍처 구조](https://github.com/hanaro-3rd/frontend/assets/76608338/3febd58f-22b2-46a4-9724-337ea3be7401)

<br/>

## 4. 페이지 뷰 및 구현 기능

- [Figma 링크](https://www.figma.com/file/tedyiFzoNtrIWbhn2lxi3s/keylog?type=design&node-id=0-1&mode=design&t=1rNfoIukcXKQhOVu-0)
  > 언제 어디서나 앱을 통해 각 나라의 화폐로 환전하여 바로 카드를 사용할 수 있고, 여행 계획을 세울 수 있으며 결제 내역을 한눈에 볼 수 있음

  <br/>

<details>
<summary><b>회원가입 및 휴대폰 인증 페이지</b></summary>
  
![image](https://github.com/hanaro-3rd/frontend/assets/76608338/ec0445d1-5fc1-4d88-9598-04a1a860ff33)
![image](https://github.com/hanaro-3rd/frontend/assets/76608338/dc54aa73-3b77-4808-a717-4982efeb2f04)

- 이름, 주민번호, 휴대폰번호 입력을 통해 회원가입
  <br/> 
- 휴대폰번호 본인 인증을 통해 회원가입 완료
</details>

<details>
<summary><b>비밀번호 설정 페이지</b></summary>

![image](https://github.com/hanaro-3rd/frontend/assets/79887655/4aa4fdd6-30ae-4957-8531-eb0a0e71649b)
![image](https://github.com/hanaro-3rd/frontend/assets/79887655/e9904248-03ba-4ab2-a304-82f414d770d6)

- 회원가입 후 비밀번호 6자리 설정, 재확인
- 패턴도 등록 가능(선택사항)
</details>

<details>
<summary><b>메인화면</b></summary>

![image](https://github.com/hanaro-3rd/frontend/assets/79887655/fcc9a2c1-f89a-4da7-bd95-2b957b357fc4)

- 메인 화면에서 키머니 환전, 게좌 연결, 키머니 줍기, 여행 계획하기, 키머니 확인 페이지로 이동
- 당일 환율 체크 가능
  
</details>

<details>
<summary><b>결제 페이지</b></summary>

![image](https://github.com/hanaro-3rd/frontend/assets/79887655/388a93ee-e465-41b5-afbf-981552d017da)

- 시연을 위한 결제 페이지 구현
- 실제 앱 구동 시에는 카드 결제 내역을 자동으로 받아와 카테고리별로 저장
  
</details>

<details>
<summary><b>계좌 연결 페이지</b></summary>

![image](https://github.com/hanaro-3rd/frontend/assets/79887655/7a662b09-ec59-4d20-a882-d726af4f86ea)

- 오픈뱅킹에서 계좌를 연결하듯이 외부 계좌 연결
- 해당 계좌에 맞는 비밀번호 입력 후 연결

</details>

<details>
<summary><b>키머니 환전 페이지</b></summary>
  
![image](https://github.com/hanaro-3rd/frontend/assets/79887655/61ef16fe-f0e1-4b34-836d-607ee3a0f833)


- 연결한 원화 계좌에서 원하는 외화로 환전
- 실시간 환율 API를 받아와 그에 맞는 환율로 환전됨

- 외화 -> 원화로 환전도 가능
  
</details>

<details>
<summary><b>여행 계획 정보 작성 및 경비 계획 페이지</b></summary>
  
![image](https://github.com/hanaro-3rd/frontend/assets/79887655/516b1477-5293-41f4-be64-ae2a13ec5591)
![image](https://github.com/hanaro-3rd/frontend/assets/79887655/a5898607-b66c-42f3-a9f6-060de102ba4f)
<img src="https://github.com/hanaro-3rd/frontend/assets/79887655/3d3cbdcf-7179-4773-9965-49d8b0841ea4" width="25%" height="25%">

- 여행할 날짜, 여행지, 이름을 설정
- 각 카테고리별 경비 계획 설정
- 카드로 결제하면 경비에서 쓴 가격이 차감됨

</details>

<details>
<summary><b>키머니 줍기 페이지</b></summary>

![image](https://github.com/hanaro-3rd/frontend/assets/79887655/0f7af147-b872-42b1-9e93-b7f42b7211cc)

- 여행 시 본인 위치에서 100m 이내인 마커를 주울 수 있음
- 주운 마커는 각 화폐 단위 키머니로 합산됨

</details>

<details>
<summary><b>키머니 확인 페이지</b></summary>
  
![image](https://github.com/hanaro-3rd/frontend/assets/79887655/5a2a74ef-604c-46bd-85d7-11bde44def4e)

- 각 화폐 단위별 키머니 확인
- 사용 내역을 확인할 수 있고, 메모 작성 가능
  
</details>
<br/>


## 5. 강점
1.  react query를 사용하여 간단하고 직관적인 API 작성
2.  recoil의 'atom', 'selector'를 활용한 상태 관리
3.  다중 API 일괄 처리
4.  환전 기능 Debounce


<br/>

## 6. 협업 tool

| Notion | Figma | Github |
|:------------------------------:|:---------------------------------:|:----------------------------------:|
| ![notion](https://github.com/hana-five-front/hana-five/assets/79887655/f13c2115-1b75-44e1-b57a-c7725af1c52c) | ![figma](https://github.com/hana-five-front/hana-five/assets/79887655/ee2764d2-75d0-4190-b944-7fca83668678) | <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100" height="100"/> |

<br>

## 7. 팀원
<table>
    <tr align="center">
        <td><B>Leader • Front-end<B></td>
        <td><B>Front-end<B></td>
        <td><B>Front-end<B></td>
    </tr>
    <tr align="center">
        <td><B>이수창<B></td>
        <td><B>서예진<B></td>
        <td><B>이현주<B></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/eternalclash.png?size=100">
            <br>
            <a href="https://github.com/eternalclash"><I>eternalclash</I></a>
        </td>
        <td>
            <img src="https://github.com/Jordizzin.png?size=100">
            <br>
            <a href="https://github.com/Jordizzin"><I>Jordizzin</I></a>
        </td>
        <td>
            <img src="https://github.com/hhyunjooo.png?size=100" width="100">
            <br>
            <a href="https://github.com/hhyunjooo"><I>hhyunjooo</I></a>
        </td>
    </tr>
</table>
