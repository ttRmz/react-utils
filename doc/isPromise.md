# isPromise

> Test whether an object looks like a promise or not

## Usage

```jsx
import { isPromise } from '@ttrmz/react-utils'

isPromise(Promise.resolve()) // true
isPromise({then:function () {...}}) // true
isPromise(null) // false
isPromise({}) // false
isPromise({then: true}) // false
```
