# Avater 组件(头像)

## 预览

![头像组件](/src/components/document/avaterPreview.png)

## 参数

| 参数  | 类型   | 是否必填 | 是否有默认值 | 参数意义               |
| ----- | ------ | -------- | ------------ | ---------------------- |
| url   | String | 必填     | 无默认值     | 头像地址               |
| width | Number | 非必填   | 150          | 设置头像宽度(宽高相等) |

## 启动测试

```bash
npm run test:Avater
```

# Icon 组件(图标)

## 预览

![icon组件](./iconPreview.png)
图标源来自于「阿里巴巴矢量库」

## 参数

| 参数 | 类型   | 是否必填 | 是否有默认值 | 参数意义                   |
| ---- | ------ | -------- | ------------ | -------------------------- |
| name | String | 必填     | 无默认值     | 头像别名(映射变量:nameMap) |

## 启动测试

```bash
npm run test:Icon
```

# Pager 组件(分页)

## 预览

![pager组件](./pagerPreview.png)

## 参数

| 参数          | 类型   | 是否必填 | 是否有默认值 | 参数意义       |
| ------------- | ------ | -------- | ------------ | -------------- |
| current       | Number | 必填     | 无默认值     | 当前所处页码   |
| total         | Number | 必填     | 无默认值     | 总信息量       |
| pageTotal     | Number | 非必填   | 有默认值:10  | 每页信息量     |
| visibleNumber | Number | 非必填   | 有默认值:5   | 一排可见页码数 |

## 抛出事件

| 事件名        | 含义                                                | 事件参数      | 参数类型 |
| ------------- | --------------------------------------------------- | ------------- | -------- |
| changeCurrent | 用户点击页码(页码非当前页码)时,通知父组件改变其数据 | currentNumber | Number   |
| changeJump    | 用户在页码框输入,点击跳转页码,通知父组件改变其数据  | jumpNumber    | Number   |

```bash
npm run test:Pager
```
