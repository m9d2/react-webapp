export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#bfbfbf',
    selectedColor: '#0060b7',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './static/home.png',
        selectedIconPath: './static/home-select.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './static/my.png',
        selectedIconPath: './static/my-select.png'
      },
    ]
  }
})
