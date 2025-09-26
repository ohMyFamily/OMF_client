# 오마이패밀리(OhMyFamily) - 가족 소통 퀴즈 웹 서비스 👨‍👩‍👧‍👦

## 📝 프로젝트 소개
오마이패밀리(OhMyFamily)는 가족 간의 소통과 이해를 증진시키기 위한 웹 서비스입니다.  
자식이 부모님에 대한 문제를 풀고, 카카오톡 또는 링크 공유를 통해 부모님께 문제지를 전달하면  
부모님이 문제를 채점하고 다시 자식에게 답안을 전달하는 흐름으로 진행됩니다.  

**🔗 배포 링크**
*   **웹사이트**: [https://www.oh-my-family.com/](https://www.oh-my-family.com/)


<br />

## 👥 팀원 구성
### Frontend
| 이다은 | 권낙현 |
|--------|--------|
| 팀원 | 팀장 |

<br />


## 💻 기술 스택

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/React--Query-FF4154?logo=reactquery&logoColor=white&style=flat-square" />
</p>

<br />


## 🚀 주요 기능

1. 부모님에 대한 퀴즈 풀기  
2. 답안 공유 기능 (카카오톡/링크)  
3. 답안 채점 기능  
4. 채점 결과 확인 기능  
5. 제3자 대상 퀴즈 옵션 제공  


<br />


## 🎬 기능 시연
<table style="border-collapse:collapse; text-align:center;">
  <tr style="background:#fff !important;">
    <td style="padding:15px; background:#fff; text-align:center;">
      <img src="https://github.com/user-attachments/assets/fad127d6-d3f1-4b6d-a66c-c3d397d41614" width="200" style="border-radius:8px;"/>
    </td>
    <td style="padding:15px; background:#fff; text-align:center;">
      <img src="https://github.com/user-attachments/assets/e5a63999-a314-42b4-9934-8e67dd839862" width="200" style="border-radius:8px;"/>
    </td>
    <td style="padding:15px; background:#fff; text-align:center;">
      <img src="https://github.com/user-attachments/assets/e585a06c-76ed-4d63-a994-6dcccd215b93" width="200" style="border-radius:8px;"/>
    </td>
  </tr>
  <!-- 제목 행 -->
  <tr style="background:#f0f4f8;">
    <td style="padding:12px; font-size:18px; font-weight:bold; color:#2c3e50;">1. 테스트하기</td>
    <td style="padding:12px; font-size:18px; font-weight:bold; color:#2c3e50;">2. 채점하기</td>
    <td style="padding:12px; font-size:18px; font-weight:bold; color:#2c3e50;">3. 채점 결과 확인하기</td>
  </tr>
  <!-- 설명 행 -->
  <tr style="background:#fff !important;">
    <td style="padding:12px; font-size:14px; color:#555; line-height:1.5;">
      부모님에 대한 퀴즈를 풀고 <br />카카오톡이나 링크를 공유해서<br /> 채점 요청을 합니다.
    </td>
    <td style="padding:12px; font-size:14px; color:#555; line-height:1.5;">
      부모님이 문제지를 받아 <br />직접 채점합니다.
    </td>
    <td style="padding:12px; font-size:14px; color:#555; line-height:1.5;">
      채점된 결과를 확인합니다.
    </td>
  </tr>
</table>

<br />

## 📂 프로젝트 구조
```txt
📁 public
├── 📁 fonts # 프로젝트에서 사용하는 폰트 파일
├── 📁 image # 이미지 파일 (png, jpg 등)
└── 📁 svg # 벡터 이미지 (아이콘 등)

📁 src
├── 📄 App.tsx # 루트 컴포넌트
├── 📄 main.tsx # 진입 파일 (ReactDOM 렌더링)
├── 📁 components # 공통 및 도메인별 컴포넌트
│ ├── 📁 common # 공용 UI 컴포넌트 (Button, Modal 등)
│ └── 📁 domain # 도메인별 UI 컴포넌트
├── 📁 container # 주요 컨테이너 컴포넌트 (상태 관리 + UI 조합)
├── 📁 pages # 라우팅되는 페이지 단위 컴포넌트
├── 📁 constants # 상수 값 정의
│ ├── 📄 business.constants.tsx # 서비스 비즈니스 관련 상수
│ └── 📄 develop.constants.tsx # 개발 환경 관련 상수
├── 📁 apis # API 호출 관련 로직
│ └── 📁 api # axios 등 API 클라이언트 설정
├── 📁 utils # 유틸리티 함수 모음
├── 📁 hooks # 커스텀 훅
├── 📄 index.css # 전역 스타일
├── 📄 env.local # 로컬 환경 변수
└── 📄 env.template # 환경 변수 템플릿 파일
```

<br />

## ⚙️ 설치 및 실행 방법 
### 1. 저장소 클론
```bash
git clone https://github.com/ohMyFamily/OMF_client.git
```

### 2. 의존성 패키지 설치
```bash
yarn install
```

### 3. 환경 변수 설정
```bash
# .env 파일에 필요한 환경 변수 입력
```

### 4. 개발 서버 실행
```bash
yarn run dev
```

