# 布局规范

- 基础文件会使用 _ 开头 ，如 _color.scss , _animate.scss, 导入入时不需要加上 _
- 宅印的主要业务部分采用固定宽度并居中的布局，宽度固定位为1080px，暂不实现响应式布局。
- 关于颜色，我们做了一个公共的 _color.scss ，大家请尽量使用里面的颜色
- 可以看 _example-style.scss 了解基本书写格式
- 项目默认只引入 common.scss , 在写元素是可以直接调用。其他布局写好后，只要在组件开头引入即可