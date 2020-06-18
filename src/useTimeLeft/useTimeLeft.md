# useTimeLeft

```jsx
import { useTimeLeft } from '@ttrmz/react-utils'
```

## Usage

```jsx
const Example = () => {
  const { days, hours, minutes, seconds } = useTimeLeft(
    new Date(+new Date() + 12096e5)
  )

  return (
    <div>
      <p>days left : {days}</p>
      <p>hours left : {hours}</p>
      <p>minutes left : {minutes}</p>
      <p>seconds left : {seconds}</p>
    </div>
  )
}
```

## Parameters

| Name    | Description | Type   |
| ------- | ----------- | ------ |
| date    | input date  | Date   |
| options |             | Object |

### Options object

| Key      | Description                                                                          | Type    |
| -------- | ------------------------------------------------------------------------------------ | ------- |
| delay    | refresh interval delay                                                               | Number  |
| relative | if true, days, hours, minutes and seconds values will be relative between each other | Boolean |

## Returned object

| Key     | Type   |
| ------- | ------ |
| days    | Number |
| hours   | Number |
| minutes | Number |
| seconds | Number |
