import store from '../../store'

export function loadTheme (themeName) {
  if (!themeName) {
    themeName = store.state.activeThemeId
  }

  return new Promise((resolve, reject) => {
    import('../theme/themes/' + themeName).then((m) => {
      console.log('已加载theme: ' + themeName)
      resolve(m.template)
    }).catch(() => {
      console.log('未找到theme: ' + themeName)
      reject(new Error('未找到theme'))
    })
  })
}
