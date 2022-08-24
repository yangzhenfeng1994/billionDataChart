/**
 * station 车站
 * tunnel 隧道
 */
const data = [
  {
    id: 1,
    type: 'station',
    start: 20,
    name: '重庆南站',
    centerMileage: 'K330+700',
  },
  {
    id: 2,
    type: 'station',
    start: 80,
    name: '重庆北站',
    centerMileage: 'K340+700',
  },
  {
    id: 3,
    type: 'bridge',
    start: 140,
    end: 160,
    name: '高速立交桥 1',
    num: '101#',
    centerMileage: 'K331 + 100',
    length: '48.7',
  },
  {
    id: 4,
    type: 'bridge',
    start: 180,
    end: 180.5,
    name: '高速立交桥 2',
    num: '102#',
    centerMileage: 'K331 + 200',
    length: '4',
  },
  {
    id: 5,
    type: 'tunnel',
    start: 210,
    end: 230,
    name: '隧道 1',
    num: '201#',
    centerMileage: 'K31 + 200',
    length: '173',
  },
  {
    id: 6,
    type: 'tunnel',
    start: 260,
    end: 280,
    name: '隧道 1',
    num: '201#',
    centerMileage: 'K31 + 200',
    length: '173',
  },
  {
    id: 7,
    type: 'switch',
    start: 350,
    num: '6',
    length: 'K6+170',
  },
  {
    id: 8,
    type: 'switch',
    start: 377,
    num: '7',
    length: 'K7+10',
  },
  {
    id: 9,
    type: 'curve',
    start: 420,
    end: 440,
    name: '隧道 1',
    num: '201#',
    startMileage: 'K31 + 100',
    endMileage: 'K31 + 200',
    i: '60',
    height: '100',
    length: '173',
    r: 123,
  },
  {
    id: 10,
    type: 'curve',
    start: 470,
    end: 480,
    name: '隧道 2',
    num: '202#',
    startMileage: 'K32 + 100',
    endMileage: 'K32 + 200',
    i: '62',
    height: '200',
    length: '273',
    l: 223,
  },
  {
    id: 11,
    type: 'culvert',
    start: 520,
    name: '涵渠1',
    centerMileage: 'K330',
    length: '12312',
  },
  {
    id: 12,
    type: 'culvert',
    start: 550,
    name: '涵渠2',
    centerMileage: 'K332',
    length: '12',
  },
  {
    id: 13,
    type: 'ballast',
    start: 640,
    end: 660,
  },
  {
    id: 14,
    type: 'ballast',
    start: 680,
    end: 685,
  },
]
export default data
