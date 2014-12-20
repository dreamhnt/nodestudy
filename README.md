##[행아웃연결](https://plus.google.com/hangouts/_/gyailwep27aemzxo7t44sulyzua)

#MEAN Stack Study
##Sprint-1) Full Stack 개발자 되기
  - MEAN 개념과 개요
    + AngularJS 사용법 [[1]](http://www.mcthe.com/xe/?mid=study&document_srl=19555&order_type=desc) [[2]](http://soomong.net/blog/2014/01/20/translation-ultimate-guide-to-learning-angularjs-in-one-day/) [[3]](http://blog.outsider.ne.kr/975)
    + AngularJS [스타일가이드](https://github.com/mgechev/angularjs-style-guide/blob/master/README-ko-kr.md) 
    + NodeJS + ExpressJS [사용법](http://pyrasis.com/nodejs/nodejs-HOWTO)
    + MongoDB + Redis(Advanced)
  - MEAN 이외에 알아야 할 것들
    + JavaScript
    + Bootstrap (or Zurb Foundation)
    + NodeJS Modules
    + MySQL

##Sprint-1) 개발 준비 단계
  - 로컬 개발 환경 만들기
    + [Docker](http://pyrasis.com/Docker/Docker-HOWTO) + Linux 환경 구성하기
    + 개발환경에 Node.js, MySQL 설치하기
    + Trello 에서 Scrum 개발하기
    + [행아웃](http://barugi.com/hangouts/)을 이용하여 회의하기
  - MEAN Stack 개발도구 개발환경에 설치하고 익히기
    + Yeoman 사용법 [[1]](http://blog.winterwolf.me/?p=132) [[2]](http://mobicon.tistory.com/402) : 클라이언트 라이브러리관리 및 배포 Grunt, Bower, Yo 설치하기
    + [Grunt 사용법](http://nuli.navercorp.com/sharing/blog/post/1132682)
    + NPM : 서버 라이브러리 관리
  - Git & GitHub 저장소 만들기
    + [Git 사용법](http://git-scm.com/book/ko/v1)
    + Git Branch 전략
    + [GitHub 사용방법](http://syaku.tistory.com/245)
  - 클라우드 환경에 배포하여 테스트 하기
    + Cloud Development(Nitrous.io) 를 통한 협업개발 및 테스트하기
    + Heroku같은 PaaS에 배포하여 테스트하기


##Sprint-1) MEANK Stack 개발 환경 구성하기
  - SRS 작성하기
    + Software Request Requirement란 무엇인가?
    + Trello 에 소프트웨어 요구사항 정의서 작성하기
    + Balsamiq 도구 사용하여 Wireframe & Mockup 그리기 화면 그리기
  - AngularJS Scaffolding 코드 사용하기
    + angular-generator 알아보기
    + angular 기본골격 만들기
    + NodeJS로 테스트 하기
  - MEAN Stack 테스트 전략
    + AngularJS에서의 테스트 방법 : Karma Framework
    + NodeJS에서의 테스트 방법 : Mocha 그외


##Sprint-2) 서비스 프로토타입 개발하기
  - 가장 중요한 화면 설계하기
    + 클라이언트 화면 Mockup 구체화 하기
    + NodeJs에서 처리 할 RESTful API 설계하기
    + MongoDB 에 저장 할 Document Schema 설계하기
  - MongoDB Store 개발 및 테스트
    + Dynamic Schema, Embedded vs Reference 에 대한 이해
    + Mongoose 기반으로 Schema 만들기
    + Test Framework 이용한 Model 단위 테스트하기
  - Node.js 기반 RESTful API 개발 및 테스트
    + RESTful API 코드 뼈대 만들기 in NodeJS
    + Test Framework 이용한 서비스 단위 테스트하기
    + RESTful Client 테스트 도구 또는 curl 로 호출 테스트하기
  - Angular.js 기반 화면 개발 및 테스트
    + AngularJS와 Bootstrap 이용하여 화면 구성하기
    + AngularJS 애플리케이션 구조 개발 및 RESTful API 서비스 개발
    + Test Framework 이용한 화면 단위 테스트하기
  - Heroku 같은 PaaS에 올려서 통합 테스트 하기


##Sprint-3) 서비스 개발 반복하기
  - 반복하기
    + sprint-01에서 반복하였던 과정을 지속하기
  - 메인 및 로그인 화면 만들기
    + Bootstrap의 다양한 도구 활용
    + OAuth 기능 로그인 하기
  - 채팅기능 만들기
    + 채팅 Mockup 만들기
    + NodeJS Socket.io API 구현
    + MongoDB 채팅 Schema 설계
    + AngularJS Socket.io 멀티 케스팅 구현
    + Bootstrap 통한 화면 구현 및 AngularJS 연동
 - Heroku 같은 PaaS에 올려서 프로토타입 테스트 하기


##Sprint-3) 서비스 런칭하기
  - 서비스 일일 빌드시스템 구성하기
    + Travis (또는 Jenkins)기반 자동 배포 기능 만들기
    + Travis 에서 빌드된 것을 클라우드시스템(PaaS) 자동 배포하기
  - 런칭 페이지 만들기
    + GitHub Pages를 이용한 런칭 만드는 방법
    + Bootstrap을 이용하여 런칭 페이지만들어 GitHub에 반영하기
  - 모니터링 하기
    + 클라이언트 AngularJS Log 모니터링 하기
    + NodeJS Log 모니터링 하기
    + MEAN Stack 운영 및 장애 모니터링 전략


###Next Project) MEAN Stack Advanced
  - 채팅기능 고도화하기
    + SNS 서비스 아키텍쳐들 알아보기
    + 대용량 데이터를 처리를 위한 아키텍쳐 설계하기
  - NodeJS + Redis + MongoDB 연동하기
    + Redis 알아보기
    + NodeJS-Redis 연동하기
  - 정제된 데이터 RDBMS와 연동하기
    + NodeJS - MySQL 연동하기
    + MongoDB의 MapReduce를 이용하여 데이터 마이닝하기
    + NodeJS에서 MongoDB 마이닝 데이터 MySQL에 넣기
  - SNS 서비스 운영 고도화
    + NodeJS와 Nginx 연동하기
    + NodeJS를 Proxy 서버로 만들어 Clustering 하기
    + MongoDB Sharding 구조 만들기
    + Redis Master/Slave구조 만들기
  - 유지보수 전략
    + 테스트 환경과 프로덕션 환경의 재구성
    + NodeJS Scale-out 확장 전략
    + MongoDB Sharding 및 Data Backup 전략
    + Redis Scale-out 전략
  - 빅데이터의 활용고
    + 개인화를 위한 데이터 활용 방안
    + MongoDB Integration Framework을 이용한 MapReducing

참고:(http://mobicon.tistory.com/388)
