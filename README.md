# Bixby Calculator Capsule
간단한 Bixby 사칙연산 캡슐입니다.

[bixbydevelopers 참고](https://github.com/bixbydevelopers/capsule-sample-arithmetic-KR) 

<br>

### Bixby enum / vocabulary

 `enum` 열거타입 자료형 선언

```
enum (Operator) {
  description (연산자로 들어올 수 있는 모든 경우의 문자열 자료형)
  symbol (plus)
  symbol (subtract)
  symbol (multiplication)
  symbol (division)
}
```

 `vocabulary ` 를 활용한 동의어 처리

```
vocab(Operator){
  "plus"{
    "더해줘"
    "더하기"
    "플러스"
    "합"
  }
  "subtract"{
    "빼줘"
    "빼기"
  }
  "multiplication"{
    "곱하기"
    "곱해줘"
  }
  "division"{
    "나누기"
    "나누어줘"
    "나눠줘"
    "나눈"
  }
}
```



### Training 

```
[트레이닝 발화] 1 더하기 2를 알려줘
```
 `vocabulary ` 를 통한 동의어 처리가 이뤄지고 나면 아래와 같은 발화가 가능하다.

```
[동의어처리] 1 플러스 2를 알려줘
```



