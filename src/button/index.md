---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 1
  path: /components/common
---

## Button 按钮

按钮用于开始一个即时操作

### 代码演示:

```tsx
/**
 * title: 按钮类型✨
 * description: 按钮主要有四种类型：主按钮、次按钮、虚拟按钮、文本按钮。可以使用type属性进行控制
 */

import React from 'react';
import { Button } from 'react_components';
export default () => (
  <div>
    <Button
      type="primary"
      style={{ marginRight: '10px' }}
      onClick={() => {
        console.log(11);
      }}
    >
      Primary Button
    </Button>
    <Button
      style={{ marginRight: '10px' }}
      onClick={() => {
        console.log(11);
      }}
    >
      Default Button{' '}
    </Button>
    <Button type="dashed" style={{ marginRight: '10px' }}>
      Dashed Button
    </Button>
    <Button type="text" style={{ marginRight: '10px' }}>
      Text Button
    </Button>
  </div>
);
```

```tsx
/**
 * title: 按钮尺寸✨
 * description: 按钮主要有三种尺寸：大、中、小。可以使用size属性进行控制
 */

import React from 'react';
import { Button } from 'react_components';
export default () => (
  <div>
    <Button type="primary" style={{ marginRight: '10px' }} size="large">
      Primary
    </Button>
    <Button style={{ marginRight: '10px' }}>Default</Button>
    <Button type="dashed" style={{ marginRight: '10px' }} size="small">
      Dashed
    </Button>
  </div>
);
```

```tsx
/**
 * title: 加载中状态✨
 * description: 添加loading 属性可以让按钮处于加载中状态
 */

import React, { useState } from 'react';
import { Button } from 'react_components';
const [loading, setLoading] = useState<boolean>(false);

const enterLoading = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
};

export default () => (
  <Button loading={loading} onClick={enterLoading} type="primary">
    {' '}
    Loading{' '}
  </Button>
);
```

### API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| :-: | :-: | :-: | :-: | :-: |
| size | 设置按钮大小 | `large、middle 、 small` | middle |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary 、 dashed 、 text 、default` | default |  |
| onClick | 点击按钮时的回调 | 、 | - |  |
| loading | 设置按钮载入状态 | boolean | false |  |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
