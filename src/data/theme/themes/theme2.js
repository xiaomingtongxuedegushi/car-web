const template = {
  // 侧边栏
  leftBar: {
    // 侧边栏标题
    title: {
      color: '#ffffff'
    },
    // 侧边栏背景
    background: {
      color: '#3498DB'
    },
    // 侧边栏一级菜单配置
    menu1: {
      text: {
        color: null
      }
    },
    // 侧边栏二级菜单配置
    menu2: {
      // 二级菜单项初始颜色
      item: {
        text: {
          color: '#ffffff'
        },
        background: {
          color: '#d000ff'
        }
      },
      // 鼠标悬浮后变化
      hover: {
        text: {
          color: '#ffffff'
        },
        background: {
          color: '#24ff00'
        }
      },
      // 被激活的菜单
      active: {
        text: {
          color: '#ffffff'
        },
        background: {
          color: '#4100ff'
        }
      }
    }
  }
}

export { template }
