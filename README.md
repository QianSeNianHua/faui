# faui
物料库

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### 格式化
需要`VSCode`安装插件`Prettier-Code formatter`，`Vetur`。

### 组件书写风格
请参照[vue风格指南](https://v3.cn.vuejs.org/style-guide/)。

### svg组件
svg文件存放于`/src/assets/svg`目录下。

* 使用：
```html
<!-- /src/assets/svg/time.svg -->
<template>
  <svg-icon use="time" color="#ccc" :size="32" />
</template>

<!-- /src/assets/svg/time/time-icon.svg -->
<template>
  <svg-icon use="time-time-icon" color="#ccc" :size="32" />
</template>
```
