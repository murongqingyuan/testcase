var outMoneyBillList = [{
  'ID': '00001',
  'CorpID': '0001',
  'Code': 'OM0000000001',
  'ApplyMoney': '1000',
  'Applyer': 'yangjie',
  'ApplyerName': '杨杰',
  'SubmitStatus': 0,
  'SubmitDateTime': '',
  'FinishStatus': 0,
  'FinishDateTime': '',
  'Memo': 'xxxxxxxxx',
}, {
  'ID': '00002',
  'CorpID': '0001',
  'Code': 'OM0000000002',
  'ApplyMoney': '2000',
  'Applyer': 'yangjie',
  'ApplyerName': '杨杰',
  'SubmitStatus': 1,
  'SubmitDateTime': '2020-03-04 20:20:20',
  'FinishStatus': 0,
  'FinishDateTime': '',
  'Memo': 'xxxxxxxxx',
}, {
  'ID': '00003',
  'CorpID': '0001',
  'Code': 'OM0000000003',
  'ApplyMoney': '3000',
  'Applyer': 'yangjie',
  'ApplyerName': '杨杰',
  'SubmitStatus': 1,
  'SubmitDateTime': '2020-03-04 20:20:20',
  'FinishStatus': 1,
  'FinishDateTime': '2020-03-04 20:20:20',
  'Memo': 'xxxxxxxxx',
}]




const getOutMoneyBillList = () => {
  return outMoneyBillList;
}

module.exports = {
  getOutMoneyBillList: getOutMoneyBillList,
}