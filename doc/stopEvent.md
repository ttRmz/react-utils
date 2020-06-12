# stopEvent

## Usage

```jsx
import React from 'react'

import { stopEvent } from '@ttrmz/react-utils'

const Example = () => {
  const handleClick = event => {
      stopEvent(event)

      ...
  }

  return <button onClick={handleClick} />
}
```
