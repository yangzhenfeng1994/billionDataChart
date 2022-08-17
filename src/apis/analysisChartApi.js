import lines from '@/mocks/billionDataCharts/lines'
import dates from '@/mocks/billionDataCharts/dates'
import xData from '@/mocks/billionDataCharts/xData'
import yData from '@/mocks/billionDataCharts/yData'
import faultData from '@/mocks/billionDataCharts/faultData'

export function getLines() {
  // 获取通道数据
  return new Promise((res) => {
    res(lines)
  })
}

export function getDates() {
  // 获取日期数据
  return new Promise((res) => {
    res(dates)
  })
}

export function getXdata() {
  // 获取x轴数据
  return new Promise((res) => {
    res(xData)
  })
}

export function getYdata(option) {
  // 获取 y 轴数据
  const { lines, dates } = option
  const target = []
  lines.forEach((line) => {
    const lineData = []
    dates.forEach((date) => {
      lineData.push(yData[line][date])
    })
    target.push(lineData)
  })

  return new Promise((res) => {
    res(target)
  })
}

export function getFaultData() {
  // 获取故障数据
  return new Promise((res) => {
    res(faultData)
  })
}
