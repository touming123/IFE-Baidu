# 推箱子小游戏

# 技术栈
原生JS + webpack + ES6/7 + sass 

# 项目运行
```
npm install(较慢推荐改用cnpm或者yarn) 安装依赖
npm start 启动服务器


# 项目布局
```
|-- dist                                                        // 项目编译打包目录
|-- src                                                         // 项目源文件		
|           |-- common                                          // 公共库
|                       |-- js                                  // 公共js文件
|                                   |-- backChanged.js          // 箱子移入移出样式切换
|                                   |-- bindEvent.js            // 封装事件绑定
|                                   |-- checkCode.js            // 检测按键对象
|                                   |-- detectCollision.js      // 检测物体移动后的碰撞情况    
|                                   |-- drawObject.js           // 可移动对象渲染                      
|                                   |-- init.js                 // JS初始化文件
|                                   |-- isEmpty                 // 判断对象是否为空
|                                   |-- keyJuge.js              // 检测按键是否是对应按键
|                                   |-- level.js                // 关卡设计
|                                   |-- move.js                 // 移动物体
|                                   |-- render.js               // 初始化场景渲染
|                                   |-- rerender.js             // 更改场景渲染
|                                   |-- scence.js               // 场景渲染        
|                                   |-- update.js               // 触发事件后游戏的流程
|                       |-- sass                                // 公共样式文件
|                                   |-- index.scss              // 公共样式入口文件
|                                   |-- scence.scss             // 移动物体样式入口文件
|            |-- app.js                                         // 程序入口文件，加载各种公共组件
|-- static                                                      // 静态文件目录
|-- webpack.config.js                                           // webpack配置文件
|-- yarn.lock                                                   // yarn版本控制
|-- index.html                                                  // 入口html文件
|-- package.json                                                // 项目及工具的依赖配置文件
|-- README.md                                                   // 说明

```

