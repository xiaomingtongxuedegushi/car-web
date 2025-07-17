const menu = [
  {
    text: '教学资源',
    childList: [
      {
        childText: '课程管理',
        childIcon: 'el-icon-data-analysis',
        target: 'iframe',
        url: '/admin/curriculum/course/'
      },
      {
        childText: '资源管理',
        childIcon: 'el-icon-s-order',
        target: 'iframe',
        url: '/admin/curriculum/resources/'
      },
      {
        childText: '资源浏览',
        childIcon: 'el-icon-s-platform',
        target: 'iframe',
        url: 'http://pdf.car.com/#/'
      },
      {
        childText: '监测系统',
        childIcon: 'el-icon-s-marketing',
        target: 'iframe',
        url: '/admin/curriculum/resources_views/'
      }
    ]
  },
  {
    text: '故障设置',
    childList: [
      {
        childText: '故障设置',
        childIcon: 'el-icon-s-tools',
        target: 'iframe',
        url: 'http://point.car.com/'
      }
    ]
  },
  {
    text: '理论考试',
    childList: [
      {
        childText: '考试设置',
        childIcon: 'el-icon-setting',
        target: 'iframe',
        url: '/admin/examination/examinations/'
      },
      {
        childText: '快速出题',
        childIcon: 'el-icon-document-copy',
        target: 'iframe',
        url: 'http://quick.car.com'
      },
      {
        childText: '学生成绩',
        childIcon: 'el-icon-document-checked',
        target: 'iframe',
        url: '/admin/examination/results/'
      }
    ]
  },
  {
    text: '工单考试',
    childList: [
      {
        childText: '考试设置',
        childIcon: 'el-icon-setting',
        target: 'iframe',
        url: '/admin/electron/elecontest/'
      },
      {
        childText: '工位管理',
        childIcon: 'el-icon-folder-opened',
        target: 'iframe',
        url: '/admin/electron/station_ele/'
      },
      {
        childText: '文件记录',
        childIcon: 'el-icon-edit-outline',
        target: 'iframe',
        url: '/admin/electron/elerecord/'
      },
      {
        childText: '快速出题',
        childIcon: 'el-icon-edit-outline',
        target: 'iframe',
        url: 'http://quickele.car.com/'
      },
      {
        childText: '学生成绩',
        childIcon: 'el-icon-document-checked',
        target: 'iframe',
        url: '/admin/electron/results_ele/'
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
    text: '题库管理',
    childList: [
      {
        childText: '选择题',
        childIcon: 'el-icon-setting',
        target: 'iframe',
        url: '/admin/question/choice/'
      },
      {
        childText: '多选题',
        childIcon: 'el-icon-document-copy',
        target: 'iframe',
        url: '/admin/question/multiple_choice/'
      },
      {
        childText: '判断题',
        childIcon: 'el-icon-document-checked',
        target: 'iframe',
        url: '/admin/question/judge/'
      },
      {
        childText: '题目类型',
        childIcon: 'el-icon-document-checked',
        target: 'iframe',
        url: '/admin/question/questiontype/'
      },
      {
        childText: '车型管理',
        childIcon: 'el-icon-document-checked',
        target: 'iframe',
        url: '/admin/data/classification/'
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
      },
      {
        childText: '数控电源',
        childIcon: 'el-icon-switch-button',
        target: 'software',
        url: 'my_dps'
      },
      {
        childText: '信号发生器',
        childIcon: 'el-icon-data-analysis',
        target: 'software',
        url: 'my_pwm'
      }
    ]
  }
]

export { menu }
