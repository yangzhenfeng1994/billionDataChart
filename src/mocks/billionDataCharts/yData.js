// y轴数据mock
import line1 from './line1' //不同的通道数据,随机分配,制造不同的曲线
import line2 from './line2'
import line3 from './line3'
import line4 from './line4'
import line5 from './line5'
import line6 from './line6'

const data = {
  ID1: { date1: line6, date2: line5, date3: line2 },
  ID2: { date1: line5, date2: line1, date3: line4 },
  ID3: { date1: line6, date2: line3, date3: line3 },
  ID4: { date1: line3, date2: line3, date3: line1 },
  ID5: { date1: line1, date2: line5, date3: line5 },
  ID6: { date1: line1, date2: line2, date3: line3 },
  ID7: { date1: line3, date2: line3, date3: line2 },
  ID8: { date1: line3, date2: line5, date3: line5 },
  ID9: { date1: line1, date2: line2, date3: line4 },
  ID10: { date1: line5, date2: line2, date3: line6 },
  ID11: { date1: line4, date2: line4, date3: line1 },
  ID12: { date1: line2, date2: line2, date3: line4 },
  ID13: { date1: line4, date2: line6, date3: line2 },
  ID14: { date1: line4, date2: line5, date3: line3 },
  ID15: { date1: line2, date2: line2, date3: line1 },
  ID16: { date1: line1, date2: line3, date3: line4 },
  ID17: { date1: line6, date2: line6, date3: line5 },
  ID18: { date1: line2, date2: line3, date3: line1 },
  ID19: { date1: line3, date2: line2, date3: line2 },
  ID20: { date1: line1, date2: line6, date3: line2 },
  ID21: { date1: line6, date2: line3, date3: line5 },
  ID22: { date1: line6, date2: line6, date3: line2 },
  ID23: { date1: line5, date2: line1, date3: line1 },
  ID24: { date1: line2, date2: line4, date3: line3 },
  ID25: { date1: line3, date2: line4, date3: line1 },
  ID26: { date1: line1, date2: line5, date3: line2 },
  ID27: { date1: line4, date2: line5, date3: line4 },
  ID28: { date1: line3, date2: line5, date3: line2 },
  ID29: { date1: line2, date2: line6, date3: line5 },
  ID30: { date1: line3, date2: line1, date3: line3 },
  ID31: { date1: line1, date2: line4, date3: line6 },
  ID32: { date1: line1, date2: line1, date3: line4 },
  ID33: { date1: line5, date2: line4, date3: line6 },
  ID34: { date1: line1, date2: line5, date3: line3 },
  ID35: { date1: line1, date2: line6, date3: line1 },
  ID36: { date1: line5, date2: line4, date3: line6 },
  ID37: { date1: line2, date2: line5, date3: line3 },
  ID38: { date1: line1, date2: line1, date3: line2 },
  ID39: { date1: line6, date2: line6, date3: line6 },
  ID40: { date1: line5, date2: line6, date3: line3 },
  ID41: { date1: line4, date2: line6, date3: line3 },
  ID42: { date1: line3, date2: line5, date3: line4 },
  ID43: { date1: line3, date2: line2, date3: line4 },
  ID44: { date1: line6, date2: line4, date3: line4 },
  ID45: { date1: line3, date2: line6, date3: line5 },
  ID46: { date1: line1, date2: line6, date3: line6 },
  ID47: { date1: line3, date2: line4, date3: line2 },
  ID48: { date1: line3, date2: line6, date3: line5 },
  ID49: { date1: line3, date2: line5, date3: line2 },
  ID50: { date1: line4, date2: line1, date3: line3 },
  ID51: { date1: line3, date2: line2, date3: line5 },
  ID52: { date1: line4, date2: line3, date3: line3 },
  ID53: { date1: line3, date2: line1, date3: line3 },
  ID54: { date1: line3, date2: line3, date3: line4 },
  ID55: { date1: line2, date2: line1, date3: line6 },
  ID56: { date1: line6, date2: line2, date3: line2 },
  ID57: { date1: line5, date2: line4, date3: line2 },
  ID58: { date1: line6, date2: line6, date3: line3 },
  ID59: { date1: line1, date2: line2, date3: line6 },
  ID60: { date1: line5, date2: line5, date3: line2 },
  ID61: { date1: line5, date2: line1, date3: line1 },
  ID62: { date1: line6, date2: line5, date3: line1 },
  ID63: { date1: line3, date2: line2, date3: line4 },
  ID64: { date1: line2, date2: line6, date3: line3 },
  ID65: { date1: line5, date2: line1, date3: line3 },
  ID66: { date1: line5, date2: line3, date3: line4 },
  ID67: { date1: line5, date2: line1, date3: line2 },
  ID68: { date1: line6, date2: line4, date3: line4 },
  ID69: { date1: line4, date2: line3, date3: line5 },
  ID70: { date1: line5, date2: line3, date3: line3 },
  ID71: { date1: line2, date2: line1, date3: line5 },
  ID72: { date1: line3, date2: line5, date3: line1 },
  ID73: { date1: line4, date2: line3, date3: line4 },
  ID74: { date1: line6, date2: line3, date3: line2 },
  ID75: { date1: line2, date2: line4, date3: line3 },
  ID76: { date1: line4, date2: line2, date3: line2 },
  ID77: { date1: line6, date2: line5, date3: line6 },
  ID78: { date1: line2, date2: line4, date3: line5 },
  ID79: { date1: line5, date2: line3, date3: line4 },
  ID80: { date1: line1, date2: line1, date3: line4 },
  ID81: { date1: line2, date2: line2, date3: line5 },
  ID82: { date1: line2, date2: line3, date3: line5 },
  ID83: { date1: line6, date2: line2, date3: line4 },
  ID84: { date1: line5, date2: line1, date3: line3 },
  ID85: { date1: line1, date2: line4, date3: line6 },
  ID86: { date1: line5, date2: line4, date3: line6 },
  ID87: { date1: line6, date2: line1, date3: line1 },
  ID88: { date1: line1, date2: line5, date3: line1 },
  ID89: { date1: line3, date2: line4, date3: line2 },
  ID90: { date1: line5, date2: line5, date3: line3 },
  ID91: { date1: line2, date2: line6, date3: line5 },
  ID92: { date1: line3, date2: line2, date3: line2 },
  ID93: { date1: line1, date2: line5, date3: line1 },
  ID94: { date1: line5, date2: line6, date3: line3 },
  ID95: { date1: line1, date2: line1, date3: line4 },
  ID96: { date1: line6, date2: line4, date3: line3 },
  ID97: { date1: line5, date2: line4, date3: line1 },
  ID98: { date1: line2, date2: line3, date3: line2 },
  ID99: { date1: line4, date2: line2, date3: line2 },
  ID100: { date1: line6, date2: line4, date3: line6 },
}
export default data

// const obj = {}
// for (let i = 0; i < 100; i++) {
//   const item = {
//     date1: 'line' + Math.ceil(Math.random() * 6),
//     date2: 'line' + Math.ceil(Math.random() * 6),
//     date3: 'line' + Math.ceil(Math.random() * 6),
//   }
//   obj['ID' + (i + 1)] = item
// }
// JSON.stringify(obj)
