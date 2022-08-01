import storageUtil from '@/utils/storageUtil'

/**
 * description 拦截没有前缀的 console 避免打印不是自己的信息
 */

export default {
  install() {
    const log = window.console.log
    const devUser = storageUtil.getItem('devUser')
    window.console.log = (...args) => {
      if (!devUser || devUser !== args[0]) return
      log(...args.slice(1))
    }
  },
}
