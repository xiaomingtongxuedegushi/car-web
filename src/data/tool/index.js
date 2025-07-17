export function getCurrentTools (systemModel) {
  return new Promise((resolve, reject) => {
    if (systemModel === 1) {
      // 预留
      import('./teachingTool').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 2) {
      // 预留
      import('./trainingTool').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 3) {
      // 预留
      import('./assessTool').then((module) => {
        resolve(module.menu)
      })
    } else if (systemModel === 4) {
      // 预留
      import('./competitionTool').then((module) => {
        resolve(module.menu)
      })
    } else {
      resolve([])
    }
  })
}
