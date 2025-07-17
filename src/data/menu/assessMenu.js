const menu = [
  {
    text: '考核系统',
    childList: [
      // {
      //   childText: '训练工单',
      //   childIcon: 'el-icon-s-order',
      //   target: 'iframe',
      //   url: 'http://ele.car.com'
      // },
      // {
      //   childText: '理论考试',
      //   childIcon: 'el-icon-edit-outline',
      //   target: 'iframe',
      //   url: 'http://ele.car.com'
      // },
      {
        childText: '工单考试',
        childIcon: 'el-icon-edit-outline',
        target: 'iframe',
        url: 'http://ele.car.com'
      }
      // {
      //   childText: '机械装调',
      //   childIcon: 'el-icon-document-checked',
      //   target: 'iframe',
      //   url: 'http://jxzt.car.com/'
      // }
    ]
  },
  {
    text: '参考资料',
    childList: [
      {
        childText: '参考资料',
        childIcon: 'el-icon-reading',
        target: 'iframe',
        url: 'http://pdf.car.com/#/'
      }
    ]
  },
  {
    text: '我的工具',
    childList: [
      {
        childText: '解码仪',
        childIcon: 'el-icon-set-up',
        target: 'software',
        url: 'my_decoder'
      },
      {
        childText: '信号发生器',
        childIcon: 'el-icon-data-analysis',
        target: 'software',
        url: 'my_pwm'
      },
      {
        childText: '数控电源',
        childIcon: 'el-icon-switch-button',
        target: 'software',
        url: 'my_dps'
      },
      {
        childText: '万用表',
        childIcon: 'el-icon-odometer',
        target: 'software',
        url: 'my_multimeter'
      },
      {
        childText: '示波器',
        childIcon: 'el-icon-data-line',
        target: 'software',
        url: 'my_OSC980'
      }
    ]
  }
]

export { menu }
