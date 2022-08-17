export default {
  getStyle(dom, prop = 'width') {
    // 获取样式
    if (!dom) return 0
    const style = dom.getBoundingClientRect()
    if (!style) return 0
    return style[prop]
  },
  getTargetMouseX(e, target) {
    // 获取距离目标的 X 轴位置
    let t = e.offsetX
    if (e.path[0] === target) return t
    const { path } = e
    for (let i = 0; i < path.length; i++) {
      if (path[i] === target) return t
      t += path[i].offsetLeft
    }
    return 0
  },
  getTargetMouseY(e, target) {
    // 获取距离目标的 Y 轴位置
    let t = e.offsetY
    if (e.path[0] === target) return t
    const { path } = e
    for (let i = 0; i < path.length; i++) {
      if (path[i] === target) return t
      t += path[i].offsetTop
    }
    return 0
  },
}
