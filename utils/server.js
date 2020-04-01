


var outDebitList = [{
  "ID": "00001",
  "Category": "转出",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0002",
  "RelateDptName": "市场部",
  "Money": "-2000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00002",
  "Category": "转出",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0003",
  "RelateDptName": "工程部",
  "Money": "-2500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00003",
  "Category": "转出",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0004",
  "RelateDptName": "综管部",
  "Money": "-1500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00004",
  "Category": "转出",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0002",
  "RelateDptName": "市场部",
  "Money": "-1000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00005",
  "Category": "转出",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0003",
  "RelateDptName": "工程部",
  "Money": "-2000",
  "DateTime": "2020-02-28 15:18:10"
}]

var inDebitList = [{
  "ID": "00001",
  "Category": "转入",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0002",
  "RelateDptName": "市场部",
  "Money": "2000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00002",
  "Category": "转入",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0003",
  "RelateDptName": "工程部",
  "Money": "2500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00003",
  "Category": "转入",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0004",
  "RelateDptName": "综管部",
  "Money": "1500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00004",
  "Category": "转入",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0002",
  "RelateDptName": "市场部",
  "Money": "1000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00005",
  "Category": "转入",
  "DepartmentID": "0001",
  "DepartmentName": "研发部",
  "RelateDptID": "0003",
  "RelateDptName": "工程部",
  "Money": "2000",
  "DateTime": "2020-02-28 15:18:10"
}]

const getOutDebitList = () => {
  return outDebitList;
}
const getInDebitList = () => {
  return inDebitList;
}





var outPerDebitList = [{
  "ID": "00001",
  "Category": "转出",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0002",
  "RelateName": "崔文斌",
  "Money": "-2000",
  "DateTime": "2020-02-28 15:18:10",
  "IsBadDebit": false
}, {
  "ID": "00002",
  "Category": "转出",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0003",
  "RelateName": "李培铭",
  "Money": "-2500",
  "DateTime": "2020-02-28 15:18:10",
  "IsBadDebit": false
}, {
  "ID": "00003",
  "Category": "转出",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0004",
  "RelateName": "胡晓清",
  "Money": "-1500",
  "DateTime": "2020-02-28 15:18:10",
  "IsBadDebit": false
}, {
  "ID": "00004",
  "Category": "转出",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0002",
  "RelateName": "崔文斌",
  "Money": "-1000",
  "DateTime": "2020-02-28 15:18:10",
  "IsBadDebit": false
}, {
  "ID": "00005",
  "Category": "转出",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0003",
  "RelateName": "李培铭",
  "Money": "-2000",
  "DateTime": "2020-02-28 15:18:10",
  "IsBadDebit": true
}]
var inPerDebitList = [{
  "ID": "00001",
  "Category": "转入",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0002",
  "RelateName": "崔文斌",
  "Money": "2000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00002",
  "Category": "转入",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0003",
  "RelateName": "李培铭",
  "Money": "2500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00003",
  "Category": "转入",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0004",
  "RelateName": "胡小清",
  "Money": "1500",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00004",
  "Category": "转入",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0002",
  "RelateName": "崔文斌",
  "Money": "1000",
  "DateTime": "2020-02-28 15:18:10"
}, {
  "ID": "00005",
  "Category": "转入",
  "Employee": "0001",
  "EmployeeName": "杨杰",
  "RelateCode": "0003",
  "RelateName": "李培铭",
  "Money": "2000",
  "DateTime": "2020-02-28 15:18:10"
}]
const getPerOutDebitList = () => {
  return outPerDebitList;
}
const getPerInDebitList = () => {
  return inPerDebitList;
}


var dptPayBillList = [{
    'ID': '0001',
    'CorpID': '0001',
    'Code': 'SQ20200302001',
    'Category': '团建',
    'DepartmentID': '0001',
    'DepartmentName': '研发部',
    'Money': '1000',
    'Applyer': 'caoshengli',
    'ApplyerName': '曹胜利',
    'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉。部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉。部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉',
    'SubmitDateTime': '',
    'SubmitStatus': 0,
    'DptCheckDateTime': '',
    'DptCheckStatus': 0,
    'BillCheckDateTime': '',
    'BillCheckStatus': 0,
    'PayDateTime': '',
    'PayStatus': 0,
  },
  {
    'ID': '0002',
    'CorpID': '0001',
    'Code': 'SQ20200302002',
    'Category': '福利',
    'DepartmentID': '0001',
    'DepartmentName': '研发部',
    'Money': '2000',
    'Applyer': 'caoshengli',
    'ApplyerName': '曹胜利',
    'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
    'SubmitDateTime': '2020-03-02 20:20:20',
    'SubmitStatus': 1,
    'DptCheckDateTime': '',
    'DptCheckStatus': 0,
    'BillCheckDateTime': '',
    'BillCheckStatus': 0,
    'PayDateTime': '',
    'PayStatus': 0,
  }, {
    'ID': '0003',
    'CorpID': '0001',
    'Code': 'SQ20200302001',
    'Category': '培训',
    'DepartmentID': '0001',
    'DepartmentName': '研发部',
    'Money': '3000',
    'Applyer': 'caoshengli',
    'ApplyerName': '曹胜利',
    'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
    'SubmitDateTime': '2020-03-02 20:20:20',
    'SubmitStatus': 1,
    'DptCheckDateTime': '2020-03-02 20:20:20',
    'DptCheckStatus': 1,
    'BillCheckDateTime': '',
    'BillCheckStatus': 0,
    'PayDateTime': '',
    'PayStatus': 0,
  }, {
    'ID': '0004',
    'CorpID': '0001',
    'Code': 'SQ20200302001',
    'Category': '其他',
    'DepartmentID': '0001',
    'DepartmentName': '研发部',
    'Money': '4000',
    'Applyer': 'caoshengli',
    'ApplyerName': '曹胜利',
    'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
    'SubmitDateTime': '2020-03-02 20:20:20',
    'SubmitStatus': 1,
    'DptCheckDateTime': '2020-03-02 20:20:20',
    'DptCheckStatus': 1,
    'BillCheckDateTime': '2020-03-02 20:20:20',
    'BillCheckStatus': 1,
    'PayDateTime': '',
    'PayStatus': 0,
  }, {
    'ID': '0005',
    'CorpID': '0001',
    'Code': 'SQ20200302001',
    'Category': '其他',
    'DepartmentID': '0001',
    'DepartmentName': '研发部',
    'Money': '5000',
    'Applyer': 'caoshengli',
    'ApplyerName': '曹胜利',
    'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
    'SubmitDateTime': '2020-03-02 20:20:20',
    'SubmitStatus': 1,
    'DptCheckDateTime': '2020-03-02 20:20:20',
    'DptCheckStatus': 1,
    'BillCheckDateTime': '2020-03-02 20:20:20',
    'BillCheckStatus': 1,
    'PayDateTime': '2020-03-02 20:20:20',
    'PayStatus': 1,
  }
]

const getDptPayBillList = () => {
  return dptPayBillList;
}

var prjPayBillList = [{
  'ID': '0001',
  'CorpID': '0001',
  'Code': 'SQ20200302001',
  'Category': '商务',
  'ProjectCode': 'GC19041',
  'ProjectName': '项目1',
  'Money': '1000',
  'Applyer': 'caoshengli',
  'ApplyerName': '曹胜利',
  'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉。部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉。部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉',
  'SubmitDateTime': '',
  'SubmitStatus': 0,
  'DptCheckDateTime': '',
  'DptCheckStatus': 0,
  'BillCheckDateTime': '',
  'BillCheckStatus': 0,
  'PayDateTime': '',
  'PayStatus': 0,
},
{
  'ID': '0002',
  'CorpID': '0001',
  'Code': 'SQ20200302002',
  'Category': '宴请',
  'ProjectCode': 'GC19042',
  'ProjectName': '项目2',
  'Money': '2000',
  'Applyer': 'caoshengli',
  'ApplyerName': '曹胜利',
  'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
  'SubmitDateTime': '2020-03-02 20:20:20',
  'SubmitStatus': 1,
  'DptCheckDateTime': '',
  'DptCheckStatus': 0,
  'BillCheckDateTime': '',
  'BillCheckStatus': 0,
  'PayDateTime': '',
  'PayStatus': 0,
}, {
  'ID': '0003',
  'CorpID': '0001',
  'Code': 'SQ20200302001',
  'Category': '礼品',
  'ProjectCode': 'GC19043',
  'ProjectName': '项目3',
  'Money': '3000',
  'Applyer': 'caoshengli',
  'ApplyerName': '曹胜利',
  'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
  'SubmitDateTime': '2020-03-02 20:20:20',
  'SubmitStatus': 1,
  'DptCheckDateTime': '2020-03-02 20:20:20',
  'DptCheckStatus': 1,
  'BillCheckDateTime': '',
  'BillCheckStatus': 0,
  'PayDateTime': '',
  'PayStatus': 0,
}, {
  'ID': '0004',
  'CorpID': '0001',
  'Code': 'SQ20200302001',
  'Category': '其他',
  'ProjectCode': 'GC19044',
  'ProjectName': '项目4',
  'Money': '4000',
  'Applyer': 'caoshengli',
  'ApplyerName': '曹胜利',
  'Memo': '部门费用申请，理由巴拉巴拉巴拉巴拉巴拉巴拉...',
  'SubmitDateTime': '2020-03-02 20:20:20',
  'SubmitStatus': 1,
  'DptCheckDateTime': '2020-03-02 20:20:20',
  'DptCheckStatus': 1,
  'BillCheckDateTime': '2020-03-02 20:20:20',
  'BillCheckStatus': 1,
  'PayDateTime': '',
  'PayStatus': 0,
}, 
]

const getPrjPayBillList = () => {
  return prjPayBillList;
}

module.exports = {
  getOutDebitList: getOutDebitList,
  getInDebitList: getInDebitList,
  getPerOutDebitList: getPerOutDebitList,
  getPerInDebitList: getPerInDebitList,
  getDptPayBillList: getDptPayBillList,
  getPrjPayBillList: getPrjPayBillList
}