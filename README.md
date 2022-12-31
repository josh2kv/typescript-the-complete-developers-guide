# Typescript: The Complete Developer's Guide

## Maps

- `export default`를 사용하지 않고 `export`만 사용하는 것이 TS best practice
- 불러온 library도 필요한 method들만 노출시킬 수 있음

  ```ts
  export class CustomMap {
    private googleMap: google.maps.Map;
  }
  ```

- 인자를 interface로 받는 것이 더 확장성 좋음

  ```ts
    addMarker(mappable: User | Company): void {
      //~~~
    }
    🔽
    addMarker(mappable: Mappable): void {
      //~~~
    }
  ```

- TS가 type checking하는 위치를 정확하게 하기 위해 (유지보수를 위해) `implements`를 사용하자

  ```ts
  export class User implements Mappable {
    //~~~
  }
  ```

## Sort

- nodeJS에서 TS 개발환경 세팅하기

  ```json
  "scripts": {
      "start:build": "tsc -w",
      "start:run": "nodemon build/index.js",
      // npm.scripts에서 "start:"로 시작하는 script들을 모두 실행
      "start": "concurrently npm:start:*"
    },
  ```

- class member 초기화를 간단히 나타하기

  ```ts
  class Sorter {
    collection: number[];
    constructor(collection: number[]) {
      this.collection = collection;
    }
  }
  ⏸
  class Sorter {  
    constructor(public collection: number[]) {}
  }
  ```

- array의 length 세련되게 가져오기

  ```ts
    const { length } = this.collection;
  ```

- string을 number처럼 정렬할 수 없는 이유
  - string은 number처럼 `string[0] = 'a'`로 기존 char를 교체할 수 없음

    ```ts
      const numbers = [1,2,3]
      numbers[0] = 10
      console.log(numbers) // [10, 2, 3]

      const string = 'red'
      string[0] = 'l'
      console.log(string) // 'red'
    ```

  - character들은 character code순으로 정렬되므로 알파벳순으로 정렬 안됨

    ```ts
      "X" > "a" // false
      "X".charCodeAt(0) // 88
      "a".charCodeAt(0) // 97
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    ```

```ts
   constructor(public collection: number[] | string | LinkedList) {}

   sort(): void {   
    if(this.collection instanceof LinkedList) {
      // ~~~
    }

    if(this.collection instanceof Array) {
      if (this.collection[j] > this.collection[j + 1]) {
        const leftHand = this.collection[j];
        this.collection[j] = this.collection[j + 1];
        this.collection[j + 1] = leftHand;
      }
    }
    
    if(typeof this.collection === 'string') {
      // ~~~
    }
  }
```
