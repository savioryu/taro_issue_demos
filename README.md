# taro issue 说明

在 H5 中使用路由进入新页面，该页面使用 state 承载数据，在 render 中使用 state 的数据渲染自定义子组件（通过 connect 或者其他装饰器封装过），就会报以下错误：

```
Uncaught (in promise) Error: Could not find "store" in either the context or props of "Connect(WrapperComponent)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(WrapperComponent)".
    at invariant (invariant.js?92f6:40)
    at new Connect (index.js?ffcc:367)
    at mountComponent (index.js?1e21:1520)
    at ComponentWrapper.init (index.js?1e21:1870)
    at createElement (index.js?1e21:1384)
    at mountChild (index.js?1e21:1450)
    at patchArrayChildren (index.js?1e21:947)
    at patchChildren (index.js?1e21:969)
    at patch (index.js?1e21:912)
    at updateComponent (index.js?1e21:1647)
```

通过 redux 的 action 注入数据到 props 中，在 render 中使用 props 的数据渲染自定义子组件，就不会有问题
