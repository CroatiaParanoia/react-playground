This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
启动web服务监听内存资源

### `yarn lint`
ts, tsx 风格检查

### `yarn test`
jest 单元测试

### `yarn build`
打包

### `yarn serve`
打包并开启web服务监听硬盘资源

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## dependencies
- antd - 蚂蚁金服UI框架
- typescript - js超集
- jest - 单元测试框架
- ramda - 函数式编程
- rxjs - 响应式编程
- mockjs - 数据模拟
- axios - 请求
- immer - 不可变数据结构
- react-router - 路由
- husky（git hooks: pre-commit） - commit 前对暂存区的代码风格检查，及 test