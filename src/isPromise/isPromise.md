# isPromise

> Test whether an object looks like a promise or not

```jsx
import { isPromise } from '@ttrmz/react-utils'
```

## Usage

```jsx
isPromise(Promise.resolve()) // true
isPromise({then:function () {...}}) // true
isPromise(null) // false
isPromise({}) // false
isPromise({then: true}) // false
```
