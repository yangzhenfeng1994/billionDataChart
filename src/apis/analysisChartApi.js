import lines from '@/mocks/billionDataCharts/lines'
import dates from '@/mocks/billionDataCharts/dates'
import xData from '@/mocks/billionDataCharts/xData'
import yData from '@/mocks/billionDataCharts/yData'

export function getLines() {
  return new Promise((res) => {
    res(lines)
  })
}

export function getDates() {
  return new Promise((res) => {
    res(dates)
  })
}

export function getXdata() {
  return new Promise((res) => {
    res(xData)
  })
}

export function getYdata(option) {
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
