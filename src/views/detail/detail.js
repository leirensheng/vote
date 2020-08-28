const items = [
  {
    id: 1,
    firstRow: '文教体育用品',
    secondRow: '',
    detailFirstRow: '文体',
    detailSecondRow: '教育用品',
    children: [
      { id: 2, name: '修改类文具' },
      { id: 3, name: '粘合类文具' },
      { id: 4, name: '笔（包括中性笔、圆珠笔等）' },
      { id: 5, name: '颜料（水彩画、指画等）' },
      { id: 6, name: '学生簿（课业簿册）' },
      { id: 7, name: '电动跑步机' },
      { id: 8, name: '运动头盔' },
      { id: 9, name: '滑轮鞋' }
    ]
  },
  {
    id: 10,
    firstRow: '家用电器',
    secondRow: '及电器附件',
    children: [
      { id: 11, name: '电压力锅' },
      { id: 12, name: '电子坐便器' },
      { id: 13, name: '电热卷发器' },
      { id: 14, name: '电热取暖器具' },
      { id: 15, name: '蒸汽挂烫机' },
      { id: 16, name: '家用和类似用途插头插座' },
      { id: 17, name: '燃气灶具' },
      { id: 18, name: '燃气热水器' },
      { id: 19, name: '锂离子电池' },
      { id: 20, name: '电动晾衣架' }
    ]
  },
  {
    id: 21,
    firstRow: '电子及信息',
    secondRow: '技术产品',
    detailFirstRow: '电子及',
    detailSecondRow: '信息技术产品',
    children: [
      { id: 22, name: '手机' },
      { id: 23, name: '移动电源' },
      { id: 24, name: '耳机' },
      { id: 25, name: '电器适配器' },
      { id: 26, name: '投影仪' }

    ]
  },
  {
    id: 27,
    firstRow: '儿童用品',
    secondRow: '',
    children: [
      { id: 28, name: '童车' },
      { id: 29, name: '玩具' },
      { id: 30, name: '婴幼儿安抚奶嘴' },
      { id: 31, name: '儿童手表手环' },
      { id: 32, name: '儿童服装' },
      { id: 33, name: '儿童鞋' },
      { id: 34, name: '儿童家具' },
      { id: 35, name: '奶瓶' },
      { id: 36, name: '奶嘴' },
      { id: 37, name: '儿童安全座椅' },
      { id: 38, name: '婴幼儿软背带' }
    ]
  },
  {
    id: 39,
    firstRow: '家具及建筑',
    secondRow: '装饰装修材料',
    detailFirstRow: '家具及',
    detailSecondRow: '建筑装饰装修材料',
    children: [
      { id: 40, name: '木质家具' },
      { id: 41, name: '双层床' },
      { id: 42, name: '木质门' },
      { id: 43, name: '实木复合地板' },
      { id: 44, name: '壁纸' },
      { id: 45, name: '内墙涂料' },
      { id: 46, name: '排水管道、配件' },
      { id: 47, name: '建筑用钢化玻璃' },
      { id: 48, name: '普通照明用自镇流LED灯' }
    ]
  },
  {
    id: 49,
    firstRow: '服装鞋帽',
    secondRow: '及家用纺织品',
    children: [
      { id: 50, name: '蚕丝被' },
      { id: 51, name: '毛巾' },
      { id: 52, name: '羽绒服装' },
      { id: 53, name: '休闲服装' },
      { id: 54, name: '泳装' },
      { id: 55, name: '学生服（校服）' },
      { id: 56, name: '旅游鞋' },
      { id: 57, name: '红领巾' }
    ]
  },
  {
    id: 58,
    firstRow: '交通用具',
    secondRow: '及相关产品',
    children: [
      { id: 59, name: '电动自行车' },
      { id: 60, name: '电动自行车充电器' },
      { id: 61, name: '电动平衡车' },
      { id: 62, name: '汽车、摩托车轮胎' },
      { id: 63, name: '机动车制动液' },
      { id: 64, name: '汽车用制动器衬片' }
    ]
  },
  {
    id: 65,
    firstRow: '食品',
    secondRow: '相关产品',
    children: [
      { id: 66, name: '非复合膜袋' },
      { id: 67, name: '保险膜' },
      { id: 68, name: '密胺塑料餐具' },
      { id: 69, name: '一次性餐饮具' },
      { id: 70, name: '压力锅' },
      { id: 71, name: '食品接触用硅胶制品' },
      { id: 72, name: '食品接触用玻璃制品' }
    ]
  },
  {
    id: 73,
    firstRow: '日用杂品',
    secondRow: '',
    children: [
      { id: 74, name: '配装眼睛' },
      { id: 75, name: '老视镜' },
      { id: 76, name: '太阳镜' },
      { id: 77, name: '旅游箱包' },
      { id: 78, name: '书包' },
      { id: 79, name: '家用塑料袋' },
      { id: 80, name: '按摩器具' },
      { id: 81, name: '贵金属首饰' }
    ]
  },
  {
    id: 82,
    firstRow: '其他类产品',
    secondRow: '',
    children: [
      { id: 83, name: '电线电缆' },
      { id: 84, name: '防爆电气' },
      { id: 85, name: '防火门' },
      { id: 86, name: '手提式灭火器' },
      { id: 87, name: '火灾报警设备' },
      { id: 88, name: '应急照明灯' },
      { id: 89, name: '安全帽' },
      { id: 90, name: '自吸过滤式防颗粒物呼吸器' }
    ]
  }
]

export default items
