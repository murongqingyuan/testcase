var customerList = [{
  'ID': '00001',
  'GroupCorpName': '3m明尼苏达矿业制造特殊材料(上海)有限公司',
  'CorpName': '3m明尼苏达矿业制造特殊材料(上海)有限公司',
}, {
  'ID': '00002',
  'GroupCorpName': '深圳万任科技有限公司',
  'CorpName': '深圳万任科技有限公司',
}, {
  'ID': '00003',
  'GroupCorpName': '北京福田',
  'CorpName': '北京福田',
}, {
  'ID': '00004',
  'GroupCorpName': '利乐中国',
  'CorpName': '利乐中国',
}, {
  'ID': '00005',
  'GroupCorpName': '旺旺集团',
  'CorpName': '南京旺旺食品有限公司',
}, {
  'ID': '00006',
  'GroupCorpName': '太古集团',
  'CorpName': '杭州太古可口可乐有限公司',
}]
const getCustomer = () => {
  return customerList;
}
module.exports = {
  getCustomer: getCustomer,
}