var dptMoneyAcList = [{

  'ID': '0001',
  'CorpID': '0001',
  'Category': '任务税收',
  'Money': '1000',
  'ProjectCode': 'GC19041',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567891',
  'Employee': 'yangjie',
  'EmployeeName': '杨杰',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {
  'ID': '0002',
  'CorpID': '0001',
  'Category': '项目结算税收',
  'Money': '2000',
  'ProjectCode': 'GC19042',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567892',
  'Employee': 'yangjie',
  'EmployeeName': '杨杰',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0003',
  'CorpID': '0001',
  'Category': '部门任务支出',
  'Money': '3000',
  'ProjectCode': 'GC19043',
    'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567893',
  'Employee': 'lipeiming',
  'EmployeeName': '李培铭',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0004',
  'CorpID': '0001',
  'Category': '清算转入',
  'Money': '4000',
  'ProjectCode': 'GC19044',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567894',
  'Employee': 'cuiwenbin',
  'EmployeeName': '崔文斌',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, ]
const getDptMoneyAc = () => {
  return dptMoneyAcList;
}

module.exports = {

  getDptMoneyAc: getDptMoneyAc

}