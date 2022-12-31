# Typescript: The Complete Developer's Guide

## MAPS

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
