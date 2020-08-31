import eventBus from './eventBus'
export function setCacheData (code, data) {
  const newData = {
    time: Date.now(),
    value: data
  }
  eventBus.$emit(`load${code}Done`, data)
  const res = localStorage.getItem('cacheData')
  let cacheData
  if (!res) {
    cacheData = []
  } else {
    cacheData = JSON.parse(res)
  }
  cacheData.push(code)
  cacheData = [...new Set(cacheData)]
  localStorage.setItem('cacheData', JSON.stringify(cacheData))
  localStorage.setItem(code, JSON.stringify(newData))
}

// 缓存20s
function getCacheData (code) {
  const res = localStorage.getItem(code)
  if (res) {
    const { time, value } = JSON.parse(res)
    if (Date.now() - time > 1000 * 365 * 60 * 60 * 24) {
      removeCode(code)
      return ''
    } else {
      return value
    }
  }
  return ''
}

function removeCode (code, cacheData) {
  if (cacheData) {
    removeOneItem(cacheData, code)
  } else {
    const res = localStorage.getItem('cacheData')
    if (res) {
      cacheData = JSON.parse(res)
      removeOneItem(cacheData, code)
    }
  }
}

function removeOneItem (cacheData, code) {
  const idx = cacheData.indexOf(code)
  cacheData.splice(idx, 1)
  localStorage.removeItem(code)
  if (cacheData.length) {
    localStorage.setItem('cacheData', JSON.stringify(cacheData))
  } else {
    localStorage.removeItem('cacheData')
  }
}

export function checkAndRemoveCacheData () {
  const res = localStorage.getItem('cacheData')
  if (res) {
    const cacheData = JSON.parse(res)
    cacheData.forEach(code => {
      const { time } = JSON.parse(localStorage.getItem(code))
      if (Date.now() - time > 120000) {
        removeCode(code, cacheData)
      }
    })
  }
}

export function removeLoadingFlag (code) {
  eventBus.loadingCodes && eventBus.loadingCodes.delete(code)
}
// 如果缓存没有数据，而有相同的请求正在发出，会等该请求完成后拿数据，不用再发相同请求
export function getDataFromCache (code) {
  return new Promise(resolve => {
    const cacheData = getCacheData(code)
    if (cacheData) {
      return resolve({ data: cacheData, isCacheData: true })
    } else if (eventBus.loadingCodes && eventBus.loadingCodes.has(code)) {
      eventBus.$once(`load${code}Done`, data => {
        eventBus.loadingCodes.delete(code)
        return resolve({ data, isCacheData: true })
      })
    } else {
      if (!eventBus.loadingCodes) {
        eventBus.loadingCodes = new Set()
      }
      eventBus.loadingCodes.add(code)
      resolve(null)
    }
  })
}
