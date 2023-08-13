   [참고](https://contents.premium.naver.com/codetree/funcoding/contents/220608194847140ab, "NodePro")

    npm init          // package.json 생성

    npm help
    npn 명령어 help
    npm install help

    npm install       // npm 모듈 로컬 설치
    npm i

    npm uninstall     // npm 모듈 삭제
    moduleName

    npm update        // npm 모듈 업데이트

    npm dedupe        // 중복된 모듈 정리

    npm oudated       // 오래된 패키지의 존재 유무를 알려줌

    npm ls            // 패키지를 조회

    npm ll            // 패키지의 더 자세한 정보를 알려줌

    npm cache         // npm 내의 cache 목록 확인

    npm cache clean --force   // 캐시 삭제

    npm rebuild       // npm 재설치

    npm -v            // 버전 확인
    node -v
    npm -version

    npm install rimraf        // rimraf설치

    rimarf node_modules       // node_modules 폴더 삭제

    npm prune         // package.json 내에 정의 되지 않은 패키지 삭제

    npm start         // package.json 의 scripts 에 있는 start 명령어 실행

    npm stop          // 실행중인 npm 을 중지

    npm restart       // npm 재실행

    npm run           // 그 이외의 scripts 실행

    npm config        // npm 의 설정을 조작
  
<hr/>

## 매개변수
+ req : Request 로 클라이언트 요청 정보를 담고 있음
+ res : Response 로 클라이언트에게 응답하기 위한 정보를 담고 있음
+ nest : 다음 미들웨어 함수를 가리키는 Object

## 응답매서드
+ res.download() : 파일을 다운로드하도록 프롬프트
+ res.end() : 응답 프로세스를 종료한다.
+ res.json() : JSON 응답을 전송한다.
+ res.jsonp() : JSONP 지원을 통해 JSON 응답을 전송한다.
+ res.redirect() : 요청의 경로를 재지정해 준다.
+ res.render() : 뷰(view) 템플릿을 랜더링 해준다.

<hr/>

# 1
## 2
### 3
#### 4
##### 5
###### 6

> a
> > b
> > > c
> > > > d
> > > > > e

1. 1st
2. 2nd
3. 3rd

* aa
  * bb
    * cc
+ aa
  + bb
    + cc
- aa
  - bb
    - cc


    this is a code block.

<pre><code>This is a code block.</code></pre>
```java
public class TestApplication{
    public static void main(String[] args){
        System.out.println("Hello");
    }    
}
```

<hr/>

------------------------------
* * *
*********
- - -


[Title](link) http://excample.com/

[Google](https://google.com, "google link")

*single asterisks*

__single underscores__

**double asterisks**

__double underscores__

~~canceline~~

![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Opional title")

가나다

마바사