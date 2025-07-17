export function getCurrentMenu (systemModel) {
  return new Promise((resolve, reject) => {
    if (systemModel === 1) {
      // 预留
      import('./teachingMenu').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 2) {
      // 预留
      import('./trainingMenu').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 3) {
      // 预留
      import('./assessMenu').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 4) {
      // 预留
      import('./competitionMenu').then((module) => {
        resolve(module.menu)
      })
    } else {
      resolve([])
    }
  })
}
