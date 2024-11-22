
# [🧩Puzzle🧩] 실시간으로 폭발적인 기획을 돕는 아이디어 제공 플랫폼


![image](https://github.com/user-attachments/assets/d91fb3e5-275d-41db-8ae4-7b8e20380f88)


 - Puzzle github: [Team-SPREAD](https://github.com/Team-SPREAD)   
 - 배포 URL : [Puzzle](http://Puzzle.io)   

## 프로젝트 소개
- **Puzzle**은 에자일 방법론, 브레인 스토밍에 기반하고, 소프트웨어 설계 가이드라인을 제공하여 실시간으로 아이디어를 기획하고 협업할 수 있는 플랫폼 입니다.

 - 유저는 대시보드에서 팀을 만들고, 팀원을 초대하여 같이  퍼즐을 진행할 수 있습니다.

- 단계는 총 10단계로 구성되어 있으며, 아래의 순서대로 진행 됩니다.

1. 아이스브레이킹 : 팀원 간 친밀도를 높이는 단계

2. 비전찾기 : 프로젝트의 다짐과 방향성 설정

3. 토론하기 : 자유로운 아이디어 교환

4. 스프레드: 아이디어 확장 및 발전

5. 논의하기 : 구체적인 실현 방안 토론

6. 페르소나 : 목표 사용자 정의

7. 문제 해결 : 구체적인 솔루션 도출

8. 사용자 스토리 : 사용자 관점에서의 기능 정의

9. 메뉴 트리 : 서비스 구조 설계

10. 확인하기 : README.md 최종 검토 및 확인

- 프로젝트 내에서는 투표 버튼을 통해 단계를 넘어갈 수 있습니다.

- 프로젝트 내에서 참여자들의 커서, 텍스트 등이 실시간으로 공유되며 확인됩니다.

- 프로젝트 내에는 협업을 도와줄 수 있는 공유 타이머, 공유 음악, 그룹 챗 등 부가 기능이 있습니다.

## 팀원 구성

|FE | FE | 
| :---: | :---: | 
| 김태호 | 김대성 | |
|  <img width="130px" src="https://avatars.githubusercontent.com/u/126559845?v=4" /> |  <img width="130px" src="https://avatars.githubusercontent.com/u/131854855?v=4" /> |
| 한림대학교 | 한림대학교 | 
| 빅데이터전공 3학년 | 콘텐츠IT전공 4학년 | 
| [@low](https://github.com/ho8ae)|[@丸内大成](https://github.com/KimMaru10)|

 
##  1. 개발 환경

- front : Next.js 14(TypeScript), Liveblocks, Tailwind CSS , Zustand, Framer Motion
- 버전 및 이슈 관리 : Git & GitHub , GItHub Projects, GitHub Actions (CI/CD)
- 협업 도구 : Notion, Google Drive, Slack
- 서비스 배포 환경 : Vercel
- 디자인 : Figma, Icon8


## 2. 주요 개발 기술과 브랜치 전략

### Next 14
1. 배포와 호스팅의 편리성
  - Vercel과의 완벽한 호환성으로 배포가 매우 간편합니다
  - 별도 설정 없이도 HTTPS와 CDN이 자동 적용됩니다
  - CI/CD 파이프라인 구축이 자동화되어 있습니다


2. 서버 사이드 렌더링(SSR)의 강점
 - 초기 페이지 로딩이 빨라 사용자 경험이 향상됩니다
 - 검색 엔진 최적화(SEO)가 자연스럽게 이루어집니다
 - 서버에서 데이터를 미리 가져와 성능이 개선됩니다

3. App Router의 장점
  - 직관적인 레이아웃 시스템을 제공합니다
  - 로딩/에러 상태 관리가 매우 편리합니다
  - 서버/클라이언트 컴포넌트 구분이 명확합니다

서버 컴포넌트와 클라이언트 컴포넌트를 적절히 활용할 수 있다는 점이 큰 장점입니다. 또한 Livebloks와의 호환성이 우수하여 실시간 기능 구현이 원할합니다.

### Liveblocks
1. 실시간 협업 기능
  - Presence를 통한 실시간 사용자 상태 관리
```
// 예시: 실시간 커서 위치 공유
const { others } = useOthers();
const { cursor } = useMyPresence();
```
  - Storage를 통한 영구적 데이터 저장 및 동기화
   - Broadcast를 통한 즉각적인 메시지 전달

2. 충돌 해결 메커니즘
 - 자동 충돌 해결 알고리즘 제공
 - 동시 편집 시 데이터 일관성 유지
 - 오프라인 상태에서도 작업 가능한 로컬 스토리지 지원
3. 확장성
 - WebSocket 연결 자동 관리
 - 룸 기반 협업 시스템으로 확장 가능
 - 커스텀 권한 관리 시스템 구현 가능
### Zustand
1. 간편한 사용성
- Redux보다 설정이 단순합니다
- 적은 코드로 상태 관리가 가능합니다
- TypeScript 지원이 우수합니다
2. 성능 최적화
- 불필요한 리렌더링이 적습니다
- 번들 사이즈가 매우 작습니다 (2KB)
- 메모리 사용이 효율적입니다
3. 실시간 데이터 관리
- Liveblocks와의 연동이 용이합니다
- 비동기 상태 관리가 편리합니다
- 상태 변화 추적이 쉽습니다


## 3. 프로젝트 구조 및 아키텍쳐
![image](https://github.com/user-attachments/assets/f4ea89ce-228a-4cbb-a9e7-38eb8e8579c0)


## 4. 역할 분담 
### 김태호
- 

### 김대성
- 

## 5. 트러블 슈팅

## 6. 개발 기간 및 관리

2024.09.10 ~ 2024.11.27









