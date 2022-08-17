# 可视化项目-前端工程

*** 开发者需要在本地注入自己的标识,否则无法调试,详情参见 调试规范
## 依赖管理
考虑到npm yarn对于空包依赖的问题,项目依赖采用pnpm统一管理,通过pnpm-lock.yaml统一锁定版本

### 安装pnpm
```bash
npm install pnpm -g
```
### 切换源(提升下载效率)
```bash
pnpm config get registry // 查看源
pnpm config set registry http://registry.npm.taobao.org // 切换淘宝源
```
### 安装依赖
```bash
pnpm install
```

## 启动项目
```bash
pnpm run serve || pnpm run dev
```

## 开发管理
通过 husky + lint-staged + commitizen 进行提交前校验,保障提交代码的一致性

### 开发工具
开发工具统一采用 vscode, 安装插件 eslint + prettier + vetur 开启 "editor.formatOnSave": true 在保存时自动校验格式
eslint 规则为 .eslintrc

### 开发环境
node 版本为 v16.11.1
pnpm 版本为 v7.1.3

### 依赖
主体技术栈采用 Vue2 + vuex + vue-router + less + element + axios + echarts

### 运行环境
本项目运行环境兼容 chrome 与 edge 浏览器,不考虑兼容其它浏览器

### git 分支

统一采用 git 作为版本管理工具，提交规范 xxx.com, 分支意义与环境保持一直，开发者拥有dev分支推送权限，其余权限由 jenkens 接管。并由pm、测试、运维人员分权限进行控制

+ dev 开发环境
+ test 测试环境
+ uat uat环境
+ master 正式环境

### 提交代码
```bash
pnpm run cz
```

### 目录结构
+ docs 项目文档
+ node_modules 依赖
+ public 直接扔到服务器域名根目录上的资源
+ src 开发文件
    + apis 统一接口对接封装
        + xxxApi.js 以模块/页面为维度拆分,通过追加尾缀 Api 区分
    + assets 静态资源,图片什么的
        + *以模块/页面为维度拆分文件夹
    + components 通用组件,需要多个模块或者页面用到的放在这
        + xxxPubComponent.vue/xxxPubComponent 通过指定尾缀 PubComponent 命名区分
    + configs 配置项,作为工程级别全局配置使用
        + xxxConfig.js 以范围为维度拆分,通过追加尾缀 Config 区分
    + demos 作为通用组件的展示页面和文档使用
        + xxxDemo.vue 以组件为维度,页面内注明使用方式,入参出参,交互等信息
    + mixins 混入,全局或多组件引入共同逻辑,尽量不要使用,会造成维护理解困难
        + xxxMixin.js 以范围为维度拆分,通过追加尾缀 Mixin 区分
    + mocks mock 数据
        + xxxMock.js 以模块/页面为维度拆分,通过追加尾缀 Mock 区分
    + plugins 插件
        + xxxPlugin.js 以功能为维度拆分,通过追加尾缀 Plugin 区分
    + router 路由相关
        + routes 路由模块
          + xxxRouter.js 以模块/页面为维度拆分,通过追加尾缀 Router 区分
        + index.js 路由入口
    + store 数据仓库相关
        + modules 数据仓库模块
            + xxxModule.js 以模块/页面为维度拆分,通过追加尾缀 Module 区分
        + index.js 数据仓库入口
    + utils 工具类
       + xxxUtil.js 以功能为维度拆分, 要求是纯函数,通过追加尾缀 Util 区分
    + views 页面
    + app.vue 主页
    + main.js 工程入口
+ .eslintrc eslint 配置文件
+ .gitignore 要被 git 忽略的文件
+ .prettierignore 禁止被 prettier 格式化的文件,主要是 node_modules/打包后/md 这类文件
+ .prettierrc 格式配置文件
+ babel.config.js babel 的配置项
+ CHANGELOG.md 提交生成的日志,commit 自动生成
+ commitlint.config.js commitlint 的配置
+ package.json 工程配置文件
+ pmpm-lock.yaml pnpm 版本锁定文件
+ README.md 说明
+ vue.config.js vue 配置文件

## 规范
### git 规范
git 规范通过 commitizen 管理

### 样式规范
+ 通过 less 添加样式
+ 强制所有组件增加 scoped 作用域
+ 需要样式穿透的统一采用  /deep/ 进行样式穿透
+ 严禁没有 scoped 造成的全局污染
+ 多个属性换行展示,禁止压缩成一行,难以阅读
+ 全局 z 轴禁止超过 1000
+ 禁用顶级 * 选择器
+ 谨慎使用 !important
+ 谨慎使用标签选择器
+ 建议尽量使用缩写
+ 建议每个页面/组件需要有一个全局唯一的标识 id/class，属于它下面的样式都需要加上该唯一标识
+ 初始化通过引入 element-ui 已经进行过样式重置,如确实有需要增加额外全局样式,需要在 commit 信息中说明缘由
+ 建议书写顺序
    1. 位置属性 （position,top,left,z-index, display, float等）
    2. 大小（width,height,padding,margin等）
    3. 文字系列（font， line-height， letter-spacing， color， text-align等）
    4. 背景（background， border等）
    5. 其他（animation， transition等）
如上,如果产生问题追溯最早提交人员进行全项目修改

### js 规范
+ js 规范通过 prettier + eslint 管理
+ 尽量不要使用mixin!!!
+ 上下级通信尽量采用 props / emit
+ 超过一级视情况采用 emit props, vuex, eventbus,provide inject, localstorage,url query，global data
+ 尽量不要使用$parent $children, ref 传递数据
+ 由于不需要太过考虑浏览器兼容,尽量采用 ex-next 语法
+ 设计到算法层面,尽量预留函数,写好测试用例,方便后期统一优化

### 组件规范
+ props 必须定义指定类型与默认参数
+ img 标签尽量增加 alt 属性,防止图片出现异常无法加载的时候理解含义
+ img 标签外尽量增加包裹层,防止图片异常打乱布局
+ 组件多个属性尽量换行展示
+ 组件名尽量使用多个单词,避免与 html 元素冲突
+ v-for 必须设置 key 值,尽量不要使用索引,使用数据内的唯一值,Vue 底层做了diff优化
+ v-if 和 v-for 尽量不要一起使用
+ 尽量给组件设置 name,方便通过 devtools debug 的时候查找
+ 组件尽量遵循单一原则,不要耦合的太深,可以拆分的功能尽量拆分,给后续的需求变更和优化保留余地
+ 组件名称建议大写字母开头,并通过驼峰命名
+ 与父组件紧密耦合的子组件应该以父组件名作为前缀命名
+ 组件名称应该以高阶的 (通常是一般化描述的) 单词开头，并以描述性的修饰词结尾。
+ 组件模板中的表达式应该简单易懂,多个表达式或者复杂表达式建议通过 methods/computed 来处理
+ 计算属性建议拆分比较简单的逻辑,避免复杂的逻辑耦合到一起
+ 指令尽量使用缩写 v-bind : / v-on @ / v-slot #
+ 组件属性顺序推荐
    1. name
    2. components
    3. directives
    4. extends
    5. mixins
    6. provide/inject
    7. props
    8. emits
    9. expose
    10. data
    11. computed
    12. watch
    13. 生命周期
    14. methods
    15. template/render
+ 元素属性顺序
    1. props
        a. v-for
        b. is
        c. 显示隐藏相关 v-if v-show v-clock
        d. 唯一性 key id ref
    2. 事件
    3. 原生属性/事件
+ 组件属性顺序
    1. template
    2. script
    3. style

### 调试规范
以项目经历考虑到 debug 展示消息过于复杂的问题,统一封装了console.log方法,劫持方法第一个参数作为验证,使用者需要在localstorage 中注入 devUser 为自己的代表值,并在调用console.log的第一个参数传入方可使用,这样相互之间不会有影响
```javascript
console.log('xyz', this.data)
```

## 组件封装
### 1.大数据量图表组件
### 2.通用表格组件



firewall-cmd
